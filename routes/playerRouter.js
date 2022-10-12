const express = require("express");
const { getPlayerAll, getPlayer, addPlayer, updatePlayer, deletePlayer } = require("../controller/playerController");
const validation = require("../middleware/UserAuth")
const route = express.Router();

// route.get("/:id",getEmployees)
route.get("/", getPlayerAll)
route.get("/:id", getPlayer)
route.post("/", validation.validation('UserSchemaJoi'), addPlayer)
route.put("/:id", updatePlayer)
route.delete("/:id", deletePlayer)


module.exports = route