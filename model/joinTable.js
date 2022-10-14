// const player_table = require('../model/playerModel');
// const team_table = require('../model/teamModel')
const Sequelize = require("sequelize")
const sequelize = require("../db/db")



const team_table = sequelize.define("team", {

    id: { type: Sequelize.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: Sequelize.DataTypes.STRING,

}, {
    tableName: "team"
});
team_table.sync()
const player_table = sequelize.define("player", {

    id: {
        type: Sequelize.DataTypes.INTEGER, autoIncrement: true, primaryKey: true
    },
    name: Sequelize.DataTypes.STRING,
    age: Sequelize.DataTypes.INTEGER,
    captain: Sequelize.DataTypes.STRING,
    dob: Sequelize.DataTypes.DATE,
    team_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model: team_table,
            key: "id",
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT",
        allowNull: false,
    }
}, {
    tableName: "player"
});
player_table.sync()

player_table.belongsTo(team_table, { foreignKey: 'team_id' })
team_table.hasMany(player_table, { foreignKey: 'team_id' })

module.exports = { player_table, team_table }