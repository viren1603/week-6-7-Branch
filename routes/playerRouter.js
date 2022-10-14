const express = require("express");
const { checkfind, getPlayerAll, getPlayer, addPlayer, updatePlayer, deletePlayer } = require("../controller/playerController");
const validation = require("../middleware/UserAuth")
const route = express.Router();

// route.get("/:id",getEmployees)






route.get("/checkFind", checkfind)
route.get("/:id", getPlayer)

route.get("/", getPlayerAll)
// route.post("/", validation.validation('UserSchemaJoi'), addPlayer)
route.post("/", addPlayer)
route.put("/:id", updatePlayer)
route.delete("/:id", deletePlayer)




module.exports = route