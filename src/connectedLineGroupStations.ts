import { Reader } from 'protobufjs/minimal';
import { app } from './generated/stationapi.js';
import { assignConnectedLineGroupId, storeConnectedLineGroup } from './connectedTrainType.js';

const grpcTypes = app.trainlcd.grpc;

type MessageType = {
	create(properties?: Record<string, unknown>): unknown;
	encode(message: unknown): { finish(): Uint8Array };
	decode(reader: Uint8Array | Reader, length?: number): unknown;
	toObject(message: unknown, options?: Record<string, unknown>): Record<string, unknown>;
	verify(message: Record<string, unknown>): string | null;
};

export interface ConnectedLineGroupStationsClient {
	call(
		methodName: string,
		requestType: MessageType,
		responseType: MessageType,
		payload: Record<string, unknown>
	): Promise<Record<string, any>>;
}

export async function getConnectedLineGroupStations(
	client: ConnectedLineGroupStationsClient,
	lineGroupIds: number[],
	transportType: number,
	store?: KVNamespace,
): Promise<Array<Record<string, any>>> {
	if (lineGroupIds.length === 0) {
		return [];
	}

	const payload = await client.call(
		'GetStationsByLineGroupIdList',
		grpcTypes.GetStationsByLineGroupIdListRequest,
		grpcTypes.MultipleStationResponse,
		{ lineGroupIds, transportType }
	);

	const connected = connectStationGroups(payload.stations ?? [], lineGroupIds.length);
	if (connected.length === 0) return [];

	const synthetic = assignConnectedLineGroupId(connected, lineGroupIds);
	await storeConnectedLineGroup(store, synthetic.lineGroupId, synthetic.stations);
	return synthetic.stations;
}

function connectStationGroups(stations: Array<Record<string, any>>, lineGroupCount: number): Array<Record<string, any>> {
	if (stations.length === 0) {
		return [];
	}

	const connected = [stations[0]];
	let connectionCount = 0;
	for (let i = 1; i < stations.length; i++) {
		const previousGroupId = stations[i - 1].groupId;
		const nextGroupId = stations[i].groupId;
		if (previousGroupId != null && nextGroupId != null && previousGroupId === nextGroupId) {
			connectionCount++;
		} else {
			connected.push(stations[i]);
		}
	}

	return connectionCount === lineGroupCount - 1 ? connected : [];
}
