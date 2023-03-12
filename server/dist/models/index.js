"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductInfo = exports.Type = exports.Brand = exports.Product = exports.Role = exports.User = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../utils/connection"));
const User = connection_1.default.define('user', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
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
});
exports.User = User;
const Role = connection_1.default.define('role', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: false });
exports.Role = Role;
const Product = connection_1.default.define('product', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: (0, sequelize_1.DECIMAL)(12, 2),
        allowNull: false
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
});
exports.Product = Product;
const ProductInfo = connection_1.default.define('product_info', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    indexes: [{
            unique: true,
            fields: ['productId', 'title']
        }]
});
exports.ProductInfo = ProductInfo;
const Type = connection_1.default.define('type', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, { timestamps: false });
exports.Type = Type;
const Brand = connection_1.default.define('brand', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, { timestamps: false });
exports.Brand = Brand;
Role.belongsToMany(User, { through: 'user_role' });
User.belongsToMany(Role, { through: 'user_role' });
Product.hasMany(ProductInfo);
ProductInfo.belongsTo(Product);
Type.hasMany(Product);
Product.belongsTo(Type);
Brand.hasMany(Product);
Product.belongsTo(Brand);
