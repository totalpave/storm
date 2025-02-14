"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StormError_1 = require("./StormError");
const ErrorCode_1 = require("./ErrorCode");
const StatusCode_1 = require("./StatusCode");
class MissingParameter extends StormError_1.StormError {
    constructor(parameter) {
        super({ parameter: parameter });
    }
    getMessage() {
        return `Missing parameter (${this.getDetails().parameter}).`;
    }
    getCode() {
        return ErrorCode_1.ErrorCode.MISSING_PARAMETER;
    }
    getHTTPCode() {
        return StatusCode_1.StatusCode.ERR_BAD_REQUEST;
    }
}
exports.MissingParameter = MissingParameter;
//# sourceMappingURL=MissingParameter.js.map