const { request, response} = require('express');
const { deteleTask } = require('./ctr_database-connection');

const ctr_delete_task = (req = request, res = response) => {
    deteleTask(req.params, (results) => {
        /*
            returns in json format { status: 0-1, rol: 0-3 }
        */
        res.json(results)
    })
};

module.exports = {ctr_delete_task};