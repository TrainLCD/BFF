const CONNECTED_LINE_GROUP_KEY_PREFIX = 'connected-line-group:';
const CONNECTED_LINE_GROUP_TTL_SECONDS = 60 * 60;

type Station = Record<string, any>;

export function createConnectedLineGroupId(
	lineGroupIds: number[],
	stations: Station[],
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

export function assignConnectedLineGroupId(
	stations: Station[],
	lineGroupId: number,
): Station[] {
	return stations.map((station) => ({
		...station,
		trainType: {
			...(station.trainType ?? {}),
			groupId: lineGroupId,
		},
	}));
}

export function isConnectedLineGroupId(lineGroupId: number): boolean {
	return lineGroupId < 0;
}

export async function storeConnectedLineGroup(
	store: KVNamespace,
	lineGroupId: number,
	stations: Station[],
): Promise<void> {
	await store.put(
		`${CONNECTED_LINE_GROUP_KEY_PREFIX}${lineGroupId}`,
		JSON.stringify(stations),
		{ expirationTtl: CONNECTED_LINE_GROUP_TTL_SECONDS },
	);
}

export async function loadConnectedLineGroup(
	store: KVNamespace | undefined,
	lineGroupId: number,
): Promise<Station[]> {
	if (!store) return [];
	return (
		(await store.get<Station[]>(
			`${CONNECTED_LINE_GROUP_KEY_PREFIX}${lineGroupId}`,
			'json',
		)) ?? []
	);
}
