"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const standartService_1 = __importDefault(require("./standartService"));
class UserService extends standartService_1.default {
    constructor() {
        super(models_1.User);
    }
    getOneByEmail(email, showPassword = false) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(showPassword);
            if (showPassword) {
                return models_1.User.scope('withPassword').findOne({
                    where: {
                        email: email
                    },
                    include: [models_1.Role]
                });
            }
            return models_1.User.findOne({
                where: {
                    email: email
                },
                include: [models_1.Role]
            });
        });
    }
}
exports.default = new UserService();
