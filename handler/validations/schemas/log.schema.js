const Joi = require('joi')

const createSchema = Joi.object({
    aplication_id: Joi.string().required(),
    type: Joi.string().valid('error', 'info', 'warning').required(),
    priority: Joi.string().valid('lowest', 'low', 'medium', 'high', 'highest').required(),
    path: Joi.string().required(),
    message: Joi.string().required(),
    request: Joi.object({
        data: Joi.any().required()
    }).required(),
    response: Joi.object({
        data: Joi.any().required()
    }).required(),
})

const updateSchema = Joi.object({
    aplication_id: Joi.string(),
    type: Joi.string().valid('error', 'info', 'warning'),
    priority: Joi.string().valid('lowest', 'low', 'medium', 'high', 'highest'),
    path: Joi.string(),
    message: Joi.string(),
    request: Joi.object({
        data: Joi.any()
    }),
    response: Joi.object({
        data: Joi.any()
    }),
})

module.exports = { createSchema, updateSchema }