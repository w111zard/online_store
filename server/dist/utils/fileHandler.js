"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
class FileHandler {
    save(file) {
        const fileName = Date.now() + path_1.default.extname(file.name);
        file.mv(path_1.default.resolve(__dirname, '..', '..', 'src', 'static', fileName));
        return fileName;
    }
}
exports.default = new FileHandler();
