"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unAuthorizedRouter = exports.authorizedRouter = void 0;
var express_1 = require("express");
var user_controller_1 = require("../controllers/user_controller");
var verify_token_1 = require("../middlewares/verify_token");
var post_route_1 = require("./post_route");
var authorizedRouter = function (workers) {
    var router = express_1.Router();
    router.use("/post", post_route_1.postRouter(workers));
    return router;
};
exports.authorizedRouter = authorizedRouter;
var unAuthorizedRouter = function (workers) {
    var controller = new user_controller_1.UserController(workers.repos);
    var router = express_1.Router();
    router.use("/register", controller.add);
    router.use("/login", controller.login);
    router.use("", verify_token_1.verifyToken, (exports.authorizedRouter(workers)));
    return router;
};
exports.unAuthorizedRouter = unAuthorizedRouter;
