import { Optional } from "sequelize";
import StandartService from "./standartService";
import { Product, Brand, Type, ProductInfo } from "../models";

class ProductService extends StandartService {
    constructor() {
        super(Product)
    }

    async create(data: Optional<any, string>) {
        return await this.model.create(data, { include: ProductInfo })
    }

    async getOneEager(id: number) {
        return await Product.findByPk(id, {
            include: [
                Brand,
                Type,
                ProductInfo
            ]
        })
    }

    async getAllEager() {
        return await Product.findAll({
            include: [
                Brand,
                Type,
                ProductInfo
            ]
        })
    }
}

export default new ProductService()