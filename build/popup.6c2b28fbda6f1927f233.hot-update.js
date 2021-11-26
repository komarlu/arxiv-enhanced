self["webpackHotUpdatearxiv_enhanced"]("popup",{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@notionhq/client/build/src/Client.js":
/*!***********************************************************!*\
  !*** ./node_modules/@notionhq/client/build/src/Client.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Client_auth, _Client_logLevel, _Client_logger, _Client_prefixUrl, _Client_timeoutMs, _Client_notionVersion, _Client_fetch, _Client_agent, _Client_userAgent;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const logging_1 = __webpack_require__(/*! ./logging */ "./node_modules/@notionhq/client/build/src/logging.js");
const errors_1 = __webpack_require__(/*! ./errors */ "./node_modules/@notionhq/client/build/src/errors.js");
const helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/@notionhq/client/build/src/helpers.js");
const api_endpoints_1 = __webpack_require__(/*! ./api-endpoints */ "./node_modules/@notionhq/client/build/src/api-endpoints.js");
const node_fetch_1 = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
const package_json_1 = __webpack_require__(/*! ../package.json */ "./node_modules/@notionhq/client/build/package.json");
class Client {
    constructor(options) {
        var _a, _b, _c, _d, _e, _f;
        _Client_auth.set(this, void 0);
        _Client_logLevel.set(this, void 0);
        _Client_logger.set(this, void 0);
        _Client_prefixUrl.set(this, void 0);
        _Client_timeoutMs.set(this, void 0);
        _Client_notionVersion.set(this, void 0);
        _Client_fetch.set(this, void 0);
        _Client_agent.set(this, void 0);
        _Client_userAgent.set(this, void 0);
        /*
         * Notion API endpoints
         */
        this.blocks = {
            /**
             * Retrieve block
             */
            retrieve: (args) => {
                return this.request({
                    path: api_endpoints_1.getBlock.path(args),
                    method: api_endpoints_1.getBlock.method,
                    query: helpers_1.pick(args, api_endpoints_1.getBlock.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.getBlock.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Update block
             */
            update: (args) => {
                return this.request({
                    path: api_endpoints_1.updateBlock.path(args),
                    method: api_endpoints_1.updateBlock.method,
                    query: helpers_1.pick(args, api_endpoints_1.updateBlock.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.updateBlock.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Delete block
             */
            delete: (args) => {
                return this.request({
                    path: api_endpoints_1.deleteBlock.path(args),
                    method: api_endpoints_1.deleteBlock.method,
                    query: helpers_1.pick(args, api_endpoints_1.deleteBlock.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.deleteBlock.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            children: {
                /**
                 * Append block children
                 */
                append: (args) => {
                    return this.request({
                        path: api_endpoints_1.appendBlockChildren.path(args),
                        method: api_endpoints_1.appendBlockChildren.method,
                        query: helpers_1.pick(args, api_endpoints_1.appendBlockChildren.queryParams),
                        body: helpers_1.pick(args, api_endpoints_1.appendBlockChildren.bodyParams),
                        auth: args === null || args === void 0 ? void 0 : args.auth,
                    });
                },
                /**
                 * Retrieve block children
                 */
                list: (args) => {
                    return this.request({
                        path: api_endpoints_1.listBlockChildren.path(args),
                        method: api_endpoints_1.listBlockChildren.method,
                        query: helpers_1.pick(args, api_endpoints_1.listBlockChildren.queryParams),
                        body: helpers_1.pick(args, api_endpoints_1.listBlockChildren.bodyParams),
                        auth: args === null || args === void 0 ? void 0 : args.auth,
                    });
                },
            },
        };
        this.databases = {
            /**
             * List databases
             *
             * @deprecated Please use `search`
             */
            list: (args) => {
                return this.request({
                    path: api_endpoints_1.listDatabases.path(),
                    method: api_endpoints_1.listDatabases.method,
                    query: helpers_1.pick(args, api_endpoints_1.listDatabases.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.listDatabases.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Retrieve a database
             */
            retrieve: (args) => {
                return this.request({
                    path: api_endpoints_1.getDatabase.path(args),
                    method: api_endpoints_1.getDatabase.method,
                    query: helpers_1.pick(args, api_endpoints_1.getDatabase.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.getDatabase.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Query a database
             */
            query: (args) => {
                return this.request({
                    path: api_endpoints_1.queryDatabase.path(args),
                    method: api_endpoints_1.queryDatabase.method,
                    query: helpers_1.pick(args, api_endpoints_1.queryDatabase.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.queryDatabase.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Create a database
             */
            create: (args) => {
                return this.request({
                    path: api_endpoints_1.createDatabase.path(),
                    method: api_endpoints_1.createDatabase.method,
                    query: helpers_1.pick(args, api_endpoints_1.createDatabase.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.createDatabase.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Update a database
             */
            update: (args) => {
                return this.request({
                    path: api_endpoints_1.updateDatabase.path(args),
                    method: api_endpoints_1.updateDatabase.method,
                    query: helpers_1.pick(args, api_endpoints_1.updateDatabase.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.updateDatabase.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
        };
        this.pages = {
            /**
             * Create a page
             */
            create: (args) => {
                return this.request({
                    path: api_endpoints_1.createPage.path(),
                    method: api_endpoints_1.createPage.method,
                    query: helpers_1.pick(args, api_endpoints_1.createPage.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.createPage.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Retrieve a page
             */
            retrieve: (args) => {
                return this.request({
                    path: api_endpoints_1.getPage.path(args),
                    method: api_endpoints_1.getPage.method,
                    query: helpers_1.pick(args, api_endpoints_1.getPage.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.getPage.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Update page properties
             */
            update: (args) => {
                return this.request({
                    path: api_endpoints_1.updatePage.path(args),
                    method: api_endpoints_1.updatePage.method,
                    query: helpers_1.pick(args, api_endpoints_1.updatePage.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.updatePage.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            properties: {
                /**
                 * Retrieve page property
                 */
                retrieve: (args) => {
                    return this.request({
                        path: api_endpoints_1.getPageProperty.path(args),
                        method: api_endpoints_1.getPageProperty.method,
                        query: helpers_1.pick(args, api_endpoints_1.getPageProperty.queryParams),
                        body: helpers_1.pick(args, api_endpoints_1.getPageProperty.bodyParams),
                        auth: args === null || args === void 0 ? void 0 : args.auth,
                    });
                },
            },
        };
        this.users = {
            /**
             * Retrieve a user
             */
            retrieve: (args) => {
                return this.request({
                    path: api_endpoints_1.getUser.path(args),
                    method: api_endpoints_1.getUser.method,
                    query: helpers_1.pick(args, api_endpoints_1.getUser.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.getUser.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * List all users
             */
            list: (args) => {
                return this.request({
                    path: api_endpoints_1.listUsers.path(),
                    method: api_endpoints_1.listUsers.method,
                    query: helpers_1.pick(args, api_endpoints_1.listUsers.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.listUsers.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Get details about bot
             */
            me: (args) => {
                return this.request({
                    path: api_endpoints_1.getSelf.path(),
                    method: api_endpoints_1.getSelf.method,
                    query: helpers_1.pick(args, api_endpoints_1.getSelf.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.getSelf.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
        };
        __classPrivateFieldSet(this, _Client_auth, options === null || options === void 0 ? void 0 : options.auth, "f");
        __classPrivateFieldSet(this, _Client_logLevel, (_a = options === null || options === void 0 ? void 0 : options.logLevel) !== null && _a !== void 0 ? _a : logging_1.LogLevel.WARN, "f");
        __classPrivateFieldSet(this, _Client_logger, (_b = options === null || options === void 0 ? void 0 : options.logger) !== null && _b !== void 0 ? _b : logging_1.makeConsoleLogger(package_json_1.name), "f");
        __classPrivateFieldSet(this, _Client_prefixUrl, ((_c = options === null || options === void 0 ? void 0 : options.baseUrl) !== null && _c !== void 0 ? _c : "https://api.notion.com") + "/v1/", "f");
        __classPrivateFieldSet(this, _Client_timeoutMs, (_d = options === null || options === void 0 ? void 0 : options.timeoutMs) !== null && _d !== void 0 ? _d : 60000, "f");
        __classPrivateFieldSet(this, _Client_notionVersion, (_e = options === null || options === void 0 ? void 0 : options.notionVersion) !== null && _e !== void 0 ? _e : Client.defaultNotionVersion, "f");
        __classPrivateFieldSet(this, _Client_fetch, (_f = options === null || options === void 0 ? void 0 : options.fetch) !== null && _f !== void 0 ? _f : node_fetch_1.default, "f");
        __classPrivateFieldSet(this, _Client_agent, options === null || options === void 0 ? void 0 : options.agent, "f");
        __classPrivateFieldSet(this, _Client_userAgent, `notionhq-client/${package_json_1.version}`, "f");
    }
    /**
     * Sends a request.
     *
     * @param path
     * @param method
     * @param query
     * @param body
     * @returns
     */
    async request({ path, method, query, body, auth, }) {
        this.log(logging_1.LogLevel.INFO, "request start", { method, path });
        // If the body is empty, don't send the body in the HTTP request
        const bodyAsJsonString = !body || Object.entries(body).length === 0
            ? undefined
            : JSON.stringify(body);
        const url = new URL(`${__classPrivateFieldGet(this, _Client_prefixUrl, "f")}${path}`);
        if (query) {
            for (const [key, value] of Object.entries(query)) {
                if (value !== undefined) {
                    url.searchParams.append(key, String(value));
                }
            }
        }
        const headers = {
            ...this.authAsHeaders(auth),
            "Notion-Version": __classPrivateFieldGet(this, _Client_notionVersion, "f"),
            "user-agent": __classPrivateFieldGet(this, _Client_userAgent, "f"),
        };
        if (bodyAsJsonString !== undefined) {
            headers["content-type"] = "application/json";
        }
        try {
            const response = await errors_1.RequestTimeoutError.rejectAfterTimeout(__classPrivateFieldGet(this, _Client_fetch, "f").call(this, url.toString(), {
                method,
                headers,
                body: bodyAsJsonString,
                agent: __classPrivateFieldGet(this, _Client_agent, "f"),
            }), __classPrivateFieldGet(this, _Client_timeoutMs, "f"));
            const responseText = await response.text();
            if (!response.ok) {
                throw errors_1.buildRequestError(response, responseText);
            }
            const responseJson = JSON.parse(responseText);
            this.log(logging_1.LogLevel.INFO, `request success`, { method, path });
            return responseJson;
        }
        catch (error) {
            if (!errors_1.isNotionClientError(error)) {
                throw error;
            }
            // Log the error if it's one of our known error types
            this.log(logging_1.LogLevel.WARN, `request fail`, {
                code: error.code,
                message: error.message,
            });
            if (errors_1.isHTTPResponseError(error)) {
                // The response body may contain sensitive information so it is logged separately at the DEBUG level
                this.log(logging_1.LogLevel.DEBUG, `failed response body`, {
                    body: error.body,
                });
            }
            throw error;
        }
    }
    /**
     * Search
     */
    search(args) {
        return this.request({
            path: api_endpoints_1.search.path(),
            method: api_endpoints_1.search.method,
            query: helpers_1.pick(args, api_endpoints_1.search.queryParams),
            body: helpers_1.pick(args, api_endpoints_1.search.bodyParams),
            auth: args === null || args === void 0 ? void 0 : args.auth,
        });
    }
    /**
     * Emits a log message to the console.
     *
     * @param level The level for this message
     * @param args Arguments to send to the console
     */
    log(level, message, extraInfo) {
        if (logging_1.logLevelSeverity(level) >= logging_1.logLevelSeverity(__classPrivateFieldGet(this, _Client_logLevel, "f"))) {
            __classPrivateFieldGet(this, _Client_logger, "f").call(this, level, message, extraInfo);
        }
    }
    /**
     * Transforms an API key or access token into a headers object suitable for an HTTP request.
     *
     * This method uses the instance's value as the default when the input is undefined. If neither are defined, it returns
     * an empty object
     *
     * @param auth API key or access token
     * @returns headers key-value object
     */
    authAsHeaders(auth) {
        const headers = {};
        const authHeaderValue = auth !== null && auth !== void 0 ? auth : __classPrivateFieldGet(this, _Client_auth, "f");
        if (authHeaderValue !== undefined) {
            headers["authorization"] = `Bearer ${authHeaderValue}`;
        }
        return headers;
    }
}
exports["default"] = Client;
_Client_auth = new WeakMap(), _Client_logLevel = new WeakMap(), _Client_logger = new WeakMap(), _Client_prefixUrl = new WeakMap(), _Client_timeoutMs = new WeakMap(), _Client_notionVersion = new WeakMap(), _Client_fetch = new WeakMap(), _Client_agent = new WeakMap(), _Client_userAgent = new WeakMap();
Client.defaultNotionVersion = "2021-08-16";
//# sourceMappingURL=Client.js.map

/***/ }),

/***/ "./node_modules/@notionhq/client/build/src/api-endpoints.js":
/*!******************************************************************!*\
  !*** ./node_modules/@notionhq/client/build/src/api-endpoints.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// cspell:disable-file
// Note: This is a generated file.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.search = exports.createDatabase = exports.listDatabases = exports.queryDatabase = exports.updateDatabase = exports.getDatabase = exports.appendBlockChildren = exports.listBlockChildren = exports.deleteBlock = exports.updateBlock = exports.getBlock = exports.getPageProperty = exports.updatePage = exports.getPage = exports.createPage = exports.listUsers = exports.getUser = exports.getSelf = void 0;
exports.getSelf = {
    method: "get",
    pathParams: [],
    queryParams: [],
    bodyParams: [],
    path: () => `users/me`,
};
exports.getUser = {
    method: "get",
    pathParams: ["user_id"],
    queryParams: [],
    bodyParams: [],
    path: (p) => `users/${p.user_id}`,
};
exports.listUsers = {
    method: "get",
    pathParams: [],
    queryParams: ["start_cursor", "page_size"],
    bodyParams: [],
    path: () => `users`,
};
exports.createPage = {
    method: "post",
    pathParams: [],
    queryParams: [],
    bodyParams: ["parent", "properties", "icon", "cover", "content", "children"],
    path: () => `pages`,
};
exports.getPage = {
    method: "get",
    pathParams: ["page_id"],
    queryParams: [],
    bodyParams: [],
    path: (p) => `pages/${p.page_id}`,
};
exports.updatePage = {
    method: "patch",
    pathParams: ["page_id"],
    queryParams: [],
    bodyParams: ["properties", "icon", "cover", "archived"],
    path: (p) => `pages/${p.page_id}`,
};
exports.getPageProperty = {
    method: "get",
    pathParams: ["page_id", "property_id"],
    queryParams: ["start_cursor", "page_size"],
    bodyParams: [],
    path: (p) => `pages/${p.page_id}/properties/${p.property_id}`,
};
exports.getBlock = {
    method: "get",
    pathParams: ["block_id"],
    queryParams: [],
    bodyParams: [],
    path: (p) => `blocks/${p.block_id}`,
};
exports.updateBlock = {
    method: "patch",
    pathParams: ["block_id"],
    queryParams: [],
    bodyParams: [
        "heading_1",
        "type",
        "archived",
        "heading_2",
        "heading_3",
        "embed",
        "bookmark",
        "image",
        "video",
        "pdf",
        "file",
        "audio",
        "code",
        "equation",
        "divider",
        "breadcrumb",
        "table_of_contents",
        "link_to_page",
        "paragraph",
        "bulleted_list_item",
        "numbered_list_item",
        "quote",
        "to_do",
        "toggle",
        "template",
        "callout",
        "synced_block",
    ],
    path: (p) => `blocks/${p.block_id}`,
};
exports.deleteBlock = {
    method: "delete",
    pathParams: ["block_id"],
    queryParams: [],
    bodyParams: [],
    path: (p) => `blocks/${p.block_id}`,
};
exports.listBlockChildren = {
    method: "get",
    pathParams: ["block_id"],
    queryParams: ["start_cursor", "page_size"],
    bodyParams: [],
    path: (p) => `blocks/${p.block_id}/children`,
};
exports.appendBlockChildren = {
    method: "patch",
    pathParams: ["block_id"],
    queryParams: [],
    bodyParams: ["children"],
    path: (p) => `blocks/${p.block_id}/children`,
};
exports.getDatabase = {
    method: "get",
    pathParams: ["database_id"],
    queryParams: [],
    bodyParams: [],
    path: (p) => `databases/${p.database_id}`,
};
exports.updateDatabase = {
    method: "patch",
    pathParams: ["database_id"],
    queryParams: [],
    bodyParams: ["title", "icon", "cover", "properties"],
    path: (p) => `databases/${p.database_id}`,
};
exports.queryDatabase = {
    method: "post",
    pathParams: ["database_id"],
    queryParams: [],
    bodyParams: ["sorts", "filter", "start_cursor", "page_size", "archived"],
    path: (p) => `databases/${p.database_id}/query`,
};
exports.listDatabases = {
    method: "get",
    pathParams: [],
    queryParams: ["start_cursor", "page_size"],
    bodyParams: [],
    path: () => `databases`,
};
exports.createDatabase = {
    method: "post",
    pathParams: [],
    queryParams: [],
    bodyParams: ["parent", "properties", "icon", "cover", "title"],
    path: () => `databases`,
};
exports.search = {
    method: "post",
    pathParams: [],
    queryParams: [],
    bodyParams: ["sort", "query", "start_cursor", "page_size", "filter"],
    path: () => `search`,
};
//# sourceMappingURL=api-endpoints.js.map

/***/ }),

/***/ "./node_modules/@notionhq/client/build/src/errors.js":
/*!***********************************************************!*\
  !*** ./node_modules/@notionhq/client/build/src/errors.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildRequestError = exports.APIResponseError = exports.UnknownHTTPResponseError = exports.isHTTPResponseError = exports.RequestTimeoutError = exports.isNotionClientError = exports.ClientErrorCode = exports.APIErrorCode = void 0;
const helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/@notionhq/client/build/src/helpers.js");
/**
 * Error codes returned in responses from the API.
 */
var APIErrorCode;
(function (APIErrorCode) {
    APIErrorCode["Unauthorized"] = "unauthorized";
    APIErrorCode["RestrictedResource"] = "restricted_resource";
    APIErrorCode["ObjectNotFound"] = "object_not_found";
    APIErrorCode["RateLimited"] = "rate_limited";
    APIErrorCode["InvalidJSON"] = "invalid_json";
    APIErrorCode["InvalidRequestURL"] = "invalid_request_url";
    APIErrorCode["InvalidRequest"] = "invalid_request";
    APIErrorCode["ValidationError"] = "validation_error";
    APIErrorCode["ConflictError"] = "conflict_error";
    APIErrorCode["InternalServerError"] = "internal_server_error";
    APIErrorCode["ServiceUnavailable"] = "service_unavailable";
})(APIErrorCode = exports.APIErrorCode || (exports.APIErrorCode = {}));
/**
 * Error codes generated for client errors.
 */
var ClientErrorCode;
(function (ClientErrorCode) {
    ClientErrorCode["RequestTimeout"] = "notionhq_client_request_timeout";
    ClientErrorCode["ResponseError"] = "notionhq_client_response_error";
})(ClientErrorCode = exports.ClientErrorCode || (exports.ClientErrorCode = {}));
/**
 * Base error type.
 */
class NotionClientErrorBase extends Error {
}
/**
 * @param error any value, usually a caught error.
 * @returns `true` if error is a `NotionClientError`.
 */
function isNotionClientError(error) {
    return helpers_1.isObject(error) && error instanceof NotionClientErrorBase;
}
exports.isNotionClientError = isNotionClientError;
/**
 * Narrows down the types of a NotionClientError.
 * @param error any value, usually a caught error.
 * @param codes an object mapping from possible error codes to `true`
 * @returns `true` if error is a `NotionClientError` with a code in `codes`.
 */
function isNotionClientErrorWithCode(error, codes) {
    return isNotionClientError(error) && error.code in codes;
}
/**
 * Error thrown by the client if a request times out.
 */
class RequestTimeoutError extends NotionClientErrorBase {
    constructor(message = "Request to Notion API has timed out") {
        super(message);
        this.code = ClientErrorCode.RequestTimeout;
        this.name = "RequestTimeoutError";
    }
    static isRequestTimeoutError(error) {
        return isNotionClientErrorWithCode(error, {
            [ClientErrorCode.RequestTimeout]: true,
        });
    }
    static rejectAfterTimeout(promise, timeoutMS) {
        return new Promise((resolve, reject) => {
            const timeoutId = setTimeout(() => {
                reject(new RequestTimeoutError());
            }, timeoutMS);
            promise
                .then(resolve)
                .catch(reject)
                .then(() => clearTimeout(timeoutId));
        });
    }
}
exports.RequestTimeoutError = RequestTimeoutError;
class HTTPResponseError extends NotionClientErrorBase {
    constructor(args) {
        super(args.message);
        this.name = "HTTPResponseError";
        const { code, status, headers, rawBodyText } = args;
        this.code = code;
        this.status = status;
        this.headers = headers;
        this.body = rawBodyText;
    }
}
const httpResponseErrorCodes = {
    [ClientErrorCode.ResponseError]: true,
    [APIErrorCode.Unauthorized]: true,
    [APIErrorCode.RestrictedResource]: true,
    [APIErrorCode.ObjectNotFound]: true,
    [APIErrorCode.RateLimited]: true,
    [APIErrorCode.InvalidJSON]: true,
    [APIErrorCode.InvalidRequestURL]: true,
    [APIErrorCode.InvalidRequest]: true,
    [APIErrorCode.ValidationError]: true,
    [APIErrorCode.ConflictError]: true,
    [APIErrorCode.InternalServerError]: true,
    [APIErrorCode.ServiceUnavailable]: true,
};
function isHTTPResponseError(error) {
    if (!isNotionClientErrorWithCode(error, httpResponseErrorCodes)) {
        return false;
    }
    return true;
}
exports.isHTTPResponseError = isHTTPResponseError;
/**
 * Error thrown if an API call responds with an unknown error code, or does not respond with
 * a property-formatted error.
 */
class UnknownHTTPResponseError extends HTTPResponseError {
    constructor(args) {
        var _a;
        super({
            ...args,
            code: ClientErrorCode.ResponseError,
            message: (_a = args.message) !== null && _a !== void 0 ? _a : `Request to Notion API failed with status: ${args.status}`,
        });
        this.name = "UnknownHTTPResponseError";
    }
    static isUnknownHTTPResponseError(error) {
        return isNotionClientErrorWithCode(error, {
            [ClientErrorCode.ResponseError]: true,
        });
    }
}
exports.UnknownHTTPResponseError = UnknownHTTPResponseError;
const apiErrorCodes = {
    [APIErrorCode.Unauthorized]: true,
    [APIErrorCode.RestrictedResource]: true,
    [APIErrorCode.ObjectNotFound]: true,
    [APIErrorCode.RateLimited]: true,
    [APIErrorCode.InvalidJSON]: true,
    [APIErrorCode.InvalidRequestURL]: true,
    [APIErrorCode.InvalidRequest]: true,
    [APIErrorCode.ValidationError]: true,
    [APIErrorCode.ConflictError]: true,
    [APIErrorCode.InternalServerError]: true,
    [APIErrorCode.ServiceUnavailable]: true,
};
/**
 * A response from the API indicating a problem.
 * Use the `code` property to handle various kinds of errors. All its possible values are in `APIErrorCode`.
 */
class APIResponseError extends HTTPResponseError {
    constructor() {
        super(...arguments);
        this.name = "APIResponseError";
    }
    static isAPIResponseError(error) {
        return isNotionClientErrorWithCode(error, apiErrorCodes);
    }
}
exports.APIResponseError = APIResponseError;
function buildRequestError(response, bodyText) {
    const apiErrorResponseBody = parseAPIErrorResponseBody(bodyText);
    if (apiErrorResponseBody !== undefined) {
        return new APIResponseError({
            code: apiErrorResponseBody.code,
            message: apiErrorResponseBody.message,
            headers: response.headers,
            status: response.status,
            rawBodyText: bodyText,
        });
    }
    return new UnknownHTTPResponseError({
        message: undefined,
        headers: response.headers,
        status: response.status,
        rawBodyText: bodyText,
    });
}
exports.buildRequestError = buildRequestError;
function parseAPIErrorResponseBody(body) {
    if (typeof body !== "string") {
        return;
    }
    let parsed;
    try {
        parsed = JSON.parse(body);
    }
    catch (parseError) {
        return;
    }
    if (!helpers_1.isObject(parsed) ||
        typeof parsed["message"] !== "string" ||
        !isAPIErrorCode(parsed["code"])) {
        return;
    }
    return {
        ...parsed,
        code: parsed["code"],
        message: parsed["message"],
    };
}
function isAPIErrorCode(code) {
    return typeof code === "string" && code in apiErrorCodes;
}
//# sourceMappingURL=errors.js.map

/***/ }),

/***/ "./node_modules/@notionhq/client/build/src/helpers.js":
/*!************************************************************!*\
  !*** ./node_modules/@notionhq/client/build/src/helpers.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isObject = exports.pick = exports.assertNever = void 0;
/**
 * Utility for enforcing exhaustiveness checks in the type system.
 *
 * @see https://basarat.gitbook.io/typescript/type-system/discriminated-unions#throw-in-exhaustive-checks
 *
 * @param value The variable with no remaining values
 */
function assertNever(value) {
    throw new Error(`Unexpected value should never occur: ${value}`);
}
exports.assertNever = assertNever;
function pick(base, keys) {
    const entries = keys.map(key => [key, base === null || base === void 0 ? void 0 : base[key]]);
    return Object.fromEntries(entries);
}
exports.pick = pick;
function isObject(o) {
    return typeof o === "object" && o !== null;
}
exports.isObject = isObject;
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/@notionhq/client/build/src/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@notionhq/client/build/src/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isNotionClientError = exports.RequestTimeoutError = exports.UnknownHTTPResponseError = exports.APIResponseError = exports.ClientErrorCode = exports.APIErrorCode = exports.LogLevel = exports.Client = void 0;
var Client_1 = __webpack_require__(/*! ./Client */ "./node_modules/@notionhq/client/build/src/Client.js");
Object.defineProperty(exports, "Client", ({ enumerable: true, get: function () { return Client_1.default; } }));
var logging_1 = __webpack_require__(/*! ./logging */ "./node_modules/@notionhq/client/build/src/logging.js");
Object.defineProperty(exports, "LogLevel", ({ enumerable: true, get: function () { return logging_1.LogLevel; } }));
var errors_1 = __webpack_require__(/*! ./errors */ "./node_modules/@notionhq/client/build/src/errors.js");
Object.defineProperty(exports, "APIErrorCode", ({ enumerable: true, get: function () { return errors_1.APIErrorCode; } }));
Object.defineProperty(exports, "ClientErrorCode", ({ enumerable: true, get: function () { return errors_1.ClientErrorCode; } }));
Object.defineProperty(exports, "APIResponseError", ({ enumerable: true, get: function () { return errors_1.APIResponseError; } }));
Object.defineProperty(exports, "UnknownHTTPResponseError", ({ enumerable: true, get: function () { return errors_1.UnknownHTTPResponseError; } }));
Object.defineProperty(exports, "RequestTimeoutError", ({ enumerable: true, get: function () { return errors_1.RequestTimeoutError; } }));
// Error helpers
Object.defineProperty(exports, "isNotionClientError", ({ enumerable: true, get: function () { return errors_1.isNotionClientError; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@notionhq/client/build/src/logging.js":
/*!************************************************************!*\
  !*** ./node_modules/@notionhq/client/build/src/logging.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.logLevelSeverity = exports.makeConsoleLogger = exports.LogLevel = void 0;
const helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/@notionhq/client/build/src/helpers.js");
var LogLevel;
(function (LogLevel) {
    LogLevel["DEBUG"] = "debug";
    LogLevel["INFO"] = "info";
    LogLevel["WARN"] = "warn";
    LogLevel["ERROR"] = "error";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
function makeConsoleLogger(name) {
    return (level, message, extraInfo) => {
        console[level](`${name} ${level}:`, message, extraInfo);
    };
}
exports.makeConsoleLogger = makeConsoleLogger;
/**
 * Transforms a log level into a comparable (numerical) value ordered by severity.
 */
function logLevelSeverity(level) {
    switch (level) {
        case LogLevel.DEBUG:
            return 20;
        case LogLevel.INFO:
            return 40;
        case LogLevel.WARN:
            return 60;
        case LogLevel.ERROR:
            return 80;
        default:
            return helpers_1.assertNever(level);
    }
}
exports.logLevelSeverity = logLevelSeverity;
//# sourceMappingURL=logging.js.map

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/pages/Popup/Popup.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/pages/Popup/Popup.css ***!
  \********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".App {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n  height: 100%;\n  padding: 10px;\n  /* background-color: #282c34; */ }\n\n.App-header {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white; }\n\n.App-link {\n  color: #61dafb; }\n", "",{"version":3,"sources":["webpack://./src/pages/Popup/Popup.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,+BAAA,EAAgC;;AAGlC;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,6BAA6B;EAC7B,YAAY,EAAA;;AAGd;EACE,cAAc,EAAA","sourcesContent":[".App {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n  height: 100%;\n  padding: 10px;\n  /* background-color: #282c34; */\n}\n\n.App-header {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/***/ ((module, exports) => {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
if (global.fetch) {
	exports["default"] = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/pages/Popup/Popup.jsx":
/*!***********************************!*\
  !*** ./src/pages/Popup/Popup.jsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @notionhq/client */ "./node_modules/@notionhq/client/build/src/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/input/dist/chakra-ui-input.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/checkbox/dist/chakra-ui-checkbox.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _Popup_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Popup.css */ "./src/pages/Popup/Popup.css");
/* module decorator */ module = __webpack_require__.hmd(module);




var _this = undefined,
    _jsxFileName = "/home/stroopwafel/Documents/projects/arxiv-enhanced/src/pages/Popup/Popup.jsx";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






function getTodayDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

  var yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;
  return today;
}

var Popup = function Popup() {
  function addItemToDB(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
    return _addItemToDB.apply(this, arguments);
  }

  function _addItemToDB() {
    _addItemToDB = (0,_home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(notion, databaseId, paperLink, paperTitle, tags, comments, completedReading) {
      var response;
      return _home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return notion.pages.create({
                parent: {
                  database_id: databaseId
                },
                properties: {
                  'Paper Link': {
                    title: [{
                      "text": {
                        "content": paperLink
                      }
                    }]
                  },
                  'Paper Title': {
                    "type": 'rich_text',
                    "rich_text": [{
                      "text": {
                        "content": paperTitle
                      }
                    }]
                  },
                  'Added on': {
                    type: 'date',
                    date: {
                      start: getTodayDate()
                    }
                  },
                  'Comments': {
                    "type": 'rich_text',
                    "rich_text": [{
                      "text": {
                        "content": comments
                      }
                    }]
                  }
                }
              });

            case 3:
              response = _context.sent;
              console.log(response);
              console.log("Success! Entry added.");
              window.close();
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0.body);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));
    return _addItemToDB.apply(this, arguments);
  }

  function onSubmitClick(comments, tags, checked) {
    console.log("submit");
    console.log(comments);
    console.log(tags);
    console.log(checked);
    var notion = new _notionhq_client__WEBPACK_IMPORTED_MODULE_4__.Client({
      auth: 'secret_22YhuOAcoLbRZD4QvNmVAn3qXjFl4IUAPxYh0Shar6I'
    }); // process.env.NOTION_KEY })

    var databaseId = '849569abcf6444fab78bc5d98a5c6d40'; // process.env.NOTION_DATABASE_ID

    var queryOptions = {
      active: true,
      currentWindow: true
    };
    chrome.tabs.query(queryOptions, function (tabs) {
      console.log("---------------");
      console.log(tabs[0].url);
      var paperLink = tabs[0].url;

      if (typeof paperLink !== "undefined" && paperLink.includes('arxiv.org/pdf')) {
        addItemToDB(notion, databaseId, 'one', 'two', tags, comments, checked);
      }
    });
  }

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState(''),
      _React$useState2 = (0,_home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      comments = _React$useState2[0],
      setComments = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3__.useState(''),
      _React$useState4 = (0,_home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      tags = _React$useState4[0],
      setTags = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3__.useState(false),
      _React$useState6 = (0,_home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      checked = _React$useState6[0],
      setChecked = _React$useState6[1];

  var handleCommentsChange = function handleCommentsChange(event) {
    return setComments(event.target.value);
  };

  var handleTagsChange = function handleTagsChange(event) {
    return setTags(event.target.value);
  };

  var handleCheckboxChange = function handleCheckboxChange(event) {
    return setChecked(event.target.checked);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "App",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("header", {
    className: "App-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {
    fontWeight: 600,
    fontSize: {
      base: '2xl',
      sm: '4xl',
      md: '6xl'
    },
    lineHeight: '110%',
    paddingBottom: 4,
    color: '#282c34',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, "ArXiv Enhanced"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {
    spacing: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {
    type: "text",
    color: '#282c34',
    placeholder: "Comments",
    value: comments,
    onChange: handleCommentsChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {
    type: "text",
    color: '#282c34',
    placeholder: "Tags",
    value: tags,
    onChange: handleTagsChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Checkbox, {
    color: '#282c34',
    value: checked,
    onChange: handleCheckboxChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, "Completed Reading"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {
    w: "full",
    color: "gray.900",
    onClick: function onClick() {
      return onSubmitClick(comments, tags, checked);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, "Submit"))));
};

__signature__(Popup, "useState{[comments, setComments]('')}\nuseState{[tags, setTags]('')}\nuseState{[checked, setChecked](false)}");

var _default = Popup;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getTodayDate, "getTodayDate", "/home/stroopwafel/Documents/projects/arxiv-enhanced/src/pages/Popup/Popup.jsx");
  reactHotLoader.register(Popup, "Popup", "/home/stroopwafel/Documents/projects/arxiv-enhanced/src/pages/Popup/Popup.jsx");
  reactHotLoader.register(_default, "default", "/home/stroopwafel/Documents/projects/arxiv-enhanced/src/pages/Popup/Popup.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/pages/Popup/Popup.css":
/*!***********************************!*\
  !*** ./src/pages/Popup/Popup.css ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Popup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./Popup.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/pages/Popup/Popup.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Popup_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Popup_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./Popup.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/pages/Popup/Popup.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Popup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./Popup.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/pages/Popup/Popup.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Popup_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Popup_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Popup_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Popup_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/@notionhq/client/build/package.json":
/*!**********************************************************!*\
  !*** ./node_modules/@notionhq/client/build/package.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"@notionhq/client","version":"0.4.9","description":"A simple and easy to use client for the Notion API","engines":{"node":">=12"},"homepage":"https://developers.notion.com/docs/getting-started","bugs":{"url":"https://github.com/makenotion/notion-sdk-js/issues"},"repository":{"type":"git","url":"https://github.com/makenotion/notion-sdk-js/"},"keywords":["notion","notionapi","rest","notion-api"],"main":"./build/src","scripts":{"prepare":"npm run build","prepublishOnly":"npm run checkLoggedIn && npm run lint && npm run test","build":"tsc","prettier":"prettier --write .","lint":"prettier --check . && eslint . --ext .ts && cspell \'**/*\' ","test":"ava","check-links":"git ls-files | grep md$ | xargs -n 1 markdown-link-check","prebuild":"npm run clean","clean":"rm -rf ./build","checkLoggedIn":"./scripts/verifyLoggedIn.sh"},"author":"","license":"MIT","files":["build/package.json","build/src/**"],"dependencies":{"@types/node-fetch":"^2.5.10","node-fetch":"^2.6.1"},"devDependencies":{"@ava/typescript":"^2.0.0","@typescript-eslint/eslint-plugin":"^4.22.0","@typescript-eslint/parser":"^4.22.0","ava":"^3.15.0","cspell":"^5.4.1","eslint":"^7.24.0","markdown-link-check":"^3.8.7","prettier":"^2.3.0","typescript":"^4.2.4"}}');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("25f965ecf359088211dc")
/******/ })();
/******/ 
/******/ /* webpack/runtime/harmony module decorator */
/******/ (() => {
/******/ 	__webpack_require__.hmd = (module) => {
/******/ 		module = Object.create(module);
/******/ 		if (!module.children) module.children = [];
/******/ 		Object.defineProperty(module, 'exports', {
/******/ 			enumerable: true,
/******/ 			set: () => {
/******/ 				throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 			}
/******/ 		});
/******/ 		return module;
/******/ 	};
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.6c2b28fbda6f1927f233.hot-update.js.map