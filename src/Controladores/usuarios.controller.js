const express = require('express');
const db = require('../Configuraciones/db.js');
const { QueryTypes } = require('sequelize');
const MSJ = require('../Componentes/MSJ.js');


exports.Inicio = (req, res)=>{
    const moduloUsuarios={
        modulo: 'Agencias',
        descripcion: 'Contiene la informacion de los usuarios',
        rutas:[
            {
                ruta: '/api/usuarios/listar',
                descripcion: 'Lista las usuarios',
                metodo: 'GET',
                parametros: 'ninguno'
            },
        ]
    } 
    MSJ('Peticion usuarios ejecutada correctamente',  200, moduloUsuarios, [], res);
}

exports.Get = async (req, res) => {
    try {
        const result = await db.query(`
            SELECT  
                RTRIM(FST746.Ubuser) AS UserID,
                RTRIM(FST746.Ubnom) AS Nombre,
                CASE 
                    WHEN PRFU00.PrfGCod IN ('ASESPYME', 'OFIPYME') THEN 'ASESOR' 
                    WHEN PRFU00.PrfGCod IN ('GRTPYME', 'SUBGPYME', 'GERENTE') THEN 'GERENTE'
                    ELSE '-'
                END AS Puesto,
                FST001.Sucurs AS CodSuc,
                RTRIM(FST001.Scnom) AS Sucursal
            FROM PRFU00  
            LEFT JOIN FST746 ON FST746.Ubuser = PRFU00.Ubuser
            LEFT JOIN FST046 ON FST046.Pgcod = PRFU00.Pgcod AND FST046.Ubuser = PRFU00.Ubuser
            LEFT JOIN FST001 ON FST001.Pgcod = 1 AND FST001.Sucurs = FST046.Ubsuc
            WHERE PRFU00.PrfGCod IN ('ASESPYME', 'OFIPYME', 'GRTPYME', 'SUBGPYME', 'GERENTE')
            AND PRFU00.PrfUFecVto > GETDATE()
        `, { type: QueryTypes.SELECT });
        MSJ('Peticion usuarios ejecutada correctamente',  200, result, [], res);
        res.json(result);
    } catch (err) {
        console.error('Error en la consulta SQL:', err);
        res.status(500).send('Error al obtener datos: ' + err.message);
    }
}