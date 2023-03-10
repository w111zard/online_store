"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const brandService_1 = __importDefault(require("../services/brandService"));
const standartController_1 = __importDefault(require("./standartController"));
class BrandController extends standartController_1.default {
    constructor() {
        super(brandService_1.default);
    }
}
exports.default = new BrandController();
