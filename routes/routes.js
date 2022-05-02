const { Router } = require('express');
const { loginGET } = require('../controllers/main_controller');


const router_login = Router();

router_login.get('/', loginGET)


module.exports = router_login;