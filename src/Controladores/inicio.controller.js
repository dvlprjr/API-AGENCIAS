exports.Inicio = (req, res) => {
    const Agencia={
        api: 'API AGENCIAS',
        desarrollador: 'Cesar Herrera',
        modulos:[
            {nombre: 'agencias', ruta: '/api/agencias'},
            {nombre: 'usuarios', ruta: '/api/usuarios'},
        ]
    }
    res.json(Agencia);
};