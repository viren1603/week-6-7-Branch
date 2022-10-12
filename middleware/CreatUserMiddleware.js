const joi = require("joi");

const UserSchemaJoi = joi.object().keys({
    name: joi.string().required(),
    age: joi.number().required(),
    captain: joi.string().required(),
    dob: joi.date().required(),

})

module.exports = { UserSchemaJoi };


