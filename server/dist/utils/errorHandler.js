"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandler extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }
    static badRequest(message) {
        return new ErrorHandler(404, message);
    }
    static internal(message) {
        return new ErrorHandler(500, message);
    }
}
exports.default = ErrorHandler;
