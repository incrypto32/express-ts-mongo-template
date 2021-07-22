"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = exports.postSchema = void 0;
var mongoose_1 = require("mongoose");
exports.postSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});
exports.Post = mongoose_1.model('post', exports.postSchema);
