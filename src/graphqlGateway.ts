import { Reader } from 'protobufjs/minimal';
import { graphql, buildSchema, GraphQLError, GraphQLSchema, ExecutionResult } from 'graphql';
import { app } from './generated/stationapi.js';
import { schemaSDL } from './schema.js';

const grpcTypes = app.trainlcd.grpc;
const SERVICE_FQN = 'app.trainlcd.grpc.StationAPI';
const DEFAULT_ALLOWED_HEADERS = 'content-type,authorization,x-requested-with,x-api-key,x-trace-id';
const GATEWAY_USER_AGENT = 'sapi-bff-graphql-gateway/0.1';

// Enum mappings - cached for performance
const LineType = grpcTypes.LineType;
const TrainTypeKind = grpcTypes.TrainTypeKind;
const OperationStatus = grpcTypes.OperationStatus;
const StopCondition = grpcTypes.StopCondition;
const CompanyType = grpcTypes.CompanyType;
const TrainDirection = grpcTypes.TrainDirection;
const TransportType = grpcTypes.TransportType;

// Build schema once at module load time instead of per-request
let cachedSchema: GraphQLSchema | null = null;
function getSchema(): GraphQLSchema {
	if (!cachedSchema) {
		cachedSchema = buildSchema(schemaSDL);
	}
	return cachedSchema;
}

type GatewayEnv = Env & {
	GRPC_TARGET_ORIGIN?: string;
	GRPC_ALLOWED_ORIGINS?: string;
	GRPC_CACHE?: KVNamespace;
};

interface GatewayConfig {
	targetOrigin: string;
}

type MessageType = {
	create(properties?: Record<string, unknown>): unknown;
	encode(message: unknown): { finish(): Uint8Array };
	decode(reader: Uint8Array | Reader, length?: number): unknown;
	toObject(message: unknown, options?: Record<string, unknown>): Record<string, unknown>;
	verify(message: Record<string, unknown>): string | null;
};

type GraphQLOperationPayload = {
	query: string;
	variableValues?: Record<string, unknown>;
	operationName?: string;
};

class GrpcError extends Error {
	constructor(public readonly statusCode: number, public readonly publicMessage: string) {
		super(publicMessage);
		this.name = 'GrpcError';
	}
}

class GraphQLRequestValidationError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'GraphQLRequestValidationError';
	}
}

export async function handleGraphQLRequest(request: Request, env: GatewayEnv, ctx?: ExecutionContext): Promise<Response> {
	let config: GatewayConfig;
	try {
		config = resolveConfig(env);
	} catch (error) {
		console.error('GraphQL gateway misconfigured', error);
		return buildGraphQLErrorResponse(500, 'Gateway is not configured', null);
	}

	if (request.method === 'OPTIONS') {
		return handlePreflight(request, config);
	}

	const origin = request.headers.get('Origin');
	const corsOrigin = origin ?? '*';

	if (request.method === 'GET') {
		return buildSchemaResponse(schemaSDL, corsOrigin);
	}

	if (request.method !== 'POST') {
		return buildGraphQLErrorResponse(405, 'Method Not Allowed', corsOrigin, [['Allow', 'POST, OPTIONS']]);
	}

	let body: unknown;
	try {
		body = await request.json();
	} catch {
		return buildGraphQLErrorResponse(400, 'Invalid JSON payload', corsOrigin);
	}

	const client = new GrpcClient(config, env.GRPC_CACHE, ctx);
	const rootValue = createResolvers(client);

	try {
		if (Array.isArray(body)) {
			if (body.length === 0) {
				throw new GraphQLRequestValidationError('Batch GraphQL payload must contain at least one operation');
			}
			const operations: GraphQLOperationPayload[] = new Array(body.length);
			for (let i = 0; i < body.length; i++) {
				operations[i] = normalizeGraphQLPayload(body[i], i);
			}
			const batchResults = await Promise.all(operations.map((operation) => executeGraphQLQuery(operation, rootValue)));
			return buildGraphQLResponse(batchResults, corsOrigin);
		}

		const operation = normalizeGraphQLPayload(body);
		const result = await executeGraphQLQuery(operation, rootValue);
		return buildGraphQLResponse(result, corsOrigin);
	} catch (error) {
		if (error instanceof GraphQLRequestValidationError) {
			return buildGraphQLErrorResponse(400, error.message, corsOrigin);
		}
		throw error;
	}
}

function normalizeGraphQLPayload(payload: unknown, batchIndex?: number): GraphQLOperationPayload {
	const locationSuffix = batchIndex === undefined ? '' : ` at index ${batchIndex}`;
	if (typeof payload !== 'object' || payload === null || Array.isArray(payload)) {
		throw new GraphQLRequestValidationError(`Invalid GraphQL request body${locationSuffix}`);
	}

	const { query, variables, operationName } = payload as {
		query?: unknown;
		variables?: unknown;
		operationName?: unknown;
	};

	if (typeof query !== 'string') {
		throw new GraphQLRequestValidationError(`Missing GraphQL query${locationSuffix}`);
	}

	const variableValues = typeof variables === 'object' && variables !== null ? (variables as Record<string, unknown>) : undefined;
	const operation = typeof operationName === 'string' ? operationName : undefined;

	return {
		query,
		variableValues,
		operationName: operation,
	};
}

async function executeGraphQLQuery(operation: GraphQLOperationPayload, rootValue: ReturnType<typeof createResolvers>): Promise<ExecutionResult> {
	const startTime = Date.now();
	const result = await graphql({
		schema: getSchema(),
		source: operation.query,
		variableValues: operation.variableValues,
		operationName: operation.operationName,
		rootValue,
	});
	const duration = Date.now() - startTime;
	if (duration > 1000) {
		console.warn(`Slow GraphQL query detected: ${duration}ms`, { operationName: operation.operationName });
	}
	return result;
}

function createResolvers(client: GrpcClient) {
	return {
		station: async ({ id }: { id: number }) => {
			const payload = await client.call('GetStationById', grpcTypes.GetStationByIdRequest, grpcTypes.SingleStationResponse, { id });
			return payload.station ?? null;
		},
		stations: async ({ ids }: { ids: number[] }) => {
			const payload = await client.call('GetStationByIdList', grpcTypes.GetStationByIdListRequest, grpcTypes.MultipleStationResponse, {
				ids,
			});
			return payload.stations ?? [];
		},
		stationsNearby: async ({ latitude, longitude, limit, transportType }: { latitude: number; longitude: number; limit?: number; transportType?: string }) => {
			const payload = await client.call(
				'GetStationsByCoordinates',
				grpcTypes.GetStationByCoordinatesRequest,
				grpcTypes.MultipleStationResponse,
				cleanPayload({ latitude, longitude, limit, transportType: transportType ? TransportType[transportType as keyof typeof TransportType] : undefined })
			);
			return payload.stations ?? [];
		},
		stationsByName: async ({ name, limit, fromStationGroupId, transportType }: { name: string; limit?: number; fromStationGroupId?: number; transportType?: string }) => {
			const payload = await client.call(
				'GetStationsByName',
				grpcTypes.GetStationsByNameRequest,
				grpcTypes.MultipleStationResponse,
				cleanPayload({
					stationName: name,
					limit,
					fromStationGroupId,
					transportType: transportType ? TransportType[transportType as keyof typeof TransportType] : undefined,
				})
			);
			return payload.stations ?? [];
		},
		stationGroupStations: async ({ groupId }: { groupId: number }) => {
			const payload = await client.call('GetStationsByGroupId', grpcTypes.GetStationByGroupIdRequest, grpcTypes.MultipleStationResponse, {
				groupId,
			});
			return payload.stations ?? [];
		},
		lineGroupStations: async ({ lineGroupId }: { lineGroupId: number }) => {
			const payload = await client.call(
				'GetStationsByLineGroupId',
				grpcTypes.GetStationsByLineGroupIdRequest,
				grpcTypes.MultipleStationResponse,
				{ lineGroupId }
			);
			return payload.stations ?? [];
		},
		line: async ({ lineId }: { lineId: number }) => {
			const payload = await client.call('GetLineById', grpcTypes.GetLineByIdRequest, grpcTypes.SingleLineResponse, { lineId });
			return payload.line ?? null;
		},
		linesByName: async ({ name, limit }: { name: string; limit?: number }) => {
			const payload = await client.call(
				'GetLinesByName',
				grpcTypes.GetLinesByNameRequest,
				grpcTypes.MultipleLineResponse,
				cleanPayload({ lineName: name, limit })
			);
			return payload.lines ?? [];
		},
		lineStations: async ({ lineId, stationId }: { lineId: number; stationId?: number }) => {
			const payload = await client.call(
				'GetStationsByLineId',
				grpcTypes.GetStationByLineIdRequest,
				grpcTypes.MultipleStationResponse,
				cleanPayload({ lineId, stationId })
			);
			return payload.stations ?? [];
		},
		stationTrainTypes: async ({ stationId }: { stationId: number }) => {
			const payload = await client.call(
				'GetTrainTypesByStationId',
				grpcTypes.GetTrainTypesByStationIdRequest,
				grpcTypes.MultipleTrainTypeResponse,
				{ stationId }
			);
			return payload.trainTypes ?? [];
		},
	routes: async ({
		fromStationGroupId,
		toStationGroupId,
		viaLineId,
		pageSize,
		pageToken,
	}: {
		fromStationGroupId: number;
		toStationGroupId: number;
		viaLineId?: number;
		pageSize?: number;
		pageToken?: string;
	}) => {
		const effectivePageSize = pageSize ?? 50;
		const payload = await client.call(
			'GetRoutesMinimal',
			grpcTypes.GetRouteRequest,
			grpcTypes.RouteMinimalResponse,
			cleanPayload({ fromStationGroupId, toStationGroupId, viaLineId, pageSize: effectivePageSize, pageToken })
		);

			// Fetch train types for stations that have them
			const fullTrainTypeMap = await fetchFullTrainTypes(client, payload);

			// Convert minimal response to full format using LineMinimal from response
			const routes = reconstructRoutesFromMinimal(payload, fullTrainTypeMap);

			return {
				routes: routes ?? [],
				nextPageToken: payload.nextPageToken ?? null,
			};
		},
	routeTypes: async ({
		fromStationGroupId,
		toStationGroupId,
		viaLineId,
		pageSize,
		pageToken,
	}: {
		fromStationGroupId: number;
		toStationGroupId: number;
		viaLineId?: number;
		pageSize?: number;
		pageToken?: string;
	}) => {
		const payload = await client.call(
			'GetRouteTypes',
			grpcTypes.GetRouteRequest,
			grpcTypes.RouteTypeResponse,
			cleanPayload({ fromStationGroupId, toStationGroupId, viaLineId, pageSize, pageToken })
		);
			return {
				trainTypes: payload.trainTypes ?? [],
				nextPageToken: payload.nextPageToken ?? null,
			};
		},
		connectedRoutes: async ({ fromStationGroupId, toStationGroupId }: { fromStationGroupId: number; toStationGroupId: number }) => {
			const payload = await client.call('GetConnectedRoutes', grpcTypes.GetConnectedStationsRequest, grpcTypes.RouteResponse, {
				fromStationGroupId,
				toStationGroupId,
			});

			// Ensure each station has a line field (fallback to lines[0] if not set)
			const routes = payload.routes ?? [];
			for (let i = 0; i < routes.length; i++) {
				const route = routes[i];
				const stops = route.stops;
				if (stops && Array.isArray(stops)) {
					for (let j = 0; j < stops.length; j++) {
						const station = stops[j];
						// If line is not set but lines array exists, use the first line as fallback
						if (!station.line && station.lines && station.lines.length > 0) {
							station.line = station.lines[0];
						}
					}
				}
			}

			return routes;
		},
	};
}

class GrpcClient {
	constructor(private readonly config: GatewayConfig, private readonly kv?: KVNamespace, private readonly ctx?: ExecutionContext) {}

	async call(
		methodName: string,
		requestType: MessageType,
		responseType: MessageType,
		payload: Record<string, unknown>
	): Promise<Record<string, any>> {
		const callStartTime = Date.now();

		// Try KV cache first
		const cacheKey = this.getCacheKey(methodName, payload);
		if (this.kv && this.isCacheable(methodName)) {
			try {
				const cached = await this.kv.get(cacheKey, 'json');
				if (cached) {
					return cached as Record<string, any>;
				}
			} catch (error) {
				console.warn(`KV cache read error for ${methodName}:`, error);
				// Continue to actual gRPC call on cache error
			}
		}

		try {
			// Skip validation for performance - trust GraphQL layer validation
			const message = requestType.create(payload);
			const messageBytes = requestType.encode(message).finish();
			const framedBytes = frameGrpcWebMessage(messageBytes);
			const path = `/${SERVICE_FQN}/${methodName}`;
			const upstreamUrl = new URL(path, this.config.targetOrigin);

			// Add signal for timeout control - abort after 8 seconds to stay under CF's 10s CPU limit
			const controller = new AbortController();
			const timeoutId = setTimeout(() => controller.abort(), 8000);

			try {
				// Reuse minimal headers for performance
				const response = await fetch(upstreamUrl.toString(), {
					method: 'POST',
					headers: {
						'content-type': 'application/grpc-web+proto',
						'x-grpc-web': '1',
						'x-user-agent': GATEWAY_USER_AGENT,
						accept: 'application/grpc-web+proto',
						'grpc-accept-encoding': 'identity',
					},
					body: framedBytes,
					signal: controller.signal,
				});

				clearTimeout(timeoutId);

				if (!response.ok) {
					throw new GrpcError(502, `Upstream responded with HTTP ${response.status}`);
				}

				const bodyBytes = new Uint8Array(await response.arrayBuffer());
				const { messages, trailers } = parseGrpcWebFrames(bodyBytes);

				if (messages.length === 0) {
					throw new GrpcError(502, 'No message received from gRPC upstream');
				}

				const grpcStatus = Number.parseInt(trailers.get('grpc-status') ?? '0', 10);
				const grpcMessage = trailers.get('grpc-message') ?? 'unknown';

				if (grpcStatus !== 0) {
					throw new GrpcError(502, `gRPC status ${grpcStatus}: ${grpcMessage}`);
				}

				const decoded = responseType.decode(messages[0]);
				const obj = responseType.toObject(decoded, {
					longs: Number,
					enums: Number,
					defaults: true, // Include default values to ensure empty arrays are returned
				});

				const callDuration = Date.now() - callStartTime;
				if (callDuration > 1000) {
					console.warn(`Slow gRPC call: ${methodName} took ${callDuration}ms`);
				}

				const result = convertEnumsToNames(obj);

				// Write to KV cache asynchronously in background
				if (this.kv && this.ctx && this.isCacheable(methodName)) {
					const ttl = this.getCacheTTL();
					// Use ctx.waitUntil to run async KV write without blocking response
					this.ctx.waitUntil(
						this.kv.put(cacheKey, JSON.stringify(result), { expirationTtl: ttl }).catch((error) => {
							console.warn(`KV cache write error for ${methodName}:`, error);
						})
					);
				}

				return result;
			} finally {
				clearTimeout(timeoutId);
			}
		} catch (error) {
			const callDuration = Date.now() - callStartTime;

			// Handle timeout specifically
			if (error instanceof Error && error.name === 'AbortError') {
				console.error(`gRPC call timeout: ${methodName} after ${callDuration}ms`);
				throw new GraphQLError('Request timeout - please try with a smaller pageSize', {
					extensions: {
						code: 'TIMEOUT',
						http: { status: 504 },
					},
				});
			}

			if (error instanceof GrpcError) {
				console.error(`gRPC error in ${methodName}: ${error.publicMessage} (${callDuration}ms)`);
				throw new GraphQLError(error.publicMessage, {
					extensions: {
						code: 'UPSTREAM_ERROR',
						http: { status: error.statusCode },
					},
				});
			}
			throw error;
		}
	}

	private getCacheKey(methodName: string, payload: Record<string, unknown>): string {
		// Create deterministic cache key from method name and payload
		const sortedPayload = JSON.stringify(payload, Object.keys(payload).sort());
		return `grpc:${methodName}:${sortedPayload}`;
	}

	private isCacheable(methodName: string): boolean {
		// Only cache read operations, not writes
		const cacheableMethods = [
			'GetStationById',
			'GetStationByIdList',
			'GetStationsByName',
			'GetStationsByGroupId',
			'GetStationsByLineId',
			'GetStationsByLineGroupId',
			'GetLineById',
			'GetLineByIdList',
			'GetLinesByName',
			'GetRoutesMinimal',
			'GetRoutes',
			'GetRouteTypes',
			'GetConnectedRoutes',
			'GetTrainTypesByStationId',
		];
		return cacheableMethods.includes(methodName);
	}

	private getCacheTTL(): number {
		// Cache TTL in seconds (6 hours) to balance freshness and upstream load
		return 60 * 60 * 6;
	}
}

function resolveConfig(env: GatewayEnv): GatewayConfig {
	const rawTargetOrigin = env.GRPC_TARGET_ORIGIN?.trim();
	if (!rawTargetOrigin) {
		throw new Error('Missing GRPC_TARGET_ORIGIN');
	}
	let targetOrigin: string;
	try {
		const parsed = new URL(rawTargetOrigin);
		targetOrigin = parsed.origin;
		if (!targetOrigin) {
			throw new Error('Invalid origin derived from GRPC_TARGET_ORIGIN');
		}
	} catch (parseError) {
		const message = parseError instanceof Error ? parseError.message : 'unknown error';
		throw new Error(`Invalid GRPC_TARGET_ORIGIN value: ${message}`);
	}
	return {
		targetOrigin,
	};
}

function handlePreflight(request: Request, _config: GatewayConfig): Response {
	const origin = request.headers.get('Origin');
	const corsOrigin = origin ?? '*';
	const requestedHeaders = request.headers.get('Access-Control-Request-Headers') ?? DEFAULT_ALLOWED_HEADERS;
	const headers = new Headers();
	setCorsOrigin(headers, corsOrigin);
	headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
	headers.set('Access-Control-Allow-Headers', requestedHeaders);
	headers.set('Access-Control-Max-Age', '1800');
	return new Response(null, { status: 204, headers });
}

function buildGraphQLResponse(result: unknown, allowedOrigin: string | null): Response {
	const headers = new Headers();
	headers.set('content-type', 'application/json; charset=utf-8');
	setCorsOrigin(headers, allowedOrigin);
	return new Response(JSON.stringify(result), { status: 200, headers });
}

function buildSchemaResponse(sdl: string, allowedOrigin: string | null): Response {
	const headers = new Headers();
	headers.set('content-type', 'text/plain; charset=utf-8');
	setCorsOrigin(headers, allowedOrigin);
	return new Response(sdl, { status: 200, headers });
}

function buildGraphQLErrorResponse(
	status: number,
	message: string,
	allowedOrigin: string | null,
	additionalHeaders?: Iterable<[string, string]>
): Response {
	const headers = new Headers();
	headers.set('content-type', 'application/json; charset=utf-8');
	setCorsOrigin(headers, allowedOrigin);
	if (additionalHeaders) {
		for (const [key, value] of additionalHeaders) {
			headers.set(key, value);
		}
	}
	return new Response(JSON.stringify({ errors: [{ message }] }), { status, headers });
}

// Optimized payload cleaning - removes undefined values
function cleanPayload<T extends Record<string, unknown>>(payload: T): T {
	const cleaned: Record<string, unknown> = {};
	const keys = Object.keys(payload);
	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		const value = payload[key];
		if (value !== undefined) {
			cleaned[key] = value;
		}
	}
	return cleaned as T;
}

// Fetch full train type details for stations that have train types
async function fetchFullTrainTypes(client: GrpcClient, payload: Record<string, any>): Promise<Map<number, any>> {
	const routes = payload.routes;

	if (!routes || !Array.isArray(routes)) {
		return new Map();
	}

	// Collect station IDs that have train types (where train_type_id is set)
	const stationIdsWithTrainTypes = new Set<number>();
	for (let i = 0; i < routes.length; i++) {
		const route = routes[i];
		const stops = route.stops;

		if (stops && Array.isArray(stops)) {
			for (let j = 0; j < stops.length; j++) {
				const station = stops[j];
				// If trainTypeId is set, we need to fetch the full TrainType for this station
				if (typeof station.trainTypeId === 'number' && station.hasTrainTypes) {
					stationIdsWithTrainTypes.add(station.id);
				}
			}
		}
	}

	// Return empty map if no stations with train types
	if (stationIdsWithTrainTypes.size === 0) {
		return new Map();
	}

	// Fetch train types for each station in parallel
	const stationIdArray = Array.from(stationIdsWithTrainTypes);
	const trainTypePromises = stationIdArray.map((stationId) =>
		client
			.call('GetTrainTypesByStationId', grpcTypes.GetTrainTypesByStationIdRequest, grpcTypes.MultipleTrainTypeResponse, { stationId })
			.then((response) => {
				const trainTypes = response.trainTypes;
				// Return the first train type (or find by ID if needed)
				const trainType = trainTypes && Array.isArray(trainTypes) && trainTypes.length > 0 ? trainTypes[0] : null;
				return { stationId, trainType };
			})
			.catch((error) => {
				console.warn(`Failed to fetch train type for station ${stationId}:`, error);
				return { stationId, trainType: null };
			})
	);

	const trainTypeResults = await Promise.all(trainTypePromises);

	// Build map of station ID to TrainType object
	const trainTypeMap = new Map<number, any>();
	for (let i = 0; i < trainTypeResults.length; i++) {
		const result = trainTypeResults[i];
		if (result.trainType) {
			trainTypeMap.set(result.stationId, result.trainType);
		}
	}

	return trainTypeMap;
}

// Reconstruct full routes from minimal response using LineMinimal from the response
function reconstructRoutesFromMinimal(payload: Record<string, any>, fullTrainTypeMap: Map<number, any>): any[] {
	const routes = payload.routes;
	const responseLines = payload.lines; // LineMinimal array from RouteMinimalResponse

	if (!routes || !Array.isArray(routes)) {
		return [];
	}

	// Build a map of line ID to LineMinimal for quick lookup
	const lineMinimalMap = new Map<number, any>();
	if (responseLines && Array.isArray(responseLines)) {
		for (let i = 0; i < responseLines.length; i++) {
			const line = responseLines[i];
			if (line && typeof line.id === 'number') {
				lineMinimalMap.set(line.id, line);
			}
		}
	}

	// Reconstruct routes with full station objects
	const reconstructedRoutes = new Array(routes.length);
	for (let i = 0; i < routes.length; i++) {
		const route = routes[i];
		const stops = route.stops;

		if (!stops || !Array.isArray(stops)) {
			reconstructedRoutes[i] = { id: route.id, stops: [] };
			continue;
		}

		// Convert each StationMinimal to Station by resolving IDs to LineMinimal objects
		const reconstructedStops = new Array(stops.length);
		for (let j = 0; j < stops.length; j++) {
			const minimalStation = stops[j];
			const lineIds = minimalStation.lineIds;

			// Resolve line IDs to LineMinimal objects from the response
			let stationLines: any[] = [];
			if (lineIds && Array.isArray(lineIds)) {
				const resolvedLines: any[] = [];
				for (let k = 0; k < lineIds.length; k++) {
					const lineId = lineIds[k];
					const line = lineMinimalMap.get(lineId);
					if (line) {
						resolvedLines.push(line);
					}
				}
				stationLines = resolvedLines;
			}

			// Resolve train type from the map using station ID
			const trainType =
				minimalStation.hasTrainTypes && typeof minimalStation.id === 'number' ? fullTrainTypeMap.get(minimalStation.id) ?? null : null;

			// Build full Station object matching the GraphQL schema
			reconstructedStops[j] = {
				id: minimalStation.id,
				groupId: minimalStation.groupId,
				name: minimalStation.name,
				nameKatakana: minimalStation.nameKatakana,
				nameRoman: minimalStation.nameRoman,
				lines: stationLines,
				line: stationLines.length > 0 ? stationLines[0] : null, // Use first line as fallback
				stationNumbers: minimalStation.stationNumbers ?? [],
				stopCondition: minimalStation.stopCondition,
				hasTrainTypes: minimalStation.hasTrainTypes,
				trainType,
			};
		}

		reconstructedRoutes[i] = {
			id: route.id,
			stops: reconstructedStops,
		};
	}

	return reconstructedRoutes;
}

// Optimized enum conversion with early returns and minimal recursion
// Uses memoization for repeated objects to avoid redundant processing
const enumConversionCache = new WeakMap<object, any>();

function convertEnumsToNames(obj: any): any {
	if (obj === null || obj === undefined || typeof obj !== 'object') {
		return obj;
	}

	// Check cache for objects we've already processed
	if (enumConversionCache.has(obj)) {
		return enumConversionCache.get(obj);
	}

	if (Array.isArray(obj)) {
		// For arrays, process each item but don't cache the array itself
		const result = new Array(obj.length);
		for (let i = 0; i < obj.length; i++) {
			result[i] = convertEnumsToNames(obj[i]);
		}
		return result;
	}

	const converted: any = {};
	const entries = Object.entries(obj);

	for (let i = 0; i < entries.length; i++) {
		const [key, value] = entries[i];

		// Skip null/undefined values early
		if (value === null || value === undefined) {
			converted[key] = value;
			continue;
		}

		// Handle enum fields - use switch for better performance
		if (typeof value === 'number') {
			switch (key) {
				case 'lineType':
					converted[key] = LineType[value] ?? value;
					break;
				case 'kind':
					converted[key] = TrainTypeKind[value] ?? value;
					break;
				case 'status':
					converted[key] = OperationStatus[value] ?? value;
					break;
				case 'stopCondition':
					converted[key] = StopCondition[value] ?? value;
					break;
				case 'type':
					converted[key] = CompanyType[value] ?? value;
					break;
				case 'direction':
					converted[key] = TrainDirection[value] ?? value;
					break;
				case 'transportType':
					converted[key] = TransportType[value] ?? value;
					break;
				default:
					converted[key] = value;
			}
		} else if (typeof value === 'object') {
			// Only recurse for objects and arrays
			converted[key] = convertEnumsToNames(value);
		} else {
			// Primitive types can be copied directly
			converted[key] = value;
		}
	}

	// Cache the result for this object
	enumConversionCache.set(obj, converted);
	return converted;
}

function frameGrpcWebMessage(messageBytes: Uint8Array): Uint8Array {
	const frame = new Uint8Array(5 + messageBytes.length);
	frame[0] = 0;
	const view = new DataView(frame.buffer);
	view.setUint32(1, messageBytes.length, false);
	frame.set(messageBytes, 5);
	return frame;
}

function parseGrpcWebFrames(body: Uint8Array): { messages: Uint8Array[]; trailers: Map<string, string> } {
	const messages: Uint8Array[] = [];
	const trailers = new Map<string, string>();
	let offset = 0;
	const bodyLength = body.length;

	while (offset + 5 <= bodyLength) {
		const flag = body[offset];
		// Optimized length calculation using bit shifts
		const length = (body[offset + 1] << 24) | (body[offset + 2] << 16) | (body[offset + 3] << 8) | body[offset + 4];
		offset += 5;

		if (offset + length > bodyLength) {
			break;
		}

		const slice = body.subarray(offset, offset + length);
		offset += length;

		if ((flag & 0x80) === 0x80) {
			// Trailer frame - parse only if needed
			const trailerString = new TextDecoder().decode(slice);
			const lines = trailerString.split('\r\n');
			for (let i = 0; i < lines.length; i++) {
				const line = lines[i];
				const index = line.indexOf(':');
				if (index === -1) {
					continue;
				}
				const key = line.slice(0, index).trim().toLowerCase();
				if (key.length > 0) {
					trailers.set(key, line.slice(index + 1).trim());
				}
			}
		} else {
			messages.push(slice);
		}
	}
	return { messages, trailers };
}

function appendVary(headers: Headers, value: string): void {
	const existing = headers.get('Vary');
	if (!existing) {
		headers.set('Vary', value);
		return;
	}
	const normalized = value.toLowerCase();
	const parts = existing.split(',');
	for (let i = 0; i < parts.length; i++) {
		if (parts[i].trim().toLowerCase() === normalized) {
			return; // Already exists
		}
	}
	headers.set('Vary', `${existing}, ${value}`);
}

function setCorsOrigin(headers: Headers, allowedOrigin: string | null): void {
	if (!allowedOrigin) {
		return;
	}
	const value = allowedOrigin === '*' ? '*' : allowedOrigin;
	headers.set('Access-Control-Allow-Origin', value);
	if (value !== '*') {
		appendVary(headers, 'Origin');
	}
}
