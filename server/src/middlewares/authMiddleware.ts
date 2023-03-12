import { Request, Response, NextFunction } from "express"
import { IJwtPayload } from "../interfaces/common"
import ApiError from "../utils/apiError"
import authHandler from '../utils/authHandler'

export default (roles: [string]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            if (!req.headers.authorization) {
                throw ApiError.unauthorized()
            }

            // getting payload from the token
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                throw ApiError.unauthorized()
            }
            const tokenPayload = authHandler.verifyToken(token) as IJwtPayload  
            
            // checking if user has the role 
            let hasRole = false
            tokenPayload.role.forEach((role: string) => {
                if (roles.includes(role)) {
                    hasRole = true
                }
            })

            if (!hasRole) { 
                throw ApiError.unauthorized()
            }

            next()   
        } catch (error) {
            console.log(error)
            throw ApiError.unauthorized()
        }
    }
}