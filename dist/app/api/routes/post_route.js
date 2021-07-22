"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
var express_1 = require("express");
var post_controller_1 = require("../controllers/post_controller");
var postRouter = function (workers) {
    // utils
    var router = express_1.Router();
    var controller = new post_controller_1.PostController(workers.repos);
    router.get("", controller.root);
    router.post("", controller.root);
    router.post("/add", controller.add);
    router.put("/:id", controller.update);
    router.delete("/:id", controller.delete);
    router.get("/all", controller.getAll);
    router.get("/byId/:id", controller.getOneById);
    router.post("/uploadPost/:id", controller.postStorage.fields([
        { name: "post", maxCount: 1 },
    ]), controller.uploadPost);
    return router;
};
exports.postRouter = postRouter;
