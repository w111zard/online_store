"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const standartService_1 = __importDefault(require("./standartService"));
class RoleService extends standartService_1.default {
    constructor() {
        super(models_1.Role);
    }
}
exports.default = new RoleService();
