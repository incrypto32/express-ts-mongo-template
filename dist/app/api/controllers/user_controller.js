"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var multer_1 = __importDefault(require("multer"));
var bcrypt = __importStar(require("bcrypt"));
var controller_1 = require("./controller");
var jwt = __importStar(require("jsonwebtoken"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var error_1 = require("../../../interfaces/error");
var UserController = /** @class */ (function (_super) {
    __extends(UserController, _super);
    function UserController(repositories) {
        var _this = _super.call(this) || this;
        _this.dpStorage = multer_1.default({
            storage: multer_1.default.diskStorage({
                destination: function (req, file, cb) { return __awaiter(_this, void 0, void 0, function () {
                    var des;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                des = "public/userDP";
                                return [4 /*yield*/, fs_extra_1.default.mkdirp(des)];
                            case 1:
                                _a.sent();
                                cb(null, "public/userDP/");
                                return [2 /*return*/];
                        }
                    });
                }); },
                filename: function (req, file, cb) {
                    cb(null, req.params.id);
                },
            }),
        });
        _this.root = _this.handler(function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(req.body);
                res.send("Welcome to user API");
                return [2 /*return*/];
            });
        }); });
        _this.add = _this.handler(function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var salt, _a, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, bcrypt.genSalt(10)];
                    case 1:
                        salt = _b.sent();
                        // now we set user password to hashed password
                        _a = req.body;
                        return [4 /*yield*/, bcrypt.hash(req.body.password, salt)];
                    case 2:
                        // now we set user password to hashed password
                        _a.password = _b.sent();
                        return [4 /*yield*/, this.repo.add(req.body)];
                    case 3:
                        user = _b.sent();
                        return [2 /*return*/, res.json(user)];
                }
            });
        }); });
        _this.login = _this.handler(function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var user, success, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repo.getOneByEmail(req.body.email)];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, bcrypt.compare(req.body.password, user === null || user === void 0 ? void 0 : user.password)
                            // Create token
                        ];
                    case 2:
                        success = _a.sent();
                        // Create token
                        if (success) {
                            token = jwt.sign({ user: user }, process.env.TOKEN_KEY, {
                                expiresIn: "2h",
                            });
                            res.json(token);
                        }
                        res.status(401).json(new error_1.ErrorMessage("Wrong Password"));
                        return [2 /*return*/];
                }
            });
        }); });
        _this.uploadDP = _this.handler(function (req, res) {
            res.send("SUCCESS");
        });
        _this.update = _this.handler(function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repo.update(req.params.id, req.body)];
                    case 1:
                        user = _a.sent();
                        console.log(user);
                        return [2 /*return*/, res.json(user)];
                }
            });
        }); });
        _this.delete = _this.handler(function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repo.delete(req.params.id)];
                    case 1:
                        user = _a.sent();
                        console.log(user);
                        return [2 /*return*/, res.json({ success: true, result: user })];
                }
            });
        }); });
        _this.getAll = _this.handler(function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var allCustomers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("-- getAllCustomers --");
                        return [4 /*yield*/, this.repo.getAll()];
                    case 1:
                        allCustomers = _a.sent();
                        console.log(allCustomers.length);
                        return [2 /*return*/, res.json({ success: true, result: allCustomers })];
                }
            });
        }); });
        _this.getOneById = _this.handler(function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("-- getOneCustomersById --");
                        console.log(req.params.id);
                        return [4 /*yield*/, this.repo.getOneById(req.params.id)];
                    case 1:
                        user = _a.sent();
                        console.log(user);
                        return [2 /*return*/, res.json({ success: true, result: user })];
                }
            });
        }); });
        _this.getOneByEmail = _this.handler(function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("-- getOneCustomersByEmail --");
                        console.log(req.params.email);
                        return [4 /*yield*/, this.repo.getOneByEmail(req.params.email)];
                    case 1:
                        user = _a.sent();
                        console.log(user);
                        return [2 /*return*/, res.json({ success: true, result: user })];
                }
            });
        }); });
        _this.repostories = repositories;
        _this.repo = repositories.user;
        return _this;
    }
    return UserController;
}(controller_1.Controller));
exports.UserController = UserController;
