import { Optional } from "sequelize";
import { User, Role } from "../models";
import StandartService from "./standartService";

class UserService extends StandartService {
    constructor() {
        super(User)
    }

    async getOneByEmail(email: string, showPassword: boolean=false) {
        console.log(showPassword)
        if (showPassword) {
            return User.scope('withPassword').findOne({
                where: {
                    email: email
                },
                include: [Role]
            })    
        }
        return User.findOne({
            where: {
                email: email
            },
            include: [Role]
        })
    }
}

export default new UserService()