import { env, createExecutionContext, waitOnExecutionContext } from 'cloudflare:test';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import worker from '../src/index';
import { app } from '../src/generated/stationapi.js';
import { Reader } from 'protobufjs/minimal';

const IncomingRequest = Request<unknown, IncomingRequestCfProperties>;
const grpc = app.trainlcd.grpc;
const gatewayEnv = env as { GRPC_TARGET_ORIGIN?: string; GRPC_ALLOWED_ORIGINS?: string };

// GraphQL response types
type GraphQLResponse<T = any> = {
	data?: T;
	errors?: Array<{ message: string }>;
};

type StationData = {
	id: number;
	groupId: number;
	name: string;
	nameKatakana: string;
	nameRoman?: string;
	lines?: Array<{
		id: number;
		nameShort: string;
		nameKatakana?: string;
		nameFull?: string;
		nameRoman?: string;
		color: string;
		lineType: string;
		lineSymbols?: Array<{
			symbol: string;
			color: string;
			shape: string;
		}>;
		status?: string;
		averageDistance?: number;
	}>;
	line?: {
		id: number;
		nameShort: string;
		nameKatakana?: string;
		nameFull?: string;
		nameRoman?: string;
		color: string;
		lineType: string;
		lineSymbols?: Array<{
			symbol: string;
			color: string;
			shape: string;
		}>;
		status?: string;
		averageDistance?: number;
	};
	stationNumbers?: Array<{
		lineSymbol: string;
		stationNumber: string;
	}>;
	stopCondition?: string;
	hasTrainTypes?: boolean;
	trainType?: {
		id: number;
		typeId: number;
		groupId: number;
		name: string;
		nameKatakana: string;
		nameRoman?: string;
		color: string;
		direction: string;
		kind: string;
	};
};

type RouteData = {
	id: number;
	stops: StationData[];
};

type RoutesPageData = {
	routes: RouteData[];
	nextPageToken: string | null;
};

const toGrpcFrame = (bytes: Uint8Array): Uint8Array => {
	const frame = new Uint8Array(5 + bytes.length);
	frame[0] = 0;
	const view = new DataView(frame.buffer);
	view.setUint32(1, bytes.length, false);
	frame.set(bytes, 5);
	return frame;
};

const toTrailerFrame = (trailers: Record<string, string>): Uint8Array => {
	const lines = Object.entries(trailers)
		.map(([key, value]) => `${key}: ${value}`)
		.join('\r\n');
	const payload = new TextEncoder().encode(lines);
	const frame = new Uint8Array(5 + payload.length);
	frame[0] = 0x80;
	const view = new DataView(frame.buffer);
	view.setUint32(1, payload.length, false);
	frame.set(payload, 5);
	return frame;
};

type GeneratedMessageType = {
	decode(reader: Uint8Array | Reader, length?: number): any;
	toObject(message: any, options?: Record<string, unknown>): Record<string, unknown>;
};

type GeneratedEncodeType = {
	create(properties?: Record<string, unknown>): any;
	encode(message: Record<string, unknown>): { finish(): Uint8Array };
};

const decodeRequestPayload = (bufferLike: Uint8Array, type: GeneratedMessageType): Record<string, unknown> => {
	const buffer = new Uint8Array(bufferLike);
	const length =
		(buffer[1] << 24) | (buffer[2] << 16) | (buffer[3] << 8) | buffer[4];
	const payload = buffer.subarray(5, 5 + length);
	const message = type.decode(payload);
	return type.toObject(message, { longs: Number });
};

const createGrpcSuccessResponse = (responseType: GeneratedEncodeType, payload: Record<string, unknown>): Response => {
	const encoded = responseType.encode(responseType.create(payload)).finish();
	const body = new Uint8Array([
		...toGrpcFrame(encoded),
		...toTrailerFrame({ 'grpc-status': '0', 'grpc-message': 'OK' }),
	]);
	return new Response(body, {
		status: 200,
		headers: { 'content-type': 'application/grpc-web+proto' },
	});
};

const graphqlRequest = (query: string, variables: Record<string, unknown> = {}) =>
	new IncomingRequest('https://worker.example.com/graphql', {
		method: 'POST',
		headers: {
			origin: 'https://frontend.example.com',
			'content-type': 'application/json',
		},
		body: JSON.stringify({ query, variables }),
	});

beforeEach(() => {
	gatewayEnv.GRPC_TARGET_ORIGIN = 'https://grpc.example.com';
	delete gatewayEnv.GRPC_ALLOWED_ORIGINS;
});

afterEach(() => {
	vi.restoreAllMocks();
});

describe('GraphQL gateway', () => {
	it('resolves station query via GetStationById', async () => {
		const fetchMock = vi
			.spyOn(globalThis, 'fetch')
			.mockResolvedValueOnce(
				createGrpcSuccessResponse(grpc.SingleStationResponse, {
					station: {
						id: 1,
						groupId: 100,
						name: 'Tokyo',
						nameKatakana: 'トウキョウ',
					},
				}),
			);

		const query = `
			query GetStation($id: Int!) {
				station(id: $id) {
					id
					groupId
					name
					nameKatakana
				}
			}
		`;

		const request = graphqlRequest(query, { id: 1 });
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);

		expect(fetchMock).toHaveBeenCalledTimes(1);
		const [upstreamUrl, init] = fetchMock.mock.calls[0];
		expect(upstreamUrl).toBe('https://grpc.example.com/app.trainlcd.grpc.StationAPI/GetStationById');
		const bodyInit = init?.body;
		expect(bodyInit).toBeInstanceOf(Uint8Array);
		const grpcRequestBody = decodeRequestPayload(bodyInit as Uint8Array, grpc.GetStationByIdRequest);
		expect(grpcRequestBody).toEqual({ id: 1 });

		expect(response.status).toBe(200);
		const result = await response.json() as GraphQLResponse<{ station: StationData }>;
		expect(result.data?.station).toEqual({
			id: 1,
			groupId: 100,
			name: 'Tokyo',
			nameKatakana: 'トウキョウ',
		});
	});

	it('resolves stations query via GetStationByIdList', async () => {
		const fetchMock = vi
			.spyOn(globalThis, 'fetch')
			.mockResolvedValueOnce(
				createGrpcSuccessResponse(grpc.MultipleStationResponse, {
					stations: [{ id: 1, groupId: 10, name: 'Tokyo', nameKatakana: 'トウキョウ' }],
				}),
			);

		const query = `
			query Stations($ids: [Int!]!) {
				stations(ids: $ids) {
					id
					name
				}
			}
		`;

		const request = graphqlRequest(query, { ids: [1, 2] });
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);

		expect(fetchMock).toHaveBeenCalledTimes(1);
		const [upstreamUrl, init] = fetchMock.mock.calls[0];
		expect(upstreamUrl).toBe('https://grpc.example.com/app.trainlcd.grpc.StationAPI/GetStationByIdList');
		const bodyInit = init?.body;
		expect(bodyInit).toBeInstanceOf(Uint8Array);
		const grpcRequestBody = decodeRequestPayload(bodyInit as Uint8Array, grpc.GetStationByIdListRequest);
		expect(grpcRequestBody).toEqual({ ids: [1, 2] });

		const result = await response.json() as GraphQLResponse<{ stations: StationData[] }>;
		expect(result.data?.stations).toHaveLength(1);
		expect(result.errors).toBeUndefined();
	});

	it('resolves routes query with pagination parameters', async () => {
		const fetchMock = vi
			.spyOn(globalThis, 'fetch')
			.mockResolvedValueOnce(
				createGrpcSuccessResponse(grpc.RouteMinimalResponse, {
					routes: [{ id: 9, stops: [] }],
					lines: [],
					nextPageToken: 'token',
				}),
			);

	const query = `
		query Routes($from: Int!, $to: Int!, $viaLineId: Int, $size: Int, $token: String) {
			routes(
				fromStationGroupId: $from
				toStationGroupId: $to
				viaLineId: $viaLineId
				pageSize: $size
				pageToken: $token
			) {
					routes {
						id
					}
					nextPageToken
				}
			}
		`;

	const variables = { from: 1, to: 2, viaLineId: 3, size: 10, token: 'abc' };
		const request = graphqlRequest(query, variables);
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);

		expect(fetchMock).toHaveBeenCalledTimes(1);
		const [upstreamUrl, init] = fetchMock.mock.calls[0];
		expect(upstreamUrl).toBe('https://grpc.example.com/app.trainlcd.grpc.StationAPI/GetRoutesMinimal');
		const bodyInit = init?.body;
	const grpcRequestBody = decodeRequestPayload(bodyInit as Uint8Array, grpc.GetRouteRequest);
	expect(grpcRequestBody).toEqual({
		fromStationGroupId: 1,
		toStationGroupId: 2,
		viaLineId: 3,
		pageSize: 10,
		pageToken: 'abc',
	});

	const result = await response.json() as GraphQLResponse<{ routes: RoutesPageData }>;
	expect(result.data?.routes.routes).toHaveLength(1);
	expect(result.data?.routes.nextPageToken).toBe('token');
	});

	it('passes viaLineId through routeTypes query', async () => {
		const fetchMock = vi
			.spyOn(globalThis, 'fetch')
			.mockResolvedValueOnce(
				createGrpcSuccessResponse(grpc.RouteTypeResponse, {
					trainTypes: [{ id: 7 }],
					nextPageToken: 'next',
				}),
			);

		const query = `
			query RouteTypes($from: Int!, $to: Int!, $viaLineId: Int, $size: Int, $token: String) {
				routeTypes(
					fromStationGroupId: $from
					toStationGroupId: $to
					viaLineId: $viaLineId
					pageSize: $size
					pageToken: $token
				) {
					trainTypes {
						id
					}
					nextPageToken
				}
			}
		`;

		const variables = { from: 1, to: 2, viaLineId: 5, size: 15, token: 'tok' };
		const request = graphqlRequest(query, variables);
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);

		expect(fetchMock).toHaveBeenCalledTimes(1);
		const [upstreamUrl, init] = fetchMock.mock.calls[0];
		expect(upstreamUrl).toBe('https://grpc.example.com/app.trainlcd.grpc.StationAPI/GetRouteTypes');
		const grpcRequestBody = decodeRequestPayload(init?.body as Uint8Array, grpc.GetRouteRequest);
		expect(grpcRequestBody).toEqual({
			fromStationGroupId: 1,
			toStationGroupId: 2,
			viaLineId: 5,
			pageSize: 15,
			pageToken: 'tok',
		});

		const result = await response.json() as GraphQLResponse<{ routeTypes: { trainTypes: Array<{ id: number }>; nextPageToken: string } }>;
		expect(result.data?.routeTypes.trainTypes).toEqual([{ id: 7 }]);
		expect(result.data?.routeTypes.nextPageToken).toBe('next');
	});

	it('reconstructs full stations from minimal route response with complete line details', async () => {
		const fetchMock = vi
			.spyOn(globalThis, 'fetch')
			// First call: GetRoutesMinimal with LineMinimal in the response
			.mockResolvedValueOnce(
				createGrpcSuccessResponse(grpc.RouteMinimalResponse, {
					routes: [
						{
							id: 1,
							stops: [
								{
									id: 100,
									groupId: 1000,
									name: 'Tokyo',
									nameKatakana: 'トウキョウ',
									nameRoman: 'Tōkyō',
									lineIds: [10, 20],
									stationNumbers: [{ lineSymbol: 'JY', stationNumber: '01' }],
									stopCondition: 0,
									hasTrainTypes: true,
									trainTypeId: 1,
								},
								{
									id: 101,
									groupId: 1001,
									name: 'Shinagawa',
									nameKatakana: 'シナガワ',
									lineIds: [10],
									stationNumbers: [],
									stopCondition: 0,
									hasTrainTypes: false,
								},
							],
						},
					],
					lines: [
						{
							id: 10,
							nameShort: 'Yamanote Line',
							color: '#9acd32',
							lineType: 2,
							lineSymbols: [{ symbol: 'JY', color: '#9acd32', shape: 'round' }],
						},
						{
							id: 20,
							nameShort: 'Keihin-Tohoku Line',
							color: '#00bfff',
							lineType: 2,
							lineSymbols: [{ symbol: 'JK', color: '#00bfff', shape: 'round' }],
						},
					],
					nextPageToken: '',
				}),
			)
			// Second call: GetTrainTypesByStationId for Tokyo station (id: 100)
			.mockResolvedValueOnce(
				createGrpcSuccessResponse(grpc.MultipleTrainTypeResponse, {
					trainTypes: [
						{
							id: 1,
							typeId: 0,
							groupId: 100,
							name: 'Local',
							nameKatakana: 'フツウ',
							nameRoman: 'Futsū',
							color: '#000000',
							direction: 0,
							kind: 0,
						},
					],
				}),
			);

		const query = `
			query Routes($from: Int!, $to: Int!) {
				routes(fromStationGroupId: $from, toStationGroupId: $to) {
					routes {
						id
						stops {
							id
							groupId
							name
							nameKatakana
							nameRoman
							lines {
								id
								nameShort
								color
								lineType
								lineSymbols {
									symbol
									color
									shape
								}
							}
							line {
								id
								nameShort
								color
								lineType
								lineSymbols {
									symbol
									color
									shape
								}
							}
							stationNumbers {
								lineSymbol
								stationNumber
							}
							stopCondition
							hasTrainTypes
							trainType {
								id
								typeId
								groupId
								name
								nameKatakana
								nameRoman
								color
								direction
								kind
							}
						}
					}
				}
			}
		`;

		const variables = { from: 1, to: 2 };
		const request = graphqlRequest(query, variables);
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);

		// Verify two RPC calls were made (GetRoutesMinimal and GetTrainTypesByStationId)
		expect(fetchMock).toHaveBeenCalledTimes(2);
		
		// First call: GetRoutesMinimal
		const [firstUrl, firstInit] = fetchMock.mock.calls[0];
		expect(firstUrl).toBe('https://grpc.example.com/app.trainlcd.grpc.StationAPI/GetRoutesMinimal');
		
		// Second call: GetTrainTypesByStationId for Tokyo station
		const [secondUrl, secondInit] = fetchMock.mock.calls[1];
		expect(secondUrl).toBe('https://grpc.example.com/app.trainlcd.grpc.StationAPI/GetTrainTypesByStationId');
		const trainTypeRequest = decodeRequestPayload(secondInit?.body as Uint8Array, grpc.GetTrainTypesByStationIdRequest);
		expect(trainTypeRequest.stationId).toBe(100); // Tokyo station ID
		
		const result = await response.json() as GraphQLResponse<{ routes: RoutesPageData }>;
		
		// Verify route structure
		expect(result.data?.routes.routes).toHaveLength(1);
		const route = result.data!.routes.routes[0];
		expect(route.id).toBe(1);
		expect(route.stops).toHaveLength(2);
		
		// Verify first station (Tokyo) with 2 lines from LineMinimal
		const tokyo = route.stops[0];
		expect(tokyo.id).toBe(100);
		expect(tokyo.groupId).toBe(1000);
		expect(tokyo.name).toBe('Tokyo');
		expect(tokyo.nameKatakana).toBe('トウキョウ');
		expect(tokyo.nameRoman).toBe('Tōkyō');
		expect(tokyo.lines).toHaveLength(2);
		
		// Verify line field is set to lines[0]
		expect(tokyo.line).toBeDefined();
		expect(tokyo.line!.id).toBe(10);
		expect(tokyo.line!.nameShort).toBe('Yamanote Line');
		
		// Verify LineMinimal objects are returned with lineSymbols
		expect(tokyo.lines![0].id).toBe(10);
		expect(tokyo.lines![0].nameShort).toBe('Yamanote Line');
		expect(tokyo.lines![0].lineSymbols).toHaveLength(1);
		expect(tokyo.lines![0].lineSymbols![0].symbol).toBe('JY');
		expect(tokyo.lines![0].lineType).toBe('Normal');
		
		expect(tokyo.lines![1].id).toBe(20);
		expect(tokyo.lines![1].nameShort).toBe('Keihin-Tohoku Line');
		expect(tokyo.lines![1].lineSymbols).toHaveLength(1);
		expect(tokyo.lines![1].lineSymbols![0].symbol).toBe('JK');
		
		expect(tokyo.stationNumbers).toHaveLength(1);
		expect(tokyo.stationNumbers![0].lineSymbol).toBe('JY');
		expect(tokyo.stopCondition).toBe('All');
		
		// Verify trainType for Tokyo station
		expect(tokyo.hasTrainTypes).toBe(true);
		expect(tokyo.trainType).toBeDefined();
		expect(tokyo.trainType!.id).toBe(1);
		expect(tokyo.trainType!.name).toBe('Local');
		expect(tokyo.trainType!.nameKatakana).toBe('フツウ');
		expect(tokyo.trainType!.kind).toBe('Default');
		expect(tokyo.trainType!.direction).toBe('Both');
		
		// Verify second station (Shinagawa) with 1 line from LineMinimal
		const shinagawa = route.stops[1];
		expect(shinagawa.id).toBe(101);
		expect(shinagawa.name).toBe('Shinagawa');
		expect(shinagawa.lines).toHaveLength(1);
		expect(shinagawa.lines![0].id).toBe(10);
		expect(shinagawa.lines![0].nameShort).toBe('Yamanote Line');
		expect(shinagawa.lines![0].lineSymbols).toHaveLength(1);
		
		// Verify line field is set to lines[0]
		expect(shinagawa.line).toBeDefined();
		expect(shinagawa.line!.id).toBe(10);
		
		expect(shinagawa.hasTrainTypes).toBe(false);
		expect(shinagawa.trainType).toBeNull();
	});

	it('returns GraphQL errors for invalid payloads', async () => {
		const request = new IncomingRequest('https://worker.example.com/graphql', {
			method: 'POST',
			headers: {
				origin: 'https://frontend.example.com',
				'content-type': 'application/json',
			},
			body: JSON.stringify({}),
		});

		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);

		expect(response.status).toBe(400);
		const result = await response.json() as GraphQLResponse;
		expect(result.errors?.[0].message).toBe('Missing GraphQL query');
	});

	it('returns 500 when upstream origin is not configured', async () => {
		delete gatewayEnv.GRPC_TARGET_ORIGIN;
		const query = `
			query { station(id: 1) { id } }
		`;
		const request = graphqlRequest(query);
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);

		expect(response.status).toBe(500);
		const result = await response.json() as GraphQLResponse;
		expect(result.errors?.[0].message).toBe('Gateway is not configured');
	});

	it('resolves line query with lineSymbols via GetLineById', async () => {
		const fetchMock = vi
			.spyOn(globalThis, 'fetch')
			.mockResolvedValueOnce(
				createGrpcSuccessResponse(grpc.SingleLineResponse, {
					line: {
						id: 11301,
						nameShort: 'Yamanote Line',
						nameKatakana: 'ヤマノテセン',
						nameFull: 'JR Yamanote Line',
						nameRoman: 'JR Yamanote Line',
						color: '#9acd32',
						lineType: 2, // Normal
						lineSymbols: [
							{ symbol: 'JY', color: '#9acd32', shape: 'round' },
						],
						status: 0, // InOperation
						averageDistance: 1.5,
					},
				}),
			);

		const query = `
			query GetLine($lineId: Int!) {
				line(lineId: $lineId) {
					id
					nameShort
					nameFull
					color
					lineType
					lineSymbols {
						symbol
						color
						shape
					}
					status
					averageDistance
				}
			}
		`;

		const request = graphqlRequest(query, { lineId: 11301 });
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);

		expect(fetchMock).toHaveBeenCalledTimes(1);
		const [upstreamUrl, init] = fetchMock.mock.calls[0];
		expect(upstreamUrl).toBe('https://grpc.example.com/app.trainlcd.grpc.StationAPI/GetLineById');
		const bodyInit = init?.body;
		expect(bodyInit).toBeInstanceOf(Uint8Array);
		const grpcRequestBody = decodeRequestPayload(bodyInit as Uint8Array, grpc.GetLineByIdRequest);
		expect(grpcRequestBody).toEqual({ lineId: 11301 });

		expect(response.status).toBe(200);
		const result = await response.json() as GraphQLResponse<{ line: any }>;
		expect(result.data?.line).toBeDefined();
		expect(result.data?.line.id).toBe(11301);
		expect(result.data?.line.nameShort).toBe('Yamanote Line');
		expect(result.data?.line.lineSymbols).toHaveLength(1);
		expect(result.data?.line.lineSymbols[0]).toEqual({
			symbol: 'JY',
			color: '#9acd32',
			shape: 'round',
		});
		expect(result.data?.line.lineType).toBe('Normal');
		expect(result.data?.line.status).toBe('InOperation');
	});

	it('resolves stationTrainTypes query with line.lineSymbols via GetTrainTypesByStationId', async () => {
		const fetchMock = vi
			.spyOn(globalThis, 'fetch')
			.mockResolvedValueOnce(
				createGrpcSuccessResponse(grpc.MultipleTrainTypeResponse, {
					trainTypes: [
						{
							id: 1,
							typeId: 0,
							groupId: 100,
							name: 'Local',
							nameKatakana: 'フツウ',
							nameRoman: 'Futsū',
							color: '#000000',
							direction: 0,
							kind: 0,
							line: {
								id: 11301,
								nameShort: 'Yamanote Line',
								nameKatakana: 'ヤマノテセン',
								nameFull: 'JR Yamanote Line',
								nameRoman: 'JR Yamanote Line',
								color: '#9acd32',
								lineType: 2,
								lineSymbols: [
									{ symbol: 'JY', color: '#9acd32', shape: 'round' },
								],
								status: 0,
								averageDistance: 1.5,
							},
						},
						{
							id: 2,
							typeId: 1,
							groupId: 100,
							name: 'Rapid',
							nameKatakana: 'カイソク',
							nameRoman: 'Kaisoku',
							color: '#ff0000',
							direction: 0,
							kind: 2,
							line: {
								id: 11301,
								nameShort: 'Yamanote Line',
								nameKatakana: 'ヤマノテセン',
								nameFull: 'JR Yamanote Line',
								color: '#9acd32',
								lineType: 2,
								lineSymbols: [
									{ symbol: 'JY', color: '#9acd32', shape: 'round' },
								],
								status: 0,
								averageDistance: 1.5,
							},
						},
					],
				}),
			);

		const query = `
			query StationTrainTypes($stationId: Int!) {
				stationTrainTypes(stationId: $stationId) {
					id
					typeId
					groupId
					name
					nameKatakana
					nameRoman
					color
					direction
					kind
					line {
						id
						nameShort
						nameFull
						color
						lineType
						lineSymbols {
							symbol
							color
							shape
						}
						status
						averageDistance
					}
				}
			}
		`;

		const request = graphqlRequest(query, { stationId: 100 });
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);

		expect(fetchMock).toHaveBeenCalledTimes(1);
		const [upstreamUrl, init] = fetchMock.mock.calls[0];
		expect(upstreamUrl).toBe('https://grpc.example.com/app.trainlcd.grpc.StationAPI/GetTrainTypesByStationId');
		const bodyInit = init?.body;
		expect(bodyInit).toBeInstanceOf(Uint8Array);
		const grpcRequestBody = decodeRequestPayload(bodyInit as Uint8Array, grpc.GetTrainTypesByStationIdRequest);
		expect(grpcRequestBody).toEqual({ stationId: 100 });

		expect(response.status).toBe(200);
		const result = await response.json() as GraphQLResponse<{ stationTrainTypes: any[] }>;
		expect(result.data?.stationTrainTypes).toHaveLength(2);
		
		// Verify first train type with line.lineSymbols
		const localTrain = result.data!.stationTrainTypes[0];
		expect(localTrain.id).toBe(1);
		expect(localTrain.name).toBe('Local');
		expect(localTrain.kind).toBe('Default');
		expect(localTrain.direction).toBe('Both');
		expect(localTrain.line).toBeDefined();
		expect(localTrain.line.id).toBe(11301);
		expect(localTrain.line.nameShort).toBe('Yamanote Line');
		expect(localTrain.line.lineSymbols).toHaveLength(1);
		expect(localTrain.line.lineSymbols[0]).toEqual({
			symbol: 'JY',
			color: '#9acd32',
			shape: 'round',
		});
		expect(localTrain.line.lineType).toBe('Normal');
		expect(localTrain.line.status).toBe('InOperation');
		
		// Verify second train type also has line.lineSymbols
		const rapidTrain = result.data!.stationTrainTypes[1];
		expect(rapidTrain.id).toBe(2);
		expect(rapidTrain.name).toBe('Rapid');
		expect(rapidTrain.kind).toBe('Rapid');
		expect(rapidTrain.line.lineSymbols).toHaveLength(1);
		expect(rapidTrain.line.lineSymbols[0].symbol).toBe('JY');
	});

	it('resolves connectedRoutes with station.line fallback', async () => {
		const fetchMock = vi
			.spyOn(globalThis, 'fetch')
			.mockResolvedValueOnce(
				createGrpcSuccessResponse(grpc.RouteResponse, {
					routes: [
						{
							id: 1,
							stops: [
								{
									id: 100,
									groupId: 1000,
									name: 'Tokyo',
									nameKatakana: 'トウキョウ',
									lines: [
										{
											id: 11301,
											nameShort: 'Yamanote Line',
											nameKatakana: 'ヤマノテセン',
											nameFull: 'JR Yamanote Line',
											color: '#9acd32',
											lineType: 2,
											lineSymbols: [{ symbol: 'JY', color: '#9acd32', shape: 'round' }],
											status: 0,
										},
										{
											id: 11302,
											nameShort: 'Keihin-Tohoku Line',
											color: '#00bfff',
											lineType: 2,
											lineSymbols: [{ symbol: 'JK', color: '#00bfff', shape: 'round' }],
											status: 0,
										},
									],
									// line field is not set by gRPC server, should fallback to lines[0]
									stationNumbers: [],
									stopCondition: 0,
								},
								{
									id: 101,
									groupId: 1001,
									name: 'Shinagawa',
									nameKatakana: 'シナガワ',
									lines: [
										{
											id: 11301,
											nameShort: 'Yamanote Line',
											color: '#9acd32',
											lineType: 2,
											lineSymbols: [{ symbol: 'JY', color: '#9acd32', shape: 'round' }],
											status: 0,
										},
									],
									stationNumbers: [],
									stopCondition: 0,
								},
							],
						},
					],
				}),
			);

		const query = `
			query ConnectedRoutes($from: Int!, $to: Int!) {
				connectedRoutes(fromStationGroupId: $from, toStationGroupId: $to) {
					id
					stops {
						id
						name
						line {
							id
							nameShort
							color
							lineSymbols {
								symbol
								color
								shape
							}
						}
						lines {
							id
							nameShort
						}
					}
				}
			}
		`;

		const variables = { from: 1, to: 2 };
		const request = graphqlRequest(query, variables);
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);

		expect(fetchMock).toHaveBeenCalledTimes(1);
		const [url, init] = fetchMock.mock.calls[0];
		expect(url).toBe('https://grpc.example.com/app.trainlcd.grpc.StationAPI/GetConnectedRoutes');

		expect(response.status).toBe(200);
		const result = await response.json() as GraphQLResponse<{ connectedRoutes: RouteData[] }>;
		expect(result.data?.connectedRoutes).toHaveLength(1);
		
		const route = result.data!.connectedRoutes[0];
		expect(route.stops).toHaveLength(2);
		
		// Verify first station has line field as fallback from lines[0]
		const tokyo = route.stops[0];
		expect(tokyo.id).toBe(100);
		expect(tokyo.name).toBe('Tokyo');
		expect(tokyo.lines).toHaveLength(2);
		expect(tokyo.line).toBeDefined(); // Should be set to lines[0]
		expect(tokyo.line!.id).toBe(11301); // First line in lines array
		expect(tokyo.line!.nameShort).toBe('Yamanote Line');
		expect(tokyo.line!.lineSymbols).toHaveLength(1);
		expect(tokyo.line!.lineSymbols![0].symbol).toBe('JY');
		
		// Verify second station also has line field
		const shinagawa = route.stops[1];
		expect(shinagawa.id).toBe(101);
		expect(shinagawa.lines).toHaveLength(1);
		expect(shinagawa.line).toBeDefined();
		expect(shinagawa.line!.id).toBe(11301);
	});
});
