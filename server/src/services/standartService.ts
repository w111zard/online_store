import { InstanceError, Model, ModelStatic, Optional } from "sequelize";

class StandartService {
    model: ModelStatic<any>
    
    constructor(model: ModelStatic<any>) {
        this.model = model
    }

    async create(data: Optional<any, string>) {
        return await this.model.create(data)
    }

    async getAll() {
        return await this.model.findAll()
    }

    async getOne(id: number) {
        return await this.model.findByPk(id)
    }

    async update(data: Optional<any, string>) {
        const instance = await this.model.findByPk(data.id)
        if (!instance) {
            return null
        }
        return await instance.update(data)
    }

    async delete(id: number) {
        return await this.model.destroy({
            where: {
                id: id
            }
        })
    }
}

export default StandartService