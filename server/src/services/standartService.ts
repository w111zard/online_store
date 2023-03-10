import { InstanceError, Model, ModelCtor, ModelStatic, Optional } from "sequelize";

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
        const { id } = data
        if (!id) {
            return new Error('Id must be specified')
        }

        const instance = await this.model.findByPk(id)
        if (!instance) {
            return new Error(
                `Instance with id ${id} doesn't exist`
            )
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