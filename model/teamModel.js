const Sequelize = require("sequelize")
const sequelize = require("../db/db")

const team_table = sequelize.define("team", {

    id: { type: Sequelize.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: Sequelize.DataTypes.STRING,

}, {
    tableName: "team"
});
team_table.sync()

module.exports = team_table;