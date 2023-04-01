'use strict';

const router = require('express').Router();
const prefix = '/auth';

const controller = require('../controllers/authorization.controller');
const validate = require('../handler/validations/validateSchema');
const { createSchema, updateSchema } = require('../handler/validations/schemas/authorization.schema');

router.get(`${prefix}/`, controller.all);
router.post(`${prefix}/`, validate(createSchema), controller.create);
router.get(`${prefix}/:id`, controller.info);
router.put(`${prefix}/:id`, validate(updateSchema), controller.update);
router.delete(`${prefix}/:id`, controller.delete);

module.exports = router;