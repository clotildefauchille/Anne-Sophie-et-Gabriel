const { DataTypes, Model } = require("sequelize");
const sequelize = require('../database');

class Place extends Model {}

Place.init(
    {
        name: DataTypes.STRING,
        street: DataTypes.STRING,
        city: DataTypes.STRING,
        image: DataTypes.STRING,
        latitude: DataTypes.DOUBLE,
        longitude: DataTypes.DOUBLE,
        contact: DataTypes.STRING,
        type: DataTypes.STRING,
        google_map_link: DataTypes.STRING,
    },
    {
        sequelize,
        tableName: 'places',
    },
);

module.exports = Place;
