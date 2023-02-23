//Ruta del archivo de configuración
const Server = require('./models/server');

//Se realiza la instancia del objeto y se ejecuta el método listen
const server = new Server();
server.listen();