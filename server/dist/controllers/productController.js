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
const brandService_1 = __importDefault(require("../services/brandService"));
const productService_1 = __importDefault(require("../services/productService"));
const typeService_1 = __importDefault(require("../services/typeService"));
const apiError_1 = __importDefault(require("../utils/apiError"));
const standartController_1 = __importDefault(require("./standartController"));
const fileHandler_1 = __importDefault(require("../utils/fileHandler"));
class ProductController extends standartController_1.default {
    constructor() {
        super(productService_1.default);
    }
    // async create(req: IRequestBody<Omit<IProduct, 'id'>>, res: Response, next: NextFunction) {
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // checking brand exists
            const foundBrand = yield brandService_1.default.getOne(req.body.brandId);
            if (!foundBrand) {
                throw apiError_1.default.badRequest(`brand with id ${req.body.brandId} doesn't exist`);
            }
            // checking type exists
            const foundType = yield typeService_1.default.getOne(req.body.typeId);
            if (!foundType) {
                throw apiError_1.default.badRequest(`type with id ${req.body.typeId} doesn't exist`);
            }
            // saving image
            const { image } = req.files;
            if (image) {
                const fileName = fileHandler_1.default.save(image);
                req.body.image = fileName;
            }
            const newProduct = yield productService_1.default.create(req.body);
            res.send(newProduct.toJSON());
        });
    }
    getOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield productService_1.default.getOneEager(Number(req.params.id));
            if (!product) {
                return res.send([]);
            }
            res.send(product.toJSON());
        });
    }
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield productService_1.default.getAllEager();
            res.send(products);
        });
    }
}
exports.default = new ProductController();
