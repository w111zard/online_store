"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthHandler {
    hashPassword(plainTextPassword, saltRounds = 10) {
        return bcrypt_1.default.hashSync(plainTextPassword, saltRounds);
    }
    comparePassword(plainTextPassword, hash) {
        return bcrypt_1.default.compareSync(plainTextPassword, hash);
    }
    generateToken(data) {
        return jsonwebtoken_1.default.sign(data, 'secret_key', {
            expiresIn: "24h"
        });
    }
    verifyToken(token) {
        return jsonwebtoken_1.default.verify(token, 'secret_key');
    }
}
exports.default = new AuthHandler();
