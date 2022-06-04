const {Router} = require('express');
const { ctr_get_uptask } = require('../controllers/ctr_get_uptask');

const rtr_get_uptask = Router();

rtr_get_uptask.get('/:id', ctr_get_uptask);

module.exports = rtr_get_uptask;