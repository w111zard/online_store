"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const roleService_1 = __importDefault(require("../services/roleService"));
const standartController_1 = __importDefault(require("./standartController"));
class RoleController extends standartController_1.default {
    constructor() {
        super(roleService_1.default);
    }
}
exports.default = new RoleController();
