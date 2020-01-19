import Server from './classes/server';
import router from './routes/router';

import bodyparser from 'body-parser';
import cors from 'cors';




const server = new Server();

// configuracion para manejar el body recibido en la peticion rest
server.app.use( bodyparser.urlencoded( {extended: true} ) );
server.app.use( bodyparser.json() );

// CORS
// permitir que cualquier persona pueda llamar los servicios
server.app.use(cors( { origin: true, credentials: true} ));



server.app.use( cors );



// Rutas de servicios
server.app.use('/', router);


server.start( () => {
    console.log(`Servidor corriendo en el puerto ${ server.port }`);
})