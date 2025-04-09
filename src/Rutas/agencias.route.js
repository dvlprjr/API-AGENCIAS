const express = require('express');
const router = express.Router();
const constroladorAgencia = require('../Controladores/agencia.controller.js');

router.get('/', constroladorAgencia.Inicio); // Define la ruta para el inicio
router.get('/listar', constroladorAgencia.Get); // Define la ruta para listar

module.exports = router;