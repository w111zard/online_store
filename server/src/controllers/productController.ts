import { NextFunction, Request, Response } from 'express';
import { IRequestBody } from '../interfaces/common';
import { IProduct } from '../interfaces/models';
import brandService from '../services/brandService';
import productService from "../services/productService";
import typeService from '../services/typeService';
import ErrorHandler from '../utils/errorHandler';
import StandartController from "./standartController";

class ProductController extends StandartController{
    constructor() {
        super(productService)
    }

    async create(req: IRequestBody<Omit<IProduct, 'id'>>, res: Response, next: NextFunction) {
        // checking brand exists
        const foundBrand = await brandService.getOne(req.body.brandId)
        if (!foundBrand) {
            return next(ErrorHandler.badRequest(`brand with id ${req.body.brandId} doesn't exist`))
        }
        
        // checking type exists
        const foundType = await typeService.getOne(req.body.typeId)
        if (!foundType) {
            return next(ErrorHandler.badRequest(`type with id ${req.body.typeId} doesn't exist`))
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