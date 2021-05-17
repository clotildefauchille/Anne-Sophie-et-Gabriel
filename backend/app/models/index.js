const Answer = require("./answer");
const Permission = require("./permission");
const Events = require("./events");
const Place = require("./place");

Events.belongsTo(Place, {
    foreignKey: "places_id",
    as: "place",
})

Place.hasMany(Events, {
    foreignKey: "places_id",
    as: "events",
})
 
Answer.belongsTo(Permission, {
    foreignKey: "permission_id",
    as: "permission",
});

Permission.hasMany(Answer, {
    foreignKey: "permission_id",
    as: "answers",
});

module.exports = {
    Permission,
    Answer,
    Events,
    Place,
};