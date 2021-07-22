"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.userSchema = void 0;
var mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});
exports.User = mongoose_1.model('user', exports.userSchema);
