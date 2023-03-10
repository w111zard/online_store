"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typeController_1 = __importDefault(require("../controllers/typeController"));
const router = (0, express_1.Router)();
router.post('/', typeController_1.default.create.bind(typeController_1.default));
router.get('/', typeController_1.default.getAll.bind(typeController_1.default));
router.get('/:id', typeController_1.default.getOne.bind(typeController_1.default));
router.patch('/', typeController_1.default.update.bind(typeController_1.default));
router.delete('/:id', typeController_1.default.delete.bind(typeController_1.default));
exports.default = router;
