const Sequelize = require("sequelize");
const sequelize = require('../database');

class Range extends Sequelize.Model { }

Range.init(
    {
        google_sheet_range: Sequelize.STRING,
        email: Sequelize.STRING,
    },
    {
        sequelize,
        tableName: 'range',
    },
);

module.exports = Range;
