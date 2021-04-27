const Sequelize = require("sequelize");
const sequelize = require('../database');

class Guest extends Sequelize.Model {}

Guest.init(
  {
    sub: Sequelize.STRING,
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    present: Sequelize.BOOLEAN,
    accompanied: Sequelize.BOOLEAN,
    firstname_partner: Sequelize.STRING,
    children_number: Sequelize.INTEGER,
    allergy: Sequelize.STRING,
  },
  {
    sequelize,
    tableName: 'guest',
  },
);

module.exports = Guest;
