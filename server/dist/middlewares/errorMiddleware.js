"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiError_1 = __importDefault(require("../utils/apiError"));
exports.default = (error, req, res, next) => {
    console.log(error);
    if (error instanceof apiError_1.default) {
        return res.status(error.status)
            .json({ message: error.message });
    }
    return res.status(500)
        .json({ message: 'Unexpected error' });
};
