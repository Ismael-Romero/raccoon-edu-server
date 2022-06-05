const { Router } = require('express');
const { ctr_get_my_task_end } = require('../controllers/ctr_getMyTaskEnd');

const rtr_getMyTaskEnd = Router();

rtr_getMyTaskEnd.get('/:student', ctr_get_my_task_end);

module.exports = rtr_getMyTaskEnd;