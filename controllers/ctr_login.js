const { request, response } = require('express');
const {matchLogin} = require('./ctr_database-connection');

const ctr_login = (req = request, res = response) => {
    matchLogin(req.params, (results) => {
        /*
            returns in json format { status: 0-1, rol: 0-3 }
        */
        res.json(results)
    })
};

module.exports = {
    ctr_login
};