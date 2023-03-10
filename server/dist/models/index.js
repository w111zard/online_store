"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = exports.User = void 0;
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
});
exports.Role = Role;
Role.belongsToMany(User, { through: 'user_role' });
User.belongsToMany(Role, { through: 'user_role' });
