"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StatusCode_1 = require("./StatusCode");
const ResponseData_1 = require("./ResponseData");
const StormError_1 = require("./StormError");
const instance_1 = require("./instance");
const InternalError_1 = require("./InternalError");
class Response {
    constructor(response, requestURL) {
        this.response = response;
        this.created = new Date();
        this.requestURL = requestURL;
    }
    setStatus(status) {
        this.response.status(status);
        return this;
    }
    getStatus() {
        return this.response.statusCode;
    }
    redirect(url) {
        this.response.redirect(url);
    }
    send(data) {
        if (data instanceof ResponseData_1.ResponseData) {
            this.setStatus(data.getStatus()).send(data.getData());
        }
        else if (data instanceof StormError_1.StormError) {
            this.setStatus(data.getHTTPCode()).send(data.getErrorResponse());
        }
        else {
            this.response.send(data);
        }
        instance_1.getApplicationLogger().info(`API ${this.requestURL} (${this.getStatus()}) responded in ${new Date().getTime() - this.created.getTime()}ms`);
    }
    pipe(stream) {
        stream.on('end', () => {
            stream.unpipe(this.response);
        });
        stream.pipe(this.response);
    }
    success(data) {
        if (data === undefined) {
            this.setStatus(StatusCode_1.StatusCode.OK_NO_CONTENT);
        }
        else {
            this.setStatus(StatusCode_1.StatusCode.OK);
        }
        this.send(data);
    }
    setHeader(key, value) {
        this.response.set(key, value);
    }
    setHeaders(keyValuePair) {
        this.response.set(keyValuePair);
    }
    isHeadersSent() {
        return this.response.headersSent;
    }
    error(error) {
        if (error && (error instanceof ResponseData_1.ResponseData || error instanceof StormError_1.StormError)) {
            this.send(error);
        }
        else {
            this.send(new InternalError_1.InternalError(error));
        }
    }
    badRequest(data) {
        this.setStatus(StatusCode_1.StatusCode.ERR_BAD_REQUEST).send(data);
    }
    unauthorized(data) {
        this.setStatus(StatusCode_1.StatusCode.ERR_UNAUTHORIZED).send(data);
    }
    forbidden(data) {
        this.setStatus(StatusCode_1.StatusCode.ERR_FORBIDDEN).send(data);
    }
    conflict(data) {
        this.setStatus(StatusCode_1.StatusCode.ERR_CONFLICT).send(data);
    }
    notFound(data) {
        this.setStatus(StatusCode_1.StatusCode.ERR_NOT_FOUND).send(data);
    }
    internalError(data) {
        this.setStatus(StatusCode_1.StatusCode.INTERNAL_ERROR).send(data);
    }
}
exports.Response = Response;
//# sourceMappingURL=Response.js.map