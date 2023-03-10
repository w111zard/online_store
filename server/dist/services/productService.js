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
const standartService_1 = __importDefault(require("./standartService"));
const models_1 = require("../models");
class ProductService extends standartService_1.default {
    constructor() {
        super(models_1.Product);
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.create(data, { include: models_1.ProductInfo });
        });
    }
    getOneEager(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.Product.findByPk(id, {
                include: [
                    models_1.Brand,
                    models_1.Type,
                    models_1.ProductInfo
                ]
            });
        });
    }
    getAllEager() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.Product.findAll({
                include: [
                    models_1.Brand,
                    models_1.Type,
                    models_1.ProductInfo
                ]
            });
        });
    }
}
exports.default = new ProductService();
