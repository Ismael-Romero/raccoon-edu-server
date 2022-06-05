const { request, response} = require('express');
const { getMyTaskEnd } = require('./ctr_database-connection');


const ctr_get_my_task_end = (req = request, res = response) => {
    getMyTaskEnd(req.params, (results) => {
        /* return in json format { status: 1 }*/
        res.json(results);
    });
}

module.exports = {ctr_get_my_task_end};