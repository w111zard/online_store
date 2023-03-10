"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeService_1 = __importDefault(require("../services/typeService"));
const standartController_1 = __importDefault(require("./standartController"));
class TypeController extends standartController_1.default {
    constructor() {
        super(typeService_1.default);
    }
}
exports.default = new TypeController();
