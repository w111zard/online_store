import { NextFunction, Request, Response } from "express";
import StandartService from "../services/standartService";
import ApiError from "../utils/apiError";

class StandartController {
    service: StandartService 
    
    constructor(service: StandartService) {
        this.service = service
    }

    async create(req: Request, res: Response, next: NextFunction) {
        const instance = await this.service.create(req.body)
        res.send(instance.toJSON())
    }

    async getAll(req: Request, res: Response, next: NextFunction) {
        const instances = await this.service.getAll()
        res.send(instances)
    }

    async getOne(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params
        if (!id) {
            throw ApiError.badRequest('id must be specified')
        }
        const instance = await this.service.getOne(Number(id))
        if (!instance) {
            return res.send([])
        }
        res.send(instance.toJSON())
    }

    async update(req: Request, res: Response, next: NextFunction) {
        const instance = await this.service.update(req.body)
        if (!instance) {
            throw ApiError.badRequest(`Entry with id ${req.body.id} doesn't exist`)
        }
        res.send(instance.toJSON())
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params
        if (!id) {
            throw ApiError.badRequest('Id must be specified')
        }
        const affectedRowsNumber = await this.service.delete(Number(id))
        res.send({ affectedRows: affectedRowsNumber }) 
    }
}

export default StandartController