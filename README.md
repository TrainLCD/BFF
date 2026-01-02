# BFF

![Billboard](.github/images/billboard.png)

Cloudflare Workers-based backend-for-frontend (BFF) that exposes a GraphQL API backed by the upstream gRPC-Web service defined by `GRPC_TARGET_ORIGIN`. GraphQL resolvers translate queries into protobuf payloads generated from `proto/stationapi.proto`, forward them via gRPC-Web, and map responses back into the GraphQL schema. Development, testing, and deployment rely on Wrangler v4 and Vitest.

## Prerequisites

- Node.js 18 or later
- npm, pnpm, or another Node.js package manager
- Cloudflare account (required for deployment)

Wrangler is bundled as a devDependency, so `npx wrangler` works without a global install.

## Setup

```bash
npm install
```

## Environment Variables

- `GRPC_TARGET_ORIGIN` (required): Origin of the upstream gRPC-Web endpoint, for example `https://grpc.example.com`. The worker returns HTTP 500 if this value is missing or invalid.
- `GRPC_ALLOWED_ORIGINS` (optional): Comma-separated list of origins allowed via CORS. Omit to allow all origins.

For local development set these in `.dev.vars` or the `vars` section of `wrangler.jsonc`. Configure environment-specific values before deploying.

## Local Development

```bash
npm run dev
```

- Runs `wrangler dev` and exposes the worker at `http://localhost:8787/`.
- The `compatibility_date` is `2025-10-11`; update it when adopting newer runtime capabilities.

## GraphQL Endpoint

- GraphQL endpoint is exposed at `/graphql` (`POST` for queries, `GET` returns the SDL).
- The runtime schema is declared in `schema.graphql` and mirrored in `src/graphqlGateway.ts`.
- `POST` also accepts Apollo Client `BatchHttpLink` payloads such as `[{ query, variables, operationName }]`, returning results in the same order as received.
- Supported queries include:
  - `station(id: Int!)` — Uses `GetStationById` RPC
  - `stations(ids: [Int!]!)` — Uses `GetStationByIdList` RPC
  - `stationsNearby(latitude: Float!, longitude: Float!, limit: Int)` — Uses `GetStationsByCoordinates` RPC
  - `stationsByName(name: String!, limit: Int, fromStationGroupId: Int)` — Uses `GetStationsByName` RPC
  - `stationGroupStations(groupId: Int!)` — Uses `GetStationByGroupId` RPC
  - `lineGroupStations(lineGroupId: Int!)` — Uses `GetStationsByLineGroupId` RPC
  - `line(lineId: Int!)` — Uses `GetLineById` RPC
  - `linesByName(name: String!, limit: Int)` — Uses `GetLinesByName` RPC
  - `lineStations(lineId: Int!, stationId: Int)` — Uses `GetStationsByLineId` RPC
  - `stationTrainTypes(stationId: Int!)` — Uses `GetTrainTypesByStationId` RPC
  - `routes(fromStationGroupId: Int!, toStationGroupId: Int!, pageSize: Int, pageToken: String)` — Uses `GetRoutesMinimal` RPC (optimized with deduplicated line data)
  - `routeTypes(fromStationGroupId: Int!, toStationGroupId: Int!, pageSize: Int, pageToken: String)` — Uses `GetRouteTypes` RPC
  - `connectedRoutes(fromStationGroupId: Int!, toStationGroupId: Int!)` — Uses `GetConnectedRoutes` RPC

The `routes` query uses the `GetRoutesMinimal` RPC which returns normalized/deduplicated line data for efficient transmission. The BFF automatically reconstructs full `Station` objects by resolving line references.

Customize or extend the schema by editing `schema.graphql` and updating the resolvers in `src/graphqlGateway.ts`.

### Example Query

```graphql
query Example($from: Int!, $to: Int!) {
	routes(fromStationGroupId: $from, toStationGroupId: $to, pageSize: 10) {
		routes {
			id
			stops {
				id
				name
			}
		}
		nextPageToken
	}
}
```

## Testing

```bash
npm test
```

- Uses `cloudflare/test` and `@cloudflare/vitest-pool-workers` to exercise the Worker in a production-like environment, including gRPC-Web framing, CORS handling, and GraphQL execution.

## Deployment

```bash
npm run deploy
```

- Run `npx wrangler login` the first time to authenticate with Cloudflare.
- Ensure `GRPC_TARGET_ORIGIN`, `GRPC_ALLOWED_ORIGINS`, and any additional bindings are defined for the target environment prior to deployment.

## Regenerating Type Definitions

```bash
npm run cf-typegen
```

- Wrangler refreshes `worker-configuration.d.ts` so the `Env` types stay aligned with your bindings.

## Updating gRPC Stubs

```bash
npm run proto:generate
```

- Compiles `proto/stationapi.proto` to `src/generated/stationapi.js` and `src/generated/stationapi.d.ts` using `protobufjs`.
- Re-run tests afterwards to ensure the GraphQL↔gRPC translations still behave as expected.

## Directory Highlights

- `src/index.ts` — Worker entry point delegating requests to the GraphQL gateway.
- `src/graphqlGateway.ts` — GraphQL schema/resolver wiring, CORS handling, and gRPC-Web invocation helpers.
- `src/generated/stationapi.js` — ProtobufJS static module generated from `proto/stationapi.proto`.
- `proto/stationapi.proto` — Source protocol buffer definitions for the upstream service.
- `schema.graphql` — SDL representation of the public GraphQL schema.
- `test/index.spec.ts` — Vitest suite covering GraphQL queries and gRPC-Web interactions.
- `vitest.config.mts` — Vitest configuration targeting the Workers pool.
- `wrangler.jsonc` — Worker metadata, compatibility date, and development/deployment settings.

### Data Sources

- Bus-related data provided by [Tokyo Metropolitan Bureau of Transportation (Toei)](https://www.kotsu.metro.tokyo.jp/), licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## License

This project is released under the [MIT License](LICENSE).
