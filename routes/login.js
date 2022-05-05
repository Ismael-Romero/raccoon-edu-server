const { Router } = require('express');
const { ctr_login } = require('../controllers/ctr_login');

const rtr_login = Router();

rtr_login.post('/:user/:pass', ctr_login);

module.exports = rtr_login;