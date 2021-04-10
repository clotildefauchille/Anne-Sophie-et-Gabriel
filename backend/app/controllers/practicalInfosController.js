const sequelize = require('../database.js');

const Place = require('../models/place.js');

const practicalInfosController = {
  getPracticalInfos: async (req, res) => {
    try {
      const infos = await Place.findAll();
      res.json(infos);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    } 
  },
};

module.exports = practicalInfosController;
