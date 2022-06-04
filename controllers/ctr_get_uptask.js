const {request, response} = require('express');
const {getTaskUpdate} = require('./ctr_database-connection');


const ctr_get_uptask = (req = request, res = response) => {
    getTaskUpdate(req.params, (results) => {
        res.json(results);
    });
}

module.exports = {ctr_get_uptask};