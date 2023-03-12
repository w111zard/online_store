"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const router = (0, express_1.Router)();
router.post('/registration', userController_1.default.register);
router.post('/login', userController_1.default.login);
router.get('/auth', [(0, authMiddleware_1.default)(['admin'])], userController_1.default.check);
exports.default = router;
