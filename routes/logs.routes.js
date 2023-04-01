'use strict';
'use strict';

const router = require('express').Router();
const prefix = '/logs';

const controller = require('../controllers/logs.controller');
const validate = require('../handler/validations/validateSchema');
const { createSchema, updateSchema } = require('../handler/validations/schemas/log.schema');

router.get(`${prefix}/`, controller.all);
router.post(`${prefix}/`, validate(createSchema), controller.create);
router.get(`${prefix}/:id`, controller.info);
router.put(`${prefix}/:id`, validate(updateSchema), controller.update);
router.delete(`${prefix}/:id`, controller.delete);

module.exports = router;