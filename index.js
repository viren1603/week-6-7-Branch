require("dotenv").config();
require("./db/db")

const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const playerRouters = require("./routes/playerRouter")
const teamRouters = require("./routes/teamRouter")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())
// app.use(express.urlencoded())

app.use("/player", playerRouters)
app.use("/team", teamRouters)

const port = process.env.PORT

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})