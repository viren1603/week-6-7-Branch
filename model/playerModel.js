const Sequelize = require("sequelize")
const sequelize = require("../db/db")

const player_table = sequelize.define("player", {

    id: { type: Sequelize.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: Sequelize.DataTypes.STRING,
    age: Sequelize.DataTypes.INTEGER,
    captain: Sequelize.DataTypes.STRING,
    dob: Sequelize.DataTypes.DATE,

}, {
    tableName: "player"
});
player_table.sync()

module.exports = player_table;