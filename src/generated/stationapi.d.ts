import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace app. */
export namespace app {

    /** Namespace trainlcd. */
    namespace trainlcd {

        /** Namespace grpc. */
        namespace grpc {

            /** Represents a StationAPI */
            class StationAPI extends $protobuf.rpc.Service {

                /**
                 * Constructs a new StationAPI service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new StationAPI service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): StationAPI;

                /**
                 * Calls GetStationById.
                 * @param request GetStationByIdRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and SingleStationResponse
                 */
                public getStationById(request: app.trainlcd.grpc.IGetStationByIdRequest, callback: app.trainlcd.grpc.StationAPI.GetStationByIdCallback): void;

                /**
                 * Calls GetStationById.
                 * @param request GetStationByIdRequest message or plain object
                 * @returns Promise
                 */
                public getStationById(request: app.trainlcd.grpc.IGetStationByIdRequest): Promise<app.trainlcd.grpc.SingleStationResponse>;

                /**
                 * Calls GetStationByIdList.
                 * @param request GetStationByIdListRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and MultipleStationResponse
                 */
                public getStationByIdList(request: app.trainlcd.grpc.IGetStationByIdListRequest, callback: app.trainlcd.grpc.StationAPI.GetStationByIdListCallback): void;

                /**
                 * Calls GetStationByIdList.
                 * @param request GetStationByIdListRequest message or plain object
                 * @returns Promise
                 */
                public getStationByIdList(request: app.trainlcd.grpc.IGetStationByIdListRequest): Promise<app.trainlcd.grpc.MultipleStationResponse>;

                /**
                 * Calls GetStationsByGroupId.
                 * @param request GetStationByGroupIdRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and MultipleStationResponse
                 */
                public getStationsByGroupId(request: app.trainlcd.grpc.IGetStationByGroupIdRequest, callback: app.trainlcd.grpc.StationAPI.GetStationsByGroupIdCallback): void;

                /**
                 * Calls GetStationsByGroupId.
                 * @param request GetStationByGroupIdRequest message or plain object
                 * @returns Promise
                 */
                public getStationsByGroupId(request: app.trainlcd.grpc.IGetStationByGroupIdRequest): Promise<app.trainlcd.grpc.MultipleStationResponse>;

                /**
                 * Calls GetStationsByCoordinates.
                 * @param request GetStationByCoordinatesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and MultipleStationResponse
                 */
                public getStationsByCoordinates(request: app.trainlcd.grpc.IGetStationByCoordinatesRequest, callback: app.trainlcd.grpc.StationAPI.GetStationsByCoordinatesCallback): void;

                /**
                 * Calls GetStationsByCoordinates.
                 * @param request GetStationByCoordinatesRequest message or plain object
                 * @returns Promise
                 */
                public getStationsByCoordinates(request: app.trainlcd.grpc.IGetStationByCoordinatesRequest): Promise<app.trainlcd.grpc.MultipleStationResponse>;

                /**
                 * Calls GetStationsByLineId.
                 * @param request GetStationByLineIdRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and MultipleStationResponse
                 */
                public getStationsByLineId(request: app.trainlcd.grpc.IGetStationByLineIdRequest, callback: app.trainlcd.grpc.StationAPI.GetStationsByLineIdCallback): void;

                /**
                 * Calls GetStationsByLineId.
                 * @param request GetStationByLineIdRequest message or plain object
                 * @returns Promise
                 */
                public getStationsByLineId(request: app.trainlcd.grpc.IGetStationByLineIdRequest): Promise<app.trainlcd.grpc.MultipleStationResponse>;

                /**
                 * Calls GetStationsByName.
                 * @param request GetStationsByNameRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and MultipleStationResponse
                 */
                public getStationsByName(request: app.trainlcd.grpc.IGetStationsByNameRequest, callback: app.trainlcd.grpc.StationAPI.GetStationsByNameCallback): void;

                /**
                 * Calls GetStationsByName.
                 * @param request GetStationsByNameRequest message or plain object
                 * @returns Promise
                 */
                public getStationsByName(request: app.trainlcd.grpc.IGetStationsByNameRequest): Promise<app.trainlcd.grpc.MultipleStationResponse>;

                /**
                 * Calls GetStationsByLineGroupId.
                 * @param request GetStationsByLineGroupIdRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and MultipleStationResponse
                 */
                public getStationsByLineGroupId(request: app.trainlcd.grpc.IGetStationsByLineGroupIdRequest, callback: app.trainlcd.grpc.StationAPI.GetStationsByLineGroupIdCallback): void;

                /**
                 * Calls GetStationsByLineGroupId.
                 * @param request GetStationsByLineGroupIdRequest message or plain object
                 * @returns Promise
                 */
                public getStationsByLineGroupId(request: app.trainlcd.grpc.IGetStationsByLineGroupIdRequest): Promise<app.trainlcd.grpc.MultipleStationResponse>;

                /**
                 * Calls GetTrainTypesByStationId.
                 * @param request GetTrainTypesByStationIdRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and MultipleTrainTypeResponse
                 */
                public getTrainTypesByStationId(request: app.trainlcd.grpc.IGetTrainTypesByStationIdRequest, callback: app.trainlcd.grpc.StationAPI.GetTrainTypesByStationIdCallback): void;

                /**
                 * Calls GetTrainTypesByStationId.
                 * @param request GetTrainTypesByStationIdRequest message or plain object
                 * @returns Promise
                 */
                public getTrainTypesByStationId(request: app.trainlcd.grpc.IGetTrainTypesByStationIdRequest): Promise<app.trainlcd.grpc.MultipleTrainTypeResponse>;

                /**
                 * Calls GetRoutes.
                 * @param request GetRouteRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and RouteResponse
                 */
                public getRoutes(request: app.trainlcd.grpc.IGetRouteRequest, callback: app.trainlcd.grpc.StationAPI.GetRoutesCallback): void;

                /**
                 * Calls GetRoutes.
                 * @param request GetRouteRequest message or plain object
                 * @returns Promise
                 */
                public getRoutes(request: app.trainlcd.grpc.IGetRouteRequest): Promise<app.trainlcd.grpc.RouteResponse>;

                /**
                 * Calls GetRoutesMinimal.
                 * @param request GetRouteRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and RouteMinimalResponse
                 */
                public getRoutesMinimal(request: app.trainlcd.grpc.IGetRouteRequest, callback: app.trainlcd.grpc.StationAPI.GetRoutesMinimalCallback): void;

                /**
                 * Calls GetRoutesMinimal.
                 * @param request GetRouteRequest message or plain object
                 * @returns Promise
                 */
                public getRoutesMinimal(request: app.trainlcd.grpc.IGetRouteRequest): Promise<app.trainlcd.grpc.RouteMinimalResponse>;

                /**
                 * Calls GetLineById.
                 * @param request GetLineByIdRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and SingleLineResponse
                 */
                public getLineById(request: app.trainlcd.grpc.IGetLineByIdRequest, callback: app.trainlcd.grpc.StationAPI.GetLineByIdCallback): void;

                /**
                 * Calls GetLineById.
                 * @param request GetLineByIdRequest message or plain object
                 * @returns Promise
                 */
                public getLineById(request: app.trainlcd.grpc.IGetLineByIdRequest): Promise<app.trainlcd.grpc.SingleLineResponse>;

                /**
                 * Calls GetLineByIdList.
                 * @param request GetLineByIdListRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and MultipleLineResponse
                 */
                public getLineByIdList(request: app.trainlcd.grpc.IGetLineByIdListRequest, callback: app.trainlcd.grpc.StationAPI.GetLineByIdListCallback): void;

                /**
                 * Calls GetLineByIdList.
                 * @param request GetLineByIdListRequest message or plain object
                 * @returns Promise
                 */
                public getLineByIdList(request: app.trainlcd.grpc.IGetLineByIdListRequest): Promise<app.trainlcd.grpc.MultipleLineResponse>;

                /**
                 * Calls GetLinesByName.
                 * @param request GetLinesByNameRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and MultipleLineResponse
                 */
                public getLinesByName(request: app.trainlcd.grpc.IGetLinesByNameRequest, callback: app.trainlcd.grpc.StationAPI.GetLinesByNameCallback): void;

                /**
                 * Calls GetLinesByName.
                 * @param request GetLinesByNameRequest message or plain object
                 * @returns Promise
                 */
                public getLinesByName(request: app.trainlcd.grpc.IGetLinesByNameRequest): Promise<app.trainlcd.grpc.MultipleLineResponse>;

                /**
                 * Calls GetConnectedRoutes.
                 * @param request GetConnectedStationsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and RouteResponse
                 */
                public getConnectedRoutes(request: app.trainlcd.grpc.IGetConnectedStationsRequest, callback: app.trainlcd.grpc.StationAPI.GetConnectedRoutesCallback): void;

                /**
                 * Calls GetConnectedRoutes.
                 * @param request GetConnectedStationsRequest message or plain object
                 * @returns Promise
                 */
                public getConnectedRoutes(request: app.trainlcd.grpc.IGetConnectedStationsRequest): Promise<app.trainlcd.grpc.RouteResponse>;

                /**
                 * Calls GetRouteTypes.
                 * @param request GetRouteRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and RouteTypeResponse
                 */
                public getRouteTypes(request: app.trainlcd.grpc.IGetRouteRequest, callback: app.trainlcd.grpc.StationAPI.GetRouteTypesCallback): void;

                /**
                 * Calls GetRouteTypes.
                 * @param request GetRouteRequest message or plain object
                 * @returns Promise
                 */
                public getRouteTypes(request: app.trainlcd.grpc.IGetRouteRequest): Promise<app.trainlcd.grpc.RouteTypeResponse>;
            }

            namespace StationAPI {

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getStationById}.
                 * @param error Error, if any
                 * @param [response] SingleStationResponse
                 */
                type GetStationByIdCallback = (error: (Error|null), response?: app.trainlcd.grpc.SingleStationResponse) => void;

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getStationByIdList}.
                 * @param error Error, if any
                 * @param [response] MultipleStationResponse
                 */
                type GetStationByIdListCallback = (error: (Error|null), response?: app.trainlcd.grpc.MultipleStationResponse) => void;

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getStationsByGroupId}.
                 * @param error Error, if any
                 * @param [response] MultipleStationResponse
                 */
                type GetStationsByGroupIdCallback = (error: (Error|null), response?: app.trainlcd.grpc.MultipleStationResponse) => void;

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getStationsByCoordinates}.
                 * @param error Error, if any
                 * @param [response] MultipleStationResponse
                 */
                type GetStationsByCoordinatesCallback = (error: (Error|null), response?: app.trainlcd.grpc.MultipleStationResponse) => void;

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getStationsByLineId}.
                 * @param error Error, if any
                 * @param [response] MultipleStationResponse
                 */
                type GetStationsByLineIdCallback = (error: (Error|null), response?: app.trainlcd.grpc.MultipleStationResponse) => void;

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getStationsByName}.
                 * @param error Error, if any
                 * @param [response] MultipleStationResponse
                 */
                type GetStationsByNameCallback = (error: (Error|null), response?: app.trainlcd.grpc.MultipleStationResponse) => void;

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getStationsByLineGroupId}.
                 * @param error Error, if any
                 * @param [response] MultipleStationResponse
                 */
                type GetStationsByLineGroupIdCallback = (error: (Error|null), response?: app.trainlcd.grpc.MultipleStationResponse) => void;

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getTrainTypesByStationId}.
                 * @param error Error, if any
                 * @param [response] MultipleTrainTypeResponse
                 */
                type GetTrainTypesByStationIdCallback = (error: (Error|null), response?: app.trainlcd.grpc.MultipleTrainTypeResponse) => void;

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getRoutes}.
                 * @param error Error, if any
                 * @param [response] RouteResponse
                 */
                type GetRoutesCallback = (error: (Error|null), response?: app.trainlcd.grpc.RouteResponse) => void;

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getRoutesMinimal}.
                 * @param error Error, if any
                 * @param [response] RouteMinimalResponse
                 */
                type GetRoutesMinimalCallback = (error: (Error|null), response?: app.trainlcd.grpc.RouteMinimalResponse) => void;

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getLineById}.
                 * @param error Error, if any
                 * @param [response] SingleLineResponse
                 */
                type GetLineByIdCallback = (error: (Error|null), response?: app.trainlcd.grpc.SingleLineResponse) => void;

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getLineByIdList}.
                 * @param error Error, if any
                 * @param [response] MultipleLineResponse
                 */
                type GetLineByIdListCallback = (error: (Error|null), response?: app.trainlcd.grpc.MultipleLineResponse) => void;

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getLinesByName}.
                 * @param error Error, if any
                 * @param [response] MultipleLineResponse
                 */
                type GetLinesByNameCallback = (error: (Error|null), response?: app.trainlcd.grpc.MultipleLineResponse) => void;

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getConnectedRoutes}.
                 * @param error Error, if any
                 * @param [response] RouteResponse
                 */
                type GetConnectedRoutesCallback = (error: (Error|null), response?: app.trainlcd.grpc.RouteResponse) => void;

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getRouteTypes}.
                 * @param error Error, if any
                 * @param [response] RouteTypeResponse
                 */
                type GetRouteTypesCallback = (error: (Error|null), response?: app.trainlcd.grpc.RouteTypeResponse) => void;
            }

            /** Properties of a GetStationByIdRequest. */
            interface IGetStationByIdRequest {

                /** GetStationByIdRequest id */
                id?: (number|null);
            }

            /** Represents a GetStationByIdRequest. */
            class GetStationByIdRequest implements IGetStationByIdRequest {

                /**
                 * Constructs a new GetStationByIdRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.IGetStationByIdRequest);

                /** GetStationByIdRequest id. */
                public id: number;

                /**
                 * Creates a new GetStationByIdRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetStationByIdRequest instance
                 */
                public static create(properties?: app.trainlcd.grpc.IGetStationByIdRequest): app.trainlcd.grpc.GetStationByIdRequest;

                /**
                 * Encodes the specified GetStationByIdRequest message. Does not implicitly {@link app.trainlcd.grpc.GetStationByIdRequest.verify|verify} messages.
                 * @param message GetStationByIdRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.IGetStationByIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetStationByIdRequest message, length delimited. Does not implicitly {@link app.trainlcd.grpc.GetStationByIdRequest.verify|verify} messages.
                 * @param message GetStationByIdRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.IGetStationByIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetStationByIdRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetStationByIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.GetStationByIdRequest;

                /**
                 * Decodes a GetStationByIdRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetStationByIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.GetStationByIdRequest;

                /**
                 * Verifies a GetStationByIdRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetStationByIdRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetStationByIdRequest
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.GetStationByIdRequest;

                /**
                 * Creates a plain object from a GetStationByIdRequest message. Also converts values to other types if specified.
                 * @param message GetStationByIdRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.GetStationByIdRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetStationByIdRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetStationByIdRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetStationByIdListRequest. */
            interface IGetStationByIdListRequest {

                /** GetStationByIdListRequest ids */
                ids?: (number[]|null);
            }

            /** Represents a GetStationByIdListRequest. */
            class GetStationByIdListRequest implements IGetStationByIdListRequest {

                /**
                 * Constructs a new GetStationByIdListRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.IGetStationByIdListRequest);

                /** GetStationByIdListRequest ids. */
                public ids: number[];

                /**
                 * Creates a new GetStationByIdListRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetStationByIdListRequest instance
                 */
                public static create(properties?: app.trainlcd.grpc.IGetStationByIdListRequest): app.trainlcd.grpc.GetStationByIdListRequest;

                /**
                 * Encodes the specified GetStationByIdListRequest message. Does not implicitly {@link app.trainlcd.grpc.GetStationByIdListRequest.verify|verify} messages.
                 * @param message GetStationByIdListRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.IGetStationByIdListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetStationByIdListRequest message, length delimited. Does not implicitly {@link app.trainlcd.grpc.GetStationByIdListRequest.verify|verify} messages.
                 * @param message GetStationByIdListRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.IGetStationByIdListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetStationByIdListRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetStationByIdListRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.GetStationByIdListRequest;

                /**
                 * Decodes a GetStationByIdListRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetStationByIdListRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.GetStationByIdListRequest;

                /**
                 * Verifies a GetStationByIdListRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetStationByIdListRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetStationByIdListRequest
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.GetStationByIdListRequest;

                /**
                 * Creates a plain object from a GetStationByIdListRequest message. Also converts values to other types if specified.
                 * @param message GetStationByIdListRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.GetStationByIdListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetStationByIdListRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetStationByIdListRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetStationByGroupIdRequest. */
            interface IGetStationByGroupIdRequest {

                /** GetStationByGroupIdRequest groupId */
                groupId?: (number|null);
            }

            /** Represents a GetStationByGroupIdRequest. */
            class GetStationByGroupIdRequest implements IGetStationByGroupIdRequest {

                /**
                 * Constructs a new GetStationByGroupIdRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.IGetStationByGroupIdRequest);

                /** GetStationByGroupIdRequest groupId. */
                public groupId: number;

                /**
                 * Creates a new GetStationByGroupIdRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetStationByGroupIdRequest instance
                 */
                public static create(properties?: app.trainlcd.grpc.IGetStationByGroupIdRequest): app.trainlcd.grpc.GetStationByGroupIdRequest;

                /**
                 * Encodes the specified GetStationByGroupIdRequest message. Does not implicitly {@link app.trainlcd.grpc.GetStationByGroupIdRequest.verify|verify} messages.
                 * @param message GetStationByGroupIdRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.IGetStationByGroupIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetStationByGroupIdRequest message, length delimited. Does not implicitly {@link app.trainlcd.grpc.GetStationByGroupIdRequest.verify|verify} messages.
                 * @param message GetStationByGroupIdRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.IGetStationByGroupIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetStationByGroupIdRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetStationByGroupIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.GetStationByGroupIdRequest;

                /**
                 * Decodes a GetStationByGroupIdRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetStationByGroupIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.GetStationByGroupIdRequest;

                /**
                 * Verifies a GetStationByGroupIdRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetStationByGroupIdRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetStationByGroupIdRequest
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.GetStationByGroupIdRequest;

                /**
                 * Creates a plain object from a GetStationByGroupIdRequest message. Also converts values to other types if specified.
                 * @param message GetStationByGroupIdRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.GetStationByGroupIdRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetStationByGroupIdRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetStationByGroupIdRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetStationByCoordinatesRequest. */
            interface IGetStationByCoordinatesRequest {

                /** GetStationByCoordinatesRequest latitude */
                latitude?: (number|null);

                /** GetStationByCoordinatesRequest longitude */
                longitude?: (number|null);

                /** GetStationByCoordinatesRequest limit */
                limit?: (number|null);

                /** GetStationByCoordinatesRequest transportType */
                transportType?: (app.trainlcd.grpc.TransportType|null);
            }

            /** Represents a GetStationByCoordinatesRequest. */
            class GetStationByCoordinatesRequest implements IGetStationByCoordinatesRequest {

                /**
                 * Constructs a new GetStationByCoordinatesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.IGetStationByCoordinatesRequest);

                /** GetStationByCoordinatesRequest latitude. */
                public latitude: number;

                /** GetStationByCoordinatesRequest longitude. */
                public longitude: number;

                /** GetStationByCoordinatesRequest limit. */
                public limit?: (number|null);

                /** GetStationByCoordinatesRequest transportType. */
                public transportType?: (app.trainlcd.grpc.TransportType|null);

                /** GetStationByCoordinatesRequest _limit. */
                public _limit?: "limit";

                /** GetStationByCoordinatesRequest _transportType. */
                public _transportType?: "transportType";

                /**
                 * Creates a new GetStationByCoordinatesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetStationByCoordinatesRequest instance
                 */
                public static create(properties?: app.trainlcd.grpc.IGetStationByCoordinatesRequest): app.trainlcd.grpc.GetStationByCoordinatesRequest;

                /**
                 * Encodes the specified GetStationByCoordinatesRequest message. Does not implicitly {@link app.trainlcd.grpc.GetStationByCoordinatesRequest.verify|verify} messages.
                 * @param message GetStationByCoordinatesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.IGetStationByCoordinatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetStationByCoordinatesRequest message, length delimited. Does not implicitly {@link app.trainlcd.grpc.GetStationByCoordinatesRequest.verify|verify} messages.
                 * @param message GetStationByCoordinatesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.IGetStationByCoordinatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetStationByCoordinatesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetStationByCoordinatesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.GetStationByCoordinatesRequest;

                /**
                 * Decodes a GetStationByCoordinatesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetStationByCoordinatesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.GetStationByCoordinatesRequest;

                /**
                 * Verifies a GetStationByCoordinatesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetStationByCoordinatesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetStationByCoordinatesRequest
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.GetStationByCoordinatesRequest;

                /**
                 * Creates a plain object from a GetStationByCoordinatesRequest message. Also converts values to other types if specified.
                 * @param message GetStationByCoordinatesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.GetStationByCoordinatesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetStationByCoordinatesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetStationByCoordinatesRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetStationByLineIdRequest. */
            interface IGetStationByLineIdRequest {

                /** GetStationByLineIdRequest lineId */
                lineId?: (number|null);

                /** GetStationByLineIdRequest stationId */
                stationId?: (number|null);
            }

            /** Represents a GetStationByLineIdRequest. */
            class GetStationByLineIdRequest implements IGetStationByLineIdRequest {

                /**
                 * Constructs a new GetStationByLineIdRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.IGetStationByLineIdRequest);

                /** GetStationByLineIdRequest lineId. */
                public lineId: number;

                /** GetStationByLineIdRequest stationId. */
                public stationId?: (number|null);

                /** GetStationByLineIdRequest _stationId. */
                public _stationId?: "stationId";

                /**
                 * Creates a new GetStationByLineIdRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetStationByLineIdRequest instance
                 */
                public static create(properties?: app.trainlcd.grpc.IGetStationByLineIdRequest): app.trainlcd.grpc.GetStationByLineIdRequest;

                /**
                 * Encodes the specified GetStationByLineIdRequest message. Does not implicitly {@link app.trainlcd.grpc.GetStationByLineIdRequest.verify|verify} messages.
                 * @param message GetStationByLineIdRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.IGetStationByLineIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetStationByLineIdRequest message, length delimited. Does not implicitly {@link app.trainlcd.grpc.GetStationByLineIdRequest.verify|verify} messages.
                 * @param message GetStationByLineIdRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.IGetStationByLineIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetStationByLineIdRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetStationByLineIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.GetStationByLineIdRequest;

                /**
                 * Decodes a GetStationByLineIdRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetStationByLineIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.GetStationByLineIdRequest;

                /**
                 * Verifies a GetStationByLineIdRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetStationByLineIdRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetStationByLineIdRequest
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.GetStationByLineIdRequest;

                /**
                 * Creates a plain object from a GetStationByLineIdRequest message. Also converts values to other types if specified.
                 * @param message GetStationByLineIdRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.GetStationByLineIdRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetStationByLineIdRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetStationByLineIdRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetStationsByNameRequest. */
            interface IGetStationsByNameRequest {

                /** GetStationsByNameRequest stationName */
                stationName?: (string|null);

                /** GetStationsByNameRequest limit */
                limit?: (number|null);

                /** GetStationsByNameRequest fromStationGroupId */
                fromStationGroupId?: (number|null);

                /** GetStationsByNameRequest transportType */
                transportType?: (app.trainlcd.grpc.TransportType|null);
            }

            /** Represents a GetStationsByNameRequest. */
            class GetStationsByNameRequest implements IGetStationsByNameRequest {

                /**
                 * Constructs a new GetStationsByNameRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.IGetStationsByNameRequest);

                /** GetStationsByNameRequest stationName. */
                public stationName: string;

                /** GetStationsByNameRequest limit. */
                public limit?: (number|null);

                /** GetStationsByNameRequest fromStationGroupId. */
                public fromStationGroupId?: (number|null);

                /** GetStationsByNameRequest transportType. */
                public transportType?: (app.trainlcd.grpc.TransportType|null);

                /** GetStationsByNameRequest _limit. */
                public _limit?: "limit";

                /** GetStationsByNameRequest _fromStationGroupId. */
                public _fromStationGroupId?: "fromStationGroupId";

                /** GetStationsByNameRequest _transportType. */
                public _transportType?: "transportType";

                /**
                 * Creates a new GetStationsByNameRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetStationsByNameRequest instance
                 */
                public static create(properties?: app.trainlcd.grpc.IGetStationsByNameRequest): app.trainlcd.grpc.GetStationsByNameRequest;

                /**
                 * Encodes the specified GetStationsByNameRequest message. Does not implicitly {@link app.trainlcd.grpc.GetStationsByNameRequest.verify|verify} messages.
                 * @param message GetStationsByNameRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.IGetStationsByNameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetStationsByNameRequest message, length delimited. Does not implicitly {@link app.trainlcd.grpc.GetStationsByNameRequest.verify|verify} messages.
                 * @param message GetStationsByNameRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.IGetStationsByNameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetStationsByNameRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetStationsByNameRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.GetStationsByNameRequest;

                /**
                 * Decodes a GetStationsByNameRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetStationsByNameRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.GetStationsByNameRequest;

                /**
                 * Verifies a GetStationsByNameRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetStationsByNameRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetStationsByNameRequest
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.GetStationsByNameRequest;

                /**
                 * Creates a plain object from a GetStationsByNameRequest message. Also converts values to other types if specified.
                 * @param message GetStationsByNameRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.GetStationsByNameRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetStationsByNameRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetStationsByNameRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetRouteRequest. */
            interface IGetRouteRequest {

                /** GetRouteRequest fromStationGroupId */
                fromStationGroupId?: (number|null);

                /** GetRouteRequest toStationGroupId */
                toStationGroupId?: (number|null);

                /** GetRouteRequest pageSize */
                pageSize?: (number|null);

                /** GetRouteRequest pageToken */
                pageToken?: (string|null);

                /** GetRouteRequest viaLineId */
                viaLineId?: (number|null);
            }

            /** Represents a GetRouteRequest. */
            class GetRouteRequest implements IGetRouteRequest {

                /**
                 * Constructs a new GetRouteRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.IGetRouteRequest);

                /** GetRouteRequest fromStationGroupId. */
                public fromStationGroupId: number;

                /** GetRouteRequest toStationGroupId. */
                public toStationGroupId: number;

                /** GetRouteRequest pageSize. */
                public pageSize: number;

                /** GetRouteRequest pageToken. */
                public pageToken: string;

                /** GetRouteRequest viaLineId. */
                public viaLineId?: (number|null);

                /** GetRouteRequest _viaLineId. */
                public _viaLineId?: "viaLineId";

                /**
                 * Creates a new GetRouteRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetRouteRequest instance
                 */
                public static create(properties?: app.trainlcd.grpc.IGetRouteRequest): app.trainlcd.grpc.GetRouteRequest;

                /**
                 * Encodes the specified GetRouteRequest message. Does not implicitly {@link app.trainlcd.grpc.GetRouteRequest.verify|verify} messages.
                 * @param message GetRouteRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.IGetRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetRouteRequest message, length delimited. Does not implicitly {@link app.trainlcd.grpc.GetRouteRequest.verify|verify} messages.
                 * @param message GetRouteRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.IGetRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetRouteRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetRouteRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.GetRouteRequest;

                /**
                 * Decodes a GetRouteRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetRouteRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.GetRouteRequest;

                /**
                 * Verifies a GetRouteRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetRouteRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetRouteRequest
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.GetRouteRequest;

                /**
                 * Creates a plain object from a GetRouteRequest message. Also converts values to other types if specified.
                 * @param message GetRouteRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.GetRouteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetRouteRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetRouteRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetStationsByLineGroupIdRequest. */
            interface IGetStationsByLineGroupIdRequest {

                /** GetStationsByLineGroupIdRequest lineGroupId */
                lineGroupId?: (number|null);
            }

            /** Represents a GetStationsByLineGroupIdRequest. */
            class GetStationsByLineGroupIdRequest implements IGetStationsByLineGroupIdRequest {

                /**
                 * Constructs a new GetStationsByLineGroupIdRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.IGetStationsByLineGroupIdRequest);

                /** GetStationsByLineGroupIdRequest lineGroupId. */
                public lineGroupId: number;

                /**
                 * Creates a new GetStationsByLineGroupIdRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetStationsByLineGroupIdRequest instance
                 */
                public static create(properties?: app.trainlcd.grpc.IGetStationsByLineGroupIdRequest): app.trainlcd.grpc.GetStationsByLineGroupIdRequest;

                /**
                 * Encodes the specified GetStationsByLineGroupIdRequest message. Does not implicitly {@link app.trainlcd.grpc.GetStationsByLineGroupIdRequest.verify|verify} messages.
                 * @param message GetStationsByLineGroupIdRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.IGetStationsByLineGroupIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetStationsByLineGroupIdRequest message, length delimited. Does not implicitly {@link app.trainlcd.grpc.GetStationsByLineGroupIdRequest.verify|verify} messages.
                 * @param message GetStationsByLineGroupIdRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.IGetStationsByLineGroupIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetStationsByLineGroupIdRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetStationsByLineGroupIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.GetStationsByLineGroupIdRequest;

                /**
                 * Decodes a GetStationsByLineGroupIdRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetStationsByLineGroupIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.GetStationsByLineGroupIdRequest;

                /**
                 * Verifies a GetStationsByLineGroupIdRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetStationsByLineGroupIdRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetStationsByLineGroupIdRequest
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.GetStationsByLineGroupIdRequest;

                /**
                 * Creates a plain object from a GetStationsByLineGroupIdRequest message. Also converts values to other types if specified.
                 * @param message GetStationsByLineGroupIdRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.GetStationsByLineGroupIdRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetStationsByLineGroupIdRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetStationsByLineGroupIdRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetTrainTypesByStationIdRequest. */
            interface IGetTrainTypesByStationIdRequest {

                /** GetTrainTypesByStationIdRequest stationId */
                stationId?: (number|null);
            }

            /** Represents a GetTrainTypesByStationIdRequest. */
            class GetTrainTypesByStationIdRequest implements IGetTrainTypesByStationIdRequest {

                /**
                 * Constructs a new GetTrainTypesByStationIdRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.IGetTrainTypesByStationIdRequest);

                /** GetTrainTypesByStationIdRequest stationId. */
                public stationId: number;

                /**
                 * Creates a new GetTrainTypesByStationIdRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetTrainTypesByStationIdRequest instance
                 */
                public static create(properties?: app.trainlcd.grpc.IGetTrainTypesByStationIdRequest): app.trainlcd.grpc.GetTrainTypesByStationIdRequest;

                /**
                 * Encodes the specified GetTrainTypesByStationIdRequest message. Does not implicitly {@link app.trainlcd.grpc.GetTrainTypesByStationIdRequest.verify|verify} messages.
                 * @param message GetTrainTypesByStationIdRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.IGetTrainTypesByStationIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetTrainTypesByStationIdRequest message, length delimited. Does not implicitly {@link app.trainlcd.grpc.GetTrainTypesByStationIdRequest.verify|verify} messages.
                 * @param message GetTrainTypesByStationIdRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.IGetTrainTypesByStationIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetTrainTypesByStationIdRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetTrainTypesByStationIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.GetTrainTypesByStationIdRequest;

                /**
                 * Decodes a GetTrainTypesByStationIdRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetTrainTypesByStationIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.GetTrainTypesByStationIdRequest;

                /**
                 * Verifies a GetTrainTypesByStationIdRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetTrainTypesByStationIdRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetTrainTypesByStationIdRequest
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.GetTrainTypesByStationIdRequest;

                /**
                 * Creates a plain object from a GetTrainTypesByStationIdRequest message. Also converts values to other types if specified.
                 * @param message GetTrainTypesByStationIdRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.GetTrainTypesByStationIdRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetTrainTypesByStationIdRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetTrainTypesByStationIdRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetLineByIdRequest. */
            interface IGetLineByIdRequest {

                /** GetLineByIdRequest lineId */
                lineId?: (number|null);
            }

            /** Represents a GetLineByIdRequest. */
            class GetLineByIdRequest implements IGetLineByIdRequest {

                /**
                 * Constructs a new GetLineByIdRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.IGetLineByIdRequest);

                /** GetLineByIdRequest lineId. */
                public lineId: number;

                /**
                 * Creates a new GetLineByIdRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetLineByIdRequest instance
                 */
                public static create(properties?: app.trainlcd.grpc.IGetLineByIdRequest): app.trainlcd.grpc.GetLineByIdRequest;

                /**
                 * Encodes the specified GetLineByIdRequest message. Does not implicitly {@link app.trainlcd.grpc.GetLineByIdRequest.verify|verify} messages.
                 * @param message GetLineByIdRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.IGetLineByIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetLineByIdRequest message, length delimited. Does not implicitly {@link app.trainlcd.grpc.GetLineByIdRequest.verify|verify} messages.
                 * @param message GetLineByIdRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.IGetLineByIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetLineByIdRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetLineByIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.GetLineByIdRequest;

                /**
                 * Decodes a GetLineByIdRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetLineByIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.GetLineByIdRequest;

                /**
                 * Verifies a GetLineByIdRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetLineByIdRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetLineByIdRequest
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.GetLineByIdRequest;

                /**
                 * Creates a plain object from a GetLineByIdRequest message. Also converts values to other types if specified.
                 * @param message GetLineByIdRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.GetLineByIdRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetLineByIdRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetLineByIdRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetLineByIdListRequest. */
            interface IGetLineByIdListRequest {

                /** GetLineByIdListRequest lineIds */
                lineIds?: (number[]|null);
            }

            /** Represents a GetLineByIdListRequest. */
            class GetLineByIdListRequest implements IGetLineByIdListRequest {

                /**
                 * Constructs a new GetLineByIdListRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.IGetLineByIdListRequest);

                /** GetLineByIdListRequest lineIds. */
                public lineIds: number[];

                /**
                 * Creates a new GetLineByIdListRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetLineByIdListRequest instance
                 */
                public static create(properties?: app.trainlcd.grpc.IGetLineByIdListRequest): app.trainlcd.grpc.GetLineByIdListRequest;

                /**
                 * Encodes the specified GetLineByIdListRequest message. Does not implicitly {@link app.trainlcd.grpc.GetLineByIdListRequest.verify|verify} messages.
                 * @param message GetLineByIdListRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.IGetLineByIdListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetLineByIdListRequest message, length delimited. Does not implicitly {@link app.trainlcd.grpc.GetLineByIdListRequest.verify|verify} messages.
                 * @param message GetLineByIdListRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.IGetLineByIdListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetLineByIdListRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetLineByIdListRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.GetLineByIdListRequest;

                /**
                 * Decodes a GetLineByIdListRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetLineByIdListRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.GetLineByIdListRequest;

                /**
                 * Verifies a GetLineByIdListRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetLineByIdListRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetLineByIdListRequest
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.GetLineByIdListRequest;

                /**
                 * Creates a plain object from a GetLineByIdListRequest message. Also converts values to other types if specified.
                 * @param message GetLineByIdListRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.GetLineByIdListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetLineByIdListRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetLineByIdListRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CoordinatesRequest. */
            interface ICoordinatesRequest {

                /** CoordinatesRequest latitude */
                latitude?: (number|null);

                /** CoordinatesRequest longitude */
                longitude?: (number|null);

                /** CoordinatesRequest lineId */
                lineId?: (number|null);
            }

            /** Represents a CoordinatesRequest. */
            class CoordinatesRequest implements ICoordinatesRequest {

                /**
                 * Constructs a new CoordinatesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.ICoordinatesRequest);

                /** CoordinatesRequest latitude. */
                public latitude: number;

                /** CoordinatesRequest longitude. */
                public longitude: number;

                /** CoordinatesRequest lineId. */
                public lineId?: (number|null);

                /** CoordinatesRequest _lineId. */
                public _lineId?: "lineId";

                /**
                 * Creates a new CoordinatesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CoordinatesRequest instance
                 */
                public static create(properties?: app.trainlcd.grpc.ICoordinatesRequest): app.trainlcd.grpc.CoordinatesRequest;

                /**
                 * Encodes the specified CoordinatesRequest message. Does not implicitly {@link app.trainlcd.grpc.CoordinatesRequest.verify|verify} messages.
                 * @param message CoordinatesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.ICoordinatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CoordinatesRequest message, length delimited. Does not implicitly {@link app.trainlcd.grpc.CoordinatesRequest.verify|verify} messages.
                 * @param message CoordinatesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.ICoordinatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CoordinatesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CoordinatesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.CoordinatesRequest;

                /**
                 * Decodes a CoordinatesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CoordinatesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.CoordinatesRequest;

                /**
                 * Verifies a CoordinatesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CoordinatesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CoordinatesRequest
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.CoordinatesRequest;

                /**
                 * Creates a plain object from a CoordinatesRequest message. Also converts values to other types if specified.
                 * @param message CoordinatesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.CoordinatesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CoordinatesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CoordinatesRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetLinesByNameRequest. */
            interface IGetLinesByNameRequest {

                /** GetLinesByNameRequest lineName */
                lineName?: (string|null);

                /** GetLinesByNameRequest limit */
                limit?: (number|null);
            }

            /** Represents a GetLinesByNameRequest. */
            class GetLinesByNameRequest implements IGetLinesByNameRequest {

                /**
                 * Constructs a new GetLinesByNameRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.IGetLinesByNameRequest);

                /** GetLinesByNameRequest lineName. */
                public lineName: string;

                /** GetLinesByNameRequest limit. */
                public limit?: (number|null);

                /** GetLinesByNameRequest _limit. */
                public _limit?: "limit";

                /**
                 * Creates a new GetLinesByNameRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetLinesByNameRequest instance
                 */
                public static create(properties?: app.trainlcd.grpc.IGetLinesByNameRequest): app.trainlcd.grpc.GetLinesByNameRequest;

                /**
                 * Encodes the specified GetLinesByNameRequest message. Does not implicitly {@link app.trainlcd.grpc.GetLinesByNameRequest.verify|verify} messages.
                 * @param message GetLinesByNameRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.IGetLinesByNameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetLinesByNameRequest message, length delimited. Does not implicitly {@link app.trainlcd.grpc.GetLinesByNameRequest.verify|verify} messages.
                 * @param message GetLinesByNameRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.IGetLinesByNameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetLinesByNameRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetLinesByNameRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.GetLinesByNameRequest;

                /**
                 * Decodes a GetLinesByNameRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetLinesByNameRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.GetLinesByNameRequest;

                /**
                 * Verifies a GetLinesByNameRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetLinesByNameRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetLinesByNameRequest
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.GetLinesByNameRequest;

                /**
                 * Creates a plain object from a GetLinesByNameRequest message. Also converts values to other types if specified.
                 * @param message GetLinesByNameRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.GetLinesByNameRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetLinesByNameRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetLinesByNameRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetConnectedStationsRequest. */
            interface IGetConnectedStationsRequest {

                /** GetConnectedStationsRequest fromStationGroupId */
                fromStationGroupId?: (number|null);

                /** GetConnectedStationsRequest toStationGroupId */
                toStationGroupId?: (number|null);
            }

            /** Represents a GetConnectedStationsRequest. */
            class GetConnectedStationsRequest implements IGetConnectedStationsRequest {

                /**
                 * Constructs a new GetConnectedStationsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.IGetConnectedStationsRequest);

                /** GetConnectedStationsRequest fromStationGroupId. */
                public fromStationGroupId: number;

                /** GetConnectedStationsRequest toStationGroupId. */
                public toStationGroupId: number;

                /**
                 * Creates a new GetConnectedStationsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetConnectedStationsRequest instance
                 */
                public static create(properties?: app.trainlcd.grpc.IGetConnectedStationsRequest): app.trainlcd.grpc.GetConnectedStationsRequest;

                /**
                 * Encodes the specified GetConnectedStationsRequest message. Does not implicitly {@link app.trainlcd.grpc.GetConnectedStationsRequest.verify|verify} messages.
                 * @param message GetConnectedStationsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.IGetConnectedStationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetConnectedStationsRequest message, length delimited. Does not implicitly {@link app.trainlcd.grpc.GetConnectedStationsRequest.verify|verify} messages.
                 * @param message GetConnectedStationsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.IGetConnectedStationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetConnectedStationsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetConnectedStationsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.GetConnectedStationsRequest;

                /**
                 * Decodes a GetConnectedStationsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetConnectedStationsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.GetConnectedStationsRequest;

                /**
                 * Verifies a GetConnectedStationsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetConnectedStationsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetConnectedStationsRequest
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.GetConnectedStationsRequest;

                /**
                 * Creates a plain object from a GetConnectedStationsRequest message. Also converts values to other types if specified.
                 * @param message GetConnectedStationsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.GetConnectedStationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetConnectedStationsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetConnectedStationsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** OperationStatus enum. */
            enum OperationStatus {
                InOperation = 0,
                NotOpened = 1,
                Closed = 2
            }

            /** TransportType enum. */
            enum TransportType {
                TransportTypeUnspecified = 0,
                Rail = 1,
                Bus = 2
            }

            /** Properties of a StationNumber. */
            interface IStationNumber {

                /** StationNumber lineSymbol */
                lineSymbol?: (string|null);

                /** StationNumber lineSymbolColor */
                lineSymbolColor?: (string|null);

                /** StationNumber lineSymbolShape */
                lineSymbolShape?: (string|null);

                /** StationNumber stationNumber */
                stationNumber?: (string|null);
            }

            /** Represents a StationNumber. */
            class StationNumber implements IStationNumber {

                /**
                 * Constructs a new StationNumber.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.IStationNumber);

                /** StationNumber lineSymbol. */
                public lineSymbol: string;

                /** StationNumber lineSymbolColor. */
                public lineSymbolColor: string;

                /** StationNumber lineSymbolShape. */
                public lineSymbolShape: string;

                /** StationNumber stationNumber. */
                public stationNumber: string;

                /**
                 * Creates a new StationNumber instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StationNumber instance
                 */
                public static create(properties?: app.trainlcd.grpc.IStationNumber): app.trainlcd.grpc.StationNumber;

                /**
                 * Encodes the specified StationNumber message. Does not implicitly {@link app.trainlcd.grpc.StationNumber.verify|verify} messages.
                 * @param message StationNumber message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.IStationNumber, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StationNumber message, length delimited. Does not implicitly {@link app.trainlcd.grpc.StationNumber.verify|verify} messages.
                 * @param message StationNumber message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.IStationNumber, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StationNumber message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StationNumber
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.StationNumber;

                /**
                 * Decodes a StationNumber message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StationNumber
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.StationNumber;

                /**
                 * Verifies a StationNumber message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StationNumber message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StationNumber
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.StationNumber;

                /**
                 * Creates a plain object from a StationNumber message. Also converts values to other types if specified.
                 * @param message StationNumber
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.StationNumber, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StationNumber to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for StationNumber
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** StopCondition enum. */
            enum StopCondition {
                All = 0,
                Not = 1,
                Partial = 2,
                Weekday = 3,
                Holiday = 4,
                PartialStop = 5
            }

            /** TrainDirection enum. */
            enum TrainDirection {
                Both = 0,
                Inbound = 1,
                Outbound = 2
            }

            /** TrainTypeKind enum. */
            enum TrainTypeKind {
                Default = 0,
                Branch = 1,
                Rapid = 2,
                Express = 3,
                LimitedExpress = 4,
                HighSpeedRapid = 5
            }

            /** Properties of a TrainType. */
            interface ITrainType {

                /** TrainType id */
                id?: (number|null);

                /** TrainType typeId */
                typeId?: (number|null);

                /** TrainType groupId */
                groupId?: (number|null);

                /** TrainType name */
                name?: (string|null);

                /** TrainType nameKatakana */
                nameKatakana?: (string|null);

                /** TrainType nameRoman */
                nameRoman?: (string|null);

                /** TrainType nameChinese */
                nameChinese?: (string|null);

                /** TrainType nameKorean */
                nameKorean?: (string|null);

                /** TrainType color */
                color?: (string|null);

                /** TrainType lines */
                lines?: (app.trainlcd.grpc.ILine[]|null);

                /** TrainType line */
                line?: (app.trainlcd.grpc.ILine|null);

                /** TrainType direction */
                direction?: (app.trainlcd.grpc.TrainDirection|null);

                /** TrainType kind */
                kind?: (app.trainlcd.grpc.TrainTypeKind|null);
            }

            /** Represents a TrainType. */
            class TrainType implements ITrainType {

                /**
                 * Constructs a new TrainType.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.ITrainType);

                /** TrainType id. */
                public id: number;

                /** TrainType typeId. */
                public typeId: number;

                /** TrainType groupId. */
                public groupId: number;

                /** TrainType name. */
                public name: string;

                /** TrainType nameKatakana. */
                public nameKatakana: string;

                /** TrainType nameRoman. */
                public nameRoman?: (string|null);

                /** TrainType nameChinese. */
                public nameChinese?: (string|null);

                /** TrainType nameKorean. */
                public nameKorean?: (string|null);

                /** TrainType color. */
                public color: string;

                /** TrainType lines. */
                public lines: app.trainlcd.grpc.ILine[];

                /** TrainType line. */
                public line?: (app.trainlcd.grpc.ILine|null);

                /** TrainType direction. */
                public direction: app.trainlcd.grpc.TrainDirection;

                /** TrainType kind. */
                public kind: app.trainlcd.grpc.TrainTypeKind;

                /** TrainType _nameRoman. */
                public _nameRoman?: "nameRoman";

                /** TrainType _nameChinese. */
                public _nameChinese?: "nameChinese";

                /** TrainType _nameKorean. */
                public _nameKorean?: "nameKorean";

                /** TrainType _line. */
                public _line?: "line";

                /**
                 * Creates a new TrainType instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TrainType instance
                 */
                public static create(properties?: app.trainlcd.grpc.ITrainType): app.trainlcd.grpc.TrainType;

                /**
                 * Encodes the specified TrainType message. Does not implicitly {@link app.trainlcd.grpc.TrainType.verify|verify} messages.
                 * @param message TrainType message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.ITrainType, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TrainType message, length delimited. Does not implicitly {@link app.trainlcd.grpc.TrainType.verify|verify} messages.
                 * @param message TrainType message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.ITrainType, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TrainType message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TrainType
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.TrainType;

                /**
                 * Decodes a TrainType message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TrainType
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.TrainType;

                /**
                 * Verifies a TrainType message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TrainType message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TrainType
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.TrainType;

                /**
                 * Creates a plain object from a TrainType message. Also converts values to other types if specified.
                 * @param message TrainType
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.TrainType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TrainType to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TrainType
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Station. */
            interface IStation {

                /** Station id */
                id?: (number|null);

                /** Station groupId */
                groupId?: (number|null);

                /** Station name */
                name?: (string|null);

                /** Station nameKatakana */
                nameKatakana?: (string|null);

                /** Station nameRoman */
                nameRoman?: (string|null);

                /** Station nameChinese */
                nameChinese?: (string|null);

                /** Station nameKorean */
                nameKorean?: (string|null);

                /** Station threeLetterCode */
                threeLetterCode?: (string|null);

                /** Station lines */
                lines?: (app.trainlcd.grpc.ILine[]|null);

                /** Station line */
                line?: (app.trainlcd.grpc.ILine|null);

                /** Station prefectureId */
                prefectureId?: (number|null);

                /** Station postalCode */
                postalCode?: (string|null);

                /** Station address */
                address?: (string|null);

                /** Station latitude */
                latitude?: (number|null);

                /** Station longitude */
                longitude?: (number|null);

                /** Station openedAt */
                openedAt?: (string|null);

                /** Station closedAt */
                closedAt?: (string|null);

                /** Station status */
                status?: (app.trainlcd.grpc.OperationStatus|null);

                /** Station stationNumbers */
                stationNumbers?: (app.trainlcd.grpc.IStationNumber[]|null);

                /** Station stopCondition */
                stopCondition?: (app.trainlcd.grpc.StopCondition|null);

                /** Station distance */
                distance?: (number|null);

                /** Station hasTrainTypes */
                hasTrainTypes?: (boolean|null);

                /** Station trainType */
                trainType?: (app.trainlcd.grpc.ITrainType|null);

                /** Station transportType */
                transportType?: (app.trainlcd.grpc.TransportType|null);
            }

            /** Represents a Station. */
            class Station implements IStation {

                /**
                 * Constructs a new Station.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.IStation);

                /** Station id. */
                public id: number;

                /** Station groupId. */
                public groupId: number;

                /** Station name. */
                public name: string;

                /** Station nameKatakana. */
                public nameKatakana: string;

                /** Station nameRoman. */
                public nameRoman?: (string|null);

                /** Station nameChinese. */
                public nameChinese?: (string|null);

                /** Station nameKorean. */
                public nameKorean?: (string|null);

                /** Station threeLetterCode. */
                public threeLetterCode?: (string|null);

                /** Station lines. */
                public lines: app.trainlcd.grpc.ILine[];

                /** Station line. */
                public line?: (app.trainlcd.grpc.ILine|null);

                /** Station prefectureId. */
                public prefectureId: number;

                /** Station postalCode. */
                public postalCode: string;

                /** Station address. */
                public address: string;

                /** Station latitude. */
                public latitude: number;

                /** Station longitude. */
                public longitude: number;

                /** Station openedAt. */
                public openedAt: string;

                /** Station closedAt. */
                public closedAt: string;

                /** Station status. */
                public status: app.trainlcd.grpc.OperationStatus;

                /** Station stationNumbers. */
                public stationNumbers: app.trainlcd.grpc.IStationNumber[];

                /** Station stopCondition. */
                public stopCondition: app.trainlcd.grpc.StopCondition;

                /** Station distance. */
                public distance?: (number|null);

                /** Station hasTrainTypes. */
                public hasTrainTypes?: (boolean|null);

                /** Station trainType. */
                public trainType?: (app.trainlcd.grpc.ITrainType|null);

                /** Station transportType. */
                public transportType: app.trainlcd.grpc.TransportType;

                /** Station _nameRoman. */
                public _nameRoman?: "nameRoman";

                /** Station _nameChinese. */
                public _nameChinese?: "nameChinese";

                /** Station _nameKorean. */
                public _nameKorean?: "nameKorean";

                /** Station _threeLetterCode. */
                public _threeLetterCode?: "threeLetterCode";

                /** Station _line. */
                public _line?: "line";

                /** Station _distance. */
                public _distance?: "distance";

                /** Station _hasTrainTypes. */
                public _hasTrainTypes?: "hasTrainTypes";

                /** Station _trainType. */
                public _trainType?: "trainType";

                /**
                 * Creates a new Station instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Station instance
                 */
                public static create(properties?: app.trainlcd.grpc.IStation): app.trainlcd.grpc.Station;

                /**
                 * Encodes the specified Station message. Does not implicitly {@link app.trainlcd.grpc.Station.verify|verify} messages.
                 * @param message Station message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.IStation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Station message, length delimited. Does not implicitly {@link app.trainlcd.grpc.Station.verify|verify} messages.
                 * @param message Station message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.IStation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Station message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Station
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.Station;

                /**
                 * Decodes a Station message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Station
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.Station;

                /**
                 * Verifies a Station message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Station message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Station
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.Station;

                /**
                 * Creates a plain object from a Station message. Also converts values to other types if specified.
                 * @param message Station
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.Station, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Station to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Station
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SingleStationResponse. */
            interface ISingleStationResponse {

                /** SingleStationResponse station */
                station?: (app.trainlcd.grpc.IStation|null);
            }

            /** Represents a SingleStationResponse. */
            class SingleStationResponse implements ISingleStationResponse {

                /**
                 * Constructs a new SingleStationResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.ISingleStationResponse);

                /** SingleStationResponse station. */
                public station?: (app.trainlcd.grpc.IStation|null);

                /**
                 * Creates a new SingleStationResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SingleStationResponse instance
                 */
                public static create(properties?: app.trainlcd.grpc.ISingleStationResponse): app.trainlcd.grpc.SingleStationResponse;

                /**
                 * Encodes the specified SingleStationResponse message. Does not implicitly {@link app.trainlcd.grpc.SingleStationResponse.verify|verify} messages.
                 * @param message SingleStationResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.ISingleStationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SingleStationResponse message, length delimited. Does not implicitly {@link app.trainlcd.grpc.SingleStationResponse.verify|verify} messages.
                 * @param message SingleStationResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.ISingleStationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SingleStationResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SingleStationResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.SingleStationResponse;

                /**
                 * Decodes a SingleStationResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SingleStationResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.SingleStationResponse;

                /**
                 * Verifies a SingleStationResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SingleStationResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SingleStationResponse
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.SingleStationResponse;

                /**
                 * Creates a plain object from a SingleStationResponse message. Also converts values to other types if specified.
                 * @param message SingleStationResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.SingleStationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SingleStationResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SingleStationResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MultipleStationResponse. */
            interface IMultipleStationResponse {

                /** MultipleStationResponse stations */
                stations?: (app.trainlcd.grpc.IStation[]|null);
            }

            /** Represents a MultipleStationResponse. */
            class MultipleStationResponse implements IMultipleStationResponse {

                /**
                 * Constructs a new MultipleStationResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.IMultipleStationResponse);

                /** MultipleStationResponse stations. */
                public stations: app.trainlcd.grpc.IStation[];

                /**
                 * Creates a new MultipleStationResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MultipleStationResponse instance
                 */
                public static create(properties?: app.trainlcd.grpc.IMultipleStationResponse): app.trainlcd.grpc.MultipleStationResponse;

                /**
                 * Encodes the specified MultipleStationResponse message. Does not implicitly {@link app.trainlcd.grpc.MultipleStationResponse.verify|verify} messages.
                 * @param message MultipleStationResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.IMultipleStationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MultipleStationResponse message, length delimited. Does not implicitly {@link app.trainlcd.grpc.MultipleStationResponse.verify|verify} messages.
                 * @param message MultipleStationResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.IMultipleStationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MultipleStationResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MultipleStationResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.MultipleStationResponse;

                /**
                 * Decodes a MultipleStationResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MultipleStationResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.MultipleStationResponse;

                /**
                 * Verifies a MultipleStationResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MultipleStationResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MultipleStationResponse
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.MultipleStationResponse;

                /**
                 * Creates a plain object from a MultipleStationResponse message. Also converts values to other types if specified.
                 * @param message MultipleStationResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.MultipleStationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MultipleStationResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MultipleStationResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MultipleTrainTypeResponse. */
            interface IMultipleTrainTypeResponse {

                /** MultipleTrainTypeResponse trainTypes */
                trainTypes?: (app.trainlcd.grpc.ITrainType[]|null);
            }

            /** Represents a MultipleTrainTypeResponse. */
            class MultipleTrainTypeResponse implements IMultipleTrainTypeResponse {

                /**
                 * Constructs a new MultipleTrainTypeResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.IMultipleTrainTypeResponse);

                /** MultipleTrainTypeResponse trainTypes. */
                public trainTypes: app.trainlcd.grpc.ITrainType[];

                /**
                 * Creates a new MultipleTrainTypeResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MultipleTrainTypeResponse instance
                 */
                public static create(properties?: app.trainlcd.grpc.IMultipleTrainTypeResponse): app.trainlcd.grpc.MultipleTrainTypeResponse;

                /**
                 * Encodes the specified MultipleTrainTypeResponse message. Does not implicitly {@link app.trainlcd.grpc.MultipleTrainTypeResponse.verify|verify} messages.
                 * @param message MultipleTrainTypeResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.IMultipleTrainTypeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MultipleTrainTypeResponse message, length delimited. Does not implicitly {@link app.trainlcd.grpc.MultipleTrainTypeResponse.verify|verify} messages.
                 * @param message MultipleTrainTypeResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.IMultipleTrainTypeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MultipleTrainTypeResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MultipleTrainTypeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.MultipleTrainTypeResponse;

                /**
                 * Decodes a MultipleTrainTypeResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MultipleTrainTypeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.MultipleTrainTypeResponse;

                /**
                 * Verifies a MultipleTrainTypeResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MultipleTrainTypeResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MultipleTrainTypeResponse
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.MultipleTrainTypeResponse;

                /**
                 * Creates a plain object from a MultipleTrainTypeResponse message. Also converts values to other types if specified.
                 * @param message MultipleTrainTypeResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.MultipleTrainTypeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MultipleTrainTypeResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MultipleTrainTypeResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SingleLineResponse. */
            interface ISingleLineResponse {

                /** SingleLineResponse line */
                line?: (app.trainlcd.grpc.ILine|null);
            }

            /** Represents a SingleLineResponse. */
            class SingleLineResponse implements ISingleLineResponse {

                /**
                 * Constructs a new SingleLineResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.ISingleLineResponse);

                /** SingleLineResponse line. */
                public line?: (app.trainlcd.grpc.ILine|null);

                /**
                 * Creates a new SingleLineResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SingleLineResponse instance
                 */
                public static create(properties?: app.trainlcd.grpc.ISingleLineResponse): app.trainlcd.grpc.SingleLineResponse;

                /**
                 * Encodes the specified SingleLineResponse message. Does not implicitly {@link app.trainlcd.grpc.SingleLineResponse.verify|verify} messages.
                 * @param message SingleLineResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.ISingleLineResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SingleLineResponse message, length delimited. Does not implicitly {@link app.trainlcd.grpc.SingleLineResponse.verify|verify} messages.
                 * @param message SingleLineResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.ISingleLineResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SingleLineResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SingleLineResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.SingleLineResponse;

                /**
                 * Decodes a SingleLineResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SingleLineResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.SingleLineResponse;

                /**
                 * Verifies a SingleLineResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SingleLineResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SingleLineResponse
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.SingleLineResponse;

                /**
                 * Creates a plain object from a SingleLineResponse message. Also converts values to other types if specified.
                 * @param message SingleLineResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.SingleLineResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SingleLineResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SingleLineResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MultipleLineResponse. */
            interface IMultipleLineResponse {

                /** MultipleLineResponse lines */
                lines?: (app.trainlcd.grpc.ILine[]|null);
            }

            /** Represents a MultipleLineResponse. */
            class MultipleLineResponse implements IMultipleLineResponse {

                /**
                 * Constructs a new MultipleLineResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.IMultipleLineResponse);

                /** MultipleLineResponse lines. */
                public lines: app.trainlcd.grpc.ILine[];

                /**
                 * Creates a new MultipleLineResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MultipleLineResponse instance
                 */
                public static create(properties?: app.trainlcd.grpc.IMultipleLineResponse): app.trainlcd.grpc.MultipleLineResponse;

                /**
                 * Encodes the specified MultipleLineResponse message. Does not implicitly {@link app.trainlcd.grpc.MultipleLineResponse.verify|verify} messages.
                 * @param message MultipleLineResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.IMultipleLineResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MultipleLineResponse message, length delimited. Does not implicitly {@link app.trainlcd.grpc.MultipleLineResponse.verify|verify} messages.
                 * @param message MultipleLineResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.IMultipleLineResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MultipleLineResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MultipleLineResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.MultipleLineResponse;

                /**
                 * Decodes a MultipleLineResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MultipleLineResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.MultipleLineResponse;

                /**
                 * Verifies a MultipleLineResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MultipleLineResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MultipleLineResponse
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.MultipleLineResponse;

                /**
                 * Creates a plain object from a MultipleLineResponse message. Also converts values to other types if specified.
                 * @param message MultipleLineResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.MultipleLineResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MultipleLineResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MultipleLineResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** DistanceResponseState enum. */
            enum DistanceResponseState {
                Away = 0,
                Arrived = 1,
                Approaching = 2
            }

            /** Properties of a DistanceResponse. */
            interface IDistanceResponse {

                /** DistanceResponse stationId */
                stationId?: (number|null);

                /** DistanceResponse distance */
                distance?: (number|null);

                /** DistanceResponse state */
                state?: (app.trainlcd.grpc.DistanceResponseState|null);
            }

            /** Represents a DistanceResponse. */
            class DistanceResponse implements IDistanceResponse {

                /**
                 * Constructs a new DistanceResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.IDistanceResponse);

                /** DistanceResponse stationId. */
                public stationId: number;

                /** DistanceResponse distance. */
                public distance: number;

                /** DistanceResponse state. */
                public state: app.trainlcd.grpc.DistanceResponseState;

                /**
                 * Creates a new DistanceResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DistanceResponse instance
                 */
                public static create(properties?: app.trainlcd.grpc.IDistanceResponse): app.trainlcd.grpc.DistanceResponse;

                /**
                 * Encodes the specified DistanceResponse message. Does not implicitly {@link app.trainlcd.grpc.DistanceResponse.verify|verify} messages.
                 * @param message DistanceResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.IDistanceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DistanceResponse message, length delimited. Does not implicitly {@link app.trainlcd.grpc.DistanceResponse.verify|verify} messages.
                 * @param message DistanceResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.IDistanceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DistanceResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DistanceResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.DistanceResponse;

                /**
                 * Decodes a DistanceResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DistanceResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.DistanceResponse;

                /**
                 * Verifies a DistanceResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DistanceResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DistanceResponse
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.DistanceResponse;

                /**
                 * Creates a plain object from a DistanceResponse message. Also converts values to other types if specified.
                 * @param message DistanceResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.DistanceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DistanceResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DistanceResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RouteResponse. */
            interface IRouteResponse {

                /** RouteResponse routes */
                routes?: (app.trainlcd.grpc.IRoute[]|null);

                /** RouteResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a RouteResponse. */
            class RouteResponse implements IRouteResponse {

                /**
                 * Constructs a new RouteResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.IRouteResponse);

                /** RouteResponse routes. */
                public routes: app.trainlcd.grpc.IRoute[];

                /** RouteResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new RouteResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RouteResponse instance
                 */
                public static create(properties?: app.trainlcd.grpc.IRouteResponse): app.trainlcd.grpc.RouteResponse;

                /**
                 * Encodes the specified RouteResponse message. Does not implicitly {@link app.trainlcd.grpc.RouteResponse.verify|verify} messages.
                 * @param message RouteResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.IRouteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RouteResponse message, length delimited. Does not implicitly {@link app.trainlcd.grpc.RouteResponse.verify|verify} messages.
                 * @param message RouteResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.IRouteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RouteResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RouteResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.RouteResponse;

                /**
                 * Decodes a RouteResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RouteResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.RouteResponse;

                /**
                 * Verifies a RouteResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RouteResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RouteResponse
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.RouteResponse;

                /**
                 * Creates a plain object from a RouteResponse message. Also converts values to other types if specified.
                 * @param message RouteResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.RouteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RouteResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RouteResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RouteTypeResponse. */
            interface IRouteTypeResponse {

                /** RouteTypeResponse trainTypes */
                trainTypes?: (app.trainlcd.grpc.ITrainType[]|null);

                /** RouteTypeResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a RouteTypeResponse. */
            class RouteTypeResponse implements IRouteTypeResponse {

                /**
                 * Constructs a new RouteTypeResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.IRouteTypeResponse);

                /** RouteTypeResponse trainTypes. */
                public trainTypes: app.trainlcd.grpc.ITrainType[];

                /** RouteTypeResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new RouteTypeResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RouteTypeResponse instance
                 */
                public static create(properties?: app.trainlcd.grpc.IRouteTypeResponse): app.trainlcd.grpc.RouteTypeResponse;

                /**
                 * Encodes the specified RouteTypeResponse message. Does not implicitly {@link app.trainlcd.grpc.RouteTypeResponse.verify|verify} messages.
                 * @param message RouteTypeResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.IRouteTypeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RouteTypeResponse message, length delimited. Does not implicitly {@link app.trainlcd.grpc.RouteTypeResponse.verify|verify} messages.
                 * @param message RouteTypeResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.IRouteTypeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RouteTypeResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RouteTypeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.RouteTypeResponse;

                /**
                 * Decodes a RouteTypeResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RouteTypeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.RouteTypeResponse;

                /**
                 * Verifies a RouteTypeResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RouteTypeResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RouteTypeResponse
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.RouteTypeResponse;

                /**
                 * Creates a plain object from a RouteTypeResponse message. Also converts values to other types if specified.
                 * @param message RouteTypeResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.RouteTypeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RouteTypeResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RouteTypeResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** LineType enum. */
            enum LineType {
                OtherLineType = 0,
                BulletTrain = 1,
                Normal = 2,
                Subway = 3,
                Tram = 4,
                MonorailOrAGT = 5
            }

            /** Properties of a LineSymbol. */
            interface ILineSymbol {

                /** LineSymbol symbol */
                symbol?: (string|null);

                /** LineSymbol color */
                color?: (string|null);

                /** LineSymbol shape */
                shape?: (string|null);
            }

            /** Represents a LineSymbol. */
            class LineSymbol implements ILineSymbol {

                /**
                 * Constructs a new LineSymbol.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.ILineSymbol);

                /** LineSymbol symbol. */
                public symbol: string;

                /** LineSymbol color. */
                public color: string;

                /** LineSymbol shape. */
                public shape: string;

                /**
                 * Creates a new LineSymbol instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LineSymbol instance
                 */
                public static create(properties?: app.trainlcd.grpc.ILineSymbol): app.trainlcd.grpc.LineSymbol;

                /**
                 * Encodes the specified LineSymbol message. Does not implicitly {@link app.trainlcd.grpc.LineSymbol.verify|verify} messages.
                 * @param message LineSymbol message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.ILineSymbol, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LineSymbol message, length delimited. Does not implicitly {@link app.trainlcd.grpc.LineSymbol.verify|verify} messages.
                 * @param message LineSymbol message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.ILineSymbol, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LineSymbol message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LineSymbol
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.LineSymbol;

                /**
                 * Decodes a LineSymbol message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LineSymbol
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.LineSymbol;

                /**
                 * Verifies a LineSymbol message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LineSymbol message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LineSymbol
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.LineSymbol;

                /**
                 * Creates a plain object from a LineSymbol message. Also converts values to other types if specified.
                 * @param message LineSymbol
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.LineSymbol, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LineSymbol to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LineSymbol
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** CompanyType enum. */
            enum CompanyType {
                OtherCompany = 0,
                JR = 1,
                Private = 2,
                Major = 3,
                SemiMajor = 4
            }

            /** Properties of a Company. */
            interface ICompany {

                /** Company id */
                id?: (number|null);

                /** Company railroadId */
                railroadId?: (number|null);

                /** Company nameShort */
                nameShort?: (string|null);

                /** Company nameKatakana */
                nameKatakana?: (string|null);

                /** Company nameFull */
                nameFull?: (string|null);

                /** Company nameEnglishShort */
                nameEnglishShort?: (string|null);

                /** Company nameEnglishFull */
                nameEnglishFull?: (string|null);

                /** Company url */
                url?: (string|null);

                /** Company type */
                type?: (app.trainlcd.grpc.CompanyType|null);

                /** Company status */
                status?: (app.trainlcd.grpc.OperationStatus|null);

                /** Company name */
                name?: (string|null);
            }

            /** Represents a Company. */
            class Company implements ICompany {

                /**
                 * Constructs a new Company.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.ICompany);

                /** Company id. */
                public id: number;

                /** Company railroadId. */
                public railroadId: number;

                /** Company nameShort. */
                public nameShort: string;

                /** Company nameKatakana. */
                public nameKatakana: string;

                /** Company nameFull. */
                public nameFull: string;

                /** Company nameEnglishShort. */
                public nameEnglishShort: string;

                /** Company nameEnglishFull. */
                public nameEnglishFull: string;

                /** Company url. */
                public url?: (string|null);

                /** Company type. */
                public type: app.trainlcd.grpc.CompanyType;

                /** Company status. */
                public status: app.trainlcd.grpc.OperationStatus;

                /** Company name. */
                public name: string;

                /** Company _url. */
                public _url?: "url";

                /**
                 * Creates a new Company instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Company instance
                 */
                public static create(properties?: app.trainlcd.grpc.ICompany): app.trainlcd.grpc.Company;

                /**
                 * Encodes the specified Company message. Does not implicitly {@link app.trainlcd.grpc.Company.verify|verify} messages.
                 * @param message Company message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.ICompany, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Company message, length delimited. Does not implicitly {@link app.trainlcd.grpc.Company.verify|verify} messages.
                 * @param message Company message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.ICompany, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Company message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Company
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.Company;

                /**
                 * Decodes a Company message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Company
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.Company;

                /**
                 * Verifies a Company message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Company message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Company
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.Company;

                /**
                 * Creates a plain object from a Company message. Also converts values to other types if specified.
                 * @param message Company
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.Company, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Company to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Company
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Line. */
            interface ILine {

                /** Line id */
                id?: (number|null);

                /** Line nameShort */
                nameShort?: (string|null);

                /** Line nameKatakana */
                nameKatakana?: (string|null);

                /** Line nameFull */
                nameFull?: (string|null);

                /** Line nameRoman */
                nameRoman?: (string|null);

                /** Line nameChinese */
                nameChinese?: (string|null);

                /** Line nameKorean */
                nameKorean?: (string|null);

                /** Line color */
                color?: (string|null);

                /** Line lineType */
                lineType?: (app.trainlcd.grpc.LineType|null);

                /** Line lineSymbols */
                lineSymbols?: (app.trainlcd.grpc.ILineSymbol[]|null);

                /** Line status */
                status?: (app.trainlcd.grpc.OperationStatus|null);

                /** Line station */
                station?: (app.trainlcd.grpc.IStation|null);

                /** Line company */
                company?: (app.trainlcd.grpc.ICompany|null);

                /** Line trainType */
                trainType?: (app.trainlcd.grpc.ITrainType|null);

                /** Line averageDistance */
                averageDistance?: (number|null);

                /** Line transportType */
                transportType?: (app.trainlcd.grpc.TransportType|null);
            }

            /** Represents a Line. */
            class Line implements ILine {

                /**
                 * Constructs a new Line.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.ILine);

                /** Line id. */
                public id: number;

                /** Line nameShort. */
                public nameShort: string;

                /** Line nameKatakana. */
                public nameKatakana: string;

                /** Line nameFull. */
                public nameFull: string;

                /** Line nameRoman. */
                public nameRoman?: (string|null);

                /** Line nameChinese. */
                public nameChinese?: (string|null);

                /** Line nameKorean. */
                public nameKorean?: (string|null);

                /** Line color. */
                public color: string;

                /** Line lineType. */
                public lineType: app.trainlcd.grpc.LineType;

                /** Line lineSymbols. */
                public lineSymbols: app.trainlcd.grpc.ILineSymbol[];

                /** Line status. */
                public status: app.trainlcd.grpc.OperationStatus;

                /** Line station. */
                public station?: (app.trainlcd.grpc.IStation|null);

                /** Line company. */
                public company?: (app.trainlcd.grpc.ICompany|null);

                /** Line trainType. */
                public trainType?: (app.trainlcd.grpc.ITrainType|null);

                /** Line averageDistance. */
                public averageDistance: number;

                /** Line transportType. */
                public transportType: app.trainlcd.grpc.TransportType;

                /** Line _nameRoman. */
                public _nameRoman?: "nameRoman";

                /** Line _nameChinese. */
                public _nameChinese?: "nameChinese";

                /** Line _nameKorean. */
                public _nameKorean?: "nameKorean";

                /** Line _station. */
                public _station?: "station";

                /** Line _company. */
                public _company?: "company";

                /** Line _trainType. */
                public _trainType?: "trainType";

                /**
                 * Creates a new Line instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Line instance
                 */
                public static create(properties?: app.trainlcd.grpc.ILine): app.trainlcd.grpc.Line;

                /**
                 * Encodes the specified Line message. Does not implicitly {@link app.trainlcd.grpc.Line.verify|verify} messages.
                 * @param message Line message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.ILine, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Line message, length delimited. Does not implicitly {@link app.trainlcd.grpc.Line.verify|verify} messages.
                 * @param message Line message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.ILine, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Line message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Line
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.Line;

                /**
                 * Decodes a Line message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Line
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.Line;

                /**
                 * Verifies a Line message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Line message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Line
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.Line;

                /**
                 * Creates a plain object from a Line message. Also converts values to other types if specified.
                 * @param message Line
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.Line, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Line to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Line
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SingleLine. */
            interface ISingleLine {

                /** SingleLine line */
                line?: (app.trainlcd.grpc.ILine|null);
            }

            /** Represents a SingleLine. */
            class SingleLine implements ISingleLine {

                /**
                 * Constructs a new SingleLine.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.ISingleLine);

                /** SingleLine line. */
                public line?: (app.trainlcd.grpc.ILine|null);

                /**
                 * Creates a new SingleLine instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SingleLine instance
                 */
                public static create(properties?: app.trainlcd.grpc.ISingleLine): app.trainlcd.grpc.SingleLine;

                /**
                 * Encodes the specified SingleLine message. Does not implicitly {@link app.trainlcd.grpc.SingleLine.verify|verify} messages.
                 * @param message SingleLine message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.ISingleLine, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SingleLine message, length delimited. Does not implicitly {@link app.trainlcd.grpc.SingleLine.verify|verify} messages.
                 * @param message SingleLine message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.ISingleLine, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SingleLine message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SingleLine
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.SingleLine;

                /**
                 * Decodes a SingleLine message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SingleLine
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.SingleLine;

                /**
                 * Verifies a SingleLine message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SingleLine message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SingleLine
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.SingleLine;

                /**
                 * Creates a plain object from a SingleLine message. Also converts values to other types if specified.
                 * @param message SingleLine
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.SingleLine, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SingleLine to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SingleLine
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MultipleLine. */
            interface IMultipleLine {

                /** MultipleLine lines */
                lines?: (app.trainlcd.grpc.ILine[]|null);
            }

            /** Represents a MultipleLine. */
            class MultipleLine implements IMultipleLine {

                /**
                 * Constructs a new MultipleLine.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.IMultipleLine);

                /** MultipleLine lines. */
                public lines: app.trainlcd.grpc.ILine[];

                /**
                 * Creates a new MultipleLine instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MultipleLine instance
                 */
                public static create(properties?: app.trainlcd.grpc.IMultipleLine): app.trainlcd.grpc.MultipleLine;

                /**
                 * Encodes the specified MultipleLine message. Does not implicitly {@link app.trainlcd.grpc.MultipleLine.verify|verify} messages.
                 * @param message MultipleLine message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.IMultipleLine, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MultipleLine message, length delimited. Does not implicitly {@link app.trainlcd.grpc.MultipleLine.verify|verify} messages.
                 * @param message MultipleLine message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.IMultipleLine, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MultipleLine message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MultipleLine
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.MultipleLine;

                /**
                 * Decodes a MultipleLine message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MultipleLine
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.MultipleLine;

                /**
                 * Verifies a MultipleLine message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MultipleLine message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MultipleLine
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.MultipleLine;

                /**
                 * Creates a plain object from a MultipleLine message. Also converts values to other types if specified.
                 * @param message MultipleLine
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.MultipleLine, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MultipleLine to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MultipleLine
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Route. */
            interface IRoute {

                /** Route id */
                id?: (number|null);

                /** Route stops */
                stops?: (app.trainlcd.grpc.IStation[]|null);
            }

            /** Represents a Route. */
            class Route implements IRoute {

                /**
                 * Constructs a new Route.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.IRoute);

                /** Route id. */
                public id: number;

                /** Route stops. */
                public stops: app.trainlcd.grpc.IStation[];

                /**
                 * Creates a new Route instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Route instance
                 */
                public static create(properties?: app.trainlcd.grpc.IRoute): app.trainlcd.grpc.Route;

                /**
                 * Encodes the specified Route message. Does not implicitly {@link app.trainlcd.grpc.Route.verify|verify} messages.
                 * @param message Route message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.IRoute, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Route message, length delimited. Does not implicitly {@link app.trainlcd.grpc.Route.verify|verify} messages.
                 * @param message Route message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.IRoute, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Route message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Route
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.Route;

                /**
                 * Decodes a Route message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Route
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.Route;

                /**
                 * Verifies a Route message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Route message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Route
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.Route;

                /**
                 * Creates a plain object from a Route message. Also converts values to other types if specified.
                 * @param message Route
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.Route, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Route to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Route
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a StationMinimal. */
            interface IStationMinimal {

                /** StationMinimal id */
                id?: (number|null);

                /** StationMinimal groupId */
                groupId?: (number|null);

                /** StationMinimal name */
                name?: (string|null);

                /** StationMinimal nameKatakana */
                nameKatakana?: (string|null);

                /** StationMinimal nameRoman */
                nameRoman?: (string|null);

                /** StationMinimal lineIds */
                lineIds?: (number[]|null);

                /** StationMinimal stationNumbers */
                stationNumbers?: (app.trainlcd.grpc.IStationNumber[]|null);

                /** StationMinimal stopCondition */
                stopCondition?: (app.trainlcd.grpc.StopCondition|null);

                /** StationMinimal hasTrainTypes */
                hasTrainTypes?: (boolean|null);

                /** StationMinimal trainTypeId */
                trainTypeId?: (number|null);
            }

            /** Represents a StationMinimal. */
            class StationMinimal implements IStationMinimal {

                /**
                 * Constructs a new StationMinimal.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.IStationMinimal);

                /** StationMinimal id. */
                public id: number;

                /** StationMinimal groupId. */
                public groupId: number;

                /** StationMinimal name. */
                public name: string;

                /** StationMinimal nameKatakana. */
                public nameKatakana: string;

                /** StationMinimal nameRoman. */
                public nameRoman?: (string|null);

                /** StationMinimal lineIds. */
                public lineIds: number[];

                /** StationMinimal stationNumbers. */
                public stationNumbers: app.trainlcd.grpc.IStationNumber[];

                /** StationMinimal stopCondition. */
                public stopCondition: app.trainlcd.grpc.StopCondition;

                /** StationMinimal hasTrainTypes. */
                public hasTrainTypes?: (boolean|null);

                /** StationMinimal trainTypeId. */
                public trainTypeId?: (number|null);

                /** StationMinimal _nameRoman. */
                public _nameRoman?: "nameRoman";

                /** StationMinimal _hasTrainTypes. */
                public _hasTrainTypes?: "hasTrainTypes";

                /** StationMinimal _trainTypeId. */
                public _trainTypeId?: "trainTypeId";

                /**
                 * Creates a new StationMinimal instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StationMinimal instance
                 */
                public static create(properties?: app.trainlcd.grpc.IStationMinimal): app.trainlcd.grpc.StationMinimal;

                /**
                 * Encodes the specified StationMinimal message. Does not implicitly {@link app.trainlcd.grpc.StationMinimal.verify|verify} messages.
                 * @param message StationMinimal message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.IStationMinimal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StationMinimal message, length delimited. Does not implicitly {@link app.trainlcd.grpc.StationMinimal.verify|verify} messages.
                 * @param message StationMinimal message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.IStationMinimal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StationMinimal message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StationMinimal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.StationMinimal;

                /**
                 * Decodes a StationMinimal message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StationMinimal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.StationMinimal;

                /**
                 * Verifies a StationMinimal message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StationMinimal message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StationMinimal
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.StationMinimal;

                /**
                 * Creates a plain object from a StationMinimal message. Also converts values to other types if specified.
                 * @param message StationMinimal
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.StationMinimal, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StationMinimal to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for StationMinimal
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a LineMinimal. */
            interface ILineMinimal {

                /** LineMinimal id */
                id?: (number|null);

                /** LineMinimal nameShort */
                nameShort?: (string|null);

                /** LineMinimal color */
                color?: (string|null);

                /** LineMinimal lineType */
                lineType?: (app.trainlcd.grpc.LineType|null);

                /** LineMinimal lineSymbols */
                lineSymbols?: (app.trainlcd.grpc.ILineSymbol[]|null);
            }

            /** Represents a LineMinimal. */
            class LineMinimal implements ILineMinimal {

                /**
                 * Constructs a new LineMinimal.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.ILineMinimal);

                /** LineMinimal id. */
                public id: number;

                /** LineMinimal nameShort. */
                public nameShort: string;

                /** LineMinimal color. */
                public color: string;

                /** LineMinimal lineType. */
                public lineType: app.trainlcd.grpc.LineType;

                /** LineMinimal lineSymbols. */
                public lineSymbols: app.trainlcd.grpc.ILineSymbol[];

                /**
                 * Creates a new LineMinimal instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LineMinimal instance
                 */
                public static create(properties?: app.trainlcd.grpc.ILineMinimal): app.trainlcd.grpc.LineMinimal;

                /**
                 * Encodes the specified LineMinimal message. Does not implicitly {@link app.trainlcd.grpc.LineMinimal.verify|verify} messages.
                 * @param message LineMinimal message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.ILineMinimal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LineMinimal message, length delimited. Does not implicitly {@link app.trainlcd.grpc.LineMinimal.verify|verify} messages.
                 * @param message LineMinimal message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.ILineMinimal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LineMinimal message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LineMinimal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.LineMinimal;

                /**
                 * Decodes a LineMinimal message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LineMinimal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.LineMinimal;

                /**
                 * Verifies a LineMinimal message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LineMinimal message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LineMinimal
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.LineMinimal;

                /**
                 * Creates a plain object from a LineMinimal message. Also converts values to other types if specified.
                 * @param message LineMinimal
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.LineMinimal, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LineMinimal to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LineMinimal
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RouteMinimal. */
            interface IRouteMinimal {

                /** RouteMinimal id */
                id?: (number|null);

                /** RouteMinimal stops */
                stops?: (app.trainlcd.grpc.IStationMinimal[]|null);
            }

            /** Represents a RouteMinimal. */
            class RouteMinimal implements IRouteMinimal {

                /**
                 * Constructs a new RouteMinimal.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.IRouteMinimal);

                /** RouteMinimal id. */
                public id: number;

                /** RouteMinimal stops. */
                public stops: app.trainlcd.grpc.IStationMinimal[];

                /**
                 * Creates a new RouteMinimal instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RouteMinimal instance
                 */
                public static create(properties?: app.trainlcd.grpc.IRouteMinimal): app.trainlcd.grpc.RouteMinimal;

                /**
                 * Encodes the specified RouteMinimal message. Does not implicitly {@link app.trainlcd.grpc.RouteMinimal.verify|verify} messages.
                 * @param message RouteMinimal message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.IRouteMinimal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RouteMinimal message, length delimited. Does not implicitly {@link app.trainlcd.grpc.RouteMinimal.verify|verify} messages.
                 * @param message RouteMinimal message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.IRouteMinimal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RouteMinimal message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RouteMinimal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.RouteMinimal;

                /**
                 * Decodes a RouteMinimal message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RouteMinimal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.RouteMinimal;

                /**
                 * Verifies a RouteMinimal message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RouteMinimal message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RouteMinimal
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.RouteMinimal;

                /**
                 * Creates a plain object from a RouteMinimal message. Also converts values to other types if specified.
                 * @param message RouteMinimal
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.RouteMinimal, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RouteMinimal to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RouteMinimal
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RouteMinimalResponse. */
            interface IRouteMinimalResponse {

                /** RouteMinimalResponse routes */
                routes?: (app.trainlcd.grpc.IRouteMinimal[]|null);

                /** RouteMinimalResponse lines */
                lines?: (app.trainlcd.grpc.ILineMinimal[]|null);

                /** RouteMinimalResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a RouteMinimalResponse. */
            class RouteMinimalResponse implements IRouteMinimalResponse {

                /**
                 * Constructs a new RouteMinimalResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: app.trainlcd.grpc.IRouteMinimalResponse);

                /** RouteMinimalResponse routes. */
                public routes: app.trainlcd.grpc.IRouteMinimal[];

                /** RouteMinimalResponse lines. */
                public lines: app.trainlcd.grpc.ILineMinimal[];

                /** RouteMinimalResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new RouteMinimalResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RouteMinimalResponse instance
                 */
                public static create(properties?: app.trainlcd.grpc.IRouteMinimalResponse): app.trainlcd.grpc.RouteMinimalResponse;

                /**
                 * Encodes the specified RouteMinimalResponse message. Does not implicitly {@link app.trainlcd.grpc.RouteMinimalResponse.verify|verify} messages.
                 * @param message RouteMinimalResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: app.trainlcd.grpc.IRouteMinimalResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RouteMinimalResponse message, length delimited. Does not implicitly {@link app.trainlcd.grpc.RouteMinimalResponse.verify|verify} messages.
                 * @param message RouteMinimalResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: app.trainlcd.grpc.IRouteMinimalResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RouteMinimalResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RouteMinimalResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.trainlcd.grpc.RouteMinimalResponse;

                /**
                 * Decodes a RouteMinimalResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RouteMinimalResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.trainlcd.grpc.RouteMinimalResponse;

                /**
                 * Verifies a RouteMinimalResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RouteMinimalResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RouteMinimalResponse
                 */
                public static fromObject(object: { [k: string]: any }): app.trainlcd.grpc.RouteMinimalResponse;

                /**
                 * Creates a plain object from a RouteMinimalResponse message. Also converts values to other types if specified.
                 * @param message RouteMinimalResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: app.trainlcd.grpc.RouteMinimalResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RouteMinimalResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RouteMinimalResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }
}
