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
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
class StandartController {
    constructor(service) {
        this.service = service;
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const instance = yield this.service.create(req.body);
            res.send(instance.toJSON());
        });
    }
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const instances = yield this.service.getAll();
            res.send(instances);
        });
    }
    getOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            if (!id) {
                next(errorHandler_1.default.badRequest('id must be specified'));
            }
            const instance = yield this.service.getOne(Number(id));
            if (!instance) {
                return res.send([]);
            }
            res.send(instance.toJSON());
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const instance = yield this.service.update(req.body);
            if (!instance) {
                return next(errorHandler_1.default.badRequest(`Entry with id ${req.body.id} doesn't exist`));
            }
            res.send(instance.toJSON());
        });
    }
    delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            if (!id) {
                return next(errorHandler_1.default.badRequest('Id must be specified'));
            }
            const affectedRowsNumber = yield this.service.delete(Number(id));
            res.send({ affectedRows: affectedRowsNumber });
        });
    }
}
exports.default = StandartController;
