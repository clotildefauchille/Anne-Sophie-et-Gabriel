const Sequelize = require("sequelize");
const sequelize = require('../database');

class Place extends Sequelize.Model { }

Place.init(
    {
        name: Sequelize.STRING,
        street: Sequelize.STRING,
        city: Sequelize.STRING,
        image: Sequelize.STRING,
        latitude: Sequelize.DOUBLE,
        longitude: Sequelize.DOUBLE,
        contact: Sequelize.STRING,
        type: Sequelize.STRING,
        google_map_link: Sequelize.STRING,
    },
    {
        sequelize,
        tableName: 'place',
    },
);

module.exports = Place;
