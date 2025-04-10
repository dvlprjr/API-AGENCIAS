const express = require('express');
const db = require('../Configuraciones/db.js');
const { QueryTypes } = require('sequelize');
const MSJ = require('../Componentes/MSJ.js');

exports.Inicio = (req, res)=>{
    const moduloAgencias={
        modulo: 'Agencias',
        descripcion: 'Contiene la informacion de las agencias',
        rutas:[
            {
                ruta: '/api/agencias/listar',
                descripcion: 'Lista las agencias',
                metodo: 'GET',
                parametros: 'ninguno'
            },
            {
                ruta: '/api/agencias/listar/:localidad',
                descripcion: 'Lista las agencias por localidad',
                metodo: 'GET',
                parametros: 'localidad'
            },
        ]
    } 
    MSJ('Peticion Agencias ejecutada correctamente',  200, moduloAgencias, [], res);
}

exports.Get = async (req, res) => {
    try {
        const result = await db.query(`
            SELECT  
                FST001.Sucurs AS CodSuc,
                RTRIM(FST001.Scnom) AS Nombre,
                RTRIM(FST001.Sccall) AS Direccion,
                RTRIM(FST001.Sctelf) AS Telefono,
                RTRIM(FST068.DepNom) AS Departamento,
                RTRIM(FST070.LocNom) AS Localidad,
                RTRIM(FST001.ScLat) AS Latitud,
                RTRIM(FST001.ScLng) AS Longitud
            FROM FST001
            LEFT JOIN FST068 ON FST068.Pais = 345 AND FST068.DepCod = FST001.Scdept
            LEFT JOIN FST070 ON FST070.Pais = 345 AND FST070.DepCod = FST001.Scdept AND FST070.LocCod = FST001.Scciud
        `, { type: QueryTypes.SELECT });
        MSJ('Peticion Agencias ejecutada correctamente',  200, result, [], res);
        res.json(result);
    } catch (err) {
        console.error('Error en la consulta SQL:', err);
        res.status(500).send('Error al obtener datos: ' + err.message);
    }

};

exports.GetByLocalidad = async (req, res) => {
    const { localidad } = req.params;
    try {
        const result = await db.query(`
            SELECT  
                FST001.Sucurs AS CodSuc,
                RTRIM(FST001.Scnom) AS Nombre,
                RTRIM(FST001.Sccall) AS Direccion,
                RTRIM(FST001.Sctelf) AS Telefono,
                RTRIM(FST068.DepNom) AS Departamento,
                RTRIM(FST070.LocNom) AS Localidad,
                RTRIM(FST001.ScLat) AS Latitud,
                RTRIM(FST001.ScLng) AS Longitud
            FROM FST001
            LEFT JOIN FST068 ON FST068.Pais = 345 AND FST068.DepCod = FST001.Scdept
            LEFT JOIN FST070 ON FST070.Pais = 345 AND FST070.DepCod = FST001.Scdept AND FST070.LocCod = FST001.Scciud
            WHERE RTRIM(FST070.LocNom) LIKE :localidad
        `, { 
            type: QueryTypes.SELECT,
            replacements: { localidad: `%${localidad}%` }
        });
        MSJ('Peticion Agencias por Localidad ejecutada correctamente', 200, result, [], res, true);
        res.json(result);
    } catch (err) {
        console.error('Error en la consulta SQL:', err);
        res.status(500).send('Error al obtener datos: ' + err.message);
    }
};