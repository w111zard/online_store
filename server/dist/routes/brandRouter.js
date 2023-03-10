"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const brandController_1 = __importDefault(require("../controllers/brandController"));
const router = (0, express_1.Router)();
router.post('/', brandController_1.default.create.bind(brandController_1.default));
router.get('/', brandController_1.default.getAll.bind(brandController_1.default));
router.get('/:id', brandController_1.default.getOne.bind(brandController_1.default));
router.patch('/', brandController_1.default.update.bind(brandController_1.default));
router.delete('/:id', brandController_1.default.delete.bind(brandController_1.default));
exports.default = router;
