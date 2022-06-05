const { Router } = require('express');
const { ctr_send_my_task } = require('../controllers/ctr_sendMyTask');

const rtr_sendMyTask = Router();

rtr_sendMyTask.post('/:sub/:student/:status/:file', ctr_send_my_task);

module.exports = rtr_sendMyTask;