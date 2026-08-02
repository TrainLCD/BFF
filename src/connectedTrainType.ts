const CONNECTED_LINE_GROUP_KEY_PREFIX = 'connected-line-group:';
const CONNECTED_LINE_GROUP_TTL_SECONDS = 60 * 60;

export type ConnectedStation = Record<string, any>;

/**
 * 実在する lineGroupId は正数なので、連結経路は負数の名前空間へ分離する。
 * 駅列と元の種別列から決定的に生成し、同じ経路では同じ ID を再利用する。
 */
export function createConnectedLineGroupId(
	stations: ConnectedStation[],
	lineGroupIds: number[],
): number {
	let hash = 2166136261;
	for (const value of [
		...lineGroupIds,
		...stations.map((station) => Number(station.id) || 0),
	]) {
		hash ^= value;
		hash = Math.imul(hash, 16777619);
	}
	return -((hash >>> 0) % 2_000_000_000) - 1;
}

/** 連結後の全駅を、既存の単一種別と同じ形へ揃える。 */
export function assignConnectedLineGroupId(
	stations: ConnectedStation[],
	lineGroupIds: number[],
): { lineGroupId: number; stations: ConnectedStation[] } {
	const lineGroupId = createConnectedLineGroupId(stations, lineGroupIds);
	return {
		lineGroupId,
		stations: stations.map((station) => ({
			...station,
			trainType: {
				...(station.trainType ?? {}),
				groupId: lineGroupId,
			},
		})),
	};
}

export function isConnectedLineGroupId(lineGroupId: number): boolean {
	return lineGroupId < 0;
}

export async function storeConnectedLineGroup(
	store: KVNamespace | undefined,
	lineGroupId: number,
	stations: ConnectedStation[],
): Promise<void> {
	if (!store) return;
	await store.put(
		`${CONNECTED_LINE_GROUP_KEY_PREFIX}${lineGroupId}`,
		JSON.stringify(stations),
		{ expirationTtl: CONNECTED_LINE_GROUP_TTL_SECONDS },
	);
}

export async function loadConnectedLineGroup(
	store: KVNamespace | undefined,
	lineGroupId: number,
): Promise<ConnectedStation[]> {
	if (!store) return [];
	return (
		(await store.get<ConnectedStation[]>(
			`${CONNECTED_LINE_GROUP_KEY_PREFIX}${lineGroupId}`,
			'json',
		)) ?? []
	);
}
