const Joi = require('joi')

const createSchema = Joi.object({
    aplication_id: Joi.string().required(),
    token: Joi.string().required()
})

const updateSchema = Joi.object({
    aplication_id: Joi.string(),
    token: Joi.string()
})

module.exports = { createSchema, updateSchema }