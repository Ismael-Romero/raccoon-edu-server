const {Router} = require('express');
const { ctr_get_task_teach } = require('../controllers/ctr_task_teach');

const rtr_getTaskTeach = Router();

rtr_getTaskTeach.get('/:teach', ctr_get_task_teach);

module.exports = rtr_getTaskTeach;