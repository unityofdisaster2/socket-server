import Server from './classes/server';
import router from './routes/router';

import bodyparser from 'body-parser';
import cors from 'cors';




const server = Server.instance;

// configuracion para manejar el body recibido en la peticion rest
server.app.use( bodyparser.urlencoded( {extended: true} ) );
server.app.use( bodyparser.json() );

// CORS
// permitir que cualquier persona pueda llamar los servicios
server.app.use(cors( { origin: true, credentials: true} ));





// Rutas de servicios
server.app.use('/', router);

console.log("hola");

server.start( () => {
    console.log(`Servidor corriendo en el puerto ${ server.port }`);
})