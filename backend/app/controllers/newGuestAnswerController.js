// const dataMapper= require('../dataMapper.js')
const sequelize = require('../database.js');

const Guest = require('../models/guest.js');

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
    } = req.body;
    console.log('------->userId', userId);

    const guest = await Guest.findOne({
      where: {
        sub: userId,
      },
    });
    console.log('------->userId', userId);
    
    // console.log('----------->', userId)
    if (!guest) {
      console.log('existe pas');
      const newGuestResponse = await Guest.create({
        sub: userId,
        firstname: firstname,
        lastname: lastname,
        present: presence,
        accompanied: accompanied,
        firstname_partner: firstnamePartner,
        children_number: childrenNumber,
      });
      console.log('newGuestResponse', newGuestResponse);
    } else {
      console.log('existe deja');
      const updateGuestResponse = await Guest.update(
        {
          sub: userId,
          firstname: firstname,
          lastname: lastname,
          present: presence,
          accompanied: accompanied,
          firstname_partner: firstnamePartner,
          children_number: childrenNumber,
        }, {
        where: {
          sub: userId
        }}
      );
      console.log('response already gave');
      console.log('updateGuestResponse', updateGuestResponse);
    }

    res.send('hello');
  },
  getGuestAnswer: async (req, res) => {
    let userId = req.params.id;
    // console.log('-------->userId', userId);
    const guestAnswer = await Guest.findOne({
      where: {
        sub: userId,
      },
    });
    // console.log('-------->guestAnswer', guestAnswer.dataValues)
    // res.send('hello getanswer')
    res.json(guestAnswer.dataValues);
},

};

module.exports = newGuestAnswerController;
