import { NextFunction, Request, Response } from 'express';
import brandService from '../services/brandService';
import productService from "../services/productService";
import typeService from '../services/typeService';
import ApiError from '../utils/apiError';
import StandartController from "./standartController";
import path from 'path';
import fileHandler from '../utils/fileHandler';

class ProductController extends StandartController{
    constructor() {
        super(productService)
    }

    // async create(req: IRequestBody<Omit<IProduct, 'id'>>, res: Response, next: NextFunction) {
    async create(req: Request, res: Response, next: NextFunction) {
        // checking brand exists
        const foundBrand = await brandService.getOne(req.body.brandId)
        if (!foundBrand) {
            throw ApiError.badRequest(`brand with id ${req.body.brandId} doesn't exist`)
        }
        
        // checking type exists
        const foundType = await typeService.getOne(req.body.typeId)
        if (!foundType) {
            throw ApiError.badRequest(`type with id ${req.body.typeId} doesn't exist`)
        }

        // saving image
        const { image } : any = req.files
        if (image) {
            const fileName = fileHandler.save(image)
            req.body.image = fileName
        }

        const newProduct = await productService.create(req.body)
        res.send(newProduct.toJSON())
    }

    async getOne(req: Request, res: Response, next: NextFunction) {
        const product = await productService.getOneEager(Number(req.params.id))
        if (!product) {
            return res.send([])
        }
        res.send(product.toJSON())
    }

    async getAll(req: Request, res: Response, next: NextFunction) {
        const products = await productService.getAllEager()
        res.send(products)
    }
}

export default new ProductController()