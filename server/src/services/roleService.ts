import { Role } from '../models'
import StandartService from './standartService'

class RoleService extends StandartService {
    constructor() {
        super(Role)
    }
}

export default new RoleService()