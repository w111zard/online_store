import { DataTypes, DECIMAL } from 'sequelize'
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

const Product = connection.define('product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DECIMAL(12, 2),
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const Type = connection.define('type', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

const Brand = connection.define('brand', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}) 

Role.belongsToMany(User, { through: 'user_role' })
User.belongsToMany(Role, { through: 'user_role' })

Type.hasMany(Product)
Product.belongsTo(Type)

Brand.hasMany(Product)
Product.belongsTo(Brand)

export {
    User,
    Role,
    Product,
    Brand,
    Type
}