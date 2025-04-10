const mensaje = (msj, estado, data, errores, res, incluirCantidad = false) => {
    let mensajes = {
        msj: msj,
        errores: errores
    };

    if (incluirCantidad && Array.isArray(data)) {
        mensajes.cantidad = data.length;
    }

    mensajes.data = data;

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = estado;
    res.json(mensajes);
};

module.exports = mensaje;