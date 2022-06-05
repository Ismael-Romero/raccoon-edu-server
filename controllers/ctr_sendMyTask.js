const { request, response} = require('express');
const { sendMyTask } = require('./ctr_database-connection');


const ctr_send_my_task = (req = request, res = response) => {
    sendMyTask(req.params, (results) => {
        /* return in json format { status: 1 }*/
        res.json(results);
    });
}

module.exports = {ctr_send_my_task};