import brandService from "../services/brandService";
import StandartController from "./standartController";

class BrandController extends StandartController {
    constructor() {
        super(brandService)
    }  
}

export default new BrandController()