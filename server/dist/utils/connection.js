"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = new sequelize_1.Sequelize('online_store', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'
});
