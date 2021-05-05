const Answer = require("./answer");
const Range = require("./range");

// Range.belongsTo(Answer, {
//     foreignKey: "range_id",
//     as: "range_id",
// })

// Answer.belongsTo(Range, {
//     foreignKey: "range_id",
//     as: "range_id",
// })

module.exports = {
    Range,
    Answer,
};