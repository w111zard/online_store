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
const express_1 = __importDefault(require("express"));
const process_1 = require("process");
const connection_1 = __importDefault(require("./utils/connection"));
const routes_1 = __importDefault(require("./routes"));
const errorMiddleware_1 = __importDefault(require("./middlewares/errorMiddleware"));
const models_1 = require("./models");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', routes_1.default);
app.use(errorMiddleware_1.default);
const startDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connection_1.default.authenticate();
        yield connection_1.default.sync({ force: true });
    }
    catch (error) {
        console.log(error);
        (0, process_1.exit)(1);
    }
});
const startServer = () => {
    app.listen(3000);
};
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    yield startDatabase();
    console.log('Connected to the database successfully!');
    startServer();
    console.log('Server has been started successfully!');
    const type = yield models_1.Type.create({ name: 'smartphone' });
    const brand = yield models_1.Brand.create({ name: 'Samsung' });
    const product = yield models_1.Product.create({
        name: 'Galaxy S20',
        price: 1990.90,
        image: 'samsung.png',
        typeId: 1,
        brandId: 1
    });
});
exports.default = start;
