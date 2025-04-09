--Agencias
    --  Request
    GET http://192.168.60.30:3000/agencias
    --Response
    [
        {
            "CodSuc": 1,
            "Nombre": "San Pedro Sula",
            "Direccion": "7 ave. 7 y 8 calles",
            "Telefono": "2553-0930/ 2552-6777",
            "Departamento": "CORTES",
            "Localidad": "SAN PEDRO SULA",
            "Latitud": "15.511870556",
            "Longitud": "-88.026979777"
        },
        {
            "CodSuc": 2,
            "Nombre": "Progreso",
            "Direccion": "Plaza El Obelisco local 8",
            "Telefono": "2647-4085/2647-9479",
            "Departamento": "YORO",
            "Localidad": "EL PROGRESO",
            "Latitud": "15.405471382",
            "Longitud": "-87.806707999"
        }
    ]

--Usuarios
    --  Request
    GET http://192.168.60.30:3000/usuarios
    --Response
    [
        {
            "UserID": "AJRIVERA",
            "Nombre": "Allan Joel Rivera Orellana",
            "Puesto": "ASESOR",
            "CodSuc": 21,
            "Sucursal": "Boulevard Los Próceres SPS"
        },
        {
            "UserID": "AREYES",
            "Nombre": "Anthony Joan Reyes Martinez",
            "Puesto": "ASESOR",
            "CodSuc": 8,
            "Sucursal": "Agencia 7 Calle"
        }
    ]