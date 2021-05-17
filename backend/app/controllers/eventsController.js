
const Sequelize = require('sequelize')
const sequelize = require('../database.js');

const { Events } = require('../models');
//const Place = require('../models/place.js');

const eventsController = {
    getEventsInfos: async (req, res) => {
        const responseEventsInfos = await Events.findAll({
            include: ['place']
        })
        // const info = eventsInfos[0].dataValues;
        const eventsInfos = responseEventsInfos.map(event => { return event.dataValues })
        res.send(eventsInfos);
    },
};


module.exports = eventsController;
