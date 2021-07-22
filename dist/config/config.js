"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configure = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
var configure = function () {
    // LOAD ENVIROMENT VARIABLES FROM .env file
    dotenv_1.default.config();
    var port;
    var mongoURI;
    var isProduction = process.env.NODE_ENV == "production";
    console.log("Running in " + process.env.NODE_ENV + " mode");
    if (isProduction) {
        port = process.env.PORT || "5000";
        mongoURI = process.env.MONGODB_URI;
    }
    else {
        port = "5000";
        mongoURI = process.env.MONGODB_URI_DEV;
    }
    return { port: port, mongoURI: mongoURI };
};
exports.configure = configure;
