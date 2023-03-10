import { Type } from "../models";
import StandartService from "./standartService";

class TypeService extends StandartService {
    constructor() {
        super(Type)
    }
}

export default new TypeService()