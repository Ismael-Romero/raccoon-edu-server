const express = require('express');

class Server {

    constructor(){
        this.app = express()
        this.port = process.env.PORT;

        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use('/login', require('../routes/routes'));
    }

    listen(){
        this.app.listen(this.port, () => {console.log('Ok')});
    }
}

module.exports = Server;