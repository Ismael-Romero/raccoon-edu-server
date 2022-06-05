const { request, response} = require('express');
const { getMyTasks } = require('./ctr_database-connection');


const ctr_get_my_task = (req = request, res = response) => {
    getMyTasks(req.params, (results) => {
        /* return in json format { status: 1 }*/
        res.json(results);
    });
}

module.exports = {ctr_get_my_task};