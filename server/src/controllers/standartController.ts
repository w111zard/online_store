import { NextFunction, Request, Response } from "express";
import StandartService from "../services/standartService";
import ErrorHandler from "../utils/errorHandler";

class StandartController {
    service: StandartService 
    
    constructor(service: StandartService) {
        this.service = service
    }

    async create(req: Request, res: Response) {
        const instance = await this.service.create(req.body)
        res.send(instance.toJSON())
    }

    async getAll(req: Request, res: Response) {
        const instances = await this.service.getAll()
        res.send(instances)
    }

    async getOne(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params
        if (!id) {
            next(ErrorHandler.badRequest('id must be specified'))
        }
        const instance = await this.service.getOne(Number(id))
        res.send(instance.toJSON())
    }

    async update(req: Request, res: Response) {
        const instance = await this.service.update(req.body)
        res.send(instance.toJSON())
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params
        if (!id) {
            return next(ErrorHandler.badRequest('Id must be specified'))
        }
        const affectedRowsNumber = await this.service.delete(Number(id))
        res.send({ affectedRows: affectedRowsNumber })
    }
}