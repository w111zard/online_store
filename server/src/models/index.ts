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
}, {
    defaultScope: {
        attributes: { exclude: ['password'] }
    },
    scopes: {
        withPassword: {
            attributes: ['id', 'email', 'password']
        }
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
}, { timestamps: false })

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
        allowNull: true
    }
})

const ProductInfo = connection.define('product_info', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { 
    timestamps: false,
    indexes: [{
        unique: true,
        fields: ['productId', 'title']
    }]
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
}, { timestamps: false })

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
}, { timestamps: false }) 

Role.belongsToMany(User, { through: 'user_role' })
User.belongsToMany(Role, { through: 'user_role' })

Product.hasMany(ProductInfo)
ProductInfo.belongsTo(Product) 

Type.hasMany(Product)
Product.belongsTo(Type)

Brand.hasMany(Product)
Product.belongsTo(Brand)

export {
    User,
    Role,
    Product,
    Brand,
    Type,
    ProductInfo
}