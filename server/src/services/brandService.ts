import { Brand } from "../models";
import StandartService from "./standartService";

class BrandService extends StandartService {
    constructor() {
        super(Brand)
    }
}

export default new BrandService()