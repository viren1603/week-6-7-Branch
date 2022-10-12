const express=require("express");
const { getTeam, getTeamAll, addTeam, updateTeam, deleteTeam } = require("../controller/teamController");

const route=express.Router();


route.get("/",getTeamAll)
route.get("/:id",getTeam)
route.post("/",addTeam)
route.put("/:id",updateTeam)
route.delete("/:id",deleteTeam)


module.exports=route