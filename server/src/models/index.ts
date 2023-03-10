import { DataTypes } from 'sequelize'
import connection from '../utils/connection'

const User = connection.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const Role = connection.define('role', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Role.belongsToMany(User, { through: 'user_role' })
User.belongsToMany(Role, { through: 'user_role' })

export {
    User,
    Role
}