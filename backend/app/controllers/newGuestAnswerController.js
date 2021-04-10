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
    // console.log('----------->', userId)
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
    res.send('hello');
  },
};

module.exports = newGuestAnswerController;
