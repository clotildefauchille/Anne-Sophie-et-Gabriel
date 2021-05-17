const { DataTypes, Model } = require("sequelize");
const sequelize = require('../database');

class Events extends Model { }

Events.init(
    {
        schedule: DataTypes.STRING,
        type: DataTypes.STRING,
        icon: DataTypes.STRING,
        // places_id: DataTypes.INTEGER,
    },
    {
        sequelize,
        tableName: 'events',
    },
);

module.exports = Events;
