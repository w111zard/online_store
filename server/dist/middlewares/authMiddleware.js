"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiError_1 = __importDefault(require("../utils/apiError"));
const authHandler_1 = __importDefault(require("../utils/authHandler"));
exports.default = (roles) => {
    return (req, res, next) => {
        if (req.method === "OPTIONS") {
            next();
        }
        try {
            if (!req.headers.authorization) {
                throw apiError_1.default.unauthorized();
            }
            // getting payload from the token
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                throw apiError_1.default.unauthorized();
            }
            const tokenPayload = authHandler_1.default.verifyToken(token);
            // checking if user has the role 
            let hasRole = false;
            tokenPayload.role.forEach((role) => {
                if (roles.includes(role)) {
                    hasRole = true;
                }
            });
            if (!hasRole) {
                throw apiError_1.default.unauthorized();
            }
            next();
        }
        catch (error) {
            console.log(error);
            throw apiError_1.default.unauthorized();
        }
    };
};
