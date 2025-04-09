const express = require('express');
const router = express.Router();
const controladorUsuaruios = require('../Controladores/usuarios.controller');

router.get('/', controladorUsuaruios.Inicio); // Define la ruta para el inicio
router.get('/listar', controladorUsuaruios.Get); // Define la ruta para listar

module.exports = router;