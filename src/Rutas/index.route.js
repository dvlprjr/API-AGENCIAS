const express = require('express');
const router = express.Router();
const constroladorAgencia = require('../Controladores/agencia.controller.js');
const controladorUsuaruios = require('../Controladores/usuarios.controller.js');
const controladorInicio = require('../Controladores/inicio.controller.js');


router.get('/', controladorInicio.Inicio); 
router.get('/agencias', constroladorAgencia.Get);
router.get('/usuarios', controladorUsuaruios.Get);

module.exports = router;