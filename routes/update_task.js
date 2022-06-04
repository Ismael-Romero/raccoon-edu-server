const {Router} = require('express');
const {ctr_update_task} = require('../controllers/ctr_update_task')

const rtr_update_task = Router();

rtr_update_task.post('/:id/:title/:desc/:date/:sub',ctr_update_task);

module.exports = rtr_update_task;