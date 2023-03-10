import typeService from "../services/typeService";
import StandartController from "./standartController";

class TypeController extends StandartController {
    constructor() {
        super(typeService)
    }
}

export default new TypeController()