const team_table = require("../model/teamModel");



exports.getTeamAll = async (req, res) => {
    try {
        const alldata = await team_table.findAll()
        res.send(alldata)
    } catch (error) {
        console.log(error, "get all err");
    }

}
exports.getTeam = async (req, res) => {
    try {
        const data = await team_table.findAll({
            where: { id: req.params.id }
        })
        res.send(data)
    } catch (error) {
        console.log(error, "get one err");
    }
}


exports.addTeam = async (req, res) => {
    let id = req.body.id
    let name = req.body.name
    try {
        const teamTC = team_table.build({
            id, name
        })
        await teamTC.save();
        res.send("data is posted")

    } catch (error) {
        console.log(error, "add team err");
    }

}

exports.updateTeam = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        await team_table.update(data, {
            where: {
                id
            }
        })
        res.send('team name updated');
    } catch (error) {
        console.log(error, "update err");
    }
}




exports.deleteTeam = async (req, res) => {
    try {
        const data = await req.body.data
        let a = await team_table.destroy({
            where: { id: req.params.id }
        })
        res.send('data is successfuly delete')
    } catch (error) {
        console.log(error, "getall err");
    }
}