const Sequelize = require("sequelize");
const sequelize = require('../database');

class Answer extends Sequelize.Model {}

Answer.init(
  {
    sub: Sequelize.STRING,
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    google_sheet_range: Sequelize.STRING,
    email: Sequelize.STRING,
    present: Sequelize.BOOLEAN,
    accompanied: Sequelize.BOOLEAN,
    firstname_partner: Sequelize.STRING,
    children_number: Sequelize.INTEGER,
    allergy: Sequelize.STRING,
    permission_id: Sequelize.INTEGER,
  },
  {
    sequelize,
    modelName: 'answer',
  },
);

module.exports = Answer;
