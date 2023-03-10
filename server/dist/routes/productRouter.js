"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("../controllers/productController"));
const router = (0, express_1.Router)();
router.post('/', productController_1.default.create.bind(productController_1.default));
router.get('/', productController_1.default.getAll.bind(productController_1.default));
router.get('/:id', productController_1.default.getOne.bind(productController_1.default));
router.patch('/', productController_1.default.update.bind(productController_1.default));
router.delete('/:id', productController_1.default.delete.bind(productController_1.default));
exports.default = router;
