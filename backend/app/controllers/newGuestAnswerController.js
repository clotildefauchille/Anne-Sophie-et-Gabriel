// const dataMapper= require('../dataMapper.js')
const sequelize = require('../database.js');

const Answer = require('../models/answer.js');

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
    console.log('------->userId', userId);

    // const answer = await Answer.findOne({
    //   where: {
    //     sub: userId,
    //   },
    // });
    console.log('------->userId', userId);

    // console.log('----------->', userId)
    // if (!answer) {
    //   console.log('existe pas');
    //   const newGuestResponse = await Answer.create({
    //     sub: userId,
    //     firstname: firstname,
    //     lastname: lastname,
    //     present: presence,
    //     accompanied: accompanied,
    //     firstname_partner: firstnamePartner,
    //     children_number: childrenNumber,
    //     allergy: allergy,
    //     email: email,
    //   });
    //   console.log('newGuestResponse', newGuestResponse);
    // } else {
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


