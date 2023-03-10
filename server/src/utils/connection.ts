import { Sequelize } from "sequelize"

export default new Sequelize(
    'online_store',
    'postgres',
    '1234', {
        host: 'localhost',
        dialect: 'postgres'
    }
)