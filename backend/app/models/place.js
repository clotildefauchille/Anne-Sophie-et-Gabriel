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
        room_number: DataTypes.STRING,
        price: DataTypes.INTEGER,
        comment: DataTypes.STRING,
        is_in_pont_a_mousson: DataTypes.BOOLEAN,
        is_an_hostel: DataTypes.BOOLEAN,
        is_in_nancy: DataTypes.BOOLEAN,
        place_brunch: DataTypes.BOOLEAN,
    },
    {
        sequelize,
        tableName: 'places',
    },
);

module.exports = Place;
