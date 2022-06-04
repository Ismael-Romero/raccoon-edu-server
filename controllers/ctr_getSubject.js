const { request, response} = require('express');
const { getSubject } = require('./ctr_database-connection');


const ctr_getSubject = (req = request, res = response) => {
    getSubject(req.params, (results) => {
        /* return in json format { status: 1 }*/
        res.json(results);
    });
}

module.exports = {ctr_getSubject};