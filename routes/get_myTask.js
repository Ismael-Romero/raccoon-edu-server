const { Router } = require('express');
const { ctr_get_my_task } = require('../controllers/ctr_getMyTask');

const rtr_getMyTask = Router();

rtr_getMyTask.get('/:student', ctr_get_my_task);

module.exports = rtr_getMyTask;