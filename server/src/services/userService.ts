import { User } from "../models";
import StandartService from "./standartService";

class UserService extends StandartService {
    constructor() {
        super(User)
    }
}

export default new UserService()