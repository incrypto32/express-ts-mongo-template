"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
var express_1 = require("express");
var user_controller_1 = require("../controllers/user_controller");
var userRouter = function (workers) {
    // utils
    var router = express_1.Router();
    var controller = new user_controller_1.UserController(workers.repos);
    router.get("", controller.root);
    router.post("", controller.root);
    router.post("/register", controller.add);
    router.put("/:id", controller.update);
    router.get("/all", controller.getAll);
    router.get("/id", controller.getOneById);
    router.get("/byEmail/:email", controller.getOneByEmail);
    router.post("/uploadDP/:id", controller.dpStorage.fields([
        { name: "DP", maxCount: 1 },
    ]), controller.uploadDP);
    return router;
};
exports.userRouter = userRouter;
