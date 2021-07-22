"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repositories = void 0;
var user_repo_1 = require("./user_repo");
var post_repo_1 = require("./post_repo");
var Repositories = /** @class */ (function () {
    function Repositories() {
        this.user = new user_repo_1.UserRepository();
        this.post = new post_repo_1.PostRepository();
    }
    return Repositories;
}());
exports.Repositories = Repositories;
