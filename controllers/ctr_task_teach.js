const {request, response} = require('express');
const {getTaskTeach} = require('./ctr_database-connection');

const ctr_get_task_teach = (req = request, res = response) => {
    getTaskTeach(req.params, (results) => {
        //return data
        res.json(results);
    });
}

module.exports = {ctr_get_task_teach};