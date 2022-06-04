const {Router} = require('express');
const {ctr_delete_task} = require('../controllers/ctr_delete_task')

const rtr_delete_task = Router();

rtr_delete_task.delete('/:id',ctr_delete_task);

module.exports = rtr_delete_task;