const express = require('express');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.SERVER_PORT;
        
        this.middlewares();
        this.routes();
    }

    middlewares(){ 
        //Displays the requests to the server via console
        this.app.use((req, res, next) => {
            console.log(`Request -> ${req.url}, | Method -> ${req.method}`);
            next();
        });
    }

    routes(){
        this.app.use('/login', require('../routes/login'));
        this.app.use('/newtask/', require('../routes/new_task'));
        this.app.use('/getsubject/', require('../routes/get_subject'));
        this.app.use('/gettaskteach/', require('../routes/get_task_teach'));
        this.app.use('/deletetask/', require('../routes/delete_task'));
        this.app.use('/editTask/', require('../routes/get_uptask'));
        this.app.use('/updatetask/',require('../routes/update_task'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server Running on http://127.0.0.1:${this.port}/`);
        });
    }
}

module.exports = Server;