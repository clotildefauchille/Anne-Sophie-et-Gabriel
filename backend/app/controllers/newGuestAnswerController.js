// const dataMapper= require('../dataMapper.js')
const sequelize = require('../database.js');

const Answer = require('../models/answer.js');
const Permission = require('../models/permission.js');

const newGuestAnswerController = {
  newGuestAnswer: async (req, res) => {
    const childrenNumber = parseInt(req.body.childrenNumber);
    const {
      userId,
      presence,
      accompanied,
      firstname,
      lastname,
      firstnamePartner,
      allergy,
      email,
    } = req.body;
   
    // console.log('------->userId', userId);

    console.log('existe deja');
   
      const updateGuestResponse = await Answer.update(
        {
          sub: userId,
          firstname: firstname,
          lastname: lastname,
          present: presence,
          accompanied: accompanied,
          firstname_partner: firstnamePartner,
          children_number: childrenNumber,
          allergy: allergy,
          email: email,
        },
        {
          where: {
            email: email,
          },
        },
      );
      // console.log('response already gave');
      console.log('updateGuestResponse', updateGuestResponse);
      // }

      res.send('hello');
    
  },
  getGuestAnswer: async (req, res) => {
    const userId = req.params.id;

    const guestAnswer = await Answer.findOne({
      where: {
        sub: userId,
      },
    });
    res.json(guestAnswer ? guestAnswer : {});

    // console.log('-------->guestAnswer', guestAnswer.dataValues)
    // res.send('hello getanswer')

    // res.json (guestAnswer || {});
  },
  getGuestPermissionByEmail: async (req, res) => {
const {email} = req.params;
console.log('email', email);
    const responsePermissionId = await Answer.findOne({
      where: {
        email: email,
      }
    });
    console.log('permission', responsePermissionId.dataValues.permission_id);
    const permissionId = responsePermissionId.dataValues.permission_id;
    const responsePermission = await Permission.findByPk(permissionId);
    res.send (responsePermission.dataValues.type);
  },
  getAllGuestAnswer: async (req, res) => {
    try {
      const allAnswers = await Answer.findAll();
      const allAnswerUsefull = allAnswers.map((allAnswer) => {
        return {
          present: allAnswer.dataValues.present,
          accompanied: allAnswer.dataValues.accompanied,
          firstname_partner: allAnswer.dataValues.firstname_partner,
          children_number: allAnswer.dataValues.children_number,
          allergy: allAnswer.dataValues.allergy,
          google_sheet_range: allAnswer.dataValues.google_sheet_range,
        };
      });
      console.log('allAnswerUsefull', allAnswerUsefull);
      // console.log('allAnswers', allAnswers);
      res.json(allAnswerUsefull);
    } catch (err) {
      console.log('err');
    }
  },
};

module.exports = newGuestAnswerController;


