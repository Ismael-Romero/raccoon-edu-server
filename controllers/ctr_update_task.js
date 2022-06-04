const { request, response} = require('express');
const { updateTask } = require('./ctr_database-connection');

const ctr_update_task = (req = request, res = response) => {
    updateTask(req.params, (results) => {
        /*
            returns in json format { status: 0-1, rol: 0-3 }
        */
        res.json(results)
    })
};

module.exports = {ctr_update_task};