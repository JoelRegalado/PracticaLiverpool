const express = require('express');

class Server {

    constructor() {
        this.app = express();
        this.port = 8080;
        this.liverpoolPath = '/';

        //Middlewares
        this.middlewares();

        //Ruta de mi aplicacion
        this.routes();
    }

    middlewares() {
        //Lectura y parceo del Body
        this.app.use(express.json());

    }

    routes() {
        this.app.use(this.liverpoolPath, require('../routes/liverpool.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`El puerto escucha en: ${this.port}`)
        });
    }
}

module.exports = Server;