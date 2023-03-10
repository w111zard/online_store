import StandartService from "./standartService";
import { Product, Brand, Type } from "../models";

class ProductService extends StandartService {
    constructor() {
        super(Product)
    }

    async getOneEager(id: number) {
        return await Product.findByPk(id, {
            include: [
                Brand,
                Type
            ]
        })
    }

    async getAllEager() {
        return await Product.findAll({
            include: [
                Brand,
                Type
            ]
        })
    }
}

export default new ProductService()