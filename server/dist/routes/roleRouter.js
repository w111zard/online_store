"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const roleController_1 = __importDefault(require("../controllers/roleController"));
const router = (0, express_1.Router)();
router.post('/', roleController_1.default.create.bind(roleController_1.default));
router.get('/', roleController_1.default.getAll.bind(roleController_1.default));
router.get('/:id', roleController_1.default.getOne.bind(roleController_1.default));
router.patch('/', roleController_1.default.update.bind(roleController_1.default));
router.delete('/:id', roleController_1.default.delete.bind(roleController_1.default));
exports.default = router;
