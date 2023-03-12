import { NextFunction, Request, Response } from "express"
import roleService from "../services/roleService"
import ErrorHandler from "../utils/apiError"
import StandartController from "./standartController"

class RoleController extends StandartController {
    constructor() {
        super(roleService)
    }
}

export default new RoleController()