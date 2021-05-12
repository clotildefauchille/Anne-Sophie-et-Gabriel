const Answer = require("./answer");
const Permission = require("./permission");

// Permission.belongsTo(Answer, {
//     foreignKey: "permission_id",
//     as: "permission",
// });

// Answer.hasMany(Permission, {
//     foreignKey: "permission_id",
//     as: "permissions",
// });

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
};