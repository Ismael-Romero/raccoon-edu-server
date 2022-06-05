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
        this.app.use('/login', require('../routes/login'));                     // Access login
        this.app.use('/newtask/', require('../routes/new_task'));               // Create a new task
        this.app.use('/getsubject/', require('../routes/get_subject'));         // Get all subjects
        this.app.use('/gettaskteach/', require('../routes/get_task_teach'));    // Get all task by teach
        this.app.use('/deletetask/', require('../routes/delete_task'));         // Delete task (only teach)
        this.app.use('/editTask/', require('../routes/get_uptask'));            // Get task for update(only teach)
        this.app.use('/updatetask/',require('../routes/update_task'))           // Update task (only teach)
        this.app.use('/getmytask/',require('../routes/get_myTask'));            
        this.app.use('/sendmytask/',require('../routes/sendMyTask'));            
        this.app.use('/getmytaskend/',require('../routes/get_myTaskEnd'));            


    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server Running on http://127.0.0.1:${this.port}/`);
        });
    }
}

module.exports = Server;