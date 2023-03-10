"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
exports.default = (err, req, res, next) => {
    console.log('in error');
    if (err instanceof errorHandler_1.default) {
        return res.status(err.status)
            .json({ message: err.message });
    }
    return res.status(500)
        .json({ message: 'Unexpected error' });
};
