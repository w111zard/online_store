"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter_1 = __importDefault(require("./userRouter"));
const roleRouter_1 = __importDefault(require("./roleRouter"));
const typeRouter_1 = __importDefault(require("./typeRouter"));
const brandRouter_1 = __importDefault(require("./brandRouter"));
const productRouter_1 = __importDefault(require("./productRouter"));
const router = (0, express_1.Router)();
router.use('/user', userRouter_1.default);
router.use('/role', roleRouter_1.default);
router.use('/type', typeRouter_1.default);
router.use('/brand', brandRouter_1.default);
router.use('/product', productRouter_1.default);
exports.default = router;
