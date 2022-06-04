const { Router } = require('express');
const { ctr_getSubject } = require('../controllers/ctr_getSubject');

const rtr_getSubject = Router();

rtr_getSubject.get('/:teach', ctr_getSubject);

module.exports = rtr_getSubject;;