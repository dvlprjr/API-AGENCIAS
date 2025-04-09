const express = require('express');
const morgan = require('morgan');
const path = require('path');

require('dotenv').config();
const db = require('./Configuraciones/db.js');

const server = express();
server.set('port', 3000);
server.use(morgan('common'));


server.use(express.urlencoded({ extended: false }));
server.use(express.json());

server.use('/api/agencias', require('./Rutas/agencias.route.js'));
server.use('/api/usuarios', require('./Rutas/usuarios.route.js'));
server.use('/api/', require('./Rutas/index.route.js'));
server.use('/', require('./Rutas/index.route.js'));


// Iniciar servidor
server.listen(server.get('port'), () => {
    console.log('URL:' + 'http://localhost:' + server.get('port') + '/api');
    
    db.authenticate().then(() => { 
        console.log('Conexión a la base de datos establecida correctamente.');
    })
    .catch((err) => { 
        console.log('Error al conectar a la base de datos:', err);
    })

});