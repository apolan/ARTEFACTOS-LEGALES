var preguntas = [
    {id: 1, "titulo": "¿Eres abogado?", "descripcion": "",
        "opciones": [
            {label: "No", tipo: "texto", "function": "mngPregunta(1,2,'no')", style: "lst-option-small"},
            {label: "Si", tipo: "texto", "function": "mngPregunta(1,2,'si')", style: "lst-option-small"}
        ],
        styleA: "row section-menu-3 color-bkg-gray-1 color-txt-black", styleB: ""},
    {id: 2, "titulo": "¿Qué situación quieres explorar?", "descripcion": "",
        "opciones": [
            {label: "Información engañosa", tipo: "texto", "function": "mngPregunta(2,3,'info-enganosa')", style: "lst-option"},
            {label: "Cobro injustificado", tipo: "texto", "function": "mngPregunta(2,3,'info-cobro')", style: "lst-option"}
        ],
        styleA: "row section-menu-3 color-bkg-gray-1 color-txt-black", styleB: ""},
    {id: 3, "titulo": "¿Cuál es el tema relacionado?", "descripcion": "",
        "opciones": [
            {label: "Mi tarjeta de crédito", tipo: "texto", "function": "mngPregunta(3,4,'info-tc')", style: "lst-option"},
            {label: "Mi crédito libre inversión", tipo: "texto", "function": "mngPregunta(3,4,'info-li')", style: "lst-option"}
        ],
        styleA: "row section-menu-3 color-bkg-gray-1 color-txt-black", styleB: ""},
    {id: 4, "titulo": "¿Quieres poner una denuncia?", "descripcion": "",
        "opciones": [
            {label: "No, solo quiero conocer", tipo: "texto", "function": "mngPregunta(4,5,'no')", style: "lst-option"},
            {label: "Sí, pero no se cómo", tipo: "texto", "function": "mngPregunta(4,5,'si')", style: "lst-option"}
        ], styleA: "row section-menu-3 color-bkg-gray-1 color-txt-black", styleB: ""},
    {id: 5, "titulo": "¿Estas listo?", "descripcion": "",
        "opciones": [
            {label: "Explorar", tipo: "texto", "function": "mngPregunta(5,0,'explorar');activateGrap('cazador')", style: "lst-option"},
                    /* {label: "Organizador de Artefactos", tipo: "texto", "function": "activateGrap('cazador')", style: "lst-option"},*/
        ], styleA: "row section-menu-3 color-bkg-gray-1 color-txt-black", styleB: ""},
];
