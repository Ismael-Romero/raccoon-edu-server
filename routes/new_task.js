const { Router } = require('express');
const { ctr_createTask } = require('../controllers/ctr_new_tasks');

const rtr_new_task = Router();

rtr_new_task.post('/:title/:description/:date/:subject', ctr_createTask);

module.exports = rtr_new_task;