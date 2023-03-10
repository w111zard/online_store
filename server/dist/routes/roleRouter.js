"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const roleController_1 = __importDefault(require("../controllers/roleController"));
const router = (0, express_1.Router)();
router.post('/', roleController_1.default.create);
router.get('/', roleController_1.default.getAll);
router.get('/:id', roleController_1.default.getOneById);
router.patch('/', roleController_1.default.update);
router.delete('/:id', roleController_1.default.delete);
exports.default = router;
