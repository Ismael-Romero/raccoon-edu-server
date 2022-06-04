const { request, response} = require('express');
const { newTask } = require('./ctr_database-connection');


const ctr_createTask = (req = request, res = response) => {
    newTask(req.params, (results) => {
        /* return in json format { status: 1 }*/
        res.json(results);
    });
}

module.exports = {ctr_createTask};