/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const app = $root.app = (() => {

    /**
     * Namespace app.
     * @exports app
     * @namespace
     */
    const app = {};

    app.trainlcd = (function() {

        /**
         * Namespace trainlcd.
         * @memberof app
         * @namespace
         */
        const trainlcd = {};

        trainlcd.grpc = (function() {

            /**
             * Namespace grpc.
             * @memberof app.trainlcd
             * @namespace
             */
            const grpc = {};

            grpc.StationAPI = (function() {

                /**
                 * Constructs a new StationAPI service.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a StationAPI
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function StationAPI(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (StationAPI.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = StationAPI;

                /**
                 * Creates new StationAPI service using the specified rpc implementation.
                 * @function create
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {StationAPI} RPC service. Useful where requests and/or responses are streamed.
                 */
                StationAPI.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getStationById}.
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @typedef GetStationByIdCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {app.trainlcd.grpc.SingleStationResponse} [response] SingleStationResponse
                 */

                /**
                 * Calls GetStationById.
                 * @function getStationById
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetStationByIdRequest} request GetStationByIdRequest message or plain object
                 * @param {app.trainlcd.grpc.StationAPI.GetStationByIdCallback} callback Node-style callback called with the error, if any, and SingleStationResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(StationAPI.prototype.getStationById = function getStationById(request, callback) {
                    return this.rpcCall(getStationById, $root.app.trainlcd.grpc.GetStationByIdRequest, $root.app.trainlcd.grpc.SingleStationResponse, request, callback);
                }, "name", { value: "GetStationById" });

                /**
                 * Calls GetStationById.
                 * @function getStationById
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetStationByIdRequest} request GetStationByIdRequest message or plain object
                 * @returns {Promise<app.trainlcd.grpc.SingleStationResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getStationByIdList}.
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @typedef GetStationByIdListCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {app.trainlcd.grpc.MultipleStationResponse} [response] MultipleStationResponse
                 */

                /**
                 * Calls GetStationByIdList.
                 * @function getStationByIdList
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetStationByIdListRequest} request GetStationByIdListRequest message or plain object
                 * @param {app.trainlcd.grpc.StationAPI.GetStationByIdListCallback} callback Node-style callback called with the error, if any, and MultipleStationResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(StationAPI.prototype.getStationByIdList = function getStationByIdList(request, callback) {
                    return this.rpcCall(getStationByIdList, $root.app.trainlcd.grpc.GetStationByIdListRequest, $root.app.trainlcd.grpc.MultipleStationResponse, request, callback);
                }, "name", { value: "GetStationByIdList" });

                /**
                 * Calls GetStationByIdList.
                 * @function getStationByIdList
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetStationByIdListRequest} request GetStationByIdListRequest message or plain object
                 * @returns {Promise<app.trainlcd.grpc.MultipleStationResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getStationsByGroupId}.
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @typedef GetStationsByGroupIdCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {app.trainlcd.grpc.MultipleStationResponse} [response] MultipleStationResponse
                 */

                /**
                 * Calls GetStationsByGroupId.
                 * @function getStationsByGroupId
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetStationByGroupIdRequest} request GetStationByGroupIdRequest message or plain object
                 * @param {app.trainlcd.grpc.StationAPI.GetStationsByGroupIdCallback} callback Node-style callback called with the error, if any, and MultipleStationResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(StationAPI.prototype.getStationsByGroupId = function getStationsByGroupId(request, callback) {
                    return this.rpcCall(getStationsByGroupId, $root.app.trainlcd.grpc.GetStationByGroupIdRequest, $root.app.trainlcd.grpc.MultipleStationResponse, request, callback);
                }, "name", { value: "GetStationsByGroupId" });

                /**
                 * Calls GetStationsByGroupId.
                 * @function getStationsByGroupId
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetStationByGroupIdRequest} request GetStationByGroupIdRequest message or plain object
                 * @returns {Promise<app.trainlcd.grpc.MultipleStationResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getStationsByCoordinates}.
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @typedef GetStationsByCoordinatesCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {app.trainlcd.grpc.MultipleStationResponse} [response] MultipleStationResponse
                 */

                /**
                 * Calls GetStationsByCoordinates.
                 * @function getStationsByCoordinates
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetStationByCoordinatesRequest} request GetStationByCoordinatesRequest message or plain object
                 * @param {app.trainlcd.grpc.StationAPI.GetStationsByCoordinatesCallback} callback Node-style callback called with the error, if any, and MultipleStationResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(StationAPI.prototype.getStationsByCoordinates = function getStationsByCoordinates(request, callback) {
                    return this.rpcCall(getStationsByCoordinates, $root.app.trainlcd.grpc.GetStationByCoordinatesRequest, $root.app.trainlcd.grpc.MultipleStationResponse, request, callback);
                }, "name", { value: "GetStationsByCoordinates" });

                /**
                 * Calls GetStationsByCoordinates.
                 * @function getStationsByCoordinates
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetStationByCoordinatesRequest} request GetStationByCoordinatesRequest message or plain object
                 * @returns {Promise<app.trainlcd.grpc.MultipleStationResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getStationsByLineId}.
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @typedef GetStationsByLineIdCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {app.trainlcd.grpc.MultipleStationResponse} [response] MultipleStationResponse
                 */

                /**
                 * Calls GetStationsByLineId.
                 * @function getStationsByLineId
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetStationByLineIdRequest} request GetStationByLineIdRequest message or plain object
                 * @param {app.trainlcd.grpc.StationAPI.GetStationsByLineIdCallback} callback Node-style callback called with the error, if any, and MultipleStationResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(StationAPI.prototype.getStationsByLineId = function getStationsByLineId(request, callback) {
                    return this.rpcCall(getStationsByLineId, $root.app.trainlcd.grpc.GetStationByLineIdRequest, $root.app.trainlcd.grpc.MultipleStationResponse, request, callback);
                }, "name", { value: "GetStationsByLineId" });

                /**
                 * Calls GetStationsByLineId.
                 * @function getStationsByLineId
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetStationByLineIdRequest} request GetStationByLineIdRequest message or plain object
                 * @returns {Promise<app.trainlcd.grpc.MultipleStationResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getStationsByName}.
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @typedef GetStationsByNameCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {app.trainlcd.grpc.MultipleStationResponse} [response] MultipleStationResponse
                 */

                /**
                 * Calls GetStationsByName.
                 * @function getStationsByName
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetStationsByNameRequest} request GetStationsByNameRequest message or plain object
                 * @param {app.trainlcd.grpc.StationAPI.GetStationsByNameCallback} callback Node-style callback called with the error, if any, and MultipleStationResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(StationAPI.prototype.getStationsByName = function getStationsByName(request, callback) {
                    return this.rpcCall(getStationsByName, $root.app.trainlcd.grpc.GetStationsByNameRequest, $root.app.trainlcd.grpc.MultipleStationResponse, request, callback);
                }, "name", { value: "GetStationsByName" });

                /**
                 * Calls GetStationsByName.
                 * @function getStationsByName
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetStationsByNameRequest} request GetStationsByNameRequest message or plain object
                 * @returns {Promise<app.trainlcd.grpc.MultipleStationResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getStationsByLineGroupId}.
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @typedef GetStationsByLineGroupIdCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {app.trainlcd.grpc.MultipleStationResponse} [response] MultipleStationResponse
                 */

                /**
                 * Calls GetStationsByLineGroupId.
                 * @function getStationsByLineGroupId
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetStationsByLineGroupIdRequest} request GetStationsByLineGroupIdRequest message or plain object
                 * @param {app.trainlcd.grpc.StationAPI.GetStationsByLineGroupIdCallback} callback Node-style callback called with the error, if any, and MultipleStationResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(StationAPI.prototype.getStationsByLineGroupId = function getStationsByLineGroupId(request, callback) {
                    return this.rpcCall(getStationsByLineGroupId, $root.app.trainlcd.grpc.GetStationsByLineGroupIdRequest, $root.app.trainlcd.grpc.MultipleStationResponse, request, callback);
                }, "name", { value: "GetStationsByLineGroupId" });

                /**
                 * Calls GetStationsByLineGroupId.
                 * @function getStationsByLineGroupId
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetStationsByLineGroupIdRequest} request GetStationsByLineGroupIdRequest message or plain object
                 * @returns {Promise<app.trainlcd.grpc.MultipleStationResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getTrainTypesByStationId}.
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @typedef GetTrainTypesByStationIdCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {app.trainlcd.grpc.MultipleTrainTypeResponse} [response] MultipleTrainTypeResponse
                 */

                /**
                 * Calls GetTrainTypesByStationId.
                 * @function getTrainTypesByStationId
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetTrainTypesByStationIdRequest} request GetTrainTypesByStationIdRequest message or plain object
                 * @param {app.trainlcd.grpc.StationAPI.GetTrainTypesByStationIdCallback} callback Node-style callback called with the error, if any, and MultipleTrainTypeResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(StationAPI.prototype.getTrainTypesByStationId = function getTrainTypesByStationId(request, callback) {
                    return this.rpcCall(getTrainTypesByStationId, $root.app.trainlcd.grpc.GetTrainTypesByStationIdRequest, $root.app.trainlcd.grpc.MultipleTrainTypeResponse, request, callback);
                }, "name", { value: "GetTrainTypesByStationId" });

                /**
                 * Calls GetTrainTypesByStationId.
                 * @function getTrainTypesByStationId
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetTrainTypesByStationIdRequest} request GetTrainTypesByStationIdRequest message or plain object
                 * @returns {Promise<app.trainlcd.grpc.MultipleTrainTypeResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getRoutes}.
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @typedef GetRoutesCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {app.trainlcd.grpc.RouteResponse} [response] RouteResponse
                 */

                /**
                 * Calls GetRoutes.
                 * @function getRoutes
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetRouteRequest} request GetRouteRequest message or plain object
                 * @param {app.trainlcd.grpc.StationAPI.GetRoutesCallback} callback Node-style callback called with the error, if any, and RouteResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(StationAPI.prototype.getRoutes = function getRoutes(request, callback) {
                    return this.rpcCall(getRoutes, $root.app.trainlcd.grpc.GetRouteRequest, $root.app.trainlcd.grpc.RouteResponse, request, callback);
                }, "name", { value: "GetRoutes" });

                /**
                 * Calls GetRoutes.
                 * @function getRoutes
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetRouteRequest} request GetRouteRequest message or plain object
                 * @returns {Promise<app.trainlcd.grpc.RouteResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getRoutesMinimal}.
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @typedef GetRoutesMinimalCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {app.trainlcd.grpc.RouteMinimalResponse} [response] RouteMinimalResponse
                 */

                /**
                 * Calls GetRoutesMinimal.
                 * @function getRoutesMinimal
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetRouteRequest} request GetRouteRequest message or plain object
                 * @param {app.trainlcd.grpc.StationAPI.GetRoutesMinimalCallback} callback Node-style callback called with the error, if any, and RouteMinimalResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(StationAPI.prototype.getRoutesMinimal = function getRoutesMinimal(request, callback) {
                    return this.rpcCall(getRoutesMinimal, $root.app.trainlcd.grpc.GetRouteRequest, $root.app.trainlcd.grpc.RouteMinimalResponse, request, callback);
                }, "name", { value: "GetRoutesMinimal" });

                /**
                 * Calls GetRoutesMinimal.
                 * @function getRoutesMinimal
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetRouteRequest} request GetRouteRequest message or plain object
                 * @returns {Promise<app.trainlcd.grpc.RouteMinimalResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getLineById}.
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @typedef GetLineByIdCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {app.trainlcd.grpc.SingleLineResponse} [response] SingleLineResponse
                 */

                /**
                 * Calls GetLineById.
                 * @function getLineById
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetLineByIdRequest} request GetLineByIdRequest message or plain object
                 * @param {app.trainlcd.grpc.StationAPI.GetLineByIdCallback} callback Node-style callback called with the error, if any, and SingleLineResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(StationAPI.prototype.getLineById = function getLineById(request, callback) {
                    return this.rpcCall(getLineById, $root.app.trainlcd.grpc.GetLineByIdRequest, $root.app.trainlcd.grpc.SingleLineResponse, request, callback);
                }, "name", { value: "GetLineById" });

                /**
                 * Calls GetLineById.
                 * @function getLineById
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetLineByIdRequest} request GetLineByIdRequest message or plain object
                 * @returns {Promise<app.trainlcd.grpc.SingleLineResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getLineByIdList}.
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @typedef GetLineByIdListCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {app.trainlcd.grpc.MultipleLineResponse} [response] MultipleLineResponse
                 */

                /**
                 * Calls GetLineByIdList.
                 * @function getLineByIdList
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetLineByIdListRequest} request GetLineByIdListRequest message or plain object
                 * @param {app.trainlcd.grpc.StationAPI.GetLineByIdListCallback} callback Node-style callback called with the error, if any, and MultipleLineResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(StationAPI.prototype.getLineByIdList = function getLineByIdList(request, callback) {
                    return this.rpcCall(getLineByIdList, $root.app.trainlcd.grpc.GetLineByIdListRequest, $root.app.trainlcd.grpc.MultipleLineResponse, request, callback);
                }, "name", { value: "GetLineByIdList" });

                /**
                 * Calls GetLineByIdList.
                 * @function getLineByIdList
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetLineByIdListRequest} request GetLineByIdListRequest message or plain object
                 * @returns {Promise<app.trainlcd.grpc.MultipleLineResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getLinesByName}.
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @typedef GetLinesByNameCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {app.trainlcd.grpc.MultipleLineResponse} [response] MultipleLineResponse
                 */

                /**
                 * Calls GetLinesByName.
                 * @function getLinesByName
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetLinesByNameRequest} request GetLinesByNameRequest message or plain object
                 * @param {app.trainlcd.grpc.StationAPI.GetLinesByNameCallback} callback Node-style callback called with the error, if any, and MultipleLineResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(StationAPI.prototype.getLinesByName = function getLinesByName(request, callback) {
                    return this.rpcCall(getLinesByName, $root.app.trainlcd.grpc.GetLinesByNameRequest, $root.app.trainlcd.grpc.MultipleLineResponse, request, callback);
                }, "name", { value: "GetLinesByName" });

                /**
                 * Calls GetLinesByName.
                 * @function getLinesByName
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetLinesByNameRequest} request GetLinesByNameRequest message or plain object
                 * @returns {Promise<app.trainlcd.grpc.MultipleLineResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getConnectedRoutes}.
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @typedef GetConnectedRoutesCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {app.trainlcd.grpc.RouteResponse} [response] RouteResponse
                 */

                /**
                 * Calls GetConnectedRoutes.
                 * @function getConnectedRoutes
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetConnectedStationsRequest} request GetConnectedStationsRequest message or plain object
                 * @param {app.trainlcd.grpc.StationAPI.GetConnectedRoutesCallback} callback Node-style callback called with the error, if any, and RouteResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(StationAPI.prototype.getConnectedRoutes = function getConnectedRoutes(request, callback) {
                    return this.rpcCall(getConnectedRoutes, $root.app.trainlcd.grpc.GetConnectedStationsRequest, $root.app.trainlcd.grpc.RouteResponse, request, callback);
                }, "name", { value: "GetConnectedRoutes" });

                /**
                 * Calls GetConnectedRoutes.
                 * @function getConnectedRoutes
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetConnectedStationsRequest} request GetConnectedStationsRequest message or plain object
                 * @returns {Promise<app.trainlcd.grpc.RouteResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link app.trainlcd.grpc.StationAPI#getRouteTypes}.
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @typedef GetRouteTypesCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {app.trainlcd.grpc.RouteTypeResponse} [response] RouteTypeResponse
                 */

                /**
                 * Calls GetRouteTypes.
                 * @function getRouteTypes
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetRouteRequest} request GetRouteRequest message or plain object
                 * @param {app.trainlcd.grpc.StationAPI.GetRouteTypesCallback} callback Node-style callback called with the error, if any, and RouteTypeResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(StationAPI.prototype.getRouteTypes = function getRouteTypes(request, callback) {
                    return this.rpcCall(getRouteTypes, $root.app.trainlcd.grpc.GetRouteRequest, $root.app.trainlcd.grpc.RouteTypeResponse, request, callback);
                }, "name", { value: "GetRouteTypes" });

                /**
                 * Calls GetRouteTypes.
                 * @function getRouteTypes
                 * @memberof app.trainlcd.grpc.StationAPI
                 * @instance
                 * @param {app.trainlcd.grpc.IGetRouteRequest} request GetRouteRequest message or plain object
                 * @returns {Promise<app.trainlcd.grpc.RouteTypeResponse>} Promise
                 * @variation 2
                 */

                return StationAPI;
            })();

            grpc.GetStationByIdRequest = (function() {

                /**
                 * Properties of a GetStationByIdRequest.
                 * @memberof app.trainlcd.grpc
                 * @interface IGetStationByIdRequest
                 * @property {number|null} [id] GetStationByIdRequest id
                 */

                /**
                 * Constructs a new GetStationByIdRequest.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a GetStationByIdRequest.
                 * @implements IGetStationByIdRequest
                 * @constructor
                 * @param {app.trainlcd.grpc.IGetStationByIdRequest=} [properties] Properties to set
                 */
                function GetStationByIdRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetStationByIdRequest id.
                 * @member {number} id
                 * @memberof app.trainlcd.grpc.GetStationByIdRequest
                 * @instance
                 */
                GetStationByIdRequest.prototype.id = 0;

                /**
                 * Creates a new GetStationByIdRequest instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.GetStationByIdRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetStationByIdRequest=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.GetStationByIdRequest} GetStationByIdRequest instance
                 */
                GetStationByIdRequest.create = function create(properties) {
                    return new GetStationByIdRequest(properties);
                };

                /**
                 * Encodes the specified GetStationByIdRequest message. Does not implicitly {@link app.trainlcd.grpc.GetStationByIdRequest.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.GetStationByIdRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetStationByIdRequest} message GetStationByIdRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetStationByIdRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified GetStationByIdRequest message, length delimited. Does not implicitly {@link app.trainlcd.grpc.GetStationByIdRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.GetStationByIdRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetStationByIdRequest} message GetStationByIdRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetStationByIdRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetStationByIdRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.GetStationByIdRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.GetStationByIdRequest} GetStationByIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetStationByIdRequest.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.GetStationByIdRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.id = reader.uint32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GetStationByIdRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.GetStationByIdRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.GetStationByIdRequest} GetStationByIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetStationByIdRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetStationByIdRequest message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.GetStationByIdRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetStationByIdRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id))
                            return "id: integer expected";
                    return null;
                };

                /**
                 * Creates a GetStationByIdRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.GetStationByIdRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.GetStationByIdRequest} GetStationByIdRequest
                 */
                GetStationByIdRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.GetStationByIdRequest)
                        return object;
                    let message = new $root.app.trainlcd.grpc.GetStationByIdRequest();
                    if (object.id != null)
                        message.id = object.id >>> 0;
                    return message;
                };

                /**
                 * Creates a plain object from a GetStationByIdRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.GetStationByIdRequest
                 * @static
                 * @param {app.trainlcd.grpc.GetStationByIdRequest} message GetStationByIdRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetStationByIdRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.id = 0;
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    return object;
                };

                /**
                 * Converts this GetStationByIdRequest to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.GetStationByIdRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetStationByIdRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetStationByIdRequest
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.GetStationByIdRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetStationByIdRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.GetStationByIdRequest";
                };

                return GetStationByIdRequest;
            })();

            grpc.GetStationByIdListRequest = (function() {

                /**
                 * Properties of a GetStationByIdListRequest.
                 * @memberof app.trainlcd.grpc
                 * @interface IGetStationByIdListRequest
                 * @property {Array.<number>|null} [ids] GetStationByIdListRequest ids
                 */

                /**
                 * Constructs a new GetStationByIdListRequest.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a GetStationByIdListRequest.
                 * @implements IGetStationByIdListRequest
                 * @constructor
                 * @param {app.trainlcd.grpc.IGetStationByIdListRequest=} [properties] Properties to set
                 */
                function GetStationByIdListRequest(properties) {
                    this.ids = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetStationByIdListRequest ids.
                 * @member {Array.<number>} ids
                 * @memberof app.trainlcd.grpc.GetStationByIdListRequest
                 * @instance
                 */
                GetStationByIdListRequest.prototype.ids = $util.emptyArray;

                /**
                 * Creates a new GetStationByIdListRequest instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.GetStationByIdListRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetStationByIdListRequest=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.GetStationByIdListRequest} GetStationByIdListRequest instance
                 */
                GetStationByIdListRequest.create = function create(properties) {
                    return new GetStationByIdListRequest(properties);
                };

                /**
                 * Encodes the specified GetStationByIdListRequest message. Does not implicitly {@link app.trainlcd.grpc.GetStationByIdListRequest.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.GetStationByIdListRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetStationByIdListRequest} message GetStationByIdListRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetStationByIdListRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ids != null && message.ids.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (let i = 0; i < message.ids.length; ++i)
                            writer.uint32(message.ids[i]);
                        writer.ldelim();
                    }
                    return writer;
                };

                /**
                 * Encodes the specified GetStationByIdListRequest message, length delimited. Does not implicitly {@link app.trainlcd.grpc.GetStationByIdListRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.GetStationByIdListRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetStationByIdListRequest} message GetStationByIdListRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetStationByIdListRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetStationByIdListRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.GetStationByIdListRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.GetStationByIdListRequest} GetStationByIdListRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetStationByIdListRequest.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.GetStationByIdListRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.ids && message.ids.length))
                                    message.ids = [];
                                if ((tag & 7) === 2) {
                                    let end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.ids.push(reader.uint32());
                                } else
                                    message.ids.push(reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GetStationByIdListRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.GetStationByIdListRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.GetStationByIdListRequest} GetStationByIdListRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetStationByIdListRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetStationByIdListRequest message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.GetStationByIdListRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetStationByIdListRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.ids != null && message.hasOwnProperty("ids")) {
                        if (!Array.isArray(message.ids))
                            return "ids: array expected";
                        for (let i = 0; i < message.ids.length; ++i)
                            if (!$util.isInteger(message.ids[i]))
                                return "ids: integer[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a GetStationByIdListRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.GetStationByIdListRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.GetStationByIdListRequest} GetStationByIdListRequest
                 */
                GetStationByIdListRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.GetStationByIdListRequest)
                        return object;
                    let message = new $root.app.trainlcd.grpc.GetStationByIdListRequest();
                    if (object.ids) {
                        if (!Array.isArray(object.ids))
                            throw TypeError(".app.trainlcd.grpc.GetStationByIdListRequest.ids: array expected");
                        message.ids = [];
                        for (let i = 0; i < object.ids.length; ++i)
                            message.ids[i] = object.ids[i] >>> 0;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a GetStationByIdListRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.GetStationByIdListRequest
                 * @static
                 * @param {app.trainlcd.grpc.GetStationByIdListRequest} message GetStationByIdListRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetStationByIdListRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.ids = [];
                    if (message.ids && message.ids.length) {
                        object.ids = [];
                        for (let j = 0; j < message.ids.length; ++j)
                            object.ids[j] = message.ids[j];
                    }
                    return object;
                };

                /**
                 * Converts this GetStationByIdListRequest to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.GetStationByIdListRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetStationByIdListRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetStationByIdListRequest
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.GetStationByIdListRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetStationByIdListRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.GetStationByIdListRequest";
                };

                return GetStationByIdListRequest;
            })();

            grpc.GetStationByGroupIdRequest = (function() {

                /**
                 * Properties of a GetStationByGroupIdRequest.
                 * @memberof app.trainlcd.grpc
                 * @interface IGetStationByGroupIdRequest
                 * @property {number|null} [groupId] GetStationByGroupIdRequest groupId
                 */

                /**
                 * Constructs a new GetStationByGroupIdRequest.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a GetStationByGroupIdRequest.
                 * @implements IGetStationByGroupIdRequest
                 * @constructor
                 * @param {app.trainlcd.grpc.IGetStationByGroupIdRequest=} [properties] Properties to set
                 */
                function GetStationByGroupIdRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetStationByGroupIdRequest groupId.
                 * @member {number} groupId
                 * @memberof app.trainlcd.grpc.GetStationByGroupIdRequest
                 * @instance
                 */
                GetStationByGroupIdRequest.prototype.groupId = 0;

                /**
                 * Creates a new GetStationByGroupIdRequest instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.GetStationByGroupIdRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetStationByGroupIdRequest=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.GetStationByGroupIdRequest} GetStationByGroupIdRequest instance
                 */
                GetStationByGroupIdRequest.create = function create(properties) {
                    return new GetStationByGroupIdRequest(properties);
                };

                /**
                 * Encodes the specified GetStationByGroupIdRequest message. Does not implicitly {@link app.trainlcd.grpc.GetStationByGroupIdRequest.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.GetStationByGroupIdRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetStationByGroupIdRequest} message GetStationByGroupIdRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetStationByGroupIdRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.groupId);
                    return writer;
                };

                /**
                 * Encodes the specified GetStationByGroupIdRequest message, length delimited. Does not implicitly {@link app.trainlcd.grpc.GetStationByGroupIdRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.GetStationByGroupIdRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetStationByGroupIdRequest} message GetStationByGroupIdRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetStationByGroupIdRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetStationByGroupIdRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.GetStationByGroupIdRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.GetStationByGroupIdRequest} GetStationByGroupIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetStationByGroupIdRequest.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.GetStationByGroupIdRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.groupId = reader.uint32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GetStationByGroupIdRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.GetStationByGroupIdRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.GetStationByGroupIdRequest} GetStationByGroupIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetStationByGroupIdRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetStationByGroupIdRequest message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.GetStationByGroupIdRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetStationByGroupIdRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        if (!$util.isInteger(message.groupId))
                            return "groupId: integer expected";
                    return null;
                };

                /**
                 * Creates a GetStationByGroupIdRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.GetStationByGroupIdRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.GetStationByGroupIdRequest} GetStationByGroupIdRequest
                 */
                GetStationByGroupIdRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.GetStationByGroupIdRequest)
                        return object;
                    let message = new $root.app.trainlcd.grpc.GetStationByGroupIdRequest();
                    if (object.groupId != null)
                        message.groupId = object.groupId >>> 0;
                    return message;
                };

                /**
                 * Creates a plain object from a GetStationByGroupIdRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.GetStationByGroupIdRequest
                 * @static
                 * @param {app.trainlcd.grpc.GetStationByGroupIdRequest} message GetStationByGroupIdRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetStationByGroupIdRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.groupId = 0;
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        object.groupId = message.groupId;
                    return object;
                };

                /**
                 * Converts this GetStationByGroupIdRequest to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.GetStationByGroupIdRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetStationByGroupIdRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetStationByGroupIdRequest
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.GetStationByGroupIdRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetStationByGroupIdRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.GetStationByGroupIdRequest";
                };

                return GetStationByGroupIdRequest;
            })();

            grpc.GetStationByCoordinatesRequest = (function() {

                /**
                 * Properties of a GetStationByCoordinatesRequest.
                 * @memberof app.trainlcd.grpc
                 * @interface IGetStationByCoordinatesRequest
                 * @property {number|null} [latitude] GetStationByCoordinatesRequest latitude
                 * @property {number|null} [longitude] GetStationByCoordinatesRequest longitude
                 * @property {number|null} [limit] GetStationByCoordinatesRequest limit
                 */

                /**
                 * Constructs a new GetStationByCoordinatesRequest.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a GetStationByCoordinatesRequest.
                 * @implements IGetStationByCoordinatesRequest
                 * @constructor
                 * @param {app.trainlcd.grpc.IGetStationByCoordinatesRequest=} [properties] Properties to set
                 */
                function GetStationByCoordinatesRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetStationByCoordinatesRequest latitude.
                 * @member {number} latitude
                 * @memberof app.trainlcd.grpc.GetStationByCoordinatesRequest
                 * @instance
                 */
                GetStationByCoordinatesRequest.prototype.latitude = 0;

                /**
                 * GetStationByCoordinatesRequest longitude.
                 * @member {number} longitude
                 * @memberof app.trainlcd.grpc.GetStationByCoordinatesRequest
                 * @instance
                 */
                GetStationByCoordinatesRequest.prototype.longitude = 0;

                /**
                 * GetStationByCoordinatesRequest limit.
                 * @member {number|null|undefined} limit
                 * @memberof app.trainlcd.grpc.GetStationByCoordinatesRequest
                 * @instance
                 */
                GetStationByCoordinatesRequest.prototype.limit = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * GetStationByCoordinatesRequest _limit.
                 * @member {"limit"|undefined} _limit
                 * @memberof app.trainlcd.grpc.GetStationByCoordinatesRequest
                 * @instance
                 */
                Object.defineProperty(GetStationByCoordinatesRequest.prototype, "_limit", {
                    get: $util.oneOfGetter($oneOfFields = ["limit"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new GetStationByCoordinatesRequest instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.GetStationByCoordinatesRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetStationByCoordinatesRequest=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.GetStationByCoordinatesRequest} GetStationByCoordinatesRequest instance
                 */
                GetStationByCoordinatesRequest.create = function create(properties) {
                    return new GetStationByCoordinatesRequest(properties);
                };

                /**
                 * Encodes the specified GetStationByCoordinatesRequest message. Does not implicitly {@link app.trainlcd.grpc.GetStationByCoordinatesRequest.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.GetStationByCoordinatesRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetStationByCoordinatesRequest} message GetStationByCoordinatesRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetStationByCoordinatesRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                        writer.uint32(/* id 1, wireType 1 =*/9).double(message.latitude);
                    if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                        writer.uint32(/* id 2, wireType 1 =*/17).double(message.longitude);
                    if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.limit);
                    return writer;
                };

                /**
                 * Encodes the specified GetStationByCoordinatesRequest message, length delimited. Does not implicitly {@link app.trainlcd.grpc.GetStationByCoordinatesRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.GetStationByCoordinatesRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetStationByCoordinatesRequest} message GetStationByCoordinatesRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetStationByCoordinatesRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetStationByCoordinatesRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.GetStationByCoordinatesRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.GetStationByCoordinatesRequest} GetStationByCoordinatesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetStationByCoordinatesRequest.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.GetStationByCoordinatesRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.latitude = reader.double();
                                break;
                            }
                        case 2: {
                                message.longitude = reader.double();
                                break;
                            }
                        case 3: {
                                message.limit = reader.uint32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GetStationByCoordinatesRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.GetStationByCoordinatesRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.GetStationByCoordinatesRequest} GetStationByCoordinatesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetStationByCoordinatesRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetStationByCoordinatesRequest message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.GetStationByCoordinatesRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetStationByCoordinatesRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
                    if (message.latitude != null && message.hasOwnProperty("latitude"))
                        if (typeof message.latitude !== "number")
                            return "latitude: number expected";
                    if (message.longitude != null && message.hasOwnProperty("longitude"))
                        if (typeof message.longitude !== "number")
                            return "longitude: number expected";
                    if (message.limit != null && message.hasOwnProperty("limit")) {
                        properties._limit = 1;
                        if (!$util.isInteger(message.limit))
                            return "limit: integer expected";
                    }
                    return null;
                };

                /**
                 * Creates a GetStationByCoordinatesRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.GetStationByCoordinatesRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.GetStationByCoordinatesRequest} GetStationByCoordinatesRequest
                 */
                GetStationByCoordinatesRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.GetStationByCoordinatesRequest)
                        return object;
                    let message = new $root.app.trainlcd.grpc.GetStationByCoordinatesRequest();
                    if (object.latitude != null)
                        message.latitude = Number(object.latitude);
                    if (object.longitude != null)
                        message.longitude = Number(object.longitude);
                    if (object.limit != null)
                        message.limit = object.limit >>> 0;
                    return message;
                };

                /**
                 * Creates a plain object from a GetStationByCoordinatesRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.GetStationByCoordinatesRequest
                 * @static
                 * @param {app.trainlcd.grpc.GetStationByCoordinatesRequest} message GetStationByCoordinatesRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetStationByCoordinatesRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.latitude = 0;
                        object.longitude = 0;
                    }
                    if (message.latitude != null && message.hasOwnProperty("latitude"))
                        object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
                    if (message.longitude != null && message.hasOwnProperty("longitude"))
                        object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
                    if (message.limit != null && message.hasOwnProperty("limit")) {
                        object.limit = message.limit;
                        if (options.oneofs)
                            object._limit = "limit";
                    }
                    return object;
                };

                /**
                 * Converts this GetStationByCoordinatesRequest to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.GetStationByCoordinatesRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetStationByCoordinatesRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetStationByCoordinatesRequest
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.GetStationByCoordinatesRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetStationByCoordinatesRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.GetStationByCoordinatesRequest";
                };

                return GetStationByCoordinatesRequest;
            })();

            grpc.GetStationByLineIdRequest = (function() {

                /**
                 * Properties of a GetStationByLineIdRequest.
                 * @memberof app.trainlcd.grpc
                 * @interface IGetStationByLineIdRequest
                 * @property {number|null} [lineId] GetStationByLineIdRequest lineId
                 * @property {number|null} [stationId] GetStationByLineIdRequest stationId
                 */

                /**
                 * Constructs a new GetStationByLineIdRequest.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a GetStationByLineIdRequest.
                 * @implements IGetStationByLineIdRequest
                 * @constructor
                 * @param {app.trainlcd.grpc.IGetStationByLineIdRequest=} [properties] Properties to set
                 */
                function GetStationByLineIdRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetStationByLineIdRequest lineId.
                 * @member {number} lineId
                 * @memberof app.trainlcd.grpc.GetStationByLineIdRequest
                 * @instance
                 */
                GetStationByLineIdRequest.prototype.lineId = 0;

                /**
                 * GetStationByLineIdRequest stationId.
                 * @member {number|null|undefined} stationId
                 * @memberof app.trainlcd.grpc.GetStationByLineIdRequest
                 * @instance
                 */
                GetStationByLineIdRequest.prototype.stationId = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * GetStationByLineIdRequest _stationId.
                 * @member {"stationId"|undefined} _stationId
                 * @memberof app.trainlcd.grpc.GetStationByLineIdRequest
                 * @instance
                 */
                Object.defineProperty(GetStationByLineIdRequest.prototype, "_stationId", {
                    get: $util.oneOfGetter($oneOfFields = ["stationId"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new GetStationByLineIdRequest instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.GetStationByLineIdRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetStationByLineIdRequest=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.GetStationByLineIdRequest} GetStationByLineIdRequest instance
                 */
                GetStationByLineIdRequest.create = function create(properties) {
                    return new GetStationByLineIdRequest(properties);
                };

                /**
                 * Encodes the specified GetStationByLineIdRequest message. Does not implicitly {@link app.trainlcd.grpc.GetStationByLineIdRequest.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.GetStationByLineIdRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetStationByLineIdRequest} message GetStationByLineIdRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetStationByLineIdRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.lineId != null && Object.hasOwnProperty.call(message, "lineId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.lineId);
                    if (message.stationId != null && Object.hasOwnProperty.call(message, "stationId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.stationId);
                    return writer;
                };

                /**
                 * Encodes the specified GetStationByLineIdRequest message, length delimited. Does not implicitly {@link app.trainlcd.grpc.GetStationByLineIdRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.GetStationByLineIdRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetStationByLineIdRequest} message GetStationByLineIdRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetStationByLineIdRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetStationByLineIdRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.GetStationByLineIdRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.GetStationByLineIdRequest} GetStationByLineIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetStationByLineIdRequest.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.GetStationByLineIdRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.lineId = reader.uint32();
                                break;
                            }
                        case 2: {
                                message.stationId = reader.uint32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GetStationByLineIdRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.GetStationByLineIdRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.GetStationByLineIdRequest} GetStationByLineIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetStationByLineIdRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetStationByLineIdRequest message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.GetStationByLineIdRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetStationByLineIdRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
                    if (message.lineId != null && message.hasOwnProperty("lineId"))
                        if (!$util.isInteger(message.lineId))
                            return "lineId: integer expected";
                    if (message.stationId != null && message.hasOwnProperty("stationId")) {
                        properties._stationId = 1;
                        if (!$util.isInteger(message.stationId))
                            return "stationId: integer expected";
                    }
                    return null;
                };

                /**
                 * Creates a GetStationByLineIdRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.GetStationByLineIdRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.GetStationByLineIdRequest} GetStationByLineIdRequest
                 */
                GetStationByLineIdRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.GetStationByLineIdRequest)
                        return object;
                    let message = new $root.app.trainlcd.grpc.GetStationByLineIdRequest();
                    if (object.lineId != null)
                        message.lineId = object.lineId >>> 0;
                    if (object.stationId != null)
                        message.stationId = object.stationId >>> 0;
                    return message;
                };

                /**
                 * Creates a plain object from a GetStationByLineIdRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.GetStationByLineIdRequest
                 * @static
                 * @param {app.trainlcd.grpc.GetStationByLineIdRequest} message GetStationByLineIdRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetStationByLineIdRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.lineId = 0;
                    if (message.lineId != null && message.hasOwnProperty("lineId"))
                        object.lineId = message.lineId;
                    if (message.stationId != null && message.hasOwnProperty("stationId")) {
                        object.stationId = message.stationId;
                        if (options.oneofs)
                            object._stationId = "stationId";
                    }
                    return object;
                };

                /**
                 * Converts this GetStationByLineIdRequest to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.GetStationByLineIdRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetStationByLineIdRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetStationByLineIdRequest
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.GetStationByLineIdRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetStationByLineIdRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.GetStationByLineIdRequest";
                };

                return GetStationByLineIdRequest;
            })();

            grpc.GetStationsByNameRequest = (function() {

                /**
                 * Properties of a GetStationsByNameRequest.
                 * @memberof app.trainlcd.grpc
                 * @interface IGetStationsByNameRequest
                 * @property {string|null} [stationName] GetStationsByNameRequest stationName
                 * @property {number|null} [limit] GetStationsByNameRequest limit
                 * @property {number|null} [fromStationGroupId] GetStationsByNameRequest fromStationGroupId
                 */

                /**
                 * Constructs a new GetStationsByNameRequest.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a GetStationsByNameRequest.
                 * @implements IGetStationsByNameRequest
                 * @constructor
                 * @param {app.trainlcd.grpc.IGetStationsByNameRequest=} [properties] Properties to set
                 */
                function GetStationsByNameRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetStationsByNameRequest stationName.
                 * @member {string} stationName
                 * @memberof app.trainlcd.grpc.GetStationsByNameRequest
                 * @instance
                 */
                GetStationsByNameRequest.prototype.stationName = "";

                /**
                 * GetStationsByNameRequest limit.
                 * @member {number|null|undefined} limit
                 * @memberof app.trainlcd.grpc.GetStationsByNameRequest
                 * @instance
                 */
                GetStationsByNameRequest.prototype.limit = null;

                /**
                 * GetStationsByNameRequest fromStationGroupId.
                 * @member {number|null|undefined} fromStationGroupId
                 * @memberof app.trainlcd.grpc.GetStationsByNameRequest
                 * @instance
                 */
                GetStationsByNameRequest.prototype.fromStationGroupId = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * GetStationsByNameRequest _limit.
                 * @member {"limit"|undefined} _limit
                 * @memberof app.trainlcd.grpc.GetStationsByNameRequest
                 * @instance
                 */
                Object.defineProperty(GetStationsByNameRequest.prototype, "_limit", {
                    get: $util.oneOfGetter($oneOfFields = ["limit"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * GetStationsByNameRequest _fromStationGroupId.
                 * @member {"fromStationGroupId"|undefined} _fromStationGroupId
                 * @memberof app.trainlcd.grpc.GetStationsByNameRequest
                 * @instance
                 */
                Object.defineProperty(GetStationsByNameRequest.prototype, "_fromStationGroupId", {
                    get: $util.oneOfGetter($oneOfFields = ["fromStationGroupId"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new GetStationsByNameRequest instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.GetStationsByNameRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetStationsByNameRequest=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.GetStationsByNameRequest} GetStationsByNameRequest instance
                 */
                GetStationsByNameRequest.create = function create(properties) {
                    return new GetStationsByNameRequest(properties);
                };

                /**
                 * Encodes the specified GetStationsByNameRequest message. Does not implicitly {@link app.trainlcd.grpc.GetStationsByNameRequest.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.GetStationsByNameRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetStationsByNameRequest} message GetStationsByNameRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetStationsByNameRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.stationName != null && Object.hasOwnProperty.call(message, "stationName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.stationName);
                    if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.limit);
                    if (message.fromStationGroupId != null && Object.hasOwnProperty.call(message, "fromStationGroupId"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.fromStationGroupId);
                    return writer;
                };

                /**
                 * Encodes the specified GetStationsByNameRequest message, length delimited. Does not implicitly {@link app.trainlcd.grpc.GetStationsByNameRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.GetStationsByNameRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetStationsByNameRequest} message GetStationsByNameRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetStationsByNameRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetStationsByNameRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.GetStationsByNameRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.GetStationsByNameRequest} GetStationsByNameRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetStationsByNameRequest.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.GetStationsByNameRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.stationName = reader.string();
                                break;
                            }
                        case 2: {
                                message.limit = reader.uint32();
                                break;
                            }
                        case 3: {
                                message.fromStationGroupId = reader.uint32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GetStationsByNameRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.GetStationsByNameRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.GetStationsByNameRequest} GetStationsByNameRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetStationsByNameRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetStationsByNameRequest message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.GetStationsByNameRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetStationsByNameRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
                    if (message.stationName != null && message.hasOwnProperty("stationName"))
                        if (!$util.isString(message.stationName))
                            return "stationName: string expected";
                    if (message.limit != null && message.hasOwnProperty("limit")) {
                        properties._limit = 1;
                        if (!$util.isInteger(message.limit))
                            return "limit: integer expected";
                    }
                    if (message.fromStationGroupId != null && message.hasOwnProperty("fromStationGroupId")) {
                        properties._fromStationGroupId = 1;
                        if (!$util.isInteger(message.fromStationGroupId))
                            return "fromStationGroupId: integer expected";
                    }
                    return null;
                };

                /**
                 * Creates a GetStationsByNameRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.GetStationsByNameRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.GetStationsByNameRequest} GetStationsByNameRequest
                 */
                GetStationsByNameRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.GetStationsByNameRequest)
                        return object;
                    let message = new $root.app.trainlcd.grpc.GetStationsByNameRequest();
                    if (object.stationName != null)
                        message.stationName = String(object.stationName);
                    if (object.limit != null)
                        message.limit = object.limit >>> 0;
                    if (object.fromStationGroupId != null)
                        message.fromStationGroupId = object.fromStationGroupId >>> 0;
                    return message;
                };

                /**
                 * Creates a plain object from a GetStationsByNameRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.GetStationsByNameRequest
                 * @static
                 * @param {app.trainlcd.grpc.GetStationsByNameRequest} message GetStationsByNameRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetStationsByNameRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.stationName = "";
                    if (message.stationName != null && message.hasOwnProperty("stationName"))
                        object.stationName = message.stationName;
                    if (message.limit != null && message.hasOwnProperty("limit")) {
                        object.limit = message.limit;
                        if (options.oneofs)
                            object._limit = "limit";
                    }
                    if (message.fromStationGroupId != null && message.hasOwnProperty("fromStationGroupId")) {
                        object.fromStationGroupId = message.fromStationGroupId;
                        if (options.oneofs)
                            object._fromStationGroupId = "fromStationGroupId";
                    }
                    return object;
                };

                /**
                 * Converts this GetStationsByNameRequest to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.GetStationsByNameRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetStationsByNameRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetStationsByNameRequest
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.GetStationsByNameRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetStationsByNameRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.GetStationsByNameRequest";
                };

                return GetStationsByNameRequest;
            })();

            grpc.GetRouteRequest = (function() {

                /**
                 * Properties of a GetRouteRequest.
                 * @memberof app.trainlcd.grpc
                 * @interface IGetRouteRequest
                 * @property {number|null} [fromStationGroupId] GetRouteRequest fromStationGroupId
                 * @property {number|null} [toStationGroupId] GetRouteRequest toStationGroupId
                 * @property {number|null} [pageSize] GetRouteRequest pageSize
                 * @property {string|null} [pageToken] GetRouteRequest pageToken
                 * @property {number|null} [viaLineId] GetRouteRequest viaLineId
                 */

                /**
                 * Constructs a new GetRouteRequest.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a GetRouteRequest.
                 * @implements IGetRouteRequest
                 * @constructor
                 * @param {app.trainlcd.grpc.IGetRouteRequest=} [properties] Properties to set
                 */
                function GetRouteRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetRouteRequest fromStationGroupId.
                 * @member {number} fromStationGroupId
                 * @memberof app.trainlcd.grpc.GetRouteRequest
                 * @instance
                 */
                GetRouteRequest.prototype.fromStationGroupId = 0;

                /**
                 * GetRouteRequest toStationGroupId.
                 * @member {number} toStationGroupId
                 * @memberof app.trainlcd.grpc.GetRouteRequest
                 * @instance
                 */
                GetRouteRequest.prototype.toStationGroupId = 0;

                /**
                 * GetRouteRequest pageSize.
                 * @member {number} pageSize
                 * @memberof app.trainlcd.grpc.GetRouteRequest
                 * @instance
                 */
                GetRouteRequest.prototype.pageSize = 0;

                /**
                 * GetRouteRequest pageToken.
                 * @member {string} pageToken
                 * @memberof app.trainlcd.grpc.GetRouteRequest
                 * @instance
                 */
                GetRouteRequest.prototype.pageToken = "";

                /**
                 * GetRouteRequest viaLineId.
                 * @member {number|null|undefined} viaLineId
                 * @memberof app.trainlcd.grpc.GetRouteRequest
                 * @instance
                 */
                GetRouteRequest.prototype.viaLineId = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * GetRouteRequest _viaLineId.
                 * @member {"viaLineId"|undefined} _viaLineId
                 * @memberof app.trainlcd.grpc.GetRouteRequest
                 * @instance
                 */
                Object.defineProperty(GetRouteRequest.prototype, "_viaLineId", {
                    get: $util.oneOfGetter($oneOfFields = ["viaLineId"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new GetRouteRequest instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.GetRouteRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetRouteRequest=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.GetRouteRequest} GetRouteRequest instance
                 */
                GetRouteRequest.create = function create(properties) {
                    return new GetRouteRequest(properties);
                };

                /**
                 * Encodes the specified GetRouteRequest message. Does not implicitly {@link app.trainlcd.grpc.GetRouteRequest.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.GetRouteRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetRouteRequest} message GetRouteRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetRouteRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.fromStationGroupId != null && Object.hasOwnProperty.call(message, "fromStationGroupId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.fromStationGroupId);
                    if (message.toStationGroupId != null && Object.hasOwnProperty.call(message, "toStationGroupId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.toStationGroupId);
                    if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.pageSize);
                    if (message.pageToken != null && Object.hasOwnProperty.call(message, "pageToken"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.pageToken);
                    if (message.viaLineId != null && Object.hasOwnProperty.call(message, "viaLineId"))
                        writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.viaLineId);
                    return writer;
                };

                /**
                 * Encodes the specified GetRouteRequest message, length delimited. Does not implicitly {@link app.trainlcd.grpc.GetRouteRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.GetRouteRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetRouteRequest} message GetRouteRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetRouteRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetRouteRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.GetRouteRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.GetRouteRequest} GetRouteRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetRouteRequest.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.GetRouteRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.fromStationGroupId = reader.uint32();
                                break;
                            }
                        case 2: {
                                message.toStationGroupId = reader.uint32();
                                break;
                            }
                        case 3: {
                                message.pageSize = reader.uint32();
                                break;
                            }
                        case 4: {
                                message.pageToken = reader.string();
                                break;
                            }
                        case 5: {
                                message.viaLineId = reader.uint32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GetRouteRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.GetRouteRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.GetRouteRequest} GetRouteRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetRouteRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetRouteRequest message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.GetRouteRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetRouteRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
                    if (message.fromStationGroupId != null && message.hasOwnProperty("fromStationGroupId"))
                        if (!$util.isInteger(message.fromStationGroupId))
                            return "fromStationGroupId: integer expected";
                    if (message.toStationGroupId != null && message.hasOwnProperty("toStationGroupId"))
                        if (!$util.isInteger(message.toStationGroupId))
                            return "toStationGroupId: integer expected";
                    if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                        if (!$util.isInteger(message.pageSize))
                            return "pageSize: integer expected";
                    if (message.pageToken != null && message.hasOwnProperty("pageToken"))
                        if (!$util.isString(message.pageToken))
                            return "pageToken: string expected";
                    if (message.viaLineId != null && message.hasOwnProperty("viaLineId")) {
                        properties._viaLineId = 1;
                        if (!$util.isInteger(message.viaLineId))
                            return "viaLineId: integer expected";
                    }
                    return null;
                };

                /**
                 * Creates a GetRouteRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.GetRouteRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.GetRouteRequest} GetRouteRequest
                 */
                GetRouteRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.GetRouteRequest)
                        return object;
                    let message = new $root.app.trainlcd.grpc.GetRouteRequest();
                    if (object.fromStationGroupId != null)
                        message.fromStationGroupId = object.fromStationGroupId >>> 0;
                    if (object.toStationGroupId != null)
                        message.toStationGroupId = object.toStationGroupId >>> 0;
                    if (object.pageSize != null)
                        message.pageSize = object.pageSize >>> 0;
                    if (object.pageToken != null)
                        message.pageToken = String(object.pageToken);
                    if (object.viaLineId != null)
                        message.viaLineId = object.viaLineId >>> 0;
                    return message;
                };

                /**
                 * Creates a plain object from a GetRouteRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.GetRouteRequest
                 * @static
                 * @param {app.trainlcd.grpc.GetRouteRequest} message GetRouteRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetRouteRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.fromStationGroupId = 0;
                        object.toStationGroupId = 0;
                        object.pageSize = 0;
                        object.pageToken = "";
                    }
                    if (message.fromStationGroupId != null && message.hasOwnProperty("fromStationGroupId"))
                        object.fromStationGroupId = message.fromStationGroupId;
                    if (message.toStationGroupId != null && message.hasOwnProperty("toStationGroupId"))
                        object.toStationGroupId = message.toStationGroupId;
                    if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                        object.pageSize = message.pageSize;
                    if (message.pageToken != null && message.hasOwnProperty("pageToken"))
                        object.pageToken = message.pageToken;
                    if (message.viaLineId != null && message.hasOwnProperty("viaLineId")) {
                        object.viaLineId = message.viaLineId;
                        if (options.oneofs)
                            object._viaLineId = "viaLineId";
                    }
                    return object;
                };

                /**
                 * Converts this GetRouteRequest to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.GetRouteRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetRouteRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetRouteRequest
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.GetRouteRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetRouteRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.GetRouteRequest";
                };

                return GetRouteRequest;
            })();

            grpc.GetStationsByLineGroupIdRequest = (function() {

                /**
                 * Properties of a GetStationsByLineGroupIdRequest.
                 * @memberof app.trainlcd.grpc
                 * @interface IGetStationsByLineGroupIdRequest
                 * @property {number|null} [lineGroupId] GetStationsByLineGroupIdRequest lineGroupId
                 */

                /**
                 * Constructs a new GetStationsByLineGroupIdRequest.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a GetStationsByLineGroupIdRequest.
                 * @implements IGetStationsByLineGroupIdRequest
                 * @constructor
                 * @param {app.trainlcd.grpc.IGetStationsByLineGroupIdRequest=} [properties] Properties to set
                 */
                function GetStationsByLineGroupIdRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetStationsByLineGroupIdRequest lineGroupId.
                 * @member {number} lineGroupId
                 * @memberof app.trainlcd.grpc.GetStationsByLineGroupIdRequest
                 * @instance
                 */
                GetStationsByLineGroupIdRequest.prototype.lineGroupId = 0;

                /**
                 * Creates a new GetStationsByLineGroupIdRequest instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.GetStationsByLineGroupIdRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetStationsByLineGroupIdRequest=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.GetStationsByLineGroupIdRequest} GetStationsByLineGroupIdRequest instance
                 */
                GetStationsByLineGroupIdRequest.create = function create(properties) {
                    return new GetStationsByLineGroupIdRequest(properties);
                };

                /**
                 * Encodes the specified GetStationsByLineGroupIdRequest message. Does not implicitly {@link app.trainlcd.grpc.GetStationsByLineGroupIdRequest.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.GetStationsByLineGroupIdRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetStationsByLineGroupIdRequest} message GetStationsByLineGroupIdRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetStationsByLineGroupIdRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.lineGroupId != null && Object.hasOwnProperty.call(message, "lineGroupId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.lineGroupId);
                    return writer;
                };

                /**
                 * Encodes the specified GetStationsByLineGroupIdRequest message, length delimited. Does not implicitly {@link app.trainlcd.grpc.GetStationsByLineGroupIdRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.GetStationsByLineGroupIdRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetStationsByLineGroupIdRequest} message GetStationsByLineGroupIdRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetStationsByLineGroupIdRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetStationsByLineGroupIdRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.GetStationsByLineGroupIdRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.GetStationsByLineGroupIdRequest} GetStationsByLineGroupIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetStationsByLineGroupIdRequest.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.GetStationsByLineGroupIdRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.lineGroupId = reader.uint32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GetStationsByLineGroupIdRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.GetStationsByLineGroupIdRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.GetStationsByLineGroupIdRequest} GetStationsByLineGroupIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetStationsByLineGroupIdRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetStationsByLineGroupIdRequest message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.GetStationsByLineGroupIdRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetStationsByLineGroupIdRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.lineGroupId != null && message.hasOwnProperty("lineGroupId"))
                        if (!$util.isInteger(message.lineGroupId))
                            return "lineGroupId: integer expected";
                    return null;
                };

                /**
                 * Creates a GetStationsByLineGroupIdRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.GetStationsByLineGroupIdRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.GetStationsByLineGroupIdRequest} GetStationsByLineGroupIdRequest
                 */
                GetStationsByLineGroupIdRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.GetStationsByLineGroupIdRequest)
                        return object;
                    let message = new $root.app.trainlcd.grpc.GetStationsByLineGroupIdRequest();
                    if (object.lineGroupId != null)
                        message.lineGroupId = object.lineGroupId >>> 0;
                    return message;
                };

                /**
                 * Creates a plain object from a GetStationsByLineGroupIdRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.GetStationsByLineGroupIdRequest
                 * @static
                 * @param {app.trainlcd.grpc.GetStationsByLineGroupIdRequest} message GetStationsByLineGroupIdRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetStationsByLineGroupIdRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.lineGroupId = 0;
                    if (message.lineGroupId != null && message.hasOwnProperty("lineGroupId"))
                        object.lineGroupId = message.lineGroupId;
                    return object;
                };

                /**
                 * Converts this GetStationsByLineGroupIdRequest to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.GetStationsByLineGroupIdRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetStationsByLineGroupIdRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetStationsByLineGroupIdRequest
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.GetStationsByLineGroupIdRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetStationsByLineGroupIdRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.GetStationsByLineGroupIdRequest";
                };

                return GetStationsByLineGroupIdRequest;
            })();

            grpc.GetTrainTypesByStationIdRequest = (function() {

                /**
                 * Properties of a GetTrainTypesByStationIdRequest.
                 * @memberof app.trainlcd.grpc
                 * @interface IGetTrainTypesByStationIdRequest
                 * @property {number|null} [stationId] GetTrainTypesByStationIdRequest stationId
                 */

                /**
                 * Constructs a new GetTrainTypesByStationIdRequest.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a GetTrainTypesByStationIdRequest.
                 * @implements IGetTrainTypesByStationIdRequest
                 * @constructor
                 * @param {app.trainlcd.grpc.IGetTrainTypesByStationIdRequest=} [properties] Properties to set
                 */
                function GetTrainTypesByStationIdRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetTrainTypesByStationIdRequest stationId.
                 * @member {number} stationId
                 * @memberof app.trainlcd.grpc.GetTrainTypesByStationIdRequest
                 * @instance
                 */
                GetTrainTypesByStationIdRequest.prototype.stationId = 0;

                /**
                 * Creates a new GetTrainTypesByStationIdRequest instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.GetTrainTypesByStationIdRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetTrainTypesByStationIdRequest=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.GetTrainTypesByStationIdRequest} GetTrainTypesByStationIdRequest instance
                 */
                GetTrainTypesByStationIdRequest.create = function create(properties) {
                    return new GetTrainTypesByStationIdRequest(properties);
                };

                /**
                 * Encodes the specified GetTrainTypesByStationIdRequest message. Does not implicitly {@link app.trainlcd.grpc.GetTrainTypesByStationIdRequest.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.GetTrainTypesByStationIdRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetTrainTypesByStationIdRequest} message GetTrainTypesByStationIdRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetTrainTypesByStationIdRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.stationId != null && Object.hasOwnProperty.call(message, "stationId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.stationId);
                    return writer;
                };

                /**
                 * Encodes the specified GetTrainTypesByStationIdRequest message, length delimited. Does not implicitly {@link app.trainlcd.grpc.GetTrainTypesByStationIdRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.GetTrainTypesByStationIdRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetTrainTypesByStationIdRequest} message GetTrainTypesByStationIdRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetTrainTypesByStationIdRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetTrainTypesByStationIdRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.GetTrainTypesByStationIdRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.GetTrainTypesByStationIdRequest} GetTrainTypesByStationIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetTrainTypesByStationIdRequest.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.GetTrainTypesByStationIdRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.stationId = reader.uint32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GetTrainTypesByStationIdRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.GetTrainTypesByStationIdRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.GetTrainTypesByStationIdRequest} GetTrainTypesByStationIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetTrainTypesByStationIdRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetTrainTypesByStationIdRequest message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.GetTrainTypesByStationIdRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetTrainTypesByStationIdRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.stationId != null && message.hasOwnProperty("stationId"))
                        if (!$util.isInteger(message.stationId))
                            return "stationId: integer expected";
                    return null;
                };

                /**
                 * Creates a GetTrainTypesByStationIdRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.GetTrainTypesByStationIdRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.GetTrainTypesByStationIdRequest} GetTrainTypesByStationIdRequest
                 */
                GetTrainTypesByStationIdRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.GetTrainTypesByStationIdRequest)
                        return object;
                    let message = new $root.app.trainlcd.grpc.GetTrainTypesByStationIdRequest();
                    if (object.stationId != null)
                        message.stationId = object.stationId >>> 0;
                    return message;
                };

                /**
                 * Creates a plain object from a GetTrainTypesByStationIdRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.GetTrainTypesByStationIdRequest
                 * @static
                 * @param {app.trainlcd.grpc.GetTrainTypesByStationIdRequest} message GetTrainTypesByStationIdRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetTrainTypesByStationIdRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.stationId = 0;
                    if (message.stationId != null && message.hasOwnProperty("stationId"))
                        object.stationId = message.stationId;
                    return object;
                };

                /**
                 * Converts this GetTrainTypesByStationIdRequest to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.GetTrainTypesByStationIdRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetTrainTypesByStationIdRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetTrainTypesByStationIdRequest
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.GetTrainTypesByStationIdRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetTrainTypesByStationIdRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.GetTrainTypesByStationIdRequest";
                };

                return GetTrainTypesByStationIdRequest;
            })();

            grpc.GetLineByIdRequest = (function() {

                /**
                 * Properties of a GetLineByIdRequest.
                 * @memberof app.trainlcd.grpc
                 * @interface IGetLineByIdRequest
                 * @property {number|null} [lineId] GetLineByIdRequest lineId
                 */

                /**
                 * Constructs a new GetLineByIdRequest.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a GetLineByIdRequest.
                 * @implements IGetLineByIdRequest
                 * @constructor
                 * @param {app.trainlcd.grpc.IGetLineByIdRequest=} [properties] Properties to set
                 */
                function GetLineByIdRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetLineByIdRequest lineId.
                 * @member {number} lineId
                 * @memberof app.trainlcd.grpc.GetLineByIdRequest
                 * @instance
                 */
                GetLineByIdRequest.prototype.lineId = 0;

                /**
                 * Creates a new GetLineByIdRequest instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.GetLineByIdRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetLineByIdRequest=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.GetLineByIdRequest} GetLineByIdRequest instance
                 */
                GetLineByIdRequest.create = function create(properties) {
                    return new GetLineByIdRequest(properties);
                };

                /**
                 * Encodes the specified GetLineByIdRequest message. Does not implicitly {@link app.trainlcd.grpc.GetLineByIdRequest.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.GetLineByIdRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetLineByIdRequest} message GetLineByIdRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetLineByIdRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.lineId != null && Object.hasOwnProperty.call(message, "lineId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.lineId);
                    return writer;
                };

                /**
                 * Encodes the specified GetLineByIdRequest message, length delimited. Does not implicitly {@link app.trainlcd.grpc.GetLineByIdRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.GetLineByIdRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetLineByIdRequest} message GetLineByIdRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetLineByIdRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetLineByIdRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.GetLineByIdRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.GetLineByIdRequest} GetLineByIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetLineByIdRequest.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.GetLineByIdRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.lineId = reader.uint32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GetLineByIdRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.GetLineByIdRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.GetLineByIdRequest} GetLineByIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetLineByIdRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetLineByIdRequest message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.GetLineByIdRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetLineByIdRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.lineId != null && message.hasOwnProperty("lineId"))
                        if (!$util.isInteger(message.lineId))
                            return "lineId: integer expected";
                    return null;
                };

                /**
                 * Creates a GetLineByIdRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.GetLineByIdRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.GetLineByIdRequest} GetLineByIdRequest
                 */
                GetLineByIdRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.GetLineByIdRequest)
                        return object;
                    let message = new $root.app.trainlcd.grpc.GetLineByIdRequest();
                    if (object.lineId != null)
                        message.lineId = object.lineId >>> 0;
                    return message;
                };

                /**
                 * Creates a plain object from a GetLineByIdRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.GetLineByIdRequest
                 * @static
                 * @param {app.trainlcd.grpc.GetLineByIdRequest} message GetLineByIdRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetLineByIdRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.lineId = 0;
                    if (message.lineId != null && message.hasOwnProperty("lineId"))
                        object.lineId = message.lineId;
                    return object;
                };

                /**
                 * Converts this GetLineByIdRequest to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.GetLineByIdRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetLineByIdRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetLineByIdRequest
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.GetLineByIdRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetLineByIdRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.GetLineByIdRequest";
                };

                return GetLineByIdRequest;
            })();

            grpc.GetLineByIdListRequest = (function() {

                /**
                 * Properties of a GetLineByIdListRequest.
                 * @memberof app.trainlcd.grpc
                 * @interface IGetLineByIdListRequest
                 * @property {Array.<number>|null} [lineIds] GetLineByIdListRequest lineIds
                 */

                /**
                 * Constructs a new GetLineByIdListRequest.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a GetLineByIdListRequest.
                 * @implements IGetLineByIdListRequest
                 * @constructor
                 * @param {app.trainlcd.grpc.IGetLineByIdListRequest=} [properties] Properties to set
                 */
                function GetLineByIdListRequest(properties) {
                    this.lineIds = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetLineByIdListRequest lineIds.
                 * @member {Array.<number>} lineIds
                 * @memberof app.trainlcd.grpc.GetLineByIdListRequest
                 * @instance
                 */
                GetLineByIdListRequest.prototype.lineIds = $util.emptyArray;

                /**
                 * Creates a new GetLineByIdListRequest instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.GetLineByIdListRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetLineByIdListRequest=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.GetLineByIdListRequest} GetLineByIdListRequest instance
                 */
                GetLineByIdListRequest.create = function create(properties) {
                    return new GetLineByIdListRequest(properties);
                };

                /**
                 * Encodes the specified GetLineByIdListRequest message. Does not implicitly {@link app.trainlcd.grpc.GetLineByIdListRequest.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.GetLineByIdListRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetLineByIdListRequest} message GetLineByIdListRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetLineByIdListRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.lineIds != null && message.lineIds.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (let i = 0; i < message.lineIds.length; ++i)
                            writer.uint32(message.lineIds[i]);
                        writer.ldelim();
                    }
                    return writer;
                };

                /**
                 * Encodes the specified GetLineByIdListRequest message, length delimited. Does not implicitly {@link app.trainlcd.grpc.GetLineByIdListRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.GetLineByIdListRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetLineByIdListRequest} message GetLineByIdListRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetLineByIdListRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetLineByIdListRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.GetLineByIdListRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.GetLineByIdListRequest} GetLineByIdListRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetLineByIdListRequest.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.GetLineByIdListRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.lineIds && message.lineIds.length))
                                    message.lineIds = [];
                                if ((tag & 7) === 2) {
                                    let end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.lineIds.push(reader.uint32());
                                } else
                                    message.lineIds.push(reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GetLineByIdListRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.GetLineByIdListRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.GetLineByIdListRequest} GetLineByIdListRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetLineByIdListRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetLineByIdListRequest message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.GetLineByIdListRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetLineByIdListRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.lineIds != null && message.hasOwnProperty("lineIds")) {
                        if (!Array.isArray(message.lineIds))
                            return "lineIds: array expected";
                        for (let i = 0; i < message.lineIds.length; ++i)
                            if (!$util.isInteger(message.lineIds[i]))
                                return "lineIds: integer[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a GetLineByIdListRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.GetLineByIdListRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.GetLineByIdListRequest} GetLineByIdListRequest
                 */
                GetLineByIdListRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.GetLineByIdListRequest)
                        return object;
                    let message = new $root.app.trainlcd.grpc.GetLineByIdListRequest();
                    if (object.lineIds) {
                        if (!Array.isArray(object.lineIds))
                            throw TypeError(".app.trainlcd.grpc.GetLineByIdListRequest.lineIds: array expected");
                        message.lineIds = [];
                        for (let i = 0; i < object.lineIds.length; ++i)
                            message.lineIds[i] = object.lineIds[i] >>> 0;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a GetLineByIdListRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.GetLineByIdListRequest
                 * @static
                 * @param {app.trainlcd.grpc.GetLineByIdListRequest} message GetLineByIdListRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetLineByIdListRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.lineIds = [];
                    if (message.lineIds && message.lineIds.length) {
                        object.lineIds = [];
                        for (let j = 0; j < message.lineIds.length; ++j)
                            object.lineIds[j] = message.lineIds[j];
                    }
                    return object;
                };

                /**
                 * Converts this GetLineByIdListRequest to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.GetLineByIdListRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetLineByIdListRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetLineByIdListRequest
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.GetLineByIdListRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetLineByIdListRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.GetLineByIdListRequest";
                };

                return GetLineByIdListRequest;
            })();

            grpc.CoordinatesRequest = (function() {

                /**
                 * Properties of a CoordinatesRequest.
                 * @memberof app.trainlcd.grpc
                 * @interface ICoordinatesRequest
                 * @property {number|null} [latitude] CoordinatesRequest latitude
                 * @property {number|null} [longitude] CoordinatesRequest longitude
                 * @property {number|null} [lineId] CoordinatesRequest lineId
                 */

                /**
                 * Constructs a new CoordinatesRequest.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a CoordinatesRequest.
                 * @implements ICoordinatesRequest
                 * @constructor
                 * @param {app.trainlcd.grpc.ICoordinatesRequest=} [properties] Properties to set
                 */
                function CoordinatesRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CoordinatesRequest latitude.
                 * @member {number} latitude
                 * @memberof app.trainlcd.grpc.CoordinatesRequest
                 * @instance
                 */
                CoordinatesRequest.prototype.latitude = 0;

                /**
                 * CoordinatesRequest longitude.
                 * @member {number} longitude
                 * @memberof app.trainlcd.grpc.CoordinatesRequest
                 * @instance
                 */
                CoordinatesRequest.prototype.longitude = 0;

                /**
                 * CoordinatesRequest lineId.
                 * @member {number|null|undefined} lineId
                 * @memberof app.trainlcd.grpc.CoordinatesRequest
                 * @instance
                 */
                CoordinatesRequest.prototype.lineId = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * CoordinatesRequest _lineId.
                 * @member {"lineId"|undefined} _lineId
                 * @memberof app.trainlcd.grpc.CoordinatesRequest
                 * @instance
                 */
                Object.defineProperty(CoordinatesRequest.prototype, "_lineId", {
                    get: $util.oneOfGetter($oneOfFields = ["lineId"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new CoordinatesRequest instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.CoordinatesRequest
                 * @static
                 * @param {app.trainlcd.grpc.ICoordinatesRequest=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.CoordinatesRequest} CoordinatesRequest instance
                 */
                CoordinatesRequest.create = function create(properties) {
                    return new CoordinatesRequest(properties);
                };

                /**
                 * Encodes the specified CoordinatesRequest message. Does not implicitly {@link app.trainlcd.grpc.CoordinatesRequest.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.CoordinatesRequest
                 * @static
                 * @param {app.trainlcd.grpc.ICoordinatesRequest} message CoordinatesRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CoordinatesRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                        writer.uint32(/* id 1, wireType 1 =*/9).double(message.latitude);
                    if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                        writer.uint32(/* id 2, wireType 1 =*/17).double(message.longitude);
                    if (message.lineId != null && Object.hasOwnProperty.call(message, "lineId"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.lineId);
                    return writer;
                };

                /**
                 * Encodes the specified CoordinatesRequest message, length delimited. Does not implicitly {@link app.trainlcd.grpc.CoordinatesRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.CoordinatesRequest
                 * @static
                 * @param {app.trainlcd.grpc.ICoordinatesRequest} message CoordinatesRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CoordinatesRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CoordinatesRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.CoordinatesRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.CoordinatesRequest} CoordinatesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CoordinatesRequest.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.CoordinatesRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.latitude = reader.double();
                                break;
                            }
                        case 2: {
                                message.longitude = reader.double();
                                break;
                            }
                        case 3: {
                                message.lineId = reader.uint32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a CoordinatesRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.CoordinatesRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.CoordinatesRequest} CoordinatesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CoordinatesRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CoordinatesRequest message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.CoordinatesRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CoordinatesRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
                    if (message.latitude != null && message.hasOwnProperty("latitude"))
                        if (typeof message.latitude !== "number")
                            return "latitude: number expected";
                    if (message.longitude != null && message.hasOwnProperty("longitude"))
                        if (typeof message.longitude !== "number")
                            return "longitude: number expected";
                    if (message.lineId != null && message.hasOwnProperty("lineId")) {
                        properties._lineId = 1;
                        if (!$util.isInteger(message.lineId))
                            return "lineId: integer expected";
                    }
                    return null;
                };

                /**
                 * Creates a CoordinatesRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.CoordinatesRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.CoordinatesRequest} CoordinatesRequest
                 */
                CoordinatesRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.CoordinatesRequest)
                        return object;
                    let message = new $root.app.trainlcd.grpc.CoordinatesRequest();
                    if (object.latitude != null)
                        message.latitude = Number(object.latitude);
                    if (object.longitude != null)
                        message.longitude = Number(object.longitude);
                    if (object.lineId != null)
                        message.lineId = object.lineId >>> 0;
                    return message;
                };

                /**
                 * Creates a plain object from a CoordinatesRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.CoordinatesRequest
                 * @static
                 * @param {app.trainlcd.grpc.CoordinatesRequest} message CoordinatesRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CoordinatesRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.latitude = 0;
                        object.longitude = 0;
                    }
                    if (message.latitude != null && message.hasOwnProperty("latitude"))
                        object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
                    if (message.longitude != null && message.hasOwnProperty("longitude"))
                        object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
                    if (message.lineId != null && message.hasOwnProperty("lineId")) {
                        object.lineId = message.lineId;
                        if (options.oneofs)
                            object._lineId = "lineId";
                    }
                    return object;
                };

                /**
                 * Converts this CoordinatesRequest to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.CoordinatesRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CoordinatesRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CoordinatesRequest
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.CoordinatesRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CoordinatesRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.CoordinatesRequest";
                };

                return CoordinatesRequest;
            })();

            grpc.GetLinesByNameRequest = (function() {

                /**
                 * Properties of a GetLinesByNameRequest.
                 * @memberof app.trainlcd.grpc
                 * @interface IGetLinesByNameRequest
                 * @property {string|null} [lineName] GetLinesByNameRequest lineName
                 * @property {number|null} [limit] GetLinesByNameRequest limit
                 */

                /**
                 * Constructs a new GetLinesByNameRequest.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a GetLinesByNameRequest.
                 * @implements IGetLinesByNameRequest
                 * @constructor
                 * @param {app.trainlcd.grpc.IGetLinesByNameRequest=} [properties] Properties to set
                 */
                function GetLinesByNameRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetLinesByNameRequest lineName.
                 * @member {string} lineName
                 * @memberof app.trainlcd.grpc.GetLinesByNameRequest
                 * @instance
                 */
                GetLinesByNameRequest.prototype.lineName = "";

                /**
                 * GetLinesByNameRequest limit.
                 * @member {number|null|undefined} limit
                 * @memberof app.trainlcd.grpc.GetLinesByNameRequest
                 * @instance
                 */
                GetLinesByNameRequest.prototype.limit = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * GetLinesByNameRequest _limit.
                 * @member {"limit"|undefined} _limit
                 * @memberof app.trainlcd.grpc.GetLinesByNameRequest
                 * @instance
                 */
                Object.defineProperty(GetLinesByNameRequest.prototype, "_limit", {
                    get: $util.oneOfGetter($oneOfFields = ["limit"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new GetLinesByNameRequest instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.GetLinesByNameRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetLinesByNameRequest=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.GetLinesByNameRequest} GetLinesByNameRequest instance
                 */
                GetLinesByNameRequest.create = function create(properties) {
                    return new GetLinesByNameRequest(properties);
                };

                /**
                 * Encodes the specified GetLinesByNameRequest message. Does not implicitly {@link app.trainlcd.grpc.GetLinesByNameRequest.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.GetLinesByNameRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetLinesByNameRequest} message GetLinesByNameRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetLinesByNameRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.lineName != null && Object.hasOwnProperty.call(message, "lineName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.lineName);
                    if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.limit);
                    return writer;
                };

                /**
                 * Encodes the specified GetLinesByNameRequest message, length delimited. Does not implicitly {@link app.trainlcd.grpc.GetLinesByNameRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.GetLinesByNameRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetLinesByNameRequest} message GetLinesByNameRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetLinesByNameRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetLinesByNameRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.GetLinesByNameRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.GetLinesByNameRequest} GetLinesByNameRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetLinesByNameRequest.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.GetLinesByNameRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.lineName = reader.string();
                                break;
                            }
                        case 2: {
                                message.limit = reader.uint32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GetLinesByNameRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.GetLinesByNameRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.GetLinesByNameRequest} GetLinesByNameRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetLinesByNameRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetLinesByNameRequest message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.GetLinesByNameRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetLinesByNameRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
                    if (message.lineName != null && message.hasOwnProperty("lineName"))
                        if (!$util.isString(message.lineName))
                            return "lineName: string expected";
                    if (message.limit != null && message.hasOwnProperty("limit")) {
                        properties._limit = 1;
                        if (!$util.isInteger(message.limit))
                            return "limit: integer expected";
                    }
                    return null;
                };

                /**
                 * Creates a GetLinesByNameRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.GetLinesByNameRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.GetLinesByNameRequest} GetLinesByNameRequest
                 */
                GetLinesByNameRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.GetLinesByNameRequest)
                        return object;
                    let message = new $root.app.trainlcd.grpc.GetLinesByNameRequest();
                    if (object.lineName != null)
                        message.lineName = String(object.lineName);
                    if (object.limit != null)
                        message.limit = object.limit >>> 0;
                    return message;
                };

                /**
                 * Creates a plain object from a GetLinesByNameRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.GetLinesByNameRequest
                 * @static
                 * @param {app.trainlcd.grpc.GetLinesByNameRequest} message GetLinesByNameRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetLinesByNameRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.lineName = "";
                    if (message.lineName != null && message.hasOwnProperty("lineName"))
                        object.lineName = message.lineName;
                    if (message.limit != null && message.hasOwnProperty("limit")) {
                        object.limit = message.limit;
                        if (options.oneofs)
                            object._limit = "limit";
                    }
                    return object;
                };

                /**
                 * Converts this GetLinesByNameRequest to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.GetLinesByNameRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetLinesByNameRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetLinesByNameRequest
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.GetLinesByNameRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetLinesByNameRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.GetLinesByNameRequest";
                };

                return GetLinesByNameRequest;
            })();

            grpc.GetConnectedStationsRequest = (function() {

                /**
                 * Properties of a GetConnectedStationsRequest.
                 * @memberof app.trainlcd.grpc
                 * @interface IGetConnectedStationsRequest
                 * @property {number|null} [fromStationGroupId] GetConnectedStationsRequest fromStationGroupId
                 * @property {number|null} [toStationGroupId] GetConnectedStationsRequest toStationGroupId
                 */

                /**
                 * Constructs a new GetConnectedStationsRequest.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a GetConnectedStationsRequest.
                 * @implements IGetConnectedStationsRequest
                 * @constructor
                 * @param {app.trainlcd.grpc.IGetConnectedStationsRequest=} [properties] Properties to set
                 */
                function GetConnectedStationsRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetConnectedStationsRequest fromStationGroupId.
                 * @member {number} fromStationGroupId
                 * @memberof app.trainlcd.grpc.GetConnectedStationsRequest
                 * @instance
                 */
                GetConnectedStationsRequest.prototype.fromStationGroupId = 0;

                /**
                 * GetConnectedStationsRequest toStationGroupId.
                 * @member {number} toStationGroupId
                 * @memberof app.trainlcd.grpc.GetConnectedStationsRequest
                 * @instance
                 */
                GetConnectedStationsRequest.prototype.toStationGroupId = 0;

                /**
                 * Creates a new GetConnectedStationsRequest instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.GetConnectedStationsRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetConnectedStationsRequest=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.GetConnectedStationsRequest} GetConnectedStationsRequest instance
                 */
                GetConnectedStationsRequest.create = function create(properties) {
                    return new GetConnectedStationsRequest(properties);
                };

                /**
                 * Encodes the specified GetConnectedStationsRequest message. Does not implicitly {@link app.trainlcd.grpc.GetConnectedStationsRequest.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.GetConnectedStationsRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetConnectedStationsRequest} message GetConnectedStationsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetConnectedStationsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.fromStationGroupId != null && Object.hasOwnProperty.call(message, "fromStationGroupId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.fromStationGroupId);
                    if (message.toStationGroupId != null && Object.hasOwnProperty.call(message, "toStationGroupId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.toStationGroupId);
                    return writer;
                };

                /**
                 * Encodes the specified GetConnectedStationsRequest message, length delimited. Does not implicitly {@link app.trainlcd.grpc.GetConnectedStationsRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.GetConnectedStationsRequest
                 * @static
                 * @param {app.trainlcd.grpc.IGetConnectedStationsRequest} message GetConnectedStationsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetConnectedStationsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetConnectedStationsRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.GetConnectedStationsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.GetConnectedStationsRequest} GetConnectedStationsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetConnectedStationsRequest.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.GetConnectedStationsRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.fromStationGroupId = reader.uint32();
                                break;
                            }
                        case 2: {
                                message.toStationGroupId = reader.uint32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GetConnectedStationsRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.GetConnectedStationsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.GetConnectedStationsRequest} GetConnectedStationsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetConnectedStationsRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetConnectedStationsRequest message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.GetConnectedStationsRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetConnectedStationsRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.fromStationGroupId != null && message.hasOwnProperty("fromStationGroupId"))
                        if (!$util.isInteger(message.fromStationGroupId))
                            return "fromStationGroupId: integer expected";
                    if (message.toStationGroupId != null && message.hasOwnProperty("toStationGroupId"))
                        if (!$util.isInteger(message.toStationGroupId))
                            return "toStationGroupId: integer expected";
                    return null;
                };

                /**
                 * Creates a GetConnectedStationsRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.GetConnectedStationsRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.GetConnectedStationsRequest} GetConnectedStationsRequest
                 */
                GetConnectedStationsRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.GetConnectedStationsRequest)
                        return object;
                    let message = new $root.app.trainlcd.grpc.GetConnectedStationsRequest();
                    if (object.fromStationGroupId != null)
                        message.fromStationGroupId = object.fromStationGroupId >>> 0;
                    if (object.toStationGroupId != null)
                        message.toStationGroupId = object.toStationGroupId >>> 0;
                    return message;
                };

                /**
                 * Creates a plain object from a GetConnectedStationsRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.GetConnectedStationsRequest
                 * @static
                 * @param {app.trainlcd.grpc.GetConnectedStationsRequest} message GetConnectedStationsRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetConnectedStationsRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.fromStationGroupId = 0;
                        object.toStationGroupId = 0;
                    }
                    if (message.fromStationGroupId != null && message.hasOwnProperty("fromStationGroupId"))
                        object.fromStationGroupId = message.fromStationGroupId;
                    if (message.toStationGroupId != null && message.hasOwnProperty("toStationGroupId"))
                        object.toStationGroupId = message.toStationGroupId;
                    return object;
                };

                /**
                 * Converts this GetConnectedStationsRequest to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.GetConnectedStationsRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetConnectedStationsRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetConnectedStationsRequest
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.GetConnectedStationsRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetConnectedStationsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.GetConnectedStationsRequest";
                };

                return GetConnectedStationsRequest;
            })();

            /**
             * OperationStatus enum.
             * @name app.trainlcd.grpc.OperationStatus
             * @enum {number}
             * @property {number} InOperation=0 InOperation value
             * @property {number} NotOpened=1 NotOpened value
             * @property {number} Closed=2 Closed value
             */
            grpc.OperationStatus = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "InOperation"] = 0;
                values[valuesById[1] = "NotOpened"] = 1;
                values[valuesById[2] = "Closed"] = 2;
                return values;
            })();

            grpc.StationNumber = (function() {

                /**
                 * Properties of a StationNumber.
                 * @memberof app.trainlcd.grpc
                 * @interface IStationNumber
                 * @property {string|null} [lineSymbol] StationNumber lineSymbol
                 * @property {string|null} [lineSymbolColor] StationNumber lineSymbolColor
                 * @property {string|null} [lineSymbolShape] StationNumber lineSymbolShape
                 * @property {string|null} [stationNumber] StationNumber stationNumber
                 */

                /**
                 * Constructs a new StationNumber.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a StationNumber.
                 * @implements IStationNumber
                 * @constructor
                 * @param {app.trainlcd.grpc.IStationNumber=} [properties] Properties to set
                 */
                function StationNumber(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * StationNumber lineSymbol.
                 * @member {string} lineSymbol
                 * @memberof app.trainlcd.grpc.StationNumber
                 * @instance
                 */
                StationNumber.prototype.lineSymbol = "";

                /**
                 * StationNumber lineSymbolColor.
                 * @member {string} lineSymbolColor
                 * @memberof app.trainlcd.grpc.StationNumber
                 * @instance
                 */
                StationNumber.prototype.lineSymbolColor = "";

                /**
                 * StationNumber lineSymbolShape.
                 * @member {string} lineSymbolShape
                 * @memberof app.trainlcd.grpc.StationNumber
                 * @instance
                 */
                StationNumber.prototype.lineSymbolShape = "";

                /**
                 * StationNumber stationNumber.
                 * @member {string} stationNumber
                 * @memberof app.trainlcd.grpc.StationNumber
                 * @instance
                 */
                StationNumber.prototype.stationNumber = "";

                /**
                 * Creates a new StationNumber instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.StationNumber
                 * @static
                 * @param {app.trainlcd.grpc.IStationNumber=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.StationNumber} StationNumber instance
                 */
                StationNumber.create = function create(properties) {
                    return new StationNumber(properties);
                };

                /**
                 * Encodes the specified StationNumber message. Does not implicitly {@link app.trainlcd.grpc.StationNumber.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.StationNumber
                 * @static
                 * @param {app.trainlcd.grpc.IStationNumber} message StationNumber message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StationNumber.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.lineSymbol != null && Object.hasOwnProperty.call(message, "lineSymbol"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.lineSymbol);
                    if (message.lineSymbolColor != null && Object.hasOwnProperty.call(message, "lineSymbolColor"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.lineSymbolColor);
                    if (message.lineSymbolShape != null && Object.hasOwnProperty.call(message, "lineSymbolShape"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.lineSymbolShape);
                    if (message.stationNumber != null && Object.hasOwnProperty.call(message, "stationNumber"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.stationNumber);
                    return writer;
                };

                /**
                 * Encodes the specified StationNumber message, length delimited. Does not implicitly {@link app.trainlcd.grpc.StationNumber.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.StationNumber
                 * @static
                 * @param {app.trainlcd.grpc.IStationNumber} message StationNumber message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StationNumber.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a StationNumber message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.StationNumber
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.StationNumber} StationNumber
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StationNumber.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.StationNumber();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.lineSymbol = reader.string();
                                break;
                            }
                        case 2: {
                                message.lineSymbolColor = reader.string();
                                break;
                            }
                        case 3: {
                                message.lineSymbolShape = reader.string();
                                break;
                            }
                        case 4: {
                                message.stationNumber = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a StationNumber message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.StationNumber
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.StationNumber} StationNumber
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StationNumber.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a StationNumber message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.StationNumber
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                StationNumber.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.lineSymbol != null && message.hasOwnProperty("lineSymbol"))
                        if (!$util.isString(message.lineSymbol))
                            return "lineSymbol: string expected";
                    if (message.lineSymbolColor != null && message.hasOwnProperty("lineSymbolColor"))
                        if (!$util.isString(message.lineSymbolColor))
                            return "lineSymbolColor: string expected";
                    if (message.lineSymbolShape != null && message.hasOwnProperty("lineSymbolShape"))
                        if (!$util.isString(message.lineSymbolShape))
                            return "lineSymbolShape: string expected";
                    if (message.stationNumber != null && message.hasOwnProperty("stationNumber"))
                        if (!$util.isString(message.stationNumber))
                            return "stationNumber: string expected";
                    return null;
                };

                /**
                 * Creates a StationNumber message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.StationNumber
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.StationNumber} StationNumber
                 */
                StationNumber.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.StationNumber)
                        return object;
                    let message = new $root.app.trainlcd.grpc.StationNumber();
                    if (object.lineSymbol != null)
                        message.lineSymbol = String(object.lineSymbol);
                    if (object.lineSymbolColor != null)
                        message.lineSymbolColor = String(object.lineSymbolColor);
                    if (object.lineSymbolShape != null)
                        message.lineSymbolShape = String(object.lineSymbolShape);
                    if (object.stationNumber != null)
                        message.stationNumber = String(object.stationNumber);
                    return message;
                };

                /**
                 * Creates a plain object from a StationNumber message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.StationNumber
                 * @static
                 * @param {app.trainlcd.grpc.StationNumber} message StationNumber
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                StationNumber.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.lineSymbol = "";
                        object.lineSymbolColor = "";
                        object.lineSymbolShape = "";
                        object.stationNumber = "";
                    }
                    if (message.lineSymbol != null && message.hasOwnProperty("lineSymbol"))
                        object.lineSymbol = message.lineSymbol;
                    if (message.lineSymbolColor != null && message.hasOwnProperty("lineSymbolColor"))
                        object.lineSymbolColor = message.lineSymbolColor;
                    if (message.lineSymbolShape != null && message.hasOwnProperty("lineSymbolShape"))
                        object.lineSymbolShape = message.lineSymbolShape;
                    if (message.stationNumber != null && message.hasOwnProperty("stationNumber"))
                        object.stationNumber = message.stationNumber;
                    return object;
                };

                /**
                 * Converts this StationNumber to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.StationNumber
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                StationNumber.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for StationNumber
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.StationNumber
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                StationNumber.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.StationNumber";
                };

                return StationNumber;
            })();

            /**
             * StopCondition enum.
             * @name app.trainlcd.grpc.StopCondition
             * @enum {number}
             * @property {number} All=0 All value
             * @property {number} Not=1 Not value
             * @property {number} Partial=2 Partial value
             * @property {number} Weekday=3 Weekday value
             * @property {number} Holiday=4 Holiday value
             * @property {number} PartialStop=5 PartialStop value
             */
            grpc.StopCondition = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "All"] = 0;
                values[valuesById[1] = "Not"] = 1;
                values[valuesById[2] = "Partial"] = 2;
                values[valuesById[3] = "Weekday"] = 3;
                values[valuesById[4] = "Holiday"] = 4;
                values[valuesById[5] = "PartialStop"] = 5;
                return values;
            })();

            /**
             * TrainDirection enum.
             * @name app.trainlcd.grpc.TrainDirection
             * @enum {number}
             * @property {number} Both=0 Both value
             * @property {number} Inbound=1 Inbound value
             * @property {number} Outbound=2 Outbound value
             */
            grpc.TrainDirection = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Both"] = 0;
                values[valuesById[1] = "Inbound"] = 1;
                values[valuesById[2] = "Outbound"] = 2;
                return values;
            })();

            /**
             * TrainTypeKind enum.
             * @name app.trainlcd.grpc.TrainTypeKind
             * @enum {number}
             * @property {number} Default=0 Default value
             * @property {number} Branch=1 Branch value
             * @property {number} Rapid=2 Rapid value
             * @property {number} Express=3 Express value
             * @property {number} LimitedExpress=4 LimitedExpress value
             * @property {number} HighSpeedRapid=5 HighSpeedRapid value
             */
            grpc.TrainTypeKind = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Default"] = 0;
                values[valuesById[1] = "Branch"] = 1;
                values[valuesById[2] = "Rapid"] = 2;
                values[valuesById[3] = "Express"] = 3;
                values[valuesById[4] = "LimitedExpress"] = 4;
                values[valuesById[5] = "HighSpeedRapid"] = 5;
                return values;
            })();

            grpc.TrainType = (function() {

                /**
                 * Properties of a TrainType.
                 * @memberof app.trainlcd.grpc
                 * @interface ITrainType
                 * @property {number|null} [id] TrainType id
                 * @property {number|null} [typeId] TrainType typeId
                 * @property {number|null} [groupId] TrainType groupId
                 * @property {string|null} [name] TrainType name
                 * @property {string|null} [nameKatakana] TrainType nameKatakana
                 * @property {string|null} [nameRoman] TrainType nameRoman
                 * @property {string|null} [nameChinese] TrainType nameChinese
                 * @property {string|null} [nameKorean] TrainType nameKorean
                 * @property {string|null} [color] TrainType color
                 * @property {Array.<app.trainlcd.grpc.ILine>|null} [lines] TrainType lines
                 * @property {app.trainlcd.grpc.ILine|null} [line] TrainType line
                 * @property {app.trainlcd.grpc.TrainDirection|null} [direction] TrainType direction
                 * @property {app.trainlcd.grpc.TrainTypeKind|null} [kind] TrainType kind
                 */

                /**
                 * Constructs a new TrainType.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a TrainType.
                 * @implements ITrainType
                 * @constructor
                 * @param {app.trainlcd.grpc.ITrainType=} [properties] Properties to set
                 */
                function TrainType(properties) {
                    this.lines = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * TrainType id.
                 * @member {number} id
                 * @memberof app.trainlcd.grpc.TrainType
                 * @instance
                 */
                TrainType.prototype.id = 0;

                /**
                 * TrainType typeId.
                 * @member {number} typeId
                 * @memberof app.trainlcd.grpc.TrainType
                 * @instance
                 */
                TrainType.prototype.typeId = 0;

                /**
                 * TrainType groupId.
                 * @member {number} groupId
                 * @memberof app.trainlcd.grpc.TrainType
                 * @instance
                 */
                TrainType.prototype.groupId = 0;

                /**
                 * TrainType name.
                 * @member {string} name
                 * @memberof app.trainlcd.grpc.TrainType
                 * @instance
                 */
                TrainType.prototype.name = "";

                /**
                 * TrainType nameKatakana.
                 * @member {string} nameKatakana
                 * @memberof app.trainlcd.grpc.TrainType
                 * @instance
                 */
                TrainType.prototype.nameKatakana = "";

                /**
                 * TrainType nameRoman.
                 * @member {string|null|undefined} nameRoman
                 * @memberof app.trainlcd.grpc.TrainType
                 * @instance
                 */
                TrainType.prototype.nameRoman = null;

                /**
                 * TrainType nameChinese.
                 * @member {string|null|undefined} nameChinese
                 * @memberof app.trainlcd.grpc.TrainType
                 * @instance
                 */
                TrainType.prototype.nameChinese = null;

                /**
                 * TrainType nameKorean.
                 * @member {string|null|undefined} nameKorean
                 * @memberof app.trainlcd.grpc.TrainType
                 * @instance
                 */
                TrainType.prototype.nameKorean = null;

                /**
                 * TrainType color.
                 * @member {string} color
                 * @memberof app.trainlcd.grpc.TrainType
                 * @instance
                 */
                TrainType.prototype.color = "";

                /**
                 * TrainType lines.
                 * @member {Array.<app.trainlcd.grpc.ILine>} lines
                 * @memberof app.trainlcd.grpc.TrainType
                 * @instance
                 */
                TrainType.prototype.lines = $util.emptyArray;

                /**
                 * TrainType line.
                 * @member {app.trainlcd.grpc.ILine|null|undefined} line
                 * @memberof app.trainlcd.grpc.TrainType
                 * @instance
                 */
                TrainType.prototype.line = null;

                /**
                 * TrainType direction.
                 * @member {app.trainlcd.grpc.TrainDirection} direction
                 * @memberof app.trainlcd.grpc.TrainType
                 * @instance
                 */
                TrainType.prototype.direction = 0;

                /**
                 * TrainType kind.
                 * @member {app.trainlcd.grpc.TrainTypeKind} kind
                 * @memberof app.trainlcd.grpc.TrainType
                 * @instance
                 */
                TrainType.prototype.kind = 0;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * TrainType _nameRoman.
                 * @member {"nameRoman"|undefined} _nameRoman
                 * @memberof app.trainlcd.grpc.TrainType
                 * @instance
                 */
                Object.defineProperty(TrainType.prototype, "_nameRoman", {
                    get: $util.oneOfGetter($oneOfFields = ["nameRoman"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * TrainType _nameChinese.
                 * @member {"nameChinese"|undefined} _nameChinese
                 * @memberof app.trainlcd.grpc.TrainType
                 * @instance
                 */
                Object.defineProperty(TrainType.prototype, "_nameChinese", {
                    get: $util.oneOfGetter($oneOfFields = ["nameChinese"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * TrainType _nameKorean.
                 * @member {"nameKorean"|undefined} _nameKorean
                 * @memberof app.trainlcd.grpc.TrainType
                 * @instance
                 */
                Object.defineProperty(TrainType.prototype, "_nameKorean", {
                    get: $util.oneOfGetter($oneOfFields = ["nameKorean"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * TrainType _line.
                 * @member {"line"|undefined} _line
                 * @memberof app.trainlcd.grpc.TrainType
                 * @instance
                 */
                Object.defineProperty(TrainType.prototype, "_line", {
                    get: $util.oneOfGetter($oneOfFields = ["line"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new TrainType instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.TrainType
                 * @static
                 * @param {app.trainlcd.grpc.ITrainType=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.TrainType} TrainType instance
                 */
                TrainType.create = function create(properties) {
                    return new TrainType(properties);
                };

                /**
                 * Encodes the specified TrainType message. Does not implicitly {@link app.trainlcd.grpc.TrainType.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.TrainType
                 * @static
                 * @param {app.trainlcd.grpc.ITrainType} message TrainType message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TrainType.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
                    if (message.typeId != null && Object.hasOwnProperty.call(message, "typeId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.typeId);
                    if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.groupId);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
                    if (message.nameKatakana != null && Object.hasOwnProperty.call(message, "nameKatakana"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.nameKatakana);
                    if (message.nameRoman != null && Object.hasOwnProperty.call(message, "nameRoman"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.nameRoman);
                    if (message.nameChinese != null && Object.hasOwnProperty.call(message, "nameChinese"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.nameChinese);
                    if (message.nameKorean != null && Object.hasOwnProperty.call(message, "nameKorean"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.nameKorean);
                    if (message.color != null && Object.hasOwnProperty.call(message, "color"))
                        writer.uint32(/* id 9, wireType 2 =*/74).string(message.color);
                    if (message.lines != null && message.lines.length)
                        for (let i = 0; i < message.lines.length; ++i)
                            $root.app.trainlcd.grpc.Line.encode(message.lines[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                    if (message.line != null && Object.hasOwnProperty.call(message, "line"))
                        $root.app.trainlcd.grpc.Line.encode(message.line, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                    if (message.direction != null && Object.hasOwnProperty.call(message, "direction"))
                        writer.uint32(/* id 12, wireType 0 =*/96).int32(message.direction);
                    if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                        writer.uint32(/* id 13, wireType 0 =*/104).int32(message.kind);
                    return writer;
                };

                /**
                 * Encodes the specified TrainType message, length delimited. Does not implicitly {@link app.trainlcd.grpc.TrainType.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.TrainType
                 * @static
                 * @param {app.trainlcd.grpc.ITrainType} message TrainType message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TrainType.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a TrainType message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.TrainType
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.TrainType} TrainType
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TrainType.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.TrainType();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.id = reader.uint32();
                                break;
                            }
                        case 2: {
                                message.typeId = reader.uint32();
                                break;
                            }
                        case 3: {
                                message.groupId = reader.uint32();
                                break;
                            }
                        case 4: {
                                message.name = reader.string();
                                break;
                            }
                        case 5: {
                                message.nameKatakana = reader.string();
                                break;
                            }
                        case 6: {
                                message.nameRoman = reader.string();
                                break;
                            }
                        case 7: {
                                message.nameChinese = reader.string();
                                break;
                            }
                        case 8: {
                                message.nameKorean = reader.string();
                                break;
                            }
                        case 9: {
                                message.color = reader.string();
                                break;
                            }
                        case 10: {
                                if (!(message.lines && message.lines.length))
                                    message.lines = [];
                                message.lines.push($root.app.trainlcd.grpc.Line.decode(reader, reader.uint32()));
                                break;
                            }
                        case 11: {
                                message.line = $root.app.trainlcd.grpc.Line.decode(reader, reader.uint32());
                                break;
                            }
                        case 12: {
                                message.direction = reader.int32();
                                break;
                            }
                        case 13: {
                                message.kind = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a TrainType message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.TrainType
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.TrainType} TrainType
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TrainType.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a TrainType message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.TrainType
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                TrainType.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id))
                            return "id: integer expected";
                    if (message.typeId != null && message.hasOwnProperty("typeId"))
                        if (!$util.isInteger(message.typeId))
                            return "typeId: integer expected";
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        if (!$util.isInteger(message.groupId))
                            return "groupId: integer expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.nameKatakana != null && message.hasOwnProperty("nameKatakana"))
                        if (!$util.isString(message.nameKatakana))
                            return "nameKatakana: string expected";
                    if (message.nameRoman != null && message.hasOwnProperty("nameRoman")) {
                        properties._nameRoman = 1;
                        if (!$util.isString(message.nameRoman))
                            return "nameRoman: string expected";
                    }
                    if (message.nameChinese != null && message.hasOwnProperty("nameChinese")) {
                        properties._nameChinese = 1;
                        if (!$util.isString(message.nameChinese))
                            return "nameChinese: string expected";
                    }
                    if (message.nameKorean != null && message.hasOwnProperty("nameKorean")) {
                        properties._nameKorean = 1;
                        if (!$util.isString(message.nameKorean))
                            return "nameKorean: string expected";
                    }
                    if (message.color != null && message.hasOwnProperty("color"))
                        if (!$util.isString(message.color))
                            return "color: string expected";
                    if (message.lines != null && message.hasOwnProperty("lines")) {
                        if (!Array.isArray(message.lines))
                            return "lines: array expected";
                        for (let i = 0; i < message.lines.length; ++i) {
                            let error = $root.app.trainlcd.grpc.Line.verify(message.lines[i]);
                            if (error)
                                return "lines." + error;
                        }
                    }
                    if (message.line != null && message.hasOwnProperty("line")) {
                        properties._line = 1;
                        {
                            let error = $root.app.trainlcd.grpc.Line.verify(message.line);
                            if (error)
                                return "line." + error;
                        }
                    }
                    if (message.direction != null && message.hasOwnProperty("direction"))
                        switch (message.direction) {
                        default:
                            return "direction: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.kind != null && message.hasOwnProperty("kind"))
                        switch (message.kind) {
                        default:
                            return "kind: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a TrainType message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.TrainType
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.TrainType} TrainType
                 */
                TrainType.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.TrainType)
                        return object;
                    let message = new $root.app.trainlcd.grpc.TrainType();
                    if (object.id != null)
                        message.id = object.id >>> 0;
                    if (object.typeId != null)
                        message.typeId = object.typeId >>> 0;
                    if (object.groupId != null)
                        message.groupId = object.groupId >>> 0;
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.nameKatakana != null)
                        message.nameKatakana = String(object.nameKatakana);
                    if (object.nameRoman != null)
                        message.nameRoman = String(object.nameRoman);
                    if (object.nameChinese != null)
                        message.nameChinese = String(object.nameChinese);
                    if (object.nameKorean != null)
                        message.nameKorean = String(object.nameKorean);
                    if (object.color != null)
                        message.color = String(object.color);
                    if (object.lines) {
                        if (!Array.isArray(object.lines))
                            throw TypeError(".app.trainlcd.grpc.TrainType.lines: array expected");
                        message.lines = [];
                        for (let i = 0; i < object.lines.length; ++i) {
                            if (typeof object.lines[i] !== "object")
                                throw TypeError(".app.trainlcd.grpc.TrainType.lines: object expected");
                            message.lines[i] = $root.app.trainlcd.grpc.Line.fromObject(object.lines[i]);
                        }
                    }
                    if (object.line != null) {
                        if (typeof object.line !== "object")
                            throw TypeError(".app.trainlcd.grpc.TrainType.line: object expected");
                        message.line = $root.app.trainlcd.grpc.Line.fromObject(object.line);
                    }
                    switch (object.direction) {
                    default:
                        if (typeof object.direction === "number") {
                            message.direction = object.direction;
                            break;
                        }
                        break;
                    case "Both":
                    case 0:
                        message.direction = 0;
                        break;
                    case "Inbound":
                    case 1:
                        message.direction = 1;
                        break;
                    case "Outbound":
                    case 2:
                        message.direction = 2;
                        break;
                    }
                    switch (object.kind) {
                    default:
                        if (typeof object.kind === "number") {
                            message.kind = object.kind;
                            break;
                        }
                        break;
                    case "Default":
                    case 0:
                        message.kind = 0;
                        break;
                    case "Branch":
                    case 1:
                        message.kind = 1;
                        break;
                    case "Rapid":
                    case 2:
                        message.kind = 2;
                        break;
                    case "Express":
                    case 3:
                        message.kind = 3;
                        break;
                    case "LimitedExpress":
                    case 4:
                        message.kind = 4;
                        break;
                    case "HighSpeedRapid":
                    case 5:
                        message.kind = 5;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a TrainType message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.TrainType
                 * @static
                 * @param {app.trainlcd.grpc.TrainType} message TrainType
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                TrainType.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.lines = [];
                    if (options.defaults) {
                        object.id = 0;
                        object.typeId = 0;
                        object.groupId = 0;
                        object.name = "";
                        object.nameKatakana = "";
                        object.color = "";
                        object.direction = options.enums === String ? "Both" : 0;
                        object.kind = options.enums === String ? "Default" : 0;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.typeId != null && message.hasOwnProperty("typeId"))
                        object.typeId = message.typeId;
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        object.groupId = message.groupId;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.nameKatakana != null && message.hasOwnProperty("nameKatakana"))
                        object.nameKatakana = message.nameKatakana;
                    if (message.nameRoman != null && message.hasOwnProperty("nameRoman")) {
                        object.nameRoman = message.nameRoman;
                        if (options.oneofs)
                            object._nameRoman = "nameRoman";
                    }
                    if (message.nameChinese != null && message.hasOwnProperty("nameChinese")) {
                        object.nameChinese = message.nameChinese;
                        if (options.oneofs)
                            object._nameChinese = "nameChinese";
                    }
                    if (message.nameKorean != null && message.hasOwnProperty("nameKorean")) {
                        object.nameKorean = message.nameKorean;
                        if (options.oneofs)
                            object._nameKorean = "nameKorean";
                    }
                    if (message.color != null && message.hasOwnProperty("color"))
                        object.color = message.color;
                    if (message.lines && message.lines.length) {
                        object.lines = [];
                        for (let j = 0; j < message.lines.length; ++j)
                            object.lines[j] = $root.app.trainlcd.grpc.Line.toObject(message.lines[j], options);
                    }
                    if (message.line != null && message.hasOwnProperty("line")) {
                        object.line = $root.app.trainlcd.grpc.Line.toObject(message.line, options);
                        if (options.oneofs)
                            object._line = "line";
                    }
                    if (message.direction != null && message.hasOwnProperty("direction"))
                        object.direction = options.enums === String ? $root.app.trainlcd.grpc.TrainDirection[message.direction] === undefined ? message.direction : $root.app.trainlcd.grpc.TrainDirection[message.direction] : message.direction;
                    if (message.kind != null && message.hasOwnProperty("kind"))
                        object.kind = options.enums === String ? $root.app.trainlcd.grpc.TrainTypeKind[message.kind] === undefined ? message.kind : $root.app.trainlcd.grpc.TrainTypeKind[message.kind] : message.kind;
                    return object;
                };

                /**
                 * Converts this TrainType to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.TrainType
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                TrainType.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for TrainType
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.TrainType
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                TrainType.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.TrainType";
                };

                return TrainType;
            })();

            grpc.Station = (function() {

                /**
                 * Properties of a Station.
                 * @memberof app.trainlcd.grpc
                 * @interface IStation
                 * @property {number|null} [id] Station id
                 * @property {number|null} [groupId] Station groupId
                 * @property {string|null} [name] Station name
                 * @property {string|null} [nameKatakana] Station nameKatakana
                 * @property {string|null} [nameRoman] Station nameRoman
                 * @property {string|null} [nameChinese] Station nameChinese
                 * @property {string|null} [nameKorean] Station nameKorean
                 * @property {string|null} [threeLetterCode] Station threeLetterCode
                 * @property {Array.<app.trainlcd.grpc.ILine>|null} [lines] Station lines
                 * @property {app.trainlcd.grpc.ILine|null} [line] Station line
                 * @property {number|null} [prefectureId] Station prefectureId
                 * @property {string|null} [postalCode] Station postalCode
                 * @property {string|null} [address] Station address
                 * @property {number|null} [latitude] Station latitude
                 * @property {number|null} [longitude] Station longitude
                 * @property {string|null} [openedAt] Station openedAt
                 * @property {string|null} [closedAt] Station closedAt
                 * @property {app.trainlcd.grpc.OperationStatus|null} [status] Station status
                 * @property {Array.<app.trainlcd.grpc.IStationNumber>|null} [stationNumbers] Station stationNumbers
                 * @property {app.trainlcd.grpc.StopCondition|null} [stopCondition] Station stopCondition
                 * @property {number|null} [distance] Station distance
                 * @property {boolean|null} [hasTrainTypes] Station hasTrainTypes
                 * @property {app.trainlcd.grpc.ITrainType|null} [trainType] Station trainType
                 */

                /**
                 * Constructs a new Station.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a Station.
                 * @implements IStation
                 * @constructor
                 * @param {app.trainlcd.grpc.IStation=} [properties] Properties to set
                 */
                function Station(properties) {
                    this.lines = [];
                    this.stationNumbers = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Station id.
                 * @member {number} id
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Station.prototype.id = 0;

                /**
                 * Station groupId.
                 * @member {number} groupId
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Station.prototype.groupId = 0;

                /**
                 * Station name.
                 * @member {string} name
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Station.prototype.name = "";

                /**
                 * Station nameKatakana.
                 * @member {string} nameKatakana
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Station.prototype.nameKatakana = "";

                /**
                 * Station nameRoman.
                 * @member {string|null|undefined} nameRoman
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Station.prototype.nameRoman = null;

                /**
                 * Station nameChinese.
                 * @member {string|null|undefined} nameChinese
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Station.prototype.nameChinese = null;

                /**
                 * Station nameKorean.
                 * @member {string|null|undefined} nameKorean
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Station.prototype.nameKorean = null;

                /**
                 * Station threeLetterCode.
                 * @member {string|null|undefined} threeLetterCode
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Station.prototype.threeLetterCode = null;

                /**
                 * Station lines.
                 * @member {Array.<app.trainlcd.grpc.ILine>} lines
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Station.prototype.lines = $util.emptyArray;

                /**
                 * Station line.
                 * @member {app.trainlcd.grpc.ILine|null|undefined} line
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Station.prototype.line = null;

                /**
                 * Station prefectureId.
                 * @member {number} prefectureId
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Station.prototype.prefectureId = 0;

                /**
                 * Station postalCode.
                 * @member {string} postalCode
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Station.prototype.postalCode = "";

                /**
                 * Station address.
                 * @member {string} address
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Station.prototype.address = "";

                /**
                 * Station latitude.
                 * @member {number} latitude
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Station.prototype.latitude = 0;

                /**
                 * Station longitude.
                 * @member {number} longitude
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Station.prototype.longitude = 0;

                /**
                 * Station openedAt.
                 * @member {string} openedAt
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Station.prototype.openedAt = "";

                /**
                 * Station closedAt.
                 * @member {string} closedAt
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Station.prototype.closedAt = "";

                /**
                 * Station status.
                 * @member {app.trainlcd.grpc.OperationStatus} status
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Station.prototype.status = 0;

                /**
                 * Station stationNumbers.
                 * @member {Array.<app.trainlcd.grpc.IStationNumber>} stationNumbers
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Station.prototype.stationNumbers = $util.emptyArray;

                /**
                 * Station stopCondition.
                 * @member {app.trainlcd.grpc.StopCondition} stopCondition
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Station.prototype.stopCondition = 0;

                /**
                 * Station distance.
                 * @member {number|null|undefined} distance
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Station.prototype.distance = null;

                /**
                 * Station hasTrainTypes.
                 * @member {boolean|null|undefined} hasTrainTypes
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Station.prototype.hasTrainTypes = null;

                /**
                 * Station trainType.
                 * @member {app.trainlcd.grpc.ITrainType|null|undefined} trainType
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Station.prototype.trainType = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * Station _nameRoman.
                 * @member {"nameRoman"|undefined} _nameRoman
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Object.defineProperty(Station.prototype, "_nameRoman", {
                    get: $util.oneOfGetter($oneOfFields = ["nameRoman"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Station _nameChinese.
                 * @member {"nameChinese"|undefined} _nameChinese
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Object.defineProperty(Station.prototype, "_nameChinese", {
                    get: $util.oneOfGetter($oneOfFields = ["nameChinese"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Station _nameKorean.
                 * @member {"nameKorean"|undefined} _nameKorean
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Object.defineProperty(Station.prototype, "_nameKorean", {
                    get: $util.oneOfGetter($oneOfFields = ["nameKorean"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Station _threeLetterCode.
                 * @member {"threeLetterCode"|undefined} _threeLetterCode
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Object.defineProperty(Station.prototype, "_threeLetterCode", {
                    get: $util.oneOfGetter($oneOfFields = ["threeLetterCode"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Station _line.
                 * @member {"line"|undefined} _line
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Object.defineProperty(Station.prototype, "_line", {
                    get: $util.oneOfGetter($oneOfFields = ["line"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Station _distance.
                 * @member {"distance"|undefined} _distance
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Object.defineProperty(Station.prototype, "_distance", {
                    get: $util.oneOfGetter($oneOfFields = ["distance"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Station _hasTrainTypes.
                 * @member {"hasTrainTypes"|undefined} _hasTrainTypes
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Object.defineProperty(Station.prototype, "_hasTrainTypes", {
                    get: $util.oneOfGetter($oneOfFields = ["hasTrainTypes"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Station _trainType.
                 * @member {"trainType"|undefined} _trainType
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 */
                Object.defineProperty(Station.prototype, "_trainType", {
                    get: $util.oneOfGetter($oneOfFields = ["trainType"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new Station instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.Station
                 * @static
                 * @param {app.trainlcd.grpc.IStation=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.Station} Station instance
                 */
                Station.create = function create(properties) {
                    return new Station(properties);
                };

                /**
                 * Encodes the specified Station message. Does not implicitly {@link app.trainlcd.grpc.Station.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.Station
                 * @static
                 * @param {app.trainlcd.grpc.IStation} message Station message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Station.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
                    if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.groupId);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                    if (message.nameKatakana != null && Object.hasOwnProperty.call(message, "nameKatakana"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.nameKatakana);
                    if (message.nameRoman != null && Object.hasOwnProperty.call(message, "nameRoman"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.nameRoman);
                    if (message.nameChinese != null && Object.hasOwnProperty.call(message, "nameChinese"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.nameChinese);
                    if (message.nameKorean != null && Object.hasOwnProperty.call(message, "nameKorean"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.nameKorean);
                    if (message.threeLetterCode != null && Object.hasOwnProperty.call(message, "threeLetterCode"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.threeLetterCode);
                    if (message.lines != null && message.lines.length)
                        for (let i = 0; i < message.lines.length; ++i)
                            $root.app.trainlcd.grpc.Line.encode(message.lines[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.line != null && Object.hasOwnProperty.call(message, "line"))
                        $root.app.trainlcd.grpc.Line.encode(message.line, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                    if (message.prefectureId != null && Object.hasOwnProperty.call(message, "prefectureId"))
                        writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.prefectureId);
                    if (message.postalCode != null && Object.hasOwnProperty.call(message, "postalCode"))
                        writer.uint32(/* id 12, wireType 2 =*/98).string(message.postalCode);
                    if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                        writer.uint32(/* id 13, wireType 2 =*/106).string(message.address);
                    if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                        writer.uint32(/* id 14, wireType 1 =*/113).double(message.latitude);
                    if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                        writer.uint32(/* id 15, wireType 1 =*/121).double(message.longitude);
                    if (message.openedAt != null && Object.hasOwnProperty.call(message, "openedAt"))
                        writer.uint32(/* id 16, wireType 2 =*/130).string(message.openedAt);
                    if (message.closedAt != null && Object.hasOwnProperty.call(message, "closedAt"))
                        writer.uint32(/* id 17, wireType 2 =*/138).string(message.closedAt);
                    if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                        writer.uint32(/* id 18, wireType 0 =*/144).int32(message.status);
                    if (message.stationNumbers != null && message.stationNumbers.length)
                        for (let i = 0; i < message.stationNumbers.length; ++i)
                            $root.app.trainlcd.grpc.StationNumber.encode(message.stationNumbers[i], writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
                    if (message.stopCondition != null && Object.hasOwnProperty.call(message, "stopCondition"))
                        writer.uint32(/* id 20, wireType 0 =*/160).int32(message.stopCondition);
                    if (message.distance != null && Object.hasOwnProperty.call(message, "distance"))
                        writer.uint32(/* id 21, wireType 1 =*/169).double(message.distance);
                    if (message.hasTrainTypes != null && Object.hasOwnProperty.call(message, "hasTrainTypes"))
                        writer.uint32(/* id 22, wireType 0 =*/176).bool(message.hasTrainTypes);
                    if (message.trainType != null && Object.hasOwnProperty.call(message, "trainType"))
                        $root.app.trainlcd.grpc.TrainType.encode(message.trainType, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Station message, length delimited. Does not implicitly {@link app.trainlcd.grpc.Station.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.Station
                 * @static
                 * @param {app.trainlcd.grpc.IStation} message Station message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Station.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Station message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.Station
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.Station} Station
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Station.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.Station();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.id = reader.uint32();
                                break;
                            }
                        case 2: {
                                message.groupId = reader.uint32();
                                break;
                            }
                        case 3: {
                                message.name = reader.string();
                                break;
                            }
                        case 4: {
                                message.nameKatakana = reader.string();
                                break;
                            }
                        case 5: {
                                message.nameRoman = reader.string();
                                break;
                            }
                        case 6: {
                                message.nameChinese = reader.string();
                                break;
                            }
                        case 7: {
                                message.nameKorean = reader.string();
                                break;
                            }
                        case 8: {
                                message.threeLetterCode = reader.string();
                                break;
                            }
                        case 9: {
                                if (!(message.lines && message.lines.length))
                                    message.lines = [];
                                message.lines.push($root.app.trainlcd.grpc.Line.decode(reader, reader.uint32()));
                                break;
                            }
                        case 10: {
                                message.line = $root.app.trainlcd.grpc.Line.decode(reader, reader.uint32());
                                break;
                            }
                        case 11: {
                                message.prefectureId = reader.uint32();
                                break;
                            }
                        case 12: {
                                message.postalCode = reader.string();
                                break;
                            }
                        case 13: {
                                message.address = reader.string();
                                break;
                            }
                        case 14: {
                                message.latitude = reader.double();
                                break;
                            }
                        case 15: {
                                message.longitude = reader.double();
                                break;
                            }
                        case 16: {
                                message.openedAt = reader.string();
                                break;
                            }
                        case 17: {
                                message.closedAt = reader.string();
                                break;
                            }
                        case 18: {
                                message.status = reader.int32();
                                break;
                            }
                        case 19: {
                                if (!(message.stationNumbers && message.stationNumbers.length))
                                    message.stationNumbers = [];
                                message.stationNumbers.push($root.app.trainlcd.grpc.StationNumber.decode(reader, reader.uint32()));
                                break;
                            }
                        case 20: {
                                message.stopCondition = reader.int32();
                                break;
                            }
                        case 21: {
                                message.distance = reader.double();
                                break;
                            }
                        case 22: {
                                message.hasTrainTypes = reader.bool();
                                break;
                            }
                        case 23: {
                                message.trainType = $root.app.trainlcd.grpc.TrainType.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Station message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.Station
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.Station} Station
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Station.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Station message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.Station
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Station.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id))
                            return "id: integer expected";
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        if (!$util.isInteger(message.groupId))
                            return "groupId: integer expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.nameKatakana != null && message.hasOwnProperty("nameKatakana"))
                        if (!$util.isString(message.nameKatakana))
                            return "nameKatakana: string expected";
                    if (message.nameRoman != null && message.hasOwnProperty("nameRoman")) {
                        properties._nameRoman = 1;
                        if (!$util.isString(message.nameRoman))
                            return "nameRoman: string expected";
                    }
                    if (message.nameChinese != null && message.hasOwnProperty("nameChinese")) {
                        properties._nameChinese = 1;
                        if (!$util.isString(message.nameChinese))
                            return "nameChinese: string expected";
                    }
                    if (message.nameKorean != null && message.hasOwnProperty("nameKorean")) {
                        properties._nameKorean = 1;
                        if (!$util.isString(message.nameKorean))
                            return "nameKorean: string expected";
                    }
                    if (message.threeLetterCode != null && message.hasOwnProperty("threeLetterCode")) {
                        properties._threeLetterCode = 1;
                        if (!$util.isString(message.threeLetterCode))
                            return "threeLetterCode: string expected";
                    }
                    if (message.lines != null && message.hasOwnProperty("lines")) {
                        if (!Array.isArray(message.lines))
                            return "lines: array expected";
                        for (let i = 0; i < message.lines.length; ++i) {
                            let error = $root.app.trainlcd.grpc.Line.verify(message.lines[i]);
                            if (error)
                                return "lines." + error;
                        }
                    }
                    if (message.line != null && message.hasOwnProperty("line")) {
                        properties._line = 1;
                        {
                            let error = $root.app.trainlcd.grpc.Line.verify(message.line);
                            if (error)
                                return "line." + error;
                        }
                    }
                    if (message.prefectureId != null && message.hasOwnProperty("prefectureId"))
                        if (!$util.isInteger(message.prefectureId))
                            return "prefectureId: integer expected";
                    if (message.postalCode != null && message.hasOwnProperty("postalCode"))
                        if (!$util.isString(message.postalCode))
                            return "postalCode: string expected";
                    if (message.address != null && message.hasOwnProperty("address"))
                        if (!$util.isString(message.address))
                            return "address: string expected";
                    if (message.latitude != null && message.hasOwnProperty("latitude"))
                        if (typeof message.latitude !== "number")
                            return "latitude: number expected";
                    if (message.longitude != null && message.hasOwnProperty("longitude"))
                        if (typeof message.longitude !== "number")
                            return "longitude: number expected";
                    if (message.openedAt != null && message.hasOwnProperty("openedAt"))
                        if (!$util.isString(message.openedAt))
                            return "openedAt: string expected";
                    if (message.closedAt != null && message.hasOwnProperty("closedAt"))
                        if (!$util.isString(message.closedAt))
                            return "closedAt: string expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        switch (message.status) {
                        default:
                            return "status: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.stationNumbers != null && message.hasOwnProperty("stationNumbers")) {
                        if (!Array.isArray(message.stationNumbers))
                            return "stationNumbers: array expected";
                        for (let i = 0; i < message.stationNumbers.length; ++i) {
                            let error = $root.app.trainlcd.grpc.StationNumber.verify(message.stationNumbers[i]);
                            if (error)
                                return "stationNumbers." + error;
                        }
                    }
                    if (message.stopCondition != null && message.hasOwnProperty("stopCondition"))
                        switch (message.stopCondition) {
                        default:
                            return "stopCondition: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        }
                    if (message.distance != null && message.hasOwnProperty("distance")) {
                        properties._distance = 1;
                        if (typeof message.distance !== "number")
                            return "distance: number expected";
                    }
                    if (message.hasTrainTypes != null && message.hasOwnProperty("hasTrainTypes")) {
                        properties._hasTrainTypes = 1;
                        if (typeof message.hasTrainTypes !== "boolean")
                            return "hasTrainTypes: boolean expected";
                    }
                    if (message.trainType != null && message.hasOwnProperty("trainType")) {
                        properties._trainType = 1;
                        {
                            let error = $root.app.trainlcd.grpc.TrainType.verify(message.trainType);
                            if (error)
                                return "trainType." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a Station message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.Station
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.Station} Station
                 */
                Station.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.Station)
                        return object;
                    let message = new $root.app.trainlcd.grpc.Station();
                    if (object.id != null)
                        message.id = object.id >>> 0;
                    if (object.groupId != null)
                        message.groupId = object.groupId >>> 0;
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.nameKatakana != null)
                        message.nameKatakana = String(object.nameKatakana);
                    if (object.nameRoman != null)
                        message.nameRoman = String(object.nameRoman);
                    if (object.nameChinese != null)
                        message.nameChinese = String(object.nameChinese);
                    if (object.nameKorean != null)
                        message.nameKorean = String(object.nameKorean);
                    if (object.threeLetterCode != null)
                        message.threeLetterCode = String(object.threeLetterCode);
                    if (object.lines) {
                        if (!Array.isArray(object.lines))
                            throw TypeError(".app.trainlcd.grpc.Station.lines: array expected");
                        message.lines = [];
                        for (let i = 0; i < object.lines.length; ++i) {
                            if (typeof object.lines[i] !== "object")
                                throw TypeError(".app.trainlcd.grpc.Station.lines: object expected");
                            message.lines[i] = $root.app.trainlcd.grpc.Line.fromObject(object.lines[i]);
                        }
                    }
                    if (object.line != null) {
                        if (typeof object.line !== "object")
                            throw TypeError(".app.trainlcd.grpc.Station.line: object expected");
                        message.line = $root.app.trainlcd.grpc.Line.fromObject(object.line);
                    }
                    if (object.prefectureId != null)
                        message.prefectureId = object.prefectureId >>> 0;
                    if (object.postalCode != null)
                        message.postalCode = String(object.postalCode);
                    if (object.address != null)
                        message.address = String(object.address);
                    if (object.latitude != null)
                        message.latitude = Number(object.latitude);
                    if (object.longitude != null)
                        message.longitude = Number(object.longitude);
                    if (object.openedAt != null)
                        message.openedAt = String(object.openedAt);
                    if (object.closedAt != null)
                        message.closedAt = String(object.closedAt);
                    switch (object.status) {
                    default:
                        if (typeof object.status === "number") {
                            message.status = object.status;
                            break;
                        }
                        break;
                    case "InOperation":
                    case 0:
                        message.status = 0;
                        break;
                    case "NotOpened":
                    case 1:
                        message.status = 1;
                        break;
                    case "Closed":
                    case 2:
                        message.status = 2;
                        break;
                    }
                    if (object.stationNumbers) {
                        if (!Array.isArray(object.stationNumbers))
                            throw TypeError(".app.trainlcd.grpc.Station.stationNumbers: array expected");
                        message.stationNumbers = [];
                        for (let i = 0; i < object.stationNumbers.length; ++i) {
                            if (typeof object.stationNumbers[i] !== "object")
                                throw TypeError(".app.trainlcd.grpc.Station.stationNumbers: object expected");
                            message.stationNumbers[i] = $root.app.trainlcd.grpc.StationNumber.fromObject(object.stationNumbers[i]);
                        }
                    }
                    switch (object.stopCondition) {
                    default:
                        if (typeof object.stopCondition === "number") {
                            message.stopCondition = object.stopCondition;
                            break;
                        }
                        break;
                    case "All":
                    case 0:
                        message.stopCondition = 0;
                        break;
                    case "Not":
                    case 1:
                        message.stopCondition = 1;
                        break;
                    case "Partial":
                    case 2:
                        message.stopCondition = 2;
                        break;
                    case "Weekday":
                    case 3:
                        message.stopCondition = 3;
                        break;
                    case "Holiday":
                    case 4:
                        message.stopCondition = 4;
                        break;
                    case "PartialStop":
                    case 5:
                        message.stopCondition = 5;
                        break;
                    }
                    if (object.distance != null)
                        message.distance = Number(object.distance);
                    if (object.hasTrainTypes != null)
                        message.hasTrainTypes = Boolean(object.hasTrainTypes);
                    if (object.trainType != null) {
                        if (typeof object.trainType !== "object")
                            throw TypeError(".app.trainlcd.grpc.Station.trainType: object expected");
                        message.trainType = $root.app.trainlcd.grpc.TrainType.fromObject(object.trainType);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Station message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.Station
                 * @static
                 * @param {app.trainlcd.grpc.Station} message Station
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Station.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults) {
                        object.lines = [];
                        object.stationNumbers = [];
                    }
                    if (options.defaults) {
                        object.id = 0;
                        object.groupId = 0;
                        object.name = "";
                        object.nameKatakana = "";
                        object.prefectureId = 0;
                        object.postalCode = "";
                        object.address = "";
                        object.latitude = 0;
                        object.longitude = 0;
                        object.openedAt = "";
                        object.closedAt = "";
                        object.status = options.enums === String ? "InOperation" : 0;
                        object.stopCondition = options.enums === String ? "All" : 0;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        object.groupId = message.groupId;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.nameKatakana != null && message.hasOwnProperty("nameKatakana"))
                        object.nameKatakana = message.nameKatakana;
                    if (message.nameRoman != null && message.hasOwnProperty("nameRoman")) {
                        object.nameRoman = message.nameRoman;
                        if (options.oneofs)
                            object._nameRoman = "nameRoman";
                    }
                    if (message.nameChinese != null && message.hasOwnProperty("nameChinese")) {
                        object.nameChinese = message.nameChinese;
                        if (options.oneofs)
                            object._nameChinese = "nameChinese";
                    }
                    if (message.nameKorean != null && message.hasOwnProperty("nameKorean")) {
                        object.nameKorean = message.nameKorean;
                        if (options.oneofs)
                            object._nameKorean = "nameKorean";
                    }
                    if (message.threeLetterCode != null && message.hasOwnProperty("threeLetterCode")) {
                        object.threeLetterCode = message.threeLetterCode;
                        if (options.oneofs)
                            object._threeLetterCode = "threeLetterCode";
                    }
                    if (message.lines && message.lines.length) {
                        object.lines = [];
                        for (let j = 0; j < message.lines.length; ++j)
                            object.lines[j] = $root.app.trainlcd.grpc.Line.toObject(message.lines[j], options);
                    }
                    if (message.line != null && message.hasOwnProperty("line")) {
                        object.line = $root.app.trainlcd.grpc.Line.toObject(message.line, options);
                        if (options.oneofs)
                            object._line = "line";
                    }
                    if (message.prefectureId != null && message.hasOwnProperty("prefectureId"))
                        object.prefectureId = message.prefectureId;
                    if (message.postalCode != null && message.hasOwnProperty("postalCode"))
                        object.postalCode = message.postalCode;
                    if (message.address != null && message.hasOwnProperty("address"))
                        object.address = message.address;
                    if (message.latitude != null && message.hasOwnProperty("latitude"))
                        object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
                    if (message.longitude != null && message.hasOwnProperty("longitude"))
                        object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
                    if (message.openedAt != null && message.hasOwnProperty("openedAt"))
                        object.openedAt = message.openedAt;
                    if (message.closedAt != null && message.hasOwnProperty("closedAt"))
                        object.closedAt = message.closedAt;
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = options.enums === String ? $root.app.trainlcd.grpc.OperationStatus[message.status] === undefined ? message.status : $root.app.trainlcd.grpc.OperationStatus[message.status] : message.status;
                    if (message.stationNumbers && message.stationNumbers.length) {
                        object.stationNumbers = [];
                        for (let j = 0; j < message.stationNumbers.length; ++j)
                            object.stationNumbers[j] = $root.app.trainlcd.grpc.StationNumber.toObject(message.stationNumbers[j], options);
                    }
                    if (message.stopCondition != null && message.hasOwnProperty("stopCondition"))
                        object.stopCondition = options.enums === String ? $root.app.trainlcd.grpc.StopCondition[message.stopCondition] === undefined ? message.stopCondition : $root.app.trainlcd.grpc.StopCondition[message.stopCondition] : message.stopCondition;
                    if (message.distance != null && message.hasOwnProperty("distance")) {
                        object.distance = options.json && !isFinite(message.distance) ? String(message.distance) : message.distance;
                        if (options.oneofs)
                            object._distance = "distance";
                    }
                    if (message.hasTrainTypes != null && message.hasOwnProperty("hasTrainTypes")) {
                        object.hasTrainTypes = message.hasTrainTypes;
                        if (options.oneofs)
                            object._hasTrainTypes = "hasTrainTypes";
                    }
                    if (message.trainType != null && message.hasOwnProperty("trainType")) {
                        object.trainType = $root.app.trainlcd.grpc.TrainType.toObject(message.trainType, options);
                        if (options.oneofs)
                            object._trainType = "trainType";
                    }
                    return object;
                };

                /**
                 * Converts this Station to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.Station
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Station.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Station
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.Station
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Station.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.Station";
                };

                return Station;
            })();

            grpc.SingleStationResponse = (function() {

                /**
                 * Properties of a SingleStationResponse.
                 * @memberof app.trainlcd.grpc
                 * @interface ISingleStationResponse
                 * @property {app.trainlcd.grpc.IStation|null} [station] SingleStationResponse station
                 */

                /**
                 * Constructs a new SingleStationResponse.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a SingleStationResponse.
                 * @implements ISingleStationResponse
                 * @constructor
                 * @param {app.trainlcd.grpc.ISingleStationResponse=} [properties] Properties to set
                 */
                function SingleStationResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SingleStationResponse station.
                 * @member {app.trainlcd.grpc.IStation|null|undefined} station
                 * @memberof app.trainlcd.grpc.SingleStationResponse
                 * @instance
                 */
                SingleStationResponse.prototype.station = null;

                /**
                 * Creates a new SingleStationResponse instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.SingleStationResponse
                 * @static
                 * @param {app.trainlcd.grpc.ISingleStationResponse=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.SingleStationResponse} SingleStationResponse instance
                 */
                SingleStationResponse.create = function create(properties) {
                    return new SingleStationResponse(properties);
                };

                /**
                 * Encodes the specified SingleStationResponse message. Does not implicitly {@link app.trainlcd.grpc.SingleStationResponse.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.SingleStationResponse
                 * @static
                 * @param {app.trainlcd.grpc.ISingleStationResponse} message SingleStationResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SingleStationResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.station != null && Object.hasOwnProperty.call(message, "station"))
                        $root.app.trainlcd.grpc.Station.encode(message.station, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified SingleStationResponse message, length delimited. Does not implicitly {@link app.trainlcd.grpc.SingleStationResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.SingleStationResponse
                 * @static
                 * @param {app.trainlcd.grpc.ISingleStationResponse} message SingleStationResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SingleStationResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SingleStationResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.SingleStationResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.SingleStationResponse} SingleStationResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SingleStationResponse.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.SingleStationResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.station = $root.app.trainlcd.grpc.Station.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SingleStationResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.SingleStationResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.SingleStationResponse} SingleStationResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SingleStationResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SingleStationResponse message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.SingleStationResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SingleStationResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.station != null && message.hasOwnProperty("station")) {
                        let error = $root.app.trainlcd.grpc.Station.verify(message.station);
                        if (error)
                            return "station." + error;
                    }
                    return null;
                };

                /**
                 * Creates a SingleStationResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.SingleStationResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.SingleStationResponse} SingleStationResponse
                 */
                SingleStationResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.SingleStationResponse)
                        return object;
                    let message = new $root.app.trainlcd.grpc.SingleStationResponse();
                    if (object.station != null) {
                        if (typeof object.station !== "object")
                            throw TypeError(".app.trainlcd.grpc.SingleStationResponse.station: object expected");
                        message.station = $root.app.trainlcd.grpc.Station.fromObject(object.station);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a SingleStationResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.SingleStationResponse
                 * @static
                 * @param {app.trainlcd.grpc.SingleStationResponse} message SingleStationResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SingleStationResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.station = null;
                    if (message.station != null && message.hasOwnProperty("station"))
                        object.station = $root.app.trainlcd.grpc.Station.toObject(message.station, options);
                    return object;
                };

                /**
                 * Converts this SingleStationResponse to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.SingleStationResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SingleStationResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SingleStationResponse
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.SingleStationResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SingleStationResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.SingleStationResponse";
                };

                return SingleStationResponse;
            })();

            grpc.MultipleStationResponse = (function() {

                /**
                 * Properties of a MultipleStationResponse.
                 * @memberof app.trainlcd.grpc
                 * @interface IMultipleStationResponse
                 * @property {Array.<app.trainlcd.grpc.IStation>|null} [stations] MultipleStationResponse stations
                 */

                /**
                 * Constructs a new MultipleStationResponse.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a MultipleStationResponse.
                 * @implements IMultipleStationResponse
                 * @constructor
                 * @param {app.trainlcd.grpc.IMultipleStationResponse=} [properties] Properties to set
                 */
                function MultipleStationResponse(properties) {
                    this.stations = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MultipleStationResponse stations.
                 * @member {Array.<app.trainlcd.grpc.IStation>} stations
                 * @memberof app.trainlcd.grpc.MultipleStationResponse
                 * @instance
                 */
                MultipleStationResponse.prototype.stations = $util.emptyArray;

                /**
                 * Creates a new MultipleStationResponse instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.MultipleStationResponse
                 * @static
                 * @param {app.trainlcd.grpc.IMultipleStationResponse=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.MultipleStationResponse} MultipleStationResponse instance
                 */
                MultipleStationResponse.create = function create(properties) {
                    return new MultipleStationResponse(properties);
                };

                /**
                 * Encodes the specified MultipleStationResponse message. Does not implicitly {@link app.trainlcd.grpc.MultipleStationResponse.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.MultipleStationResponse
                 * @static
                 * @param {app.trainlcd.grpc.IMultipleStationResponse} message MultipleStationResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MultipleStationResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.stations != null && message.stations.length)
                        for (let i = 0; i < message.stations.length; ++i)
                            $root.app.trainlcd.grpc.Station.encode(message.stations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified MultipleStationResponse message, length delimited. Does not implicitly {@link app.trainlcd.grpc.MultipleStationResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.MultipleStationResponse
                 * @static
                 * @param {app.trainlcd.grpc.IMultipleStationResponse} message MultipleStationResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MultipleStationResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a MultipleStationResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.MultipleStationResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.MultipleStationResponse} MultipleStationResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MultipleStationResponse.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.MultipleStationResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.stations && message.stations.length))
                                    message.stations = [];
                                message.stations.push($root.app.trainlcd.grpc.Station.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a MultipleStationResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.MultipleStationResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.MultipleStationResponse} MultipleStationResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MultipleStationResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MultipleStationResponse message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.MultipleStationResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MultipleStationResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.stations != null && message.hasOwnProperty("stations")) {
                        if (!Array.isArray(message.stations))
                            return "stations: array expected";
                        for (let i = 0; i < message.stations.length; ++i) {
                            let error = $root.app.trainlcd.grpc.Station.verify(message.stations[i]);
                            if (error)
                                return "stations." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a MultipleStationResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.MultipleStationResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.MultipleStationResponse} MultipleStationResponse
                 */
                MultipleStationResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.MultipleStationResponse)
                        return object;
                    let message = new $root.app.trainlcd.grpc.MultipleStationResponse();
                    if (object.stations) {
                        if (!Array.isArray(object.stations))
                            throw TypeError(".app.trainlcd.grpc.MultipleStationResponse.stations: array expected");
                        message.stations = [];
                        for (let i = 0; i < object.stations.length; ++i) {
                            if (typeof object.stations[i] !== "object")
                                throw TypeError(".app.trainlcd.grpc.MultipleStationResponse.stations: object expected");
                            message.stations[i] = $root.app.trainlcd.grpc.Station.fromObject(object.stations[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a MultipleStationResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.MultipleStationResponse
                 * @static
                 * @param {app.trainlcd.grpc.MultipleStationResponse} message MultipleStationResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MultipleStationResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.stations = [];
                    if (message.stations && message.stations.length) {
                        object.stations = [];
                        for (let j = 0; j < message.stations.length; ++j)
                            object.stations[j] = $root.app.trainlcd.grpc.Station.toObject(message.stations[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this MultipleStationResponse to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.MultipleStationResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MultipleStationResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for MultipleStationResponse
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.MultipleStationResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MultipleStationResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.MultipleStationResponse";
                };

                return MultipleStationResponse;
            })();

            grpc.MultipleTrainTypeResponse = (function() {

                /**
                 * Properties of a MultipleTrainTypeResponse.
                 * @memberof app.trainlcd.grpc
                 * @interface IMultipleTrainTypeResponse
                 * @property {Array.<app.trainlcd.grpc.ITrainType>|null} [trainTypes] MultipleTrainTypeResponse trainTypes
                 */

                /**
                 * Constructs a new MultipleTrainTypeResponse.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a MultipleTrainTypeResponse.
                 * @implements IMultipleTrainTypeResponse
                 * @constructor
                 * @param {app.trainlcd.grpc.IMultipleTrainTypeResponse=} [properties] Properties to set
                 */
                function MultipleTrainTypeResponse(properties) {
                    this.trainTypes = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MultipleTrainTypeResponse trainTypes.
                 * @member {Array.<app.trainlcd.grpc.ITrainType>} trainTypes
                 * @memberof app.trainlcd.grpc.MultipleTrainTypeResponse
                 * @instance
                 */
                MultipleTrainTypeResponse.prototype.trainTypes = $util.emptyArray;

                /**
                 * Creates a new MultipleTrainTypeResponse instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.MultipleTrainTypeResponse
                 * @static
                 * @param {app.trainlcd.grpc.IMultipleTrainTypeResponse=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.MultipleTrainTypeResponse} MultipleTrainTypeResponse instance
                 */
                MultipleTrainTypeResponse.create = function create(properties) {
                    return new MultipleTrainTypeResponse(properties);
                };

                /**
                 * Encodes the specified MultipleTrainTypeResponse message. Does not implicitly {@link app.trainlcd.grpc.MultipleTrainTypeResponse.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.MultipleTrainTypeResponse
                 * @static
                 * @param {app.trainlcd.grpc.IMultipleTrainTypeResponse} message MultipleTrainTypeResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MultipleTrainTypeResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.trainTypes != null && message.trainTypes.length)
                        for (let i = 0; i < message.trainTypes.length; ++i)
                            $root.app.trainlcd.grpc.TrainType.encode(message.trainTypes[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified MultipleTrainTypeResponse message, length delimited. Does not implicitly {@link app.trainlcd.grpc.MultipleTrainTypeResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.MultipleTrainTypeResponse
                 * @static
                 * @param {app.trainlcd.grpc.IMultipleTrainTypeResponse} message MultipleTrainTypeResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MultipleTrainTypeResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a MultipleTrainTypeResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.MultipleTrainTypeResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.MultipleTrainTypeResponse} MultipleTrainTypeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MultipleTrainTypeResponse.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.MultipleTrainTypeResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.trainTypes && message.trainTypes.length))
                                    message.trainTypes = [];
                                message.trainTypes.push($root.app.trainlcd.grpc.TrainType.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a MultipleTrainTypeResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.MultipleTrainTypeResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.MultipleTrainTypeResponse} MultipleTrainTypeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MultipleTrainTypeResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MultipleTrainTypeResponse message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.MultipleTrainTypeResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MultipleTrainTypeResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.trainTypes != null && message.hasOwnProperty("trainTypes")) {
                        if (!Array.isArray(message.trainTypes))
                            return "trainTypes: array expected";
                        for (let i = 0; i < message.trainTypes.length; ++i) {
                            let error = $root.app.trainlcd.grpc.TrainType.verify(message.trainTypes[i]);
                            if (error)
                                return "trainTypes." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a MultipleTrainTypeResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.MultipleTrainTypeResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.MultipleTrainTypeResponse} MultipleTrainTypeResponse
                 */
                MultipleTrainTypeResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.MultipleTrainTypeResponse)
                        return object;
                    let message = new $root.app.trainlcd.grpc.MultipleTrainTypeResponse();
                    if (object.trainTypes) {
                        if (!Array.isArray(object.trainTypes))
                            throw TypeError(".app.trainlcd.grpc.MultipleTrainTypeResponse.trainTypes: array expected");
                        message.trainTypes = [];
                        for (let i = 0; i < object.trainTypes.length; ++i) {
                            if (typeof object.trainTypes[i] !== "object")
                                throw TypeError(".app.trainlcd.grpc.MultipleTrainTypeResponse.trainTypes: object expected");
                            message.trainTypes[i] = $root.app.trainlcd.grpc.TrainType.fromObject(object.trainTypes[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a MultipleTrainTypeResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.MultipleTrainTypeResponse
                 * @static
                 * @param {app.trainlcd.grpc.MultipleTrainTypeResponse} message MultipleTrainTypeResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MultipleTrainTypeResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.trainTypes = [];
                    if (message.trainTypes && message.trainTypes.length) {
                        object.trainTypes = [];
                        for (let j = 0; j < message.trainTypes.length; ++j)
                            object.trainTypes[j] = $root.app.trainlcd.grpc.TrainType.toObject(message.trainTypes[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this MultipleTrainTypeResponse to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.MultipleTrainTypeResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MultipleTrainTypeResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for MultipleTrainTypeResponse
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.MultipleTrainTypeResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MultipleTrainTypeResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.MultipleTrainTypeResponse";
                };

                return MultipleTrainTypeResponse;
            })();

            grpc.SingleLineResponse = (function() {

                /**
                 * Properties of a SingleLineResponse.
                 * @memberof app.trainlcd.grpc
                 * @interface ISingleLineResponse
                 * @property {app.trainlcd.grpc.ILine|null} [line] SingleLineResponse line
                 */

                /**
                 * Constructs a new SingleLineResponse.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a SingleLineResponse.
                 * @implements ISingleLineResponse
                 * @constructor
                 * @param {app.trainlcd.grpc.ISingleLineResponse=} [properties] Properties to set
                 */
                function SingleLineResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SingleLineResponse line.
                 * @member {app.trainlcd.grpc.ILine|null|undefined} line
                 * @memberof app.trainlcd.grpc.SingleLineResponse
                 * @instance
                 */
                SingleLineResponse.prototype.line = null;

                /**
                 * Creates a new SingleLineResponse instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.SingleLineResponse
                 * @static
                 * @param {app.trainlcd.grpc.ISingleLineResponse=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.SingleLineResponse} SingleLineResponse instance
                 */
                SingleLineResponse.create = function create(properties) {
                    return new SingleLineResponse(properties);
                };

                /**
                 * Encodes the specified SingleLineResponse message. Does not implicitly {@link app.trainlcd.grpc.SingleLineResponse.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.SingleLineResponse
                 * @static
                 * @param {app.trainlcd.grpc.ISingleLineResponse} message SingleLineResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SingleLineResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.line != null && Object.hasOwnProperty.call(message, "line"))
                        $root.app.trainlcd.grpc.Line.encode(message.line, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified SingleLineResponse message, length delimited. Does not implicitly {@link app.trainlcd.grpc.SingleLineResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.SingleLineResponse
                 * @static
                 * @param {app.trainlcd.grpc.ISingleLineResponse} message SingleLineResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SingleLineResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SingleLineResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.SingleLineResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.SingleLineResponse} SingleLineResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SingleLineResponse.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.SingleLineResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.line = $root.app.trainlcd.grpc.Line.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SingleLineResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.SingleLineResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.SingleLineResponse} SingleLineResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SingleLineResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SingleLineResponse message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.SingleLineResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SingleLineResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.line != null && message.hasOwnProperty("line")) {
                        let error = $root.app.trainlcd.grpc.Line.verify(message.line);
                        if (error)
                            return "line." + error;
                    }
                    return null;
                };

                /**
                 * Creates a SingleLineResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.SingleLineResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.SingleLineResponse} SingleLineResponse
                 */
                SingleLineResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.SingleLineResponse)
                        return object;
                    let message = new $root.app.trainlcd.grpc.SingleLineResponse();
                    if (object.line != null) {
                        if (typeof object.line !== "object")
                            throw TypeError(".app.trainlcd.grpc.SingleLineResponse.line: object expected");
                        message.line = $root.app.trainlcd.grpc.Line.fromObject(object.line);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a SingleLineResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.SingleLineResponse
                 * @static
                 * @param {app.trainlcd.grpc.SingleLineResponse} message SingleLineResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SingleLineResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.line = null;
                    if (message.line != null && message.hasOwnProperty("line"))
                        object.line = $root.app.trainlcd.grpc.Line.toObject(message.line, options);
                    return object;
                };

                /**
                 * Converts this SingleLineResponse to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.SingleLineResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SingleLineResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SingleLineResponse
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.SingleLineResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SingleLineResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.SingleLineResponse";
                };

                return SingleLineResponse;
            })();

            grpc.MultipleLineResponse = (function() {

                /**
                 * Properties of a MultipleLineResponse.
                 * @memberof app.trainlcd.grpc
                 * @interface IMultipleLineResponse
                 * @property {Array.<app.trainlcd.grpc.ILine>|null} [lines] MultipleLineResponse lines
                 */

                /**
                 * Constructs a new MultipleLineResponse.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a MultipleLineResponse.
                 * @implements IMultipleLineResponse
                 * @constructor
                 * @param {app.trainlcd.grpc.IMultipleLineResponse=} [properties] Properties to set
                 */
                function MultipleLineResponse(properties) {
                    this.lines = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MultipleLineResponse lines.
                 * @member {Array.<app.trainlcd.grpc.ILine>} lines
                 * @memberof app.trainlcd.grpc.MultipleLineResponse
                 * @instance
                 */
                MultipleLineResponse.prototype.lines = $util.emptyArray;

                /**
                 * Creates a new MultipleLineResponse instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.MultipleLineResponse
                 * @static
                 * @param {app.trainlcd.grpc.IMultipleLineResponse=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.MultipleLineResponse} MultipleLineResponse instance
                 */
                MultipleLineResponse.create = function create(properties) {
                    return new MultipleLineResponse(properties);
                };

                /**
                 * Encodes the specified MultipleLineResponse message. Does not implicitly {@link app.trainlcd.grpc.MultipleLineResponse.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.MultipleLineResponse
                 * @static
                 * @param {app.trainlcd.grpc.IMultipleLineResponse} message MultipleLineResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MultipleLineResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.lines != null && message.lines.length)
                        for (let i = 0; i < message.lines.length; ++i)
                            $root.app.trainlcd.grpc.Line.encode(message.lines[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified MultipleLineResponse message, length delimited. Does not implicitly {@link app.trainlcd.grpc.MultipleLineResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.MultipleLineResponse
                 * @static
                 * @param {app.trainlcd.grpc.IMultipleLineResponse} message MultipleLineResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MultipleLineResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a MultipleLineResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.MultipleLineResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.MultipleLineResponse} MultipleLineResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MultipleLineResponse.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.MultipleLineResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.lines && message.lines.length))
                                    message.lines = [];
                                message.lines.push($root.app.trainlcd.grpc.Line.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a MultipleLineResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.MultipleLineResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.MultipleLineResponse} MultipleLineResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MultipleLineResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MultipleLineResponse message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.MultipleLineResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MultipleLineResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.lines != null && message.hasOwnProperty("lines")) {
                        if (!Array.isArray(message.lines))
                            return "lines: array expected";
                        for (let i = 0; i < message.lines.length; ++i) {
                            let error = $root.app.trainlcd.grpc.Line.verify(message.lines[i]);
                            if (error)
                                return "lines." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a MultipleLineResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.MultipleLineResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.MultipleLineResponse} MultipleLineResponse
                 */
                MultipleLineResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.MultipleLineResponse)
                        return object;
                    let message = new $root.app.trainlcd.grpc.MultipleLineResponse();
                    if (object.lines) {
                        if (!Array.isArray(object.lines))
                            throw TypeError(".app.trainlcd.grpc.MultipleLineResponse.lines: array expected");
                        message.lines = [];
                        for (let i = 0; i < object.lines.length; ++i) {
                            if (typeof object.lines[i] !== "object")
                                throw TypeError(".app.trainlcd.grpc.MultipleLineResponse.lines: object expected");
                            message.lines[i] = $root.app.trainlcd.grpc.Line.fromObject(object.lines[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a MultipleLineResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.MultipleLineResponse
                 * @static
                 * @param {app.trainlcd.grpc.MultipleLineResponse} message MultipleLineResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MultipleLineResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.lines = [];
                    if (message.lines && message.lines.length) {
                        object.lines = [];
                        for (let j = 0; j < message.lines.length; ++j)
                            object.lines[j] = $root.app.trainlcd.grpc.Line.toObject(message.lines[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this MultipleLineResponse to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.MultipleLineResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MultipleLineResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for MultipleLineResponse
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.MultipleLineResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MultipleLineResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.MultipleLineResponse";
                };

                return MultipleLineResponse;
            })();

            /**
             * DistanceResponseState enum.
             * @name app.trainlcd.grpc.DistanceResponseState
             * @enum {number}
             * @property {number} Away=0 Away value
             * @property {number} Arrived=1 Arrived value
             * @property {number} Approaching=2 Approaching value
             */
            grpc.DistanceResponseState = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Away"] = 0;
                values[valuesById[1] = "Arrived"] = 1;
                values[valuesById[2] = "Approaching"] = 2;
                return values;
            })();

            grpc.DistanceResponse = (function() {

                /**
                 * Properties of a DistanceResponse.
                 * @memberof app.trainlcd.grpc
                 * @interface IDistanceResponse
                 * @property {number|null} [stationId] DistanceResponse stationId
                 * @property {number|null} [distance] DistanceResponse distance
                 * @property {app.trainlcd.grpc.DistanceResponseState|null} [state] DistanceResponse state
                 */

                /**
                 * Constructs a new DistanceResponse.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a DistanceResponse.
                 * @implements IDistanceResponse
                 * @constructor
                 * @param {app.trainlcd.grpc.IDistanceResponse=} [properties] Properties to set
                 */
                function DistanceResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DistanceResponse stationId.
                 * @member {number} stationId
                 * @memberof app.trainlcd.grpc.DistanceResponse
                 * @instance
                 */
                DistanceResponse.prototype.stationId = 0;

                /**
                 * DistanceResponse distance.
                 * @member {number} distance
                 * @memberof app.trainlcd.grpc.DistanceResponse
                 * @instance
                 */
                DistanceResponse.prototype.distance = 0;

                /**
                 * DistanceResponse state.
                 * @member {app.trainlcd.grpc.DistanceResponseState} state
                 * @memberof app.trainlcd.grpc.DistanceResponse
                 * @instance
                 */
                DistanceResponse.prototype.state = 0;

                /**
                 * Creates a new DistanceResponse instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.DistanceResponse
                 * @static
                 * @param {app.trainlcd.grpc.IDistanceResponse=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.DistanceResponse} DistanceResponse instance
                 */
                DistanceResponse.create = function create(properties) {
                    return new DistanceResponse(properties);
                };

                /**
                 * Encodes the specified DistanceResponse message. Does not implicitly {@link app.trainlcd.grpc.DistanceResponse.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.DistanceResponse
                 * @static
                 * @param {app.trainlcd.grpc.IDistanceResponse} message DistanceResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DistanceResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.stationId != null && Object.hasOwnProperty.call(message, "stationId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.stationId);
                    if (message.distance != null && Object.hasOwnProperty.call(message, "distance"))
                        writer.uint32(/* id 2, wireType 1 =*/17).double(message.distance);
                    if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.state);
                    return writer;
                };

                /**
                 * Encodes the specified DistanceResponse message, length delimited. Does not implicitly {@link app.trainlcd.grpc.DistanceResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.DistanceResponse
                 * @static
                 * @param {app.trainlcd.grpc.IDistanceResponse} message DistanceResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DistanceResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DistanceResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.DistanceResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.DistanceResponse} DistanceResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DistanceResponse.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.DistanceResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.stationId = reader.uint32();
                                break;
                            }
                        case 2: {
                                message.distance = reader.double();
                                break;
                            }
                        case 3: {
                                message.state = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a DistanceResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.DistanceResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.DistanceResponse} DistanceResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DistanceResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DistanceResponse message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.DistanceResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DistanceResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.stationId != null && message.hasOwnProperty("stationId"))
                        if (!$util.isInteger(message.stationId))
                            return "stationId: integer expected";
                    if (message.distance != null && message.hasOwnProperty("distance"))
                        if (typeof message.distance !== "number")
                            return "distance: number expected";
                    if (message.state != null && message.hasOwnProperty("state"))
                        switch (message.state) {
                        default:
                            return "state: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a DistanceResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.DistanceResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.DistanceResponse} DistanceResponse
                 */
                DistanceResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.DistanceResponse)
                        return object;
                    let message = new $root.app.trainlcd.grpc.DistanceResponse();
                    if (object.stationId != null)
                        message.stationId = object.stationId >>> 0;
                    if (object.distance != null)
                        message.distance = Number(object.distance);
                    switch (object.state) {
                    default:
                        if (typeof object.state === "number") {
                            message.state = object.state;
                            break;
                        }
                        break;
                    case "Away":
                    case 0:
                        message.state = 0;
                        break;
                    case "Arrived":
                    case 1:
                        message.state = 1;
                        break;
                    case "Approaching":
                    case 2:
                        message.state = 2;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a DistanceResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.DistanceResponse
                 * @static
                 * @param {app.trainlcd.grpc.DistanceResponse} message DistanceResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DistanceResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.stationId = 0;
                        object.distance = 0;
                        object.state = options.enums === String ? "Away" : 0;
                    }
                    if (message.stationId != null && message.hasOwnProperty("stationId"))
                        object.stationId = message.stationId;
                    if (message.distance != null && message.hasOwnProperty("distance"))
                        object.distance = options.json && !isFinite(message.distance) ? String(message.distance) : message.distance;
                    if (message.state != null && message.hasOwnProperty("state"))
                        object.state = options.enums === String ? $root.app.trainlcd.grpc.DistanceResponseState[message.state] === undefined ? message.state : $root.app.trainlcd.grpc.DistanceResponseState[message.state] : message.state;
                    return object;
                };

                /**
                 * Converts this DistanceResponse to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.DistanceResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DistanceResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for DistanceResponse
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.DistanceResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DistanceResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.DistanceResponse";
                };

                return DistanceResponse;
            })();

            grpc.RouteResponse = (function() {

                /**
                 * Properties of a RouteResponse.
                 * @memberof app.trainlcd.grpc
                 * @interface IRouteResponse
                 * @property {Array.<app.trainlcd.grpc.IRoute>|null} [routes] RouteResponse routes
                 * @property {string|null} [nextPageToken] RouteResponse nextPageToken
                 */

                /**
                 * Constructs a new RouteResponse.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a RouteResponse.
                 * @implements IRouteResponse
                 * @constructor
                 * @param {app.trainlcd.grpc.IRouteResponse=} [properties] Properties to set
                 */
                function RouteResponse(properties) {
                    this.routes = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RouteResponse routes.
                 * @member {Array.<app.trainlcd.grpc.IRoute>} routes
                 * @memberof app.trainlcd.grpc.RouteResponse
                 * @instance
                 */
                RouteResponse.prototype.routes = $util.emptyArray;

                /**
                 * RouteResponse nextPageToken.
                 * @member {string} nextPageToken
                 * @memberof app.trainlcd.grpc.RouteResponse
                 * @instance
                 */
                RouteResponse.prototype.nextPageToken = "";

                /**
                 * Creates a new RouteResponse instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.RouteResponse
                 * @static
                 * @param {app.trainlcd.grpc.IRouteResponse=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.RouteResponse} RouteResponse instance
                 */
                RouteResponse.create = function create(properties) {
                    return new RouteResponse(properties);
                };

                /**
                 * Encodes the specified RouteResponse message. Does not implicitly {@link app.trainlcd.grpc.RouteResponse.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.RouteResponse
                 * @static
                 * @param {app.trainlcd.grpc.IRouteResponse} message RouteResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RouteResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.routes != null && message.routes.length)
                        for (let i = 0; i < message.routes.length; ++i)
                            $root.app.trainlcd.grpc.Route.encode(message.routes[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.nextPageToken != null && Object.hasOwnProperty.call(message, "nextPageToken"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.nextPageToken);
                    return writer;
                };

                /**
                 * Encodes the specified RouteResponse message, length delimited. Does not implicitly {@link app.trainlcd.grpc.RouteResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.RouteResponse
                 * @static
                 * @param {app.trainlcd.grpc.IRouteResponse} message RouteResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RouteResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RouteResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.RouteResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.RouteResponse} RouteResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RouteResponse.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.RouteResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.routes && message.routes.length))
                                    message.routes = [];
                                message.routes.push($root.app.trainlcd.grpc.Route.decode(reader, reader.uint32()));
                                break;
                            }
                        case 2: {
                                message.nextPageToken = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a RouteResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.RouteResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.RouteResponse} RouteResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RouteResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RouteResponse message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.RouteResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RouteResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.routes != null && message.hasOwnProperty("routes")) {
                        if (!Array.isArray(message.routes))
                            return "routes: array expected";
                        for (let i = 0; i < message.routes.length; ++i) {
                            let error = $root.app.trainlcd.grpc.Route.verify(message.routes[i]);
                            if (error)
                                return "routes." + error;
                        }
                    }
                    if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken"))
                        if (!$util.isString(message.nextPageToken))
                            return "nextPageToken: string expected";
                    return null;
                };

                /**
                 * Creates a RouteResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.RouteResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.RouteResponse} RouteResponse
                 */
                RouteResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.RouteResponse)
                        return object;
                    let message = new $root.app.trainlcd.grpc.RouteResponse();
                    if (object.routes) {
                        if (!Array.isArray(object.routes))
                            throw TypeError(".app.trainlcd.grpc.RouteResponse.routes: array expected");
                        message.routes = [];
                        for (let i = 0; i < object.routes.length; ++i) {
                            if (typeof object.routes[i] !== "object")
                                throw TypeError(".app.trainlcd.grpc.RouteResponse.routes: object expected");
                            message.routes[i] = $root.app.trainlcd.grpc.Route.fromObject(object.routes[i]);
                        }
                    }
                    if (object.nextPageToken != null)
                        message.nextPageToken = String(object.nextPageToken);
                    return message;
                };

                /**
                 * Creates a plain object from a RouteResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.RouteResponse
                 * @static
                 * @param {app.trainlcd.grpc.RouteResponse} message RouteResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RouteResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.routes = [];
                    if (options.defaults)
                        object.nextPageToken = "";
                    if (message.routes && message.routes.length) {
                        object.routes = [];
                        for (let j = 0; j < message.routes.length; ++j)
                            object.routes[j] = $root.app.trainlcd.grpc.Route.toObject(message.routes[j], options);
                    }
                    if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken"))
                        object.nextPageToken = message.nextPageToken;
                    return object;
                };

                /**
                 * Converts this RouteResponse to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.RouteResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RouteResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for RouteResponse
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.RouteResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                RouteResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.RouteResponse";
                };

                return RouteResponse;
            })();

            grpc.RouteTypeResponse = (function() {

                /**
                 * Properties of a RouteTypeResponse.
                 * @memberof app.trainlcd.grpc
                 * @interface IRouteTypeResponse
                 * @property {Array.<app.trainlcd.grpc.ITrainType>|null} [trainTypes] RouteTypeResponse trainTypes
                 * @property {string|null} [nextPageToken] RouteTypeResponse nextPageToken
                 */

                /**
                 * Constructs a new RouteTypeResponse.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a RouteTypeResponse.
                 * @implements IRouteTypeResponse
                 * @constructor
                 * @param {app.trainlcd.grpc.IRouteTypeResponse=} [properties] Properties to set
                 */
                function RouteTypeResponse(properties) {
                    this.trainTypes = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RouteTypeResponse trainTypes.
                 * @member {Array.<app.trainlcd.grpc.ITrainType>} trainTypes
                 * @memberof app.trainlcd.grpc.RouteTypeResponse
                 * @instance
                 */
                RouteTypeResponse.prototype.trainTypes = $util.emptyArray;

                /**
                 * RouteTypeResponse nextPageToken.
                 * @member {string} nextPageToken
                 * @memberof app.trainlcd.grpc.RouteTypeResponse
                 * @instance
                 */
                RouteTypeResponse.prototype.nextPageToken = "";

                /**
                 * Creates a new RouteTypeResponse instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.RouteTypeResponse
                 * @static
                 * @param {app.trainlcd.grpc.IRouteTypeResponse=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.RouteTypeResponse} RouteTypeResponse instance
                 */
                RouteTypeResponse.create = function create(properties) {
                    return new RouteTypeResponse(properties);
                };

                /**
                 * Encodes the specified RouteTypeResponse message. Does not implicitly {@link app.trainlcd.grpc.RouteTypeResponse.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.RouteTypeResponse
                 * @static
                 * @param {app.trainlcd.grpc.IRouteTypeResponse} message RouteTypeResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RouteTypeResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.trainTypes != null && message.trainTypes.length)
                        for (let i = 0; i < message.trainTypes.length; ++i)
                            $root.app.trainlcd.grpc.TrainType.encode(message.trainTypes[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.nextPageToken != null && Object.hasOwnProperty.call(message, "nextPageToken"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.nextPageToken);
                    return writer;
                };

                /**
                 * Encodes the specified RouteTypeResponse message, length delimited. Does not implicitly {@link app.trainlcd.grpc.RouteTypeResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.RouteTypeResponse
                 * @static
                 * @param {app.trainlcd.grpc.IRouteTypeResponse} message RouteTypeResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RouteTypeResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RouteTypeResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.RouteTypeResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.RouteTypeResponse} RouteTypeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RouteTypeResponse.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.RouteTypeResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.trainTypes && message.trainTypes.length))
                                    message.trainTypes = [];
                                message.trainTypes.push($root.app.trainlcd.grpc.TrainType.decode(reader, reader.uint32()));
                                break;
                            }
                        case 2: {
                                message.nextPageToken = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a RouteTypeResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.RouteTypeResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.RouteTypeResponse} RouteTypeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RouteTypeResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RouteTypeResponse message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.RouteTypeResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RouteTypeResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.trainTypes != null && message.hasOwnProperty("trainTypes")) {
                        if (!Array.isArray(message.trainTypes))
                            return "trainTypes: array expected";
                        for (let i = 0; i < message.trainTypes.length; ++i) {
                            let error = $root.app.trainlcd.grpc.TrainType.verify(message.trainTypes[i]);
                            if (error)
                                return "trainTypes." + error;
                        }
                    }
                    if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken"))
                        if (!$util.isString(message.nextPageToken))
                            return "nextPageToken: string expected";
                    return null;
                };

                /**
                 * Creates a RouteTypeResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.RouteTypeResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.RouteTypeResponse} RouteTypeResponse
                 */
                RouteTypeResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.RouteTypeResponse)
                        return object;
                    let message = new $root.app.trainlcd.grpc.RouteTypeResponse();
                    if (object.trainTypes) {
                        if (!Array.isArray(object.trainTypes))
                            throw TypeError(".app.trainlcd.grpc.RouteTypeResponse.trainTypes: array expected");
                        message.trainTypes = [];
                        for (let i = 0; i < object.trainTypes.length; ++i) {
                            if (typeof object.trainTypes[i] !== "object")
                                throw TypeError(".app.trainlcd.grpc.RouteTypeResponse.trainTypes: object expected");
                            message.trainTypes[i] = $root.app.trainlcd.grpc.TrainType.fromObject(object.trainTypes[i]);
                        }
                    }
                    if (object.nextPageToken != null)
                        message.nextPageToken = String(object.nextPageToken);
                    return message;
                };

                /**
                 * Creates a plain object from a RouteTypeResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.RouteTypeResponse
                 * @static
                 * @param {app.trainlcd.grpc.RouteTypeResponse} message RouteTypeResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RouteTypeResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.trainTypes = [];
                    if (options.defaults)
                        object.nextPageToken = "";
                    if (message.trainTypes && message.trainTypes.length) {
                        object.trainTypes = [];
                        for (let j = 0; j < message.trainTypes.length; ++j)
                            object.trainTypes[j] = $root.app.trainlcd.grpc.TrainType.toObject(message.trainTypes[j], options);
                    }
                    if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken"))
                        object.nextPageToken = message.nextPageToken;
                    return object;
                };

                /**
                 * Converts this RouteTypeResponse to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.RouteTypeResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RouteTypeResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for RouteTypeResponse
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.RouteTypeResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                RouteTypeResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.RouteTypeResponse";
                };

                return RouteTypeResponse;
            })();

            /**
             * LineType enum.
             * @name app.trainlcd.grpc.LineType
             * @enum {number}
             * @property {number} OtherLineType=0 OtherLineType value
             * @property {number} BulletTrain=1 BulletTrain value
             * @property {number} Normal=2 Normal value
             * @property {number} Subway=3 Subway value
             * @property {number} Tram=4 Tram value
             * @property {number} MonorailOrAGT=5 MonorailOrAGT value
             */
            grpc.LineType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "OtherLineType"] = 0;
                values[valuesById[1] = "BulletTrain"] = 1;
                values[valuesById[2] = "Normal"] = 2;
                values[valuesById[3] = "Subway"] = 3;
                values[valuesById[4] = "Tram"] = 4;
                values[valuesById[5] = "MonorailOrAGT"] = 5;
                return values;
            })();

            grpc.LineSymbol = (function() {

                /**
                 * Properties of a LineSymbol.
                 * @memberof app.trainlcd.grpc
                 * @interface ILineSymbol
                 * @property {string|null} [symbol] LineSymbol symbol
                 * @property {string|null} [color] LineSymbol color
                 * @property {string|null} [shape] LineSymbol shape
                 */

                /**
                 * Constructs a new LineSymbol.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a LineSymbol.
                 * @implements ILineSymbol
                 * @constructor
                 * @param {app.trainlcd.grpc.ILineSymbol=} [properties] Properties to set
                 */
                function LineSymbol(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * LineSymbol symbol.
                 * @member {string} symbol
                 * @memberof app.trainlcd.grpc.LineSymbol
                 * @instance
                 */
                LineSymbol.prototype.symbol = "";

                /**
                 * LineSymbol color.
                 * @member {string} color
                 * @memberof app.trainlcd.grpc.LineSymbol
                 * @instance
                 */
                LineSymbol.prototype.color = "";

                /**
                 * LineSymbol shape.
                 * @member {string} shape
                 * @memberof app.trainlcd.grpc.LineSymbol
                 * @instance
                 */
                LineSymbol.prototype.shape = "";

                /**
                 * Creates a new LineSymbol instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.LineSymbol
                 * @static
                 * @param {app.trainlcd.grpc.ILineSymbol=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.LineSymbol} LineSymbol instance
                 */
                LineSymbol.create = function create(properties) {
                    return new LineSymbol(properties);
                };

                /**
                 * Encodes the specified LineSymbol message. Does not implicitly {@link app.trainlcd.grpc.LineSymbol.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.LineSymbol
                 * @static
                 * @param {app.trainlcd.grpc.ILineSymbol} message LineSymbol message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LineSymbol.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.symbol != null && Object.hasOwnProperty.call(message, "symbol"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.symbol);
                    if (message.color != null && Object.hasOwnProperty.call(message, "color"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.color);
                    if (message.shape != null && Object.hasOwnProperty.call(message, "shape"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.shape);
                    return writer;
                };

                /**
                 * Encodes the specified LineSymbol message, length delimited. Does not implicitly {@link app.trainlcd.grpc.LineSymbol.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.LineSymbol
                 * @static
                 * @param {app.trainlcd.grpc.ILineSymbol} message LineSymbol message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LineSymbol.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a LineSymbol message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.LineSymbol
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.LineSymbol} LineSymbol
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LineSymbol.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.LineSymbol();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.symbol = reader.string();
                                break;
                            }
                        case 2: {
                                message.color = reader.string();
                                break;
                            }
                        case 3: {
                                message.shape = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a LineSymbol message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.LineSymbol
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.LineSymbol} LineSymbol
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LineSymbol.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a LineSymbol message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.LineSymbol
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LineSymbol.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.symbol != null && message.hasOwnProperty("symbol"))
                        if (!$util.isString(message.symbol))
                            return "symbol: string expected";
                    if (message.color != null && message.hasOwnProperty("color"))
                        if (!$util.isString(message.color))
                            return "color: string expected";
                    if (message.shape != null && message.hasOwnProperty("shape"))
                        if (!$util.isString(message.shape))
                            return "shape: string expected";
                    return null;
                };

                /**
                 * Creates a LineSymbol message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.LineSymbol
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.LineSymbol} LineSymbol
                 */
                LineSymbol.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.LineSymbol)
                        return object;
                    let message = new $root.app.trainlcd.grpc.LineSymbol();
                    if (object.symbol != null)
                        message.symbol = String(object.symbol);
                    if (object.color != null)
                        message.color = String(object.color);
                    if (object.shape != null)
                        message.shape = String(object.shape);
                    return message;
                };

                /**
                 * Creates a plain object from a LineSymbol message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.LineSymbol
                 * @static
                 * @param {app.trainlcd.grpc.LineSymbol} message LineSymbol
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LineSymbol.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.symbol = "";
                        object.color = "";
                        object.shape = "";
                    }
                    if (message.symbol != null && message.hasOwnProperty("symbol"))
                        object.symbol = message.symbol;
                    if (message.color != null && message.hasOwnProperty("color"))
                        object.color = message.color;
                    if (message.shape != null && message.hasOwnProperty("shape"))
                        object.shape = message.shape;
                    return object;
                };

                /**
                 * Converts this LineSymbol to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.LineSymbol
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                LineSymbol.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for LineSymbol
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.LineSymbol
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                LineSymbol.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.LineSymbol";
                };

                return LineSymbol;
            })();

            /**
             * CompanyType enum.
             * @name app.trainlcd.grpc.CompanyType
             * @enum {number}
             * @property {number} OtherCompany=0 OtherCompany value
             * @property {number} JR=1 JR value
             * @property {number} Private=2 Private value
             * @property {number} Major=3 Major value
             * @property {number} SemiMajor=4 SemiMajor value
             */
            grpc.CompanyType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "OtherCompany"] = 0;
                values[valuesById[1] = "JR"] = 1;
                values[valuesById[2] = "Private"] = 2;
                values[valuesById[3] = "Major"] = 3;
                values[valuesById[4] = "SemiMajor"] = 4;
                return values;
            })();

            grpc.Company = (function() {

                /**
                 * Properties of a Company.
                 * @memberof app.trainlcd.grpc
                 * @interface ICompany
                 * @property {number|null} [id] Company id
                 * @property {number|null} [railroadId] Company railroadId
                 * @property {string|null} [nameShort] Company nameShort
                 * @property {string|null} [nameKatakana] Company nameKatakana
                 * @property {string|null} [nameFull] Company nameFull
                 * @property {string|null} [nameEnglishShort] Company nameEnglishShort
                 * @property {string|null} [nameEnglishFull] Company nameEnglishFull
                 * @property {string|null} [url] Company url
                 * @property {app.trainlcd.grpc.CompanyType|null} [type] Company type
                 * @property {app.trainlcd.grpc.OperationStatus|null} [status] Company status
                 * @property {string|null} [name] Company name
                 */

                /**
                 * Constructs a new Company.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a Company.
                 * @implements ICompany
                 * @constructor
                 * @param {app.trainlcd.grpc.ICompany=} [properties] Properties to set
                 */
                function Company(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Company id.
                 * @member {number} id
                 * @memberof app.trainlcd.grpc.Company
                 * @instance
                 */
                Company.prototype.id = 0;

                /**
                 * Company railroadId.
                 * @member {number} railroadId
                 * @memberof app.trainlcd.grpc.Company
                 * @instance
                 */
                Company.prototype.railroadId = 0;

                /**
                 * Company nameShort.
                 * @member {string} nameShort
                 * @memberof app.trainlcd.grpc.Company
                 * @instance
                 */
                Company.prototype.nameShort = "";

                /**
                 * Company nameKatakana.
                 * @member {string} nameKatakana
                 * @memberof app.trainlcd.grpc.Company
                 * @instance
                 */
                Company.prototype.nameKatakana = "";

                /**
                 * Company nameFull.
                 * @member {string} nameFull
                 * @memberof app.trainlcd.grpc.Company
                 * @instance
                 */
                Company.prototype.nameFull = "";

                /**
                 * Company nameEnglishShort.
                 * @member {string} nameEnglishShort
                 * @memberof app.trainlcd.grpc.Company
                 * @instance
                 */
                Company.prototype.nameEnglishShort = "";

                /**
                 * Company nameEnglishFull.
                 * @member {string} nameEnglishFull
                 * @memberof app.trainlcd.grpc.Company
                 * @instance
                 */
                Company.prototype.nameEnglishFull = "";

                /**
                 * Company url.
                 * @member {string|null|undefined} url
                 * @memberof app.trainlcd.grpc.Company
                 * @instance
                 */
                Company.prototype.url = null;

                /**
                 * Company type.
                 * @member {app.trainlcd.grpc.CompanyType} type
                 * @memberof app.trainlcd.grpc.Company
                 * @instance
                 */
                Company.prototype.type = 0;

                /**
                 * Company status.
                 * @member {app.trainlcd.grpc.OperationStatus} status
                 * @memberof app.trainlcd.grpc.Company
                 * @instance
                 */
                Company.prototype.status = 0;

                /**
                 * Company name.
                 * @member {string} name
                 * @memberof app.trainlcd.grpc.Company
                 * @instance
                 */
                Company.prototype.name = "";

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * Company _url.
                 * @member {"url"|undefined} _url
                 * @memberof app.trainlcd.grpc.Company
                 * @instance
                 */
                Object.defineProperty(Company.prototype, "_url", {
                    get: $util.oneOfGetter($oneOfFields = ["url"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new Company instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.Company
                 * @static
                 * @param {app.trainlcd.grpc.ICompany=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.Company} Company instance
                 */
                Company.create = function create(properties) {
                    return new Company(properties);
                };

                /**
                 * Encodes the specified Company message. Does not implicitly {@link app.trainlcd.grpc.Company.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.Company
                 * @static
                 * @param {app.trainlcd.grpc.ICompany} message Company message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Company.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
                    if (message.railroadId != null && Object.hasOwnProperty.call(message, "railroadId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.railroadId);
                    if (message.nameShort != null && Object.hasOwnProperty.call(message, "nameShort"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.nameShort);
                    if (message.nameKatakana != null && Object.hasOwnProperty.call(message, "nameKatakana"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.nameKatakana);
                    if (message.nameFull != null && Object.hasOwnProperty.call(message, "nameFull"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.nameFull);
                    if (message.nameEnglishShort != null && Object.hasOwnProperty.call(message, "nameEnglishShort"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.nameEnglishShort);
                    if (message.nameEnglishFull != null && Object.hasOwnProperty.call(message, "nameEnglishFull"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.nameEnglishFull);
                    if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.url);
                    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.type);
                    if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.status);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 11, wireType 2 =*/90).string(message.name);
                    return writer;
                };

                /**
                 * Encodes the specified Company message, length delimited. Does not implicitly {@link app.trainlcd.grpc.Company.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.Company
                 * @static
                 * @param {app.trainlcd.grpc.ICompany} message Company message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Company.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Company message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.Company
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.Company} Company
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Company.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.Company();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.id = reader.uint32();
                                break;
                            }
                        case 2: {
                                message.railroadId = reader.uint32();
                                break;
                            }
                        case 3: {
                                message.nameShort = reader.string();
                                break;
                            }
                        case 4: {
                                message.nameKatakana = reader.string();
                                break;
                            }
                        case 5: {
                                message.nameFull = reader.string();
                                break;
                            }
                        case 6: {
                                message.nameEnglishShort = reader.string();
                                break;
                            }
                        case 7: {
                                message.nameEnglishFull = reader.string();
                                break;
                            }
                        case 8: {
                                message.url = reader.string();
                                break;
                            }
                        case 9: {
                                message.type = reader.int32();
                                break;
                            }
                        case 10: {
                                message.status = reader.int32();
                                break;
                            }
                        case 11: {
                                message.name = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Company message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.Company
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.Company} Company
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Company.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Company message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.Company
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Company.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id))
                            return "id: integer expected";
                    if (message.railroadId != null && message.hasOwnProperty("railroadId"))
                        if (!$util.isInteger(message.railroadId))
                            return "railroadId: integer expected";
                    if (message.nameShort != null && message.hasOwnProperty("nameShort"))
                        if (!$util.isString(message.nameShort))
                            return "nameShort: string expected";
                    if (message.nameKatakana != null && message.hasOwnProperty("nameKatakana"))
                        if (!$util.isString(message.nameKatakana))
                            return "nameKatakana: string expected";
                    if (message.nameFull != null && message.hasOwnProperty("nameFull"))
                        if (!$util.isString(message.nameFull))
                            return "nameFull: string expected";
                    if (message.nameEnglishShort != null && message.hasOwnProperty("nameEnglishShort"))
                        if (!$util.isString(message.nameEnglishShort))
                            return "nameEnglishShort: string expected";
                    if (message.nameEnglishFull != null && message.hasOwnProperty("nameEnglishFull"))
                        if (!$util.isString(message.nameEnglishFull))
                            return "nameEnglishFull: string expected";
                    if (message.url != null && message.hasOwnProperty("url")) {
                        properties._url = 1;
                        if (!$util.isString(message.url))
                            return "url: string expected";
                    }
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                            break;
                        }
                    if (message.status != null && message.hasOwnProperty("status"))
                        switch (message.status) {
                        default:
                            return "status: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    return null;
                };

                /**
                 * Creates a Company message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.Company
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.Company} Company
                 */
                Company.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.Company)
                        return object;
                    let message = new $root.app.trainlcd.grpc.Company();
                    if (object.id != null)
                        message.id = object.id >>> 0;
                    if (object.railroadId != null)
                        message.railroadId = object.railroadId >>> 0;
                    if (object.nameShort != null)
                        message.nameShort = String(object.nameShort);
                    if (object.nameKatakana != null)
                        message.nameKatakana = String(object.nameKatakana);
                    if (object.nameFull != null)
                        message.nameFull = String(object.nameFull);
                    if (object.nameEnglishShort != null)
                        message.nameEnglishShort = String(object.nameEnglishShort);
                    if (object.nameEnglishFull != null)
                        message.nameEnglishFull = String(object.nameEnglishFull);
                    if (object.url != null)
                        message.url = String(object.url);
                    switch (object.type) {
                    default:
                        if (typeof object.type === "number") {
                            message.type = object.type;
                            break;
                        }
                        break;
                    case "OtherCompany":
                    case 0:
                        message.type = 0;
                        break;
                    case "JR":
                    case 1:
                        message.type = 1;
                        break;
                    case "Private":
                    case 2:
                        message.type = 2;
                        break;
                    case "Major":
                    case 3:
                        message.type = 3;
                        break;
                    case "SemiMajor":
                    case 4:
                        message.type = 4;
                        break;
                    }
                    switch (object.status) {
                    default:
                        if (typeof object.status === "number") {
                            message.status = object.status;
                            break;
                        }
                        break;
                    case "InOperation":
                    case 0:
                        message.status = 0;
                        break;
                    case "NotOpened":
                    case 1:
                        message.status = 1;
                        break;
                    case "Closed":
                    case 2:
                        message.status = 2;
                        break;
                    }
                    if (object.name != null)
                        message.name = String(object.name);
                    return message;
                };

                /**
                 * Creates a plain object from a Company message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.Company
                 * @static
                 * @param {app.trainlcd.grpc.Company} message Company
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Company.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.id = 0;
                        object.railroadId = 0;
                        object.nameShort = "";
                        object.nameKatakana = "";
                        object.nameFull = "";
                        object.nameEnglishShort = "";
                        object.nameEnglishFull = "";
                        object.type = options.enums === String ? "OtherCompany" : 0;
                        object.status = options.enums === String ? "InOperation" : 0;
                        object.name = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.railroadId != null && message.hasOwnProperty("railroadId"))
                        object.railroadId = message.railroadId;
                    if (message.nameShort != null && message.hasOwnProperty("nameShort"))
                        object.nameShort = message.nameShort;
                    if (message.nameKatakana != null && message.hasOwnProperty("nameKatakana"))
                        object.nameKatakana = message.nameKatakana;
                    if (message.nameFull != null && message.hasOwnProperty("nameFull"))
                        object.nameFull = message.nameFull;
                    if (message.nameEnglishShort != null && message.hasOwnProperty("nameEnglishShort"))
                        object.nameEnglishShort = message.nameEnglishShort;
                    if (message.nameEnglishFull != null && message.hasOwnProperty("nameEnglishFull"))
                        object.nameEnglishFull = message.nameEnglishFull;
                    if (message.url != null && message.hasOwnProperty("url")) {
                        object.url = message.url;
                        if (options.oneofs)
                            object._url = "url";
                    }
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.app.trainlcd.grpc.CompanyType[message.type] === undefined ? message.type : $root.app.trainlcd.grpc.CompanyType[message.type] : message.type;
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = options.enums === String ? $root.app.trainlcd.grpc.OperationStatus[message.status] === undefined ? message.status : $root.app.trainlcd.grpc.OperationStatus[message.status] : message.status;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    return object;
                };

                /**
                 * Converts this Company to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.Company
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Company.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Company
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.Company
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Company.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.Company";
                };

                return Company;
            })();

            grpc.Line = (function() {

                /**
                 * Properties of a Line.
                 * @memberof app.trainlcd.grpc
                 * @interface ILine
                 * @property {number|null} [id] Line id
                 * @property {string|null} [nameShort] Line nameShort
                 * @property {string|null} [nameKatakana] Line nameKatakana
                 * @property {string|null} [nameFull] Line nameFull
                 * @property {string|null} [nameRoman] Line nameRoman
                 * @property {string|null} [nameChinese] Line nameChinese
                 * @property {string|null} [nameKorean] Line nameKorean
                 * @property {string|null} [color] Line color
                 * @property {app.trainlcd.grpc.LineType|null} [lineType] Line lineType
                 * @property {Array.<app.trainlcd.grpc.ILineSymbol>|null} [lineSymbols] Line lineSymbols
                 * @property {app.trainlcd.grpc.OperationStatus|null} [status] Line status
                 * @property {app.trainlcd.grpc.IStation|null} [station] Line station
                 * @property {app.trainlcd.grpc.ICompany|null} [company] Line company
                 * @property {app.trainlcd.grpc.ITrainType|null} [trainType] Line trainType
                 * @property {number|null} [averageDistance] Line averageDistance
                 */

                /**
                 * Constructs a new Line.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a Line.
                 * @implements ILine
                 * @constructor
                 * @param {app.trainlcd.grpc.ILine=} [properties] Properties to set
                 */
                function Line(properties) {
                    this.lineSymbols = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Line id.
                 * @member {number} id
                 * @memberof app.trainlcd.grpc.Line
                 * @instance
                 */
                Line.prototype.id = 0;

                /**
                 * Line nameShort.
                 * @member {string} nameShort
                 * @memberof app.trainlcd.grpc.Line
                 * @instance
                 */
                Line.prototype.nameShort = "";

                /**
                 * Line nameKatakana.
                 * @member {string} nameKatakana
                 * @memberof app.trainlcd.grpc.Line
                 * @instance
                 */
                Line.prototype.nameKatakana = "";

                /**
                 * Line nameFull.
                 * @member {string} nameFull
                 * @memberof app.trainlcd.grpc.Line
                 * @instance
                 */
                Line.prototype.nameFull = "";

                /**
                 * Line nameRoman.
                 * @member {string|null|undefined} nameRoman
                 * @memberof app.trainlcd.grpc.Line
                 * @instance
                 */
                Line.prototype.nameRoman = null;

                /**
                 * Line nameChinese.
                 * @member {string|null|undefined} nameChinese
                 * @memberof app.trainlcd.grpc.Line
                 * @instance
                 */
                Line.prototype.nameChinese = null;

                /**
                 * Line nameKorean.
                 * @member {string|null|undefined} nameKorean
                 * @memberof app.trainlcd.grpc.Line
                 * @instance
                 */
                Line.prototype.nameKorean = null;

                /**
                 * Line color.
                 * @member {string} color
                 * @memberof app.trainlcd.grpc.Line
                 * @instance
                 */
                Line.prototype.color = "";

                /**
                 * Line lineType.
                 * @member {app.trainlcd.grpc.LineType} lineType
                 * @memberof app.trainlcd.grpc.Line
                 * @instance
                 */
                Line.prototype.lineType = 0;

                /**
                 * Line lineSymbols.
                 * @member {Array.<app.trainlcd.grpc.ILineSymbol>} lineSymbols
                 * @memberof app.trainlcd.grpc.Line
                 * @instance
                 */
                Line.prototype.lineSymbols = $util.emptyArray;

                /**
                 * Line status.
                 * @member {app.trainlcd.grpc.OperationStatus} status
                 * @memberof app.trainlcd.grpc.Line
                 * @instance
                 */
                Line.prototype.status = 0;

                /**
                 * Line station.
                 * @member {app.trainlcd.grpc.IStation|null|undefined} station
                 * @memberof app.trainlcd.grpc.Line
                 * @instance
                 */
                Line.prototype.station = null;

                /**
                 * Line company.
                 * @member {app.trainlcd.grpc.ICompany|null|undefined} company
                 * @memberof app.trainlcd.grpc.Line
                 * @instance
                 */
                Line.prototype.company = null;

                /**
                 * Line trainType.
                 * @member {app.trainlcd.grpc.ITrainType|null|undefined} trainType
                 * @memberof app.trainlcd.grpc.Line
                 * @instance
                 */
                Line.prototype.trainType = null;

                /**
                 * Line averageDistance.
                 * @member {number} averageDistance
                 * @memberof app.trainlcd.grpc.Line
                 * @instance
                 */
                Line.prototype.averageDistance = 0;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * Line _nameRoman.
                 * @member {"nameRoman"|undefined} _nameRoman
                 * @memberof app.trainlcd.grpc.Line
                 * @instance
                 */
                Object.defineProperty(Line.prototype, "_nameRoman", {
                    get: $util.oneOfGetter($oneOfFields = ["nameRoman"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Line _nameChinese.
                 * @member {"nameChinese"|undefined} _nameChinese
                 * @memberof app.trainlcd.grpc.Line
                 * @instance
                 */
                Object.defineProperty(Line.prototype, "_nameChinese", {
                    get: $util.oneOfGetter($oneOfFields = ["nameChinese"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Line _nameKorean.
                 * @member {"nameKorean"|undefined} _nameKorean
                 * @memberof app.trainlcd.grpc.Line
                 * @instance
                 */
                Object.defineProperty(Line.prototype, "_nameKorean", {
                    get: $util.oneOfGetter($oneOfFields = ["nameKorean"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Line _station.
                 * @member {"station"|undefined} _station
                 * @memberof app.trainlcd.grpc.Line
                 * @instance
                 */
                Object.defineProperty(Line.prototype, "_station", {
                    get: $util.oneOfGetter($oneOfFields = ["station"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Line _company.
                 * @member {"company"|undefined} _company
                 * @memberof app.trainlcd.grpc.Line
                 * @instance
                 */
                Object.defineProperty(Line.prototype, "_company", {
                    get: $util.oneOfGetter($oneOfFields = ["company"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Line _trainType.
                 * @member {"trainType"|undefined} _trainType
                 * @memberof app.trainlcd.grpc.Line
                 * @instance
                 */
                Object.defineProperty(Line.prototype, "_trainType", {
                    get: $util.oneOfGetter($oneOfFields = ["trainType"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new Line instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.Line
                 * @static
                 * @param {app.trainlcd.grpc.ILine=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.Line} Line instance
                 */
                Line.create = function create(properties) {
                    return new Line(properties);
                };

                /**
                 * Encodes the specified Line message. Does not implicitly {@link app.trainlcd.grpc.Line.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.Line
                 * @static
                 * @param {app.trainlcd.grpc.ILine} message Line message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Line.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
                    if (message.nameShort != null && Object.hasOwnProperty.call(message, "nameShort"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.nameShort);
                    if (message.nameKatakana != null && Object.hasOwnProperty.call(message, "nameKatakana"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.nameKatakana);
                    if (message.nameFull != null && Object.hasOwnProperty.call(message, "nameFull"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.nameFull);
                    if (message.nameRoman != null && Object.hasOwnProperty.call(message, "nameRoman"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.nameRoman);
                    if (message.nameChinese != null && Object.hasOwnProperty.call(message, "nameChinese"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.nameChinese);
                    if (message.nameKorean != null && Object.hasOwnProperty.call(message, "nameKorean"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.nameKorean);
                    if (message.color != null && Object.hasOwnProperty.call(message, "color"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.color);
                    if (message.lineType != null && Object.hasOwnProperty.call(message, "lineType"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.lineType);
                    if (message.lineSymbols != null && message.lineSymbols.length)
                        for (let i = 0; i < message.lineSymbols.length; ++i)
                            $root.app.trainlcd.grpc.LineSymbol.encode(message.lineSymbols[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                    if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.status);
                    if (message.station != null && Object.hasOwnProperty.call(message, "station"))
                        $root.app.trainlcd.grpc.Station.encode(message.station, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                    if (message.company != null && Object.hasOwnProperty.call(message, "company"))
                        $root.app.trainlcd.grpc.Company.encode(message.company, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                    if (message.trainType != null && Object.hasOwnProperty.call(message, "trainType"))
                        $root.app.trainlcd.grpc.TrainType.encode(message.trainType, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
                    if (message.averageDistance != null && Object.hasOwnProperty.call(message, "averageDistance"))
                        writer.uint32(/* id 15, wireType 1 =*/121).double(message.averageDistance);
                    return writer;
                };

                /**
                 * Encodes the specified Line message, length delimited. Does not implicitly {@link app.trainlcd.grpc.Line.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.Line
                 * @static
                 * @param {app.trainlcd.grpc.ILine} message Line message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Line.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Line message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.Line
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.Line} Line
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Line.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.Line();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.id = reader.uint32();
                                break;
                            }
                        case 2: {
                                message.nameShort = reader.string();
                                break;
                            }
                        case 3: {
                                message.nameKatakana = reader.string();
                                break;
                            }
                        case 4: {
                                message.nameFull = reader.string();
                                break;
                            }
                        case 5: {
                                message.nameRoman = reader.string();
                                break;
                            }
                        case 6: {
                                message.nameChinese = reader.string();
                                break;
                            }
                        case 7: {
                                message.nameKorean = reader.string();
                                break;
                            }
                        case 8: {
                                message.color = reader.string();
                                break;
                            }
                        case 9: {
                                message.lineType = reader.int32();
                                break;
                            }
                        case 10: {
                                if (!(message.lineSymbols && message.lineSymbols.length))
                                    message.lineSymbols = [];
                                message.lineSymbols.push($root.app.trainlcd.grpc.LineSymbol.decode(reader, reader.uint32()));
                                break;
                            }
                        case 11: {
                                message.status = reader.int32();
                                break;
                            }
                        case 12: {
                                message.station = $root.app.trainlcd.grpc.Station.decode(reader, reader.uint32());
                                break;
                            }
                        case 13: {
                                message.company = $root.app.trainlcd.grpc.Company.decode(reader, reader.uint32());
                                break;
                            }
                        case 14: {
                                message.trainType = $root.app.trainlcd.grpc.TrainType.decode(reader, reader.uint32());
                                break;
                            }
                        case 15: {
                                message.averageDistance = reader.double();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Line message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.Line
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.Line} Line
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Line.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Line message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.Line
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Line.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id))
                            return "id: integer expected";
                    if (message.nameShort != null && message.hasOwnProperty("nameShort"))
                        if (!$util.isString(message.nameShort))
                            return "nameShort: string expected";
                    if (message.nameKatakana != null && message.hasOwnProperty("nameKatakana"))
                        if (!$util.isString(message.nameKatakana))
                            return "nameKatakana: string expected";
                    if (message.nameFull != null && message.hasOwnProperty("nameFull"))
                        if (!$util.isString(message.nameFull))
                            return "nameFull: string expected";
                    if (message.nameRoman != null && message.hasOwnProperty("nameRoman")) {
                        properties._nameRoman = 1;
                        if (!$util.isString(message.nameRoman))
                            return "nameRoman: string expected";
                    }
                    if (message.nameChinese != null && message.hasOwnProperty("nameChinese")) {
                        properties._nameChinese = 1;
                        if (!$util.isString(message.nameChinese))
                            return "nameChinese: string expected";
                    }
                    if (message.nameKorean != null && message.hasOwnProperty("nameKorean")) {
                        properties._nameKorean = 1;
                        if (!$util.isString(message.nameKorean))
                            return "nameKorean: string expected";
                    }
                    if (message.color != null && message.hasOwnProperty("color"))
                        if (!$util.isString(message.color))
                            return "color: string expected";
                    if (message.lineType != null && message.hasOwnProperty("lineType"))
                        switch (message.lineType) {
                        default:
                            return "lineType: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        }
                    if (message.lineSymbols != null && message.hasOwnProperty("lineSymbols")) {
                        if (!Array.isArray(message.lineSymbols))
                            return "lineSymbols: array expected";
                        for (let i = 0; i < message.lineSymbols.length; ++i) {
                            let error = $root.app.trainlcd.grpc.LineSymbol.verify(message.lineSymbols[i]);
                            if (error)
                                return "lineSymbols." + error;
                        }
                    }
                    if (message.status != null && message.hasOwnProperty("status"))
                        switch (message.status) {
                        default:
                            return "status: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.station != null && message.hasOwnProperty("station")) {
                        properties._station = 1;
                        {
                            let error = $root.app.trainlcd.grpc.Station.verify(message.station);
                            if (error)
                                return "station." + error;
                        }
                    }
                    if (message.company != null && message.hasOwnProperty("company")) {
                        properties._company = 1;
                        {
                            let error = $root.app.trainlcd.grpc.Company.verify(message.company);
                            if (error)
                                return "company." + error;
                        }
                    }
                    if (message.trainType != null && message.hasOwnProperty("trainType")) {
                        properties._trainType = 1;
                        {
                            let error = $root.app.trainlcd.grpc.TrainType.verify(message.trainType);
                            if (error)
                                return "trainType." + error;
                        }
                    }
                    if (message.averageDistance != null && message.hasOwnProperty("averageDistance"))
                        if (typeof message.averageDistance !== "number")
                            return "averageDistance: number expected";
                    return null;
                };

                /**
                 * Creates a Line message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.Line
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.Line} Line
                 */
                Line.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.Line)
                        return object;
                    let message = new $root.app.trainlcd.grpc.Line();
                    if (object.id != null)
                        message.id = object.id >>> 0;
                    if (object.nameShort != null)
                        message.nameShort = String(object.nameShort);
                    if (object.nameKatakana != null)
                        message.nameKatakana = String(object.nameKatakana);
                    if (object.nameFull != null)
                        message.nameFull = String(object.nameFull);
                    if (object.nameRoman != null)
                        message.nameRoman = String(object.nameRoman);
                    if (object.nameChinese != null)
                        message.nameChinese = String(object.nameChinese);
                    if (object.nameKorean != null)
                        message.nameKorean = String(object.nameKorean);
                    if (object.color != null)
                        message.color = String(object.color);
                    switch (object.lineType) {
                    default:
                        if (typeof object.lineType === "number") {
                            message.lineType = object.lineType;
                            break;
                        }
                        break;
                    case "OtherLineType":
                    case 0:
                        message.lineType = 0;
                        break;
                    case "BulletTrain":
                    case 1:
                        message.lineType = 1;
                        break;
                    case "Normal":
                    case 2:
                        message.lineType = 2;
                        break;
                    case "Subway":
                    case 3:
                        message.lineType = 3;
                        break;
                    case "Tram":
                    case 4:
                        message.lineType = 4;
                        break;
                    case "MonorailOrAGT":
                    case 5:
                        message.lineType = 5;
                        break;
                    }
                    if (object.lineSymbols) {
                        if (!Array.isArray(object.lineSymbols))
                            throw TypeError(".app.trainlcd.grpc.Line.lineSymbols: array expected");
                        message.lineSymbols = [];
                        for (let i = 0; i < object.lineSymbols.length; ++i) {
                            if (typeof object.lineSymbols[i] !== "object")
                                throw TypeError(".app.trainlcd.grpc.Line.lineSymbols: object expected");
                            message.lineSymbols[i] = $root.app.trainlcd.grpc.LineSymbol.fromObject(object.lineSymbols[i]);
                        }
                    }
                    switch (object.status) {
                    default:
                        if (typeof object.status === "number") {
                            message.status = object.status;
                            break;
                        }
                        break;
                    case "InOperation":
                    case 0:
                        message.status = 0;
                        break;
                    case "NotOpened":
                    case 1:
                        message.status = 1;
                        break;
                    case "Closed":
                    case 2:
                        message.status = 2;
                        break;
                    }
                    if (object.station != null) {
                        if (typeof object.station !== "object")
                            throw TypeError(".app.trainlcd.grpc.Line.station: object expected");
                        message.station = $root.app.trainlcd.grpc.Station.fromObject(object.station);
                    }
                    if (object.company != null) {
                        if (typeof object.company !== "object")
                            throw TypeError(".app.trainlcd.grpc.Line.company: object expected");
                        message.company = $root.app.trainlcd.grpc.Company.fromObject(object.company);
                    }
                    if (object.trainType != null) {
                        if (typeof object.trainType !== "object")
                            throw TypeError(".app.trainlcd.grpc.Line.trainType: object expected");
                        message.trainType = $root.app.trainlcd.grpc.TrainType.fromObject(object.trainType);
                    }
                    if (object.averageDistance != null)
                        message.averageDistance = Number(object.averageDistance);
                    return message;
                };

                /**
                 * Creates a plain object from a Line message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.Line
                 * @static
                 * @param {app.trainlcd.grpc.Line} message Line
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Line.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.lineSymbols = [];
                    if (options.defaults) {
                        object.id = 0;
                        object.nameShort = "";
                        object.nameKatakana = "";
                        object.nameFull = "";
                        object.color = "";
                        object.lineType = options.enums === String ? "OtherLineType" : 0;
                        object.status = options.enums === String ? "InOperation" : 0;
                        object.averageDistance = 0;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.nameShort != null && message.hasOwnProperty("nameShort"))
                        object.nameShort = message.nameShort;
                    if (message.nameKatakana != null && message.hasOwnProperty("nameKatakana"))
                        object.nameKatakana = message.nameKatakana;
                    if (message.nameFull != null && message.hasOwnProperty("nameFull"))
                        object.nameFull = message.nameFull;
                    if (message.nameRoman != null && message.hasOwnProperty("nameRoman")) {
                        object.nameRoman = message.nameRoman;
                        if (options.oneofs)
                            object._nameRoman = "nameRoman";
                    }
                    if (message.nameChinese != null && message.hasOwnProperty("nameChinese")) {
                        object.nameChinese = message.nameChinese;
                        if (options.oneofs)
                            object._nameChinese = "nameChinese";
                    }
                    if (message.nameKorean != null && message.hasOwnProperty("nameKorean")) {
                        object.nameKorean = message.nameKorean;
                        if (options.oneofs)
                            object._nameKorean = "nameKorean";
                    }
                    if (message.color != null && message.hasOwnProperty("color"))
                        object.color = message.color;
                    if (message.lineType != null && message.hasOwnProperty("lineType"))
                        object.lineType = options.enums === String ? $root.app.trainlcd.grpc.LineType[message.lineType] === undefined ? message.lineType : $root.app.trainlcd.grpc.LineType[message.lineType] : message.lineType;
                    if (message.lineSymbols && message.lineSymbols.length) {
                        object.lineSymbols = [];
                        for (let j = 0; j < message.lineSymbols.length; ++j)
                            object.lineSymbols[j] = $root.app.trainlcd.grpc.LineSymbol.toObject(message.lineSymbols[j], options);
                    }
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = options.enums === String ? $root.app.trainlcd.grpc.OperationStatus[message.status] === undefined ? message.status : $root.app.trainlcd.grpc.OperationStatus[message.status] : message.status;
                    if (message.station != null && message.hasOwnProperty("station")) {
                        object.station = $root.app.trainlcd.grpc.Station.toObject(message.station, options);
                        if (options.oneofs)
                            object._station = "station";
                    }
                    if (message.company != null && message.hasOwnProperty("company")) {
                        object.company = $root.app.trainlcd.grpc.Company.toObject(message.company, options);
                        if (options.oneofs)
                            object._company = "company";
                    }
                    if (message.trainType != null && message.hasOwnProperty("trainType")) {
                        object.trainType = $root.app.trainlcd.grpc.TrainType.toObject(message.trainType, options);
                        if (options.oneofs)
                            object._trainType = "trainType";
                    }
                    if (message.averageDistance != null && message.hasOwnProperty("averageDistance"))
                        object.averageDistance = options.json && !isFinite(message.averageDistance) ? String(message.averageDistance) : message.averageDistance;
                    return object;
                };

                /**
                 * Converts this Line to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.Line
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Line.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Line
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.Line
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Line.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.Line";
                };

                return Line;
            })();

            grpc.SingleLine = (function() {

                /**
                 * Properties of a SingleLine.
                 * @memberof app.trainlcd.grpc
                 * @interface ISingleLine
                 * @property {app.trainlcd.grpc.ILine|null} [line] SingleLine line
                 */

                /**
                 * Constructs a new SingleLine.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a SingleLine.
                 * @implements ISingleLine
                 * @constructor
                 * @param {app.trainlcd.grpc.ISingleLine=} [properties] Properties to set
                 */
                function SingleLine(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SingleLine line.
                 * @member {app.trainlcd.grpc.ILine|null|undefined} line
                 * @memberof app.trainlcd.grpc.SingleLine
                 * @instance
                 */
                SingleLine.prototype.line = null;

                /**
                 * Creates a new SingleLine instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.SingleLine
                 * @static
                 * @param {app.trainlcd.grpc.ISingleLine=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.SingleLine} SingleLine instance
                 */
                SingleLine.create = function create(properties) {
                    return new SingleLine(properties);
                };

                /**
                 * Encodes the specified SingleLine message. Does not implicitly {@link app.trainlcd.grpc.SingleLine.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.SingleLine
                 * @static
                 * @param {app.trainlcd.grpc.ISingleLine} message SingleLine message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SingleLine.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.line != null && Object.hasOwnProperty.call(message, "line"))
                        $root.app.trainlcd.grpc.Line.encode(message.line, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified SingleLine message, length delimited. Does not implicitly {@link app.trainlcd.grpc.SingleLine.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.SingleLine
                 * @static
                 * @param {app.trainlcd.grpc.ISingleLine} message SingleLine message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SingleLine.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SingleLine message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.SingleLine
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.SingleLine} SingleLine
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SingleLine.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.SingleLine();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.line = $root.app.trainlcd.grpc.Line.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SingleLine message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.SingleLine
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.SingleLine} SingleLine
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SingleLine.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SingleLine message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.SingleLine
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SingleLine.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.line != null && message.hasOwnProperty("line")) {
                        let error = $root.app.trainlcd.grpc.Line.verify(message.line);
                        if (error)
                            return "line." + error;
                    }
                    return null;
                };

                /**
                 * Creates a SingleLine message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.SingleLine
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.SingleLine} SingleLine
                 */
                SingleLine.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.SingleLine)
                        return object;
                    let message = new $root.app.trainlcd.grpc.SingleLine();
                    if (object.line != null) {
                        if (typeof object.line !== "object")
                            throw TypeError(".app.trainlcd.grpc.SingleLine.line: object expected");
                        message.line = $root.app.trainlcd.grpc.Line.fromObject(object.line);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a SingleLine message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.SingleLine
                 * @static
                 * @param {app.trainlcd.grpc.SingleLine} message SingleLine
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SingleLine.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.line = null;
                    if (message.line != null && message.hasOwnProperty("line"))
                        object.line = $root.app.trainlcd.grpc.Line.toObject(message.line, options);
                    return object;
                };

                /**
                 * Converts this SingleLine to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.SingleLine
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SingleLine.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SingleLine
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.SingleLine
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SingleLine.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.SingleLine";
                };

                return SingleLine;
            })();

            grpc.MultipleLine = (function() {

                /**
                 * Properties of a MultipleLine.
                 * @memberof app.trainlcd.grpc
                 * @interface IMultipleLine
                 * @property {Array.<app.trainlcd.grpc.ILine>|null} [lines] MultipleLine lines
                 */

                /**
                 * Constructs a new MultipleLine.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a MultipleLine.
                 * @implements IMultipleLine
                 * @constructor
                 * @param {app.trainlcd.grpc.IMultipleLine=} [properties] Properties to set
                 */
                function MultipleLine(properties) {
                    this.lines = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MultipleLine lines.
                 * @member {Array.<app.trainlcd.grpc.ILine>} lines
                 * @memberof app.trainlcd.grpc.MultipleLine
                 * @instance
                 */
                MultipleLine.prototype.lines = $util.emptyArray;

                /**
                 * Creates a new MultipleLine instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.MultipleLine
                 * @static
                 * @param {app.trainlcd.grpc.IMultipleLine=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.MultipleLine} MultipleLine instance
                 */
                MultipleLine.create = function create(properties) {
                    return new MultipleLine(properties);
                };

                /**
                 * Encodes the specified MultipleLine message. Does not implicitly {@link app.trainlcd.grpc.MultipleLine.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.MultipleLine
                 * @static
                 * @param {app.trainlcd.grpc.IMultipleLine} message MultipleLine message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MultipleLine.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.lines != null && message.lines.length)
                        for (let i = 0; i < message.lines.length; ++i)
                            $root.app.trainlcd.grpc.Line.encode(message.lines[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified MultipleLine message, length delimited. Does not implicitly {@link app.trainlcd.grpc.MultipleLine.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.MultipleLine
                 * @static
                 * @param {app.trainlcd.grpc.IMultipleLine} message MultipleLine message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MultipleLine.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a MultipleLine message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.MultipleLine
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.MultipleLine} MultipleLine
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MultipleLine.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.MultipleLine();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.lines && message.lines.length))
                                    message.lines = [];
                                message.lines.push($root.app.trainlcd.grpc.Line.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a MultipleLine message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.MultipleLine
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.MultipleLine} MultipleLine
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MultipleLine.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MultipleLine message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.MultipleLine
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MultipleLine.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.lines != null && message.hasOwnProperty("lines")) {
                        if (!Array.isArray(message.lines))
                            return "lines: array expected";
                        for (let i = 0; i < message.lines.length; ++i) {
                            let error = $root.app.trainlcd.grpc.Line.verify(message.lines[i]);
                            if (error)
                                return "lines." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a MultipleLine message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.MultipleLine
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.MultipleLine} MultipleLine
                 */
                MultipleLine.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.MultipleLine)
                        return object;
                    let message = new $root.app.trainlcd.grpc.MultipleLine();
                    if (object.lines) {
                        if (!Array.isArray(object.lines))
                            throw TypeError(".app.trainlcd.grpc.MultipleLine.lines: array expected");
                        message.lines = [];
                        for (let i = 0; i < object.lines.length; ++i) {
                            if (typeof object.lines[i] !== "object")
                                throw TypeError(".app.trainlcd.grpc.MultipleLine.lines: object expected");
                            message.lines[i] = $root.app.trainlcd.grpc.Line.fromObject(object.lines[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a MultipleLine message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.MultipleLine
                 * @static
                 * @param {app.trainlcd.grpc.MultipleLine} message MultipleLine
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MultipleLine.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.lines = [];
                    if (message.lines && message.lines.length) {
                        object.lines = [];
                        for (let j = 0; j < message.lines.length; ++j)
                            object.lines[j] = $root.app.trainlcd.grpc.Line.toObject(message.lines[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this MultipleLine to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.MultipleLine
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MultipleLine.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for MultipleLine
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.MultipleLine
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MultipleLine.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.MultipleLine";
                };

                return MultipleLine;
            })();

            grpc.Route = (function() {

                /**
                 * Properties of a Route.
                 * @memberof app.trainlcd.grpc
                 * @interface IRoute
                 * @property {number|null} [id] Route id
                 * @property {Array.<app.trainlcd.grpc.IStation>|null} [stops] Route stops
                 */

                /**
                 * Constructs a new Route.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a Route.
                 * @implements IRoute
                 * @constructor
                 * @param {app.trainlcd.grpc.IRoute=} [properties] Properties to set
                 */
                function Route(properties) {
                    this.stops = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Route id.
                 * @member {number} id
                 * @memberof app.trainlcd.grpc.Route
                 * @instance
                 */
                Route.prototype.id = 0;

                /**
                 * Route stops.
                 * @member {Array.<app.trainlcd.grpc.IStation>} stops
                 * @memberof app.trainlcd.grpc.Route
                 * @instance
                 */
                Route.prototype.stops = $util.emptyArray;

                /**
                 * Creates a new Route instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.Route
                 * @static
                 * @param {app.trainlcd.grpc.IRoute=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.Route} Route instance
                 */
                Route.create = function create(properties) {
                    return new Route(properties);
                };

                /**
                 * Encodes the specified Route message. Does not implicitly {@link app.trainlcd.grpc.Route.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.Route
                 * @static
                 * @param {app.trainlcd.grpc.IRoute} message Route message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Route.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
                    if (message.stops != null && message.stops.length)
                        for (let i = 0; i < message.stops.length; ++i)
                            $root.app.trainlcd.grpc.Station.encode(message.stops[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Route message, length delimited. Does not implicitly {@link app.trainlcd.grpc.Route.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.Route
                 * @static
                 * @param {app.trainlcd.grpc.IRoute} message Route message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Route.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Route message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.Route
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.Route} Route
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Route.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.Route();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.id = reader.uint32();
                                break;
                            }
                        case 2: {
                                if (!(message.stops && message.stops.length))
                                    message.stops = [];
                                message.stops.push($root.app.trainlcd.grpc.Station.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Route message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.Route
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.Route} Route
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Route.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Route message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.Route
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Route.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id))
                            return "id: integer expected";
                    if (message.stops != null && message.hasOwnProperty("stops")) {
                        if (!Array.isArray(message.stops))
                            return "stops: array expected";
                        for (let i = 0; i < message.stops.length; ++i) {
                            let error = $root.app.trainlcd.grpc.Station.verify(message.stops[i]);
                            if (error)
                                return "stops." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a Route message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.Route
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.Route} Route
                 */
                Route.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.Route)
                        return object;
                    let message = new $root.app.trainlcd.grpc.Route();
                    if (object.id != null)
                        message.id = object.id >>> 0;
                    if (object.stops) {
                        if (!Array.isArray(object.stops))
                            throw TypeError(".app.trainlcd.grpc.Route.stops: array expected");
                        message.stops = [];
                        for (let i = 0; i < object.stops.length; ++i) {
                            if (typeof object.stops[i] !== "object")
                                throw TypeError(".app.trainlcd.grpc.Route.stops: object expected");
                            message.stops[i] = $root.app.trainlcd.grpc.Station.fromObject(object.stops[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Route message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.Route
                 * @static
                 * @param {app.trainlcd.grpc.Route} message Route
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Route.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.stops = [];
                    if (options.defaults)
                        object.id = 0;
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.stops && message.stops.length) {
                        object.stops = [];
                        for (let j = 0; j < message.stops.length; ++j)
                            object.stops[j] = $root.app.trainlcd.grpc.Station.toObject(message.stops[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this Route to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.Route
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Route.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Route
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.Route
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Route.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.Route";
                };

                return Route;
            })();

            grpc.StationMinimal = (function() {

                /**
                 * Properties of a StationMinimal.
                 * @memberof app.trainlcd.grpc
                 * @interface IStationMinimal
                 * @property {number|null} [id] StationMinimal id
                 * @property {number|null} [groupId] StationMinimal groupId
                 * @property {string|null} [name] StationMinimal name
                 * @property {string|null} [nameKatakana] StationMinimal nameKatakana
                 * @property {string|null} [nameRoman] StationMinimal nameRoman
                 * @property {Array.<number>|null} [lineIds] StationMinimal lineIds
                 * @property {Array.<app.trainlcd.grpc.IStationNumber>|null} [stationNumbers] StationMinimal stationNumbers
                 * @property {app.trainlcd.grpc.StopCondition|null} [stopCondition] StationMinimal stopCondition
                 * @property {boolean|null} [hasTrainTypes] StationMinimal hasTrainTypes
                 * @property {number|null} [trainTypeId] StationMinimal trainTypeId
                 */

                /**
                 * Constructs a new StationMinimal.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a StationMinimal.
                 * @implements IStationMinimal
                 * @constructor
                 * @param {app.trainlcd.grpc.IStationMinimal=} [properties] Properties to set
                 */
                function StationMinimal(properties) {
                    this.lineIds = [];
                    this.stationNumbers = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * StationMinimal id.
                 * @member {number} id
                 * @memberof app.trainlcd.grpc.StationMinimal
                 * @instance
                 */
                StationMinimal.prototype.id = 0;

                /**
                 * StationMinimal groupId.
                 * @member {number} groupId
                 * @memberof app.trainlcd.grpc.StationMinimal
                 * @instance
                 */
                StationMinimal.prototype.groupId = 0;

                /**
                 * StationMinimal name.
                 * @member {string} name
                 * @memberof app.trainlcd.grpc.StationMinimal
                 * @instance
                 */
                StationMinimal.prototype.name = "";

                /**
                 * StationMinimal nameKatakana.
                 * @member {string} nameKatakana
                 * @memberof app.trainlcd.grpc.StationMinimal
                 * @instance
                 */
                StationMinimal.prototype.nameKatakana = "";

                /**
                 * StationMinimal nameRoman.
                 * @member {string|null|undefined} nameRoman
                 * @memberof app.trainlcd.grpc.StationMinimal
                 * @instance
                 */
                StationMinimal.prototype.nameRoman = null;

                /**
                 * StationMinimal lineIds.
                 * @member {Array.<number>} lineIds
                 * @memberof app.trainlcd.grpc.StationMinimal
                 * @instance
                 */
                StationMinimal.prototype.lineIds = $util.emptyArray;

                /**
                 * StationMinimal stationNumbers.
                 * @member {Array.<app.trainlcd.grpc.IStationNumber>} stationNumbers
                 * @memberof app.trainlcd.grpc.StationMinimal
                 * @instance
                 */
                StationMinimal.prototype.stationNumbers = $util.emptyArray;

                /**
                 * StationMinimal stopCondition.
                 * @member {app.trainlcd.grpc.StopCondition} stopCondition
                 * @memberof app.trainlcd.grpc.StationMinimal
                 * @instance
                 */
                StationMinimal.prototype.stopCondition = 0;

                /**
                 * StationMinimal hasTrainTypes.
                 * @member {boolean|null|undefined} hasTrainTypes
                 * @memberof app.trainlcd.grpc.StationMinimal
                 * @instance
                 */
                StationMinimal.prototype.hasTrainTypes = null;

                /**
                 * StationMinimal trainTypeId.
                 * @member {number|null|undefined} trainTypeId
                 * @memberof app.trainlcd.grpc.StationMinimal
                 * @instance
                 */
                StationMinimal.prototype.trainTypeId = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * StationMinimal _nameRoman.
                 * @member {"nameRoman"|undefined} _nameRoman
                 * @memberof app.trainlcd.grpc.StationMinimal
                 * @instance
                 */
                Object.defineProperty(StationMinimal.prototype, "_nameRoman", {
                    get: $util.oneOfGetter($oneOfFields = ["nameRoman"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * StationMinimal _hasTrainTypes.
                 * @member {"hasTrainTypes"|undefined} _hasTrainTypes
                 * @memberof app.trainlcd.grpc.StationMinimal
                 * @instance
                 */
                Object.defineProperty(StationMinimal.prototype, "_hasTrainTypes", {
                    get: $util.oneOfGetter($oneOfFields = ["hasTrainTypes"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * StationMinimal _trainTypeId.
                 * @member {"trainTypeId"|undefined} _trainTypeId
                 * @memberof app.trainlcd.grpc.StationMinimal
                 * @instance
                 */
                Object.defineProperty(StationMinimal.prototype, "_trainTypeId", {
                    get: $util.oneOfGetter($oneOfFields = ["trainTypeId"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new StationMinimal instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.StationMinimal
                 * @static
                 * @param {app.trainlcd.grpc.IStationMinimal=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.StationMinimal} StationMinimal instance
                 */
                StationMinimal.create = function create(properties) {
                    return new StationMinimal(properties);
                };

                /**
                 * Encodes the specified StationMinimal message. Does not implicitly {@link app.trainlcd.grpc.StationMinimal.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.StationMinimal
                 * @static
                 * @param {app.trainlcd.grpc.IStationMinimal} message StationMinimal message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StationMinimal.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
                    if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.groupId);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                    if (message.nameKatakana != null && Object.hasOwnProperty.call(message, "nameKatakana"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.nameKatakana);
                    if (message.nameRoman != null && Object.hasOwnProperty.call(message, "nameRoman"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.nameRoman);
                    if (message.lineIds != null && message.lineIds.length) {
                        writer.uint32(/* id 6, wireType 2 =*/50).fork();
                        for (let i = 0; i < message.lineIds.length; ++i)
                            writer.uint32(message.lineIds[i]);
                        writer.ldelim();
                    }
                    if (message.stationNumbers != null && message.stationNumbers.length)
                        for (let i = 0; i < message.stationNumbers.length; ++i)
                            $root.app.trainlcd.grpc.StationNumber.encode(message.stationNumbers[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.stopCondition != null && Object.hasOwnProperty.call(message, "stopCondition"))
                        writer.uint32(/* id 8, wireType 0 =*/64).int32(message.stopCondition);
                    if (message.hasTrainTypes != null && Object.hasOwnProperty.call(message, "hasTrainTypes"))
                        writer.uint32(/* id 9, wireType 0 =*/72).bool(message.hasTrainTypes);
                    if (message.trainTypeId != null && Object.hasOwnProperty.call(message, "trainTypeId"))
                        writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.trainTypeId);
                    return writer;
                };

                /**
                 * Encodes the specified StationMinimal message, length delimited. Does not implicitly {@link app.trainlcd.grpc.StationMinimal.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.StationMinimal
                 * @static
                 * @param {app.trainlcd.grpc.IStationMinimal} message StationMinimal message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StationMinimal.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a StationMinimal message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.StationMinimal
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.StationMinimal} StationMinimal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StationMinimal.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.StationMinimal();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.id = reader.uint32();
                                break;
                            }
                        case 2: {
                                message.groupId = reader.uint32();
                                break;
                            }
                        case 3: {
                                message.name = reader.string();
                                break;
                            }
                        case 4: {
                                message.nameKatakana = reader.string();
                                break;
                            }
                        case 5: {
                                message.nameRoman = reader.string();
                                break;
                            }
                        case 6: {
                                if (!(message.lineIds && message.lineIds.length))
                                    message.lineIds = [];
                                if ((tag & 7) === 2) {
                                    let end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.lineIds.push(reader.uint32());
                                } else
                                    message.lineIds.push(reader.uint32());
                                break;
                            }
                        case 7: {
                                if (!(message.stationNumbers && message.stationNumbers.length))
                                    message.stationNumbers = [];
                                message.stationNumbers.push($root.app.trainlcd.grpc.StationNumber.decode(reader, reader.uint32()));
                                break;
                            }
                        case 8: {
                                message.stopCondition = reader.int32();
                                break;
                            }
                        case 9: {
                                message.hasTrainTypes = reader.bool();
                                break;
                            }
                        case 10: {
                                message.trainTypeId = reader.uint32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a StationMinimal message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.StationMinimal
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.StationMinimal} StationMinimal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StationMinimal.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a StationMinimal message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.StationMinimal
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                StationMinimal.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id))
                            return "id: integer expected";
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        if (!$util.isInteger(message.groupId))
                            return "groupId: integer expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.nameKatakana != null && message.hasOwnProperty("nameKatakana"))
                        if (!$util.isString(message.nameKatakana))
                            return "nameKatakana: string expected";
                    if (message.nameRoman != null && message.hasOwnProperty("nameRoman")) {
                        properties._nameRoman = 1;
                        if (!$util.isString(message.nameRoman))
                            return "nameRoman: string expected";
                    }
                    if (message.lineIds != null && message.hasOwnProperty("lineIds")) {
                        if (!Array.isArray(message.lineIds))
                            return "lineIds: array expected";
                        for (let i = 0; i < message.lineIds.length; ++i)
                            if (!$util.isInteger(message.lineIds[i]))
                                return "lineIds: integer[] expected";
                    }
                    if (message.stationNumbers != null && message.hasOwnProperty("stationNumbers")) {
                        if (!Array.isArray(message.stationNumbers))
                            return "stationNumbers: array expected";
                        for (let i = 0; i < message.stationNumbers.length; ++i) {
                            let error = $root.app.trainlcd.grpc.StationNumber.verify(message.stationNumbers[i]);
                            if (error)
                                return "stationNumbers." + error;
                        }
                    }
                    if (message.stopCondition != null && message.hasOwnProperty("stopCondition"))
                        switch (message.stopCondition) {
                        default:
                            return "stopCondition: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        }
                    if (message.hasTrainTypes != null && message.hasOwnProperty("hasTrainTypes")) {
                        properties._hasTrainTypes = 1;
                        if (typeof message.hasTrainTypes !== "boolean")
                            return "hasTrainTypes: boolean expected";
                    }
                    if (message.trainTypeId != null && message.hasOwnProperty("trainTypeId")) {
                        properties._trainTypeId = 1;
                        if (!$util.isInteger(message.trainTypeId))
                            return "trainTypeId: integer expected";
                    }
                    return null;
                };

                /**
                 * Creates a StationMinimal message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.StationMinimal
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.StationMinimal} StationMinimal
                 */
                StationMinimal.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.StationMinimal)
                        return object;
                    let message = new $root.app.trainlcd.grpc.StationMinimal();
                    if (object.id != null)
                        message.id = object.id >>> 0;
                    if (object.groupId != null)
                        message.groupId = object.groupId >>> 0;
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.nameKatakana != null)
                        message.nameKatakana = String(object.nameKatakana);
                    if (object.nameRoman != null)
                        message.nameRoman = String(object.nameRoman);
                    if (object.lineIds) {
                        if (!Array.isArray(object.lineIds))
                            throw TypeError(".app.trainlcd.grpc.StationMinimal.lineIds: array expected");
                        message.lineIds = [];
                        for (let i = 0; i < object.lineIds.length; ++i)
                            message.lineIds[i] = object.lineIds[i] >>> 0;
                    }
                    if (object.stationNumbers) {
                        if (!Array.isArray(object.stationNumbers))
                            throw TypeError(".app.trainlcd.grpc.StationMinimal.stationNumbers: array expected");
                        message.stationNumbers = [];
                        for (let i = 0; i < object.stationNumbers.length; ++i) {
                            if (typeof object.stationNumbers[i] !== "object")
                                throw TypeError(".app.trainlcd.grpc.StationMinimal.stationNumbers: object expected");
                            message.stationNumbers[i] = $root.app.trainlcd.grpc.StationNumber.fromObject(object.stationNumbers[i]);
                        }
                    }
                    switch (object.stopCondition) {
                    default:
                        if (typeof object.stopCondition === "number") {
                            message.stopCondition = object.stopCondition;
                            break;
                        }
                        break;
                    case "All":
                    case 0:
                        message.stopCondition = 0;
                        break;
                    case "Not":
                    case 1:
                        message.stopCondition = 1;
                        break;
                    case "Partial":
                    case 2:
                        message.stopCondition = 2;
                        break;
                    case "Weekday":
                    case 3:
                        message.stopCondition = 3;
                        break;
                    case "Holiday":
                    case 4:
                        message.stopCondition = 4;
                        break;
                    case "PartialStop":
                    case 5:
                        message.stopCondition = 5;
                        break;
                    }
                    if (object.hasTrainTypes != null)
                        message.hasTrainTypes = Boolean(object.hasTrainTypes);
                    if (object.trainTypeId != null)
                        message.trainTypeId = object.trainTypeId >>> 0;
                    return message;
                };

                /**
                 * Creates a plain object from a StationMinimal message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.StationMinimal
                 * @static
                 * @param {app.trainlcd.grpc.StationMinimal} message StationMinimal
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                StationMinimal.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults) {
                        object.lineIds = [];
                        object.stationNumbers = [];
                    }
                    if (options.defaults) {
                        object.id = 0;
                        object.groupId = 0;
                        object.name = "";
                        object.nameKatakana = "";
                        object.stopCondition = options.enums === String ? "All" : 0;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.groupId != null && message.hasOwnProperty("groupId"))
                        object.groupId = message.groupId;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.nameKatakana != null && message.hasOwnProperty("nameKatakana"))
                        object.nameKatakana = message.nameKatakana;
                    if (message.nameRoman != null && message.hasOwnProperty("nameRoman")) {
                        object.nameRoman = message.nameRoman;
                        if (options.oneofs)
                            object._nameRoman = "nameRoman";
                    }
                    if (message.lineIds && message.lineIds.length) {
                        object.lineIds = [];
                        for (let j = 0; j < message.lineIds.length; ++j)
                            object.lineIds[j] = message.lineIds[j];
                    }
                    if (message.stationNumbers && message.stationNumbers.length) {
                        object.stationNumbers = [];
                        for (let j = 0; j < message.stationNumbers.length; ++j)
                            object.stationNumbers[j] = $root.app.trainlcd.grpc.StationNumber.toObject(message.stationNumbers[j], options);
                    }
                    if (message.stopCondition != null && message.hasOwnProperty("stopCondition"))
                        object.stopCondition = options.enums === String ? $root.app.trainlcd.grpc.StopCondition[message.stopCondition] === undefined ? message.stopCondition : $root.app.trainlcd.grpc.StopCondition[message.stopCondition] : message.stopCondition;
                    if (message.hasTrainTypes != null && message.hasOwnProperty("hasTrainTypes")) {
                        object.hasTrainTypes = message.hasTrainTypes;
                        if (options.oneofs)
                            object._hasTrainTypes = "hasTrainTypes";
                    }
                    if (message.trainTypeId != null && message.hasOwnProperty("trainTypeId")) {
                        object.trainTypeId = message.trainTypeId;
                        if (options.oneofs)
                            object._trainTypeId = "trainTypeId";
                    }
                    return object;
                };

                /**
                 * Converts this StationMinimal to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.StationMinimal
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                StationMinimal.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for StationMinimal
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.StationMinimal
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                StationMinimal.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.StationMinimal";
                };

                return StationMinimal;
            })();

            grpc.LineMinimal = (function() {

                /**
                 * Properties of a LineMinimal.
                 * @memberof app.trainlcd.grpc
                 * @interface ILineMinimal
                 * @property {number|null} [id] LineMinimal id
                 * @property {string|null} [nameShort] LineMinimal nameShort
                 * @property {string|null} [color] LineMinimal color
                 * @property {app.trainlcd.grpc.LineType|null} [lineType] LineMinimal lineType
                 * @property {Array.<app.trainlcd.grpc.ILineSymbol>|null} [lineSymbols] LineMinimal lineSymbols
                 */

                /**
                 * Constructs a new LineMinimal.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a LineMinimal.
                 * @implements ILineMinimal
                 * @constructor
                 * @param {app.trainlcd.grpc.ILineMinimal=} [properties] Properties to set
                 */
                function LineMinimal(properties) {
                    this.lineSymbols = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * LineMinimal id.
                 * @member {number} id
                 * @memberof app.trainlcd.grpc.LineMinimal
                 * @instance
                 */
                LineMinimal.prototype.id = 0;

                /**
                 * LineMinimal nameShort.
                 * @member {string} nameShort
                 * @memberof app.trainlcd.grpc.LineMinimal
                 * @instance
                 */
                LineMinimal.prototype.nameShort = "";

                /**
                 * LineMinimal color.
                 * @member {string} color
                 * @memberof app.trainlcd.grpc.LineMinimal
                 * @instance
                 */
                LineMinimal.prototype.color = "";

                /**
                 * LineMinimal lineType.
                 * @member {app.trainlcd.grpc.LineType} lineType
                 * @memberof app.trainlcd.grpc.LineMinimal
                 * @instance
                 */
                LineMinimal.prototype.lineType = 0;

                /**
                 * LineMinimal lineSymbols.
                 * @member {Array.<app.trainlcd.grpc.ILineSymbol>} lineSymbols
                 * @memberof app.trainlcd.grpc.LineMinimal
                 * @instance
                 */
                LineMinimal.prototype.lineSymbols = $util.emptyArray;

                /**
                 * Creates a new LineMinimal instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.LineMinimal
                 * @static
                 * @param {app.trainlcd.grpc.ILineMinimal=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.LineMinimal} LineMinimal instance
                 */
                LineMinimal.create = function create(properties) {
                    return new LineMinimal(properties);
                };

                /**
                 * Encodes the specified LineMinimal message. Does not implicitly {@link app.trainlcd.grpc.LineMinimal.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.LineMinimal
                 * @static
                 * @param {app.trainlcd.grpc.ILineMinimal} message LineMinimal message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LineMinimal.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
                    if (message.nameShort != null && Object.hasOwnProperty.call(message, "nameShort"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.nameShort);
                    if (message.color != null && Object.hasOwnProperty.call(message, "color"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.color);
                    if (message.lineType != null && Object.hasOwnProperty.call(message, "lineType"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.lineType);
                    if (message.lineSymbols != null && message.lineSymbols.length)
                        for (let i = 0; i < message.lineSymbols.length; ++i)
                            $root.app.trainlcd.grpc.LineSymbol.encode(message.lineSymbols[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified LineMinimal message, length delimited. Does not implicitly {@link app.trainlcd.grpc.LineMinimal.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.LineMinimal
                 * @static
                 * @param {app.trainlcd.grpc.ILineMinimal} message LineMinimal message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LineMinimal.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a LineMinimal message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.LineMinimal
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.LineMinimal} LineMinimal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LineMinimal.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.LineMinimal();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.id = reader.uint32();
                                break;
                            }
                        case 2: {
                                message.nameShort = reader.string();
                                break;
                            }
                        case 3: {
                                message.color = reader.string();
                                break;
                            }
                        case 4: {
                                message.lineType = reader.int32();
                                break;
                            }
                        case 5: {
                                if (!(message.lineSymbols && message.lineSymbols.length))
                                    message.lineSymbols = [];
                                message.lineSymbols.push($root.app.trainlcd.grpc.LineSymbol.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a LineMinimal message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.LineMinimal
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.LineMinimal} LineMinimal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LineMinimal.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a LineMinimal message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.LineMinimal
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LineMinimal.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id))
                            return "id: integer expected";
                    if (message.nameShort != null && message.hasOwnProperty("nameShort"))
                        if (!$util.isString(message.nameShort))
                            return "nameShort: string expected";
                    if (message.color != null && message.hasOwnProperty("color"))
                        if (!$util.isString(message.color))
                            return "color: string expected";
                    if (message.lineType != null && message.hasOwnProperty("lineType"))
                        switch (message.lineType) {
                        default:
                            return "lineType: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        }
                    if (message.lineSymbols != null && message.hasOwnProperty("lineSymbols")) {
                        if (!Array.isArray(message.lineSymbols))
                            return "lineSymbols: array expected";
                        for (let i = 0; i < message.lineSymbols.length; ++i) {
                            let error = $root.app.trainlcd.grpc.LineSymbol.verify(message.lineSymbols[i]);
                            if (error)
                                return "lineSymbols." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a LineMinimal message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.LineMinimal
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.LineMinimal} LineMinimal
                 */
                LineMinimal.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.LineMinimal)
                        return object;
                    let message = new $root.app.trainlcd.grpc.LineMinimal();
                    if (object.id != null)
                        message.id = object.id >>> 0;
                    if (object.nameShort != null)
                        message.nameShort = String(object.nameShort);
                    if (object.color != null)
                        message.color = String(object.color);
                    switch (object.lineType) {
                    default:
                        if (typeof object.lineType === "number") {
                            message.lineType = object.lineType;
                            break;
                        }
                        break;
                    case "OtherLineType":
                    case 0:
                        message.lineType = 0;
                        break;
                    case "BulletTrain":
                    case 1:
                        message.lineType = 1;
                        break;
                    case "Normal":
                    case 2:
                        message.lineType = 2;
                        break;
                    case "Subway":
                    case 3:
                        message.lineType = 3;
                        break;
                    case "Tram":
                    case 4:
                        message.lineType = 4;
                        break;
                    case "MonorailOrAGT":
                    case 5:
                        message.lineType = 5;
                        break;
                    }
                    if (object.lineSymbols) {
                        if (!Array.isArray(object.lineSymbols))
                            throw TypeError(".app.trainlcd.grpc.LineMinimal.lineSymbols: array expected");
                        message.lineSymbols = [];
                        for (let i = 0; i < object.lineSymbols.length; ++i) {
                            if (typeof object.lineSymbols[i] !== "object")
                                throw TypeError(".app.trainlcd.grpc.LineMinimal.lineSymbols: object expected");
                            message.lineSymbols[i] = $root.app.trainlcd.grpc.LineSymbol.fromObject(object.lineSymbols[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a LineMinimal message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.LineMinimal
                 * @static
                 * @param {app.trainlcd.grpc.LineMinimal} message LineMinimal
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LineMinimal.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.lineSymbols = [];
                    if (options.defaults) {
                        object.id = 0;
                        object.nameShort = "";
                        object.color = "";
                        object.lineType = options.enums === String ? "OtherLineType" : 0;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.nameShort != null && message.hasOwnProperty("nameShort"))
                        object.nameShort = message.nameShort;
                    if (message.color != null && message.hasOwnProperty("color"))
                        object.color = message.color;
                    if (message.lineType != null && message.hasOwnProperty("lineType"))
                        object.lineType = options.enums === String ? $root.app.trainlcd.grpc.LineType[message.lineType] === undefined ? message.lineType : $root.app.trainlcd.grpc.LineType[message.lineType] : message.lineType;
                    if (message.lineSymbols && message.lineSymbols.length) {
                        object.lineSymbols = [];
                        for (let j = 0; j < message.lineSymbols.length; ++j)
                            object.lineSymbols[j] = $root.app.trainlcd.grpc.LineSymbol.toObject(message.lineSymbols[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this LineMinimal to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.LineMinimal
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                LineMinimal.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for LineMinimal
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.LineMinimal
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                LineMinimal.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.LineMinimal";
                };

                return LineMinimal;
            })();

            grpc.RouteMinimal = (function() {

                /**
                 * Properties of a RouteMinimal.
                 * @memberof app.trainlcd.grpc
                 * @interface IRouteMinimal
                 * @property {number|null} [id] RouteMinimal id
                 * @property {Array.<app.trainlcd.grpc.IStationMinimal>|null} [stops] RouteMinimal stops
                 */

                /**
                 * Constructs a new RouteMinimal.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a RouteMinimal.
                 * @implements IRouteMinimal
                 * @constructor
                 * @param {app.trainlcd.grpc.IRouteMinimal=} [properties] Properties to set
                 */
                function RouteMinimal(properties) {
                    this.stops = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RouteMinimal id.
                 * @member {number} id
                 * @memberof app.trainlcd.grpc.RouteMinimal
                 * @instance
                 */
                RouteMinimal.prototype.id = 0;

                /**
                 * RouteMinimal stops.
                 * @member {Array.<app.trainlcd.grpc.IStationMinimal>} stops
                 * @memberof app.trainlcd.grpc.RouteMinimal
                 * @instance
                 */
                RouteMinimal.prototype.stops = $util.emptyArray;

                /**
                 * Creates a new RouteMinimal instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.RouteMinimal
                 * @static
                 * @param {app.trainlcd.grpc.IRouteMinimal=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.RouteMinimal} RouteMinimal instance
                 */
                RouteMinimal.create = function create(properties) {
                    return new RouteMinimal(properties);
                };

                /**
                 * Encodes the specified RouteMinimal message. Does not implicitly {@link app.trainlcd.grpc.RouteMinimal.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.RouteMinimal
                 * @static
                 * @param {app.trainlcd.grpc.IRouteMinimal} message RouteMinimal message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RouteMinimal.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
                    if (message.stops != null && message.stops.length)
                        for (let i = 0; i < message.stops.length; ++i)
                            $root.app.trainlcd.grpc.StationMinimal.encode(message.stops[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified RouteMinimal message, length delimited. Does not implicitly {@link app.trainlcd.grpc.RouteMinimal.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.RouteMinimal
                 * @static
                 * @param {app.trainlcd.grpc.IRouteMinimal} message RouteMinimal message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RouteMinimal.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RouteMinimal message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.RouteMinimal
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.RouteMinimal} RouteMinimal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RouteMinimal.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.RouteMinimal();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.id = reader.uint32();
                                break;
                            }
                        case 2: {
                                if (!(message.stops && message.stops.length))
                                    message.stops = [];
                                message.stops.push($root.app.trainlcd.grpc.StationMinimal.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a RouteMinimal message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.RouteMinimal
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.RouteMinimal} RouteMinimal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RouteMinimal.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RouteMinimal message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.RouteMinimal
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RouteMinimal.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id))
                            return "id: integer expected";
                    if (message.stops != null && message.hasOwnProperty("stops")) {
                        if (!Array.isArray(message.stops))
                            return "stops: array expected";
                        for (let i = 0; i < message.stops.length; ++i) {
                            let error = $root.app.trainlcd.grpc.StationMinimal.verify(message.stops[i]);
                            if (error)
                                return "stops." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a RouteMinimal message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.RouteMinimal
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.RouteMinimal} RouteMinimal
                 */
                RouteMinimal.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.RouteMinimal)
                        return object;
                    let message = new $root.app.trainlcd.grpc.RouteMinimal();
                    if (object.id != null)
                        message.id = object.id >>> 0;
                    if (object.stops) {
                        if (!Array.isArray(object.stops))
                            throw TypeError(".app.trainlcd.grpc.RouteMinimal.stops: array expected");
                        message.stops = [];
                        for (let i = 0; i < object.stops.length; ++i) {
                            if (typeof object.stops[i] !== "object")
                                throw TypeError(".app.trainlcd.grpc.RouteMinimal.stops: object expected");
                            message.stops[i] = $root.app.trainlcd.grpc.StationMinimal.fromObject(object.stops[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a RouteMinimal message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.RouteMinimal
                 * @static
                 * @param {app.trainlcd.grpc.RouteMinimal} message RouteMinimal
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RouteMinimal.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.stops = [];
                    if (options.defaults)
                        object.id = 0;
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.stops && message.stops.length) {
                        object.stops = [];
                        for (let j = 0; j < message.stops.length; ++j)
                            object.stops[j] = $root.app.trainlcd.grpc.StationMinimal.toObject(message.stops[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this RouteMinimal to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.RouteMinimal
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RouteMinimal.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for RouteMinimal
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.RouteMinimal
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                RouteMinimal.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.RouteMinimal";
                };

                return RouteMinimal;
            })();

            grpc.RouteMinimalResponse = (function() {

                /**
                 * Properties of a RouteMinimalResponse.
                 * @memberof app.trainlcd.grpc
                 * @interface IRouteMinimalResponse
                 * @property {Array.<app.trainlcd.grpc.IRouteMinimal>|null} [routes] RouteMinimalResponse routes
                 * @property {Array.<app.trainlcd.grpc.ILineMinimal>|null} [lines] RouteMinimalResponse lines
                 * @property {string|null} [nextPageToken] RouteMinimalResponse nextPageToken
                 */

                /**
                 * Constructs a new RouteMinimalResponse.
                 * @memberof app.trainlcd.grpc
                 * @classdesc Represents a RouteMinimalResponse.
                 * @implements IRouteMinimalResponse
                 * @constructor
                 * @param {app.trainlcd.grpc.IRouteMinimalResponse=} [properties] Properties to set
                 */
                function RouteMinimalResponse(properties) {
                    this.routes = [];
                    this.lines = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RouteMinimalResponse routes.
                 * @member {Array.<app.trainlcd.grpc.IRouteMinimal>} routes
                 * @memberof app.trainlcd.grpc.RouteMinimalResponse
                 * @instance
                 */
                RouteMinimalResponse.prototype.routes = $util.emptyArray;

                /**
                 * RouteMinimalResponse lines.
                 * @member {Array.<app.trainlcd.grpc.ILineMinimal>} lines
                 * @memberof app.trainlcd.grpc.RouteMinimalResponse
                 * @instance
                 */
                RouteMinimalResponse.prototype.lines = $util.emptyArray;

                /**
                 * RouteMinimalResponse nextPageToken.
                 * @member {string} nextPageToken
                 * @memberof app.trainlcd.grpc.RouteMinimalResponse
                 * @instance
                 */
                RouteMinimalResponse.prototype.nextPageToken = "";

                /**
                 * Creates a new RouteMinimalResponse instance using the specified properties.
                 * @function create
                 * @memberof app.trainlcd.grpc.RouteMinimalResponse
                 * @static
                 * @param {app.trainlcd.grpc.IRouteMinimalResponse=} [properties] Properties to set
                 * @returns {app.trainlcd.grpc.RouteMinimalResponse} RouteMinimalResponse instance
                 */
                RouteMinimalResponse.create = function create(properties) {
                    return new RouteMinimalResponse(properties);
                };

                /**
                 * Encodes the specified RouteMinimalResponse message. Does not implicitly {@link app.trainlcd.grpc.RouteMinimalResponse.verify|verify} messages.
                 * @function encode
                 * @memberof app.trainlcd.grpc.RouteMinimalResponse
                 * @static
                 * @param {app.trainlcd.grpc.IRouteMinimalResponse} message RouteMinimalResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RouteMinimalResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.routes != null && message.routes.length)
                        for (let i = 0; i < message.routes.length; ++i)
                            $root.app.trainlcd.grpc.RouteMinimal.encode(message.routes[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.lines != null && message.lines.length)
                        for (let i = 0; i < message.lines.length; ++i)
                            $root.app.trainlcd.grpc.LineMinimal.encode(message.lines[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.nextPageToken != null && Object.hasOwnProperty.call(message, "nextPageToken"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.nextPageToken);
                    return writer;
                };

                /**
                 * Encodes the specified RouteMinimalResponse message, length delimited. Does not implicitly {@link app.trainlcd.grpc.RouteMinimalResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof app.trainlcd.grpc.RouteMinimalResponse
                 * @static
                 * @param {app.trainlcd.grpc.IRouteMinimalResponse} message RouteMinimalResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RouteMinimalResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RouteMinimalResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof app.trainlcd.grpc.RouteMinimalResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {app.trainlcd.grpc.RouteMinimalResponse} RouteMinimalResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RouteMinimalResponse.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.trainlcd.grpc.RouteMinimalResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.routes && message.routes.length))
                                    message.routes = [];
                                message.routes.push($root.app.trainlcd.grpc.RouteMinimal.decode(reader, reader.uint32()));
                                break;
                            }
                        case 2: {
                                if (!(message.lines && message.lines.length))
                                    message.lines = [];
                                message.lines.push($root.app.trainlcd.grpc.LineMinimal.decode(reader, reader.uint32()));
                                break;
                            }
                        case 3: {
                                message.nextPageToken = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a RouteMinimalResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof app.trainlcd.grpc.RouteMinimalResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {app.trainlcd.grpc.RouteMinimalResponse} RouteMinimalResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RouteMinimalResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RouteMinimalResponse message.
                 * @function verify
                 * @memberof app.trainlcd.grpc.RouteMinimalResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RouteMinimalResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.routes != null && message.hasOwnProperty("routes")) {
                        if (!Array.isArray(message.routes))
                            return "routes: array expected";
                        for (let i = 0; i < message.routes.length; ++i) {
                            let error = $root.app.trainlcd.grpc.RouteMinimal.verify(message.routes[i]);
                            if (error)
                                return "routes." + error;
                        }
                    }
                    if (message.lines != null && message.hasOwnProperty("lines")) {
                        if (!Array.isArray(message.lines))
                            return "lines: array expected";
                        for (let i = 0; i < message.lines.length; ++i) {
                            let error = $root.app.trainlcd.grpc.LineMinimal.verify(message.lines[i]);
                            if (error)
                                return "lines." + error;
                        }
                    }
                    if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken"))
                        if (!$util.isString(message.nextPageToken))
                            return "nextPageToken: string expected";
                    return null;
                };

                /**
                 * Creates a RouteMinimalResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof app.trainlcd.grpc.RouteMinimalResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {app.trainlcd.grpc.RouteMinimalResponse} RouteMinimalResponse
                 */
                RouteMinimalResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.app.trainlcd.grpc.RouteMinimalResponse)
                        return object;
                    let message = new $root.app.trainlcd.grpc.RouteMinimalResponse();
                    if (object.routes) {
                        if (!Array.isArray(object.routes))
                            throw TypeError(".app.trainlcd.grpc.RouteMinimalResponse.routes: array expected");
                        message.routes = [];
                        for (let i = 0; i < object.routes.length; ++i) {
                            if (typeof object.routes[i] !== "object")
                                throw TypeError(".app.trainlcd.grpc.RouteMinimalResponse.routes: object expected");
                            message.routes[i] = $root.app.trainlcd.grpc.RouteMinimal.fromObject(object.routes[i]);
                        }
                    }
                    if (object.lines) {
                        if (!Array.isArray(object.lines))
                            throw TypeError(".app.trainlcd.grpc.RouteMinimalResponse.lines: array expected");
                        message.lines = [];
                        for (let i = 0; i < object.lines.length; ++i) {
                            if (typeof object.lines[i] !== "object")
                                throw TypeError(".app.trainlcd.grpc.RouteMinimalResponse.lines: object expected");
                            message.lines[i] = $root.app.trainlcd.grpc.LineMinimal.fromObject(object.lines[i]);
                        }
                    }
                    if (object.nextPageToken != null)
                        message.nextPageToken = String(object.nextPageToken);
                    return message;
                };

                /**
                 * Creates a plain object from a RouteMinimalResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof app.trainlcd.grpc.RouteMinimalResponse
                 * @static
                 * @param {app.trainlcd.grpc.RouteMinimalResponse} message RouteMinimalResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RouteMinimalResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults) {
                        object.routes = [];
                        object.lines = [];
                    }
                    if (options.defaults)
                        object.nextPageToken = "";
                    if (message.routes && message.routes.length) {
                        object.routes = [];
                        for (let j = 0; j < message.routes.length; ++j)
                            object.routes[j] = $root.app.trainlcd.grpc.RouteMinimal.toObject(message.routes[j], options);
                    }
                    if (message.lines && message.lines.length) {
                        object.lines = [];
                        for (let j = 0; j < message.lines.length; ++j)
                            object.lines[j] = $root.app.trainlcd.grpc.LineMinimal.toObject(message.lines[j], options);
                    }
                    if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken"))
                        object.nextPageToken = message.nextPageToken;
                    return object;
                };

                /**
                 * Converts this RouteMinimalResponse to JSON.
                 * @function toJSON
                 * @memberof app.trainlcd.grpc.RouteMinimalResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RouteMinimalResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for RouteMinimalResponse
                 * @function getTypeUrl
                 * @memberof app.trainlcd.grpc.RouteMinimalResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                RouteMinimalResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/app.trainlcd.grpc.RouteMinimalResponse";
                };

                return RouteMinimalResponse;
            })();

            return grpc;
        })();

        return trainlcd;
    })();

    return app;
})();

export { $root as default };
