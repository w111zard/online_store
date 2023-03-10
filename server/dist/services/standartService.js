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
Object.defineProperty(exports, "__esModule", { value: true });
class StandartService {
    constructor(model) {
        this.model = model;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.create(data);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findAll();
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findByPk(id);
        });
    }
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = data;
            if (!id) {
                return new Error('Id must be specified');
            }
            const instance = yield this.model.findByPk(id);
            if (!instance) {
                return new Error(`Instance with id ${id} doesn't exist`);
            }
            return yield instance.update(data);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.destroy({
                where: {
                    id: id
                }
            });
        });
    }
}
exports.default = StandartService;
