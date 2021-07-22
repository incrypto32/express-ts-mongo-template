"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessage = void 0;
var ErrorMessage = /** @class */ (function () {
    function ErrorMessage(message, code) {
        if (code === void 0) { code = 0; }
        this.success = false;
        this.message = message;
        this.code = code;
    }
    return ErrorMessage;
}());
exports.ErrorMessage = ErrorMessage;
