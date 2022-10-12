const player_table = require("../model/playerModel");



exports.getPlayerAll = async (req, res) => {
    try {
        const alldata = await player_table.findAll()
        res.send(alldata)
    } catch (error) {
        console.log(error, "get all err");
    }

}
exports.getPlayer = async (req, res) => {
    try {
        const data = await player_table.findAll({
            where: { id: req.params.id }
        })
        res.send(data)
    } catch (error) {
        console.log(error, "get one err");
    }
}


exports.addPlayer = async (req, res) => {
    let id = req.body.id
    let name = req.body.name
    let age = req.body.age
    let captain = req.body.captain
    let dob = req.body.dob
    try {
        const playerTC = player_table.build({
            id, name, age, captain, dob
        })
        await playerTC.save();
        res.send(`data is add `)

    } catch (error) {
        console.log(error, "add PLAYER err");
    }

}

exports.updatePlayer = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        await player_table.update(data, {
            where: {
                id
            }
        })
        res.send('player updated');
    } catch (error) {
        console.log(error, "update err");
    }
}




exports.deletePlayer= async (req, res) => {

    try {
        const data = await req.body.data
        let a = await player_table.destroy({
            where: { id: req.params.id }
        })
        res.send('data is successfuly delete')
    } catch (error) {
        console.log(error, "getall err");
    }
}