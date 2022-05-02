const { response } = require('express');

const loginGET = (req, response) => {
    response.send('login');
}

module.exports = {
    loginGET
}