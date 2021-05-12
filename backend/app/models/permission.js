const Sequelize = require("sequelize");
const sequelize = require('../database');

class Permission extends Sequelize.Model { }

Permission.init(
    {
        type: Sequelize.STRING,
        
    },
    {
        sequelize,
        modelName: 'permission',
    },
);

module.exports = Permission;
