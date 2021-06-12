const Sequelize = require("sequelize");
const sequelize = require('../database');

class Admin extends Sequelize.Model { }

Admin.init(
    {
        username: Sequelize.STRING,
        password: Sequelize.STRING,
    },
    {
        sequelize,
        tableName: 'admin',
    },
);

module.exports = Admin;
