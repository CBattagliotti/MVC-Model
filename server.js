//Utilizando el módulo nativo "NET" se encarga de crear un servidor TCP.
//Éste deberá atender las peticiones de los clientes.

const net = require('net');
const views = require('./views/index.js')

const port = 3000;
const server = net.createServer();


server.on('connection', (socket) => {
    console.log('Cliente conectado');

    socket.on('data', (clientMessage) => {
        const mensajeJs = views.processArguments(clientMessage);

        socket.write(JSON.stringify(mensajeJs));
    })
});



server.listen(port, () => {
    console.log('SERVIDOR ESCUCHANDO EN EL PUERTO: ' + port);
});