import { Request, Response, NextFunction } from "express"
import { IRequestBody } from "../interfaces/common"
import { IUser } from "../interfaces/models"
import userService from "../services/userService"
import ErrorHandler from "../utils/apiError"
import authHandler from "../utils/authHandler"

class UserController {
    async register(req: IRequestBody<Omit<IUser, 'id'>>, res: Response) {
        const { email, password } = req.body
        
        // checking if user already exists
        const user = await userService.getOneByEmail(email)
        if (user) {
            throw ErrorHandler.badRequest('User with this email already exists')
        }

        // hashing password
        const hashedPassword = authHandler.hashPassword(password)
        
        let newUser = await userService.create({ 
            email: email, 
            password: hashedPassword 
        })
        
        // don't show generated password
        newUser = newUser.toJSON()
        delete newUser.password

        res.send(newUser)
    }

    async login(req: IRequestBody<Omit<IUser, 'id'>>, res: Response) {
        const { email, password } = req.body

        const user = await userService.getOneByEmail(email, true)
        if (!user) {
            throw ErrorHandler.unauthorized()
        }
        const userData: IUser = user.toJSON()

        // if (!authHandler.comparePassword(password, userData.password)) {
        //     throw ErrorHandler.unauthorized()
        // }

        const roles: any = []

        userData.roles.forEach(item => {
            roles.push(item.name) 
        })
 
        const token = authHandler.generateToken({
            id: userData.id,
            role: roles
        })

        res.send({ token: token })
    }

    async check(req: Request, res: Response, next: NextFunction) {
        res.send('ok')
    }
}

export default new UserController()