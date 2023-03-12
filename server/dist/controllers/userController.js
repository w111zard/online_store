"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../services/userService"));
const apiError_1 = __importDefault(require("../utils/apiError"));
const authHandler_1 = __importDefault(require("../utils/authHandler"));
class UserController {
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            // checking if user already exists
            const user = yield userService_1.default.getOneByEmail(email);
            if (user) {
                throw apiError_1.default.badRequest('User with this email already exists');
            }
            // hashing password
            const hashedPassword = authHandler_1.default.hashPassword(password);
            let newUser = yield userService_1.default.create({
                email: email,
                password: hashedPassword
            });
            // don't show generated password
            newUser = newUser.toJSON();
            delete newUser.password;
            res.send(newUser);
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const user = yield userService_1.default.getOneByEmail(email, true);
            if (!user) {
                throw apiError_1.default.unauthorized();
            }
            const userData = user.toJSON();
            // if (!authHandler.comparePassword(password, userData.password)) {
            //     throw ErrorHandler.unauthorized()
            // }
            const roles = [];
            userData.roles.forEach(item => {
                roles.push(item.name);
            });
            const token = authHandler_1.default.generateToken({
                id: userData.id,
                role: roles
            });
            res.send({ token: token });
        });
    }
    check(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send('ok');
        });
    }
}
exports.default = new UserController();
