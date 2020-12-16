var menuSettings = [
    {'TYPE': "ACCIÓN", 'DESCRIPCION': '', COLOR: '#A7F205', FONT: ''},
    {'TYPE': "PERSONAJE", 'DESCRIPCION': '', COLOR: '#FFD700', FONT: ''},
    //   {'TYPE': "LUGAR", 'DESCRIPCION': '', COLOR: '#F5907D', FONT: ''},
    {'TYPE': "SENTIMIENTO", 'DESCRIPCION': '', COLOR: '#098D37', FONT: ''},
];
var legalObjects = [
    {
        'CATEGORIA': 'ACCIÓN',
        'VALOR': 'Denuncia',
        'ALIAS': 'afecten la convivencia del vecindario;producción de sonidos;ruidos;maquinaria;exhibicionismo;molestia por su impacto auditivo;multa;Perturbar;actos sexuales;No se consideran lugares privados;No constituyen actos sexuales o de exhibicionismo los besos o caricias',
        'DESCRIPCION': '',
        'COLOR': '#E25A42'
    },
    {
        'CATEGORIA': 'PERSONAJE',
        'VALOR': 'Policía',
        'ALIAS': 'Policía Nacional;uniformados;autoridad;utilización de la fuerza legítima;concretar y hacer cumplir las decisiones dictadas;es una labor estrictamente material y no jurídica;adelantar las acciones que en derecho correspondan respetando las garantías constitucionales',
        'DESCRIPCION': '',
        'COLOR': '#7eebff'
    },
    {
        'CATEGORIA': 'PERSONAJE',
        'VALOR': 'Vecino',
        'ALIAS': 'comportarse de manera favorable a la convivencia;derecho a la tranquilidad y a unas relaciones respetuosas es de la esencia de la convivencia',
        'DESCRIPCION': '',
        'COLOR': '#d5a1cf'
    },
    {
        'CATEGORIA': 'PERSONAJE',
        'VALOR': 'Infractor',
        'ALIAS': 'incurran en comportamientos;comportamientos afectan la tranquilidad y relaciones respetuosas',
        'DESCRIPCION': '',
        'COLOR': '#06a0bc'
    },

    {
        'CATEGORIA': 'SENTIMIENTO',
        'VALOR': 'Tranquilidad',
        'ALIAS': 'privacidad,tranquilidad',
        'DESCRIPCION': '',
        COLOR: '#E3BA22'
    },
    {
        'CATEGORIA': 'SENTIMIENTO',
        'VALOR': 'Respeto',
        'ALIAS': 'respetuosas;',
        'DESCRIPCION': '',
        'COLOR': '#18c7ac'
    },
];
var legalContent = {
    LIBROS: [
        {
            PARENT: 'NONE',
            NOMBRE: 'LIBRO PRIMERO. DISPOSICIONES GENERALES',
            STYLE: '',
            ORDEN: '',
            ID: 'L1',
        }, {
            PARENT: 'NONE',
            NOMBRE: 'LIBRO SEGUNDO. DE LA LIBERTAD, LOS DERECHOS Y DEBERES DE LAS PERSONAS EN MATERIA DE CONVIVENCIA.',
            STYLE: '',
            ORDEN: '',
            ID: 'L2',
        }
    ],
    TITULOS: [
        {
            PARENT: 'L1',
            NOMBRE: 'TÍTULO I. OBJETO DEL CÓDIGO, ÁMBITO DE APLICACIÓN Y AUTONOMÍA. BASES DE LA CONVIVENCIA.',
            STYLE: '',
            ORDEN: '',
            ID: 'T1',
        },
        {
            PARENT: 'L1',
            NOMBRE: 'TÍTULO II. PODER, FUNCIÓN Y ACTIVIDAD DE POLICÍA.',
            STYLE: '',
            ORDEN: '',
            ID: 'T2',
        },
        {
            PARENT: 'L2',
            NOMBRE: 'TÍTULO I. DEL CONTENIDO DEL LIBRO.',
            STYLE: '',
            ORDEN: '',
            ID: 'T1',
        },
        {
            PARENT: 'L2',
            NOMBRE: 'TÍTULO II. DE LOS COMPORTAMIENTOS CONTRARIOS A LA CONVIVENCIA.',
            STYLE: '',
            ORDEN: '',
            ID: 'T2',
        }, {
            PARENT: 'L2',
            NOMBRE: 'TÍTULO IV. DE LA TRANQUILIDAD Y LAS RELACIONES RESPETUOSAS.',
            STYLE: '',
            ORDEN: '',
            ID: 'T3',
        }, {
            PARENT: 'L2',
            NOMBRE: 'TÍTULO III. DEL DERECHO DE LAS PERSONAS A LA SEGURIDAD Y A LA DE SUS BIENES.',
            STYLE: '',
            ORDEN: '',
            ID: 'T4',
        }, {
            PARENT: 'L2',
            NOMBRE: 'TÍTULO V. DE LAS RELACIONES RESPETUOSAS CON GRUPOS ESPECÍFICOS DE LA SOCIEDAD.',
            STYLE: '',
            ORDEN: '',
            ID: 'T5',
        },
    ],
    CAPITULOS: [
        {
            PARENT: 'L1T1',
            NOMBRE: 'CAPÍTULO I. OBJETO DEL CÓDIGO, ÁMBITO DE APLICACIÓN Y AUTONOMÍA.',
            STYLE: '',
            ORDEN: '',
            ID: 'C1',
        },
        {
            PARENT: 'L1T1',
            NOMBRE: 'CAPÍTULO II. BASES DE LA CONVIVENCIA Y SEGURIDAD CIUDADANA.',
            STYLE: '',
            ORDEN: '',
            ID: 'C2',
        },
        {
            PARENT: 'L1T2',
            NOMBRE: 'CAPÍTULO I. PODER DE POLICÍA.',
            STYLE: '',
            ORDEN: '',
            ID: 'C1',
        },
        {
            PARENT: 'L1T2',
            NOMBRE: 'CAPÍTULO II. FUNCIÓN Y ACTIVIDAD DE POLICÍA.',
            STYLE: '',
            ORDEN: '',
            ID: 'C2',
        },
        {
            PARENT: 'L1T2',
            NOMBRE: 'CAPÍTULO III. CONCRECIÓN DE LA ORDEN DE POLICÍA.',
            STYLE: '',
            ORDEN: '',
            ID: 'C3',
        },
        {
            PARENT: 'L2T1',
            NOMBRE: 'CAPÍTULO ÚNICO. ASPECTOS GENERALES.',
            STYLE: '',
            ORDEN: '',
            ID: 'C1',
        },
        {
            PARENT: 'L2T2',
            NOMBRE: 'CAPÍTULO I. CONTENIDO.',
            STYLE: '',
            ORDEN: '',
            ID: 'C1',
        },
        {
            PARENT: 'L2T3',
            NOMBRE: 'CAPÍTULO I. VIDA E INTEGRIDAD DE LAS PERSONAS.',
            STYLE: '',
            ORDEN: '',
            ID: 'C1',
        }, {
            PARENT: 'L2T3',
            NOMBRE: 'CAPÍTULO II.DE LA SEGURIDAD EN LOS SERVICIOS PÚBLICOS.',
            STYLE: '',
            ORDEN: '',
            ID: 'C2',
        }, {
            PARENT: 'L2T3',
            NOMBRE: 'CAPÍTULO III. ARTÍCULOS PIROTÉCNICOS Y SUSTANCIAS PELIGROSAS.',
            STYLE: '',
            ORDEN: '',
            ID: 'C3',
        }, {
            PARENT: 'L2T4',
            NOMBRE: 'CAPÍTULO I. PRIVACIDAD DE LAS PERSONAS',
            STYLE: '',
            ORDEN: '',
            ID: 'C1',
        }, {
            PARENT: 'L2T4',
            NOMBRE: 'CAPÍTULO II. DE LOS ESTABLECIMIENTOS EDUCATIVOS.',
            STYLE: '',
            ORDEN: '',
            ID: 'C2',
        }, {
            PARENT: 'L2T5',
            NOMBRE: 'CAPÍTULO I. NIÑOS, NIÑAS Y ADOLESCENTES.',
            STYLE: '',
            ORDEN: '',
            ID: 'C1',
        },
    ],
    ARTICULOS: [
        {
            PARENT: 'L1T1C1',
            NOMBRE: 'ARTÍCULO 1o. OBJETO.',
            STYLE: '',
            ORDEN: '',
            ID: 'A1',
        },
        {
            PARENT: 'L1T1C1',
            NOMBRE: 'ARTÍCULO 2o. OBJETIVOS ESPECÍFICOS',
            STYLE: '',
            ORDEN: '',
            ID: 'A2',
        },
        {
            PARENT: 'L1T1C1',
            NOMBRE: 'ARTÍCULO 3o. ÁMBITO DE APLICACIÓN DEL DERECHO DE POLICÍA.',
            STYLE: '',
            ORDEN: '',
            ID: 'A3',
        },
        {
            PARENT: 'L1T1C1',
            NOMBRE: 'ARTÍCULO 4o. AUTONOMÍA DEL ACTO Y DEL PROCEDIMIENTO DE POLICÍA.',
            STYLE: '',
            ORDEN: '',
            ID: 'A4',
        },
        {
            PARENT: 'L1T1C2',
            NOMBRE: 'ARTÍCULO 5o. DEFINICIÓN.',
            STYLE: '',
            ORDEN: '',
            ID: 'A5',
        },
        {
            PARENT: 'L1T1C2',
            NOMBRE: 'ARTÍCULO 6o. CATEGORÍAS JURÍDICAS.',
            STYLE: '',
            ORDEN: '',
            ID: 'A6',
        },
        {
            PARENT: 'L1T1C2',
            NOMBRE: 'ARTÍCULO 6o. CATEGORÍAS JURÍDICAS.',
            STYLE: '',
            ORDEN: '',
            ID: 'A6',
        }, {
            PARENT: 'L1T1C2',
            NOMBRE: 'ARTÍCULO 7o. FINALIDADES DE LA CONVIVENCIA.',
            STYLE: '',
            ORDEN: '',
            ID: 'A7',
        }, {
            PARENT: 'L1T1C2',
            NOMBRE: 'ARTÍCULO 8o. PRINCIPIOS.',
            STYLE: '',
            ORDEN: '',
            ID: 'A8',
        }, {
            PARENT: 'L1T1C2',
            NOMBRE: 'ARTÍCULO 9o. EJERCICIO DE LA LIBERTAD Y DE LOS DERECHOS DE LOS ASOCIADOS.',
            STYLE: '',
            ORDEN: '',
            ID: 'A9',
        }, {
            PARENT: 'L1T1C2',
            NOMBRE: 'ARTÍCULO 10. DEBERES DE LAS AUTORIDADES DE POLICÍA.',
            STYLE: '',
            ORDEN: '',
            ID: 'A10',
        }, {
            PARENT: 'L1T2C1',
            NOMBRE: 'ARTÍCULO 11. PODER DE POLICÍA.',
            STYLE: '',
            ORDEN: '',
            ID: 'A11',
        }, {
            PARENT: 'L1T2C1',
            NOMBRE: 'ARTÍCULO 12. PODER SUBSIDIARIO DE POLICÍA.',
            STYLE: '',
            ORDEN: '',
            ID: 'A12',
        }, {
            PARENT: 'L1T2C1',
            NOMBRE: 'ARTÍCULO 13. PODER RESIDUAL DE POLICÍA.',
            STYLE: '',
            ORDEN: '',
            ID: 'A13',
        }, {
            PARENT: 'L1T2C1',
            NOMBRE: 'ARTÍCULO 14. PODER EXTRAORDINARIO PARA PREVENCIÓN DEL RIESGO O ANTE SITUACIONES DE EMERGENCIA, SEGURIDAD Y CALAMIDAD.',
            STYLE: '',
            ORDEN: '',
            ID: 'A14',
        }, {
            PARENT: 'L1T2C1',
            NOMBRE: 'ARTÍCULO 15. TRANSITORIEDAD E INFORME DE LA GESTIÓN.',
            STYLE: '',
            ORDEN: '',
            ID: 'A15',
        }, {
            PARENT: 'L1T2C2',
            NOMBRE: 'ARTÍCULO 16. FUNCIÓN DE POLICÍA.',
            STYLE: '',
            ORDEN: '',
            ID: 'A16',
        }, {
            PARENT: 'L1T2C2',
            NOMBRE: 'ARTÍCULO 17. COMPETENCIA PARA EXPEDIR REGLAMENTOS.',
            STYLE: '',
            ORDEN: '',
            ID: 'A17',
        }, {
            PARENT: 'L1T2C2',
            NOMBRE: 'ARTÍCULO 18. COORDINACIÓN.',
            STYLE: '',
            ORDEN: '',
            ID: 'A18',
        }, {
            PARENT: 'L1T2C2',
            NOMBRE: 'ARTÍCULO 19. CONSEJOS DE SEGURIDAD Y CONVIVENCIA Y COMITÉ CIVIL DE CONVIVENCIA.',
            STYLE: '',
            ORDEN: '',
            ID: 'A19',
        }, {
            PARENT: 'L1T2C2',
            NOMBRE: 'ARTÍCULO 20. ACTIVIDAD DE POLICÍA.',
            STYLE: '',
            ORDEN: '',
            ID: 'A20',
        }, {
            PARENT: 'L1T2C2',
            NOMBRE: 'ARTÍCULO 21. CARÁCTER PÚBLICO DE LAS ACTIVIDADES DE POLICÍA.',
            STYLE: '',
            ORDEN: '',
            ID: 'A21',
        }, {
            PARENT: 'L1T2C2',
            NOMBRE: 'ARTÍCULO 22. TITULAR DEL USO DE LA FUERZA POLICIAL.',
            STYLE: '',
            ORDEN: '',
            ID: 'A22',
        }, {
            PARENT: 'L1T2C3',
            NOMBRE: 'ARTÍCULO 23. MATERIALIZACIÓN DE LA ORDEN.',
            STYLE: '',
            ORDEN: '',
            ID: 'A23',
        }, {
            PARENT: 'L2T1C1',
            NOMBRE: 'ARTÍCULO 24. CONTENIDO.',
            STYLE: '',
            ORDEN: '',
            ID: 'A24',
        }, {
            PARENT: 'L2T1C1',
            NOMBRE: 'ARTÍCULO 25. COMPORTAMIENTOS CONTRARIOS A LA CONVIVENCIA Y MEDIDAS CORRECTIVAS.',
            STYLE: '',
            ORDEN: '',
            ID: 'A25',
        }, {
            PARENT: 'L2T2C1',
            NOMBRE: 'ARTÍCULO 26. DEBERES DE CONVIVENCIA.',
            STYLE: '',
            ORDEN: '',
            ID: 'A26',
        }, {
            PARENT: 'L2T3C1',
            NOMBRE: 'ARTÍCULO 27. COMPORTAMIENTOS QUE PONEN EN RIESGO LA VIDA E INTEGRIDAD.',
            STYLE: '',
            ORDEN: '',
            ID: 'A27',
        }, {
            PARENT: 'L2T3C2',
            NOMBRE: 'ARTÍCULO 28. COMPORTAMIENTOS QUE AFECTAN LA SEGURIDAD Y BIENES EN RELACIÓN CON LOS SERVICIOS PÚBLICOS.',
            STYLE: '',
            ORDEN: '',
            ID: 'A28',
        }, {
            PARENT: 'L2T3C3',
            NOMBRE: 'ARTÍCULO 29. AUTORIZACIÓN DE ACTOS O EVENTOS QUE INVOLUCREN EL USO Y APROVECHAMIENTO DE ARTÍCULOS PIROTÉCNICOS DE CATEGORÍA TRES.',
            STYLE: '',
            ORDEN: '',
            ID: 'A29',
        }, {
            PARENT: 'L2T3C3',
            NOMBRE: 'ARTÍCULO 30. COMPORTAMIENTOS QUE AFECTAN LA SEGURIDAD E INTEGRIDAD DE LAS PERSONAS EN MATERIA DE ARTÍCULOS PIROTÉCNICOS Y SUSTANCIAS PELIGROSAS.',
            STYLE: '',
            ORDEN: '',
            ID: 'A30',
        }, {
            PARENT: 'L2T4C1',
            NOMBRE: 'ARTÍCULO 31. DEL DERECHO A LA TRANQUILIDAD Y A LAS RELACIONES RESPETUOSAS.',
            STYLE: '',
            ORDEN: '',
            ID: 'A31',
        }, {
            PARENT: 'L2T4C1',
            NOMBRE: 'ARTÍCULO 32. DEFINICIÓN DE PRIVACIDAD.',
            STYLE: '',
            ORDEN: '',
            ID: 'A32',
        }, {
            PARENT: 'L2T4C1',
            NOMBRE: 'ARTÍCULO 33. COMPORTAMIENTOS QUE AFECTAN LA TRANQUILIDAD Y RELACIONES RESPETUOSAS DE LAS PERSONAS.',
            STYLE: '',
            ORDEN: '',
            ID: 'A33',
        }, {
            PARENT: 'L2T4C2',
            NOMBRE: 'ARTÍCULO 34. COMPORTAMIENTOS QUE AFECTAN LA CONVIVENCIA EN LOS ESTABLECIMIENTOS EDUCATIVOS RELACIONADOS CON CONSUMO DE SUSTANCIAS.',
            STYLE: '',
            ORDEN: '',
            ID: 'A34',
        }, {
            PARENT: 'L2T4C2',
            NOMBRE: 'ARTÍCULO 35. COMPORTAMIENTOS QUE AFECTAN LAS RELACIONES ENTRE LAS PERSONAS Y LAS AUTORIDADES. ',
            STYLE: '',
            ORDEN: '',
            ID: 'A35',
        }, {
            PARENT: 'L2T5C1',
            NOMBRE: 'ARTÍCULO 36. FACULTADES DE LOS ALCALDES PARA LA RESTRICCIÓN DE LA MOVILIDAD O PERMANENCIA DE NIÑOS, NIÑAS Y ADOLESCENTES EN EL ESPACIO PÚBLICO O EN LUGARES ABIERTOS AL PÚBLICO.',
            STYLE: '',
            ORDEN: '',
            ID: 'A36',
        }, {
            PARENT: 'L2T5C1',
            NOMBRE: 'ARTÍCULO 37. REGLAMENTACIÓN PARA LA PROTECCIÓN DE NIÑOS, NIÑAS Y ADOLESCENTES.',
            STYLE: '',
            ORDEN: '',
            ID: 'A37',
        }, {
            PARENT: 'L2T5C1',
            NOMBRE: 'ARTÍCULO 38. COMPORTAMIENTOS QUE AFECTAN LA INTEGRIDAD DE NIÑOS, NIÑAS Y ADOLESCENTES.',
            STYLE: '',
            ORDEN: '',
            ID: 'A38',
        }, {
            PARENT: 'L2T5C1',
            NOMBRE: 'ARTÍCULO 39. PROHIBICIONES A NIÑOS, NIÑAS Y ADOLESCENTES.',
            STYLE: '',
            ORDEN: '',
            ID: 'A39',
        },
    ],
    CONTENIDOS: [
        {
            PARENT: 'L1T2C2A20',
            NOMBRE: 'Actividad de policía',
            VALOR: 'Es el ejercicio de materialización de los medios y medidas correctivas, de acuerdo con las atribuciones constitucionales, legales y reglamentarias conferidas a los uniformados de la Policía Nacional, para concretar y hacer cumplir las decisiones dictadas en ejercicio del poder y la función de Policía, a las cuales está subordinada. La actividad de Policía es una labor estrictamente material y no jurídica, y su finalidad es la de preservar la convivencia y restablecer todos los comportamientos que la alteren.',
            STYLE: '',
            ORDEN: '',
            ID: 'T1',
            PARAGRAFOS: []
        }, {
            PARENT: 'L1T2C2A22',
            NOMBRE: 'Titular del uso de la fuerza policial.',
            VALOR: 'La utilización de la fuerza legítima corresponde de manera exclusiva, en el marco de este Código, a los miembros uniformados de la Policía Nacional, de conformidad con el marco jurídico vigente, salvo en aquellos casos en los que de manera excepcional se requiera la asistencia militar.',
            STYLE: '',
            ORDEN: '',
            ID: 'T1',
            PARAGRAFOS: []
        }, {
            PARENT: 'L1T2C3A23',
            NOMBRE: '',
            VALOR: 'Consiste en la ejecución concreta de una orden o norma de Policía. Esta es aplicada por la autoridad de Policía que la dictó y por aquellas personas que, en razón de sus funciones, deban hacerlo o contribuir a ejecutarla.',
            STYLE: '',
            ORDEN: '',
            ID: 'T1',
            PARAGRAFOS: []
        }, {
            PARENT: 'L2T1C1A25',
            NOMBRE: 'Comportamientos contrarios a la convivencia y medidas correctivas',
            VALOR: 'Quienes incurran en comportamientos contrarios a la convivencia serán objeto de medidas correctivas de conformidad con esta ley, sin perjuicio de las demás acciones que en derecho correspondan.',
            STYLE: '',
            ORDEN: '',
            ID: 'T1',
            PARAGRAFOS: [
                {
                    NOMBRE: 'PARÁGRAFO 1o.',
                    VALOR: 'En atención a los comportamientos relacionados en el presente Código, corresponde a las autoridades de Policía dentro del ámbito de su competencia adelantar las acciones que en derecho correspondan respetando las garantías constitucionales.',
                    STYLE: ''
                }, {
                    NOMBRE: 'PARÁGRAFO 2o.',
                    VALOR: 'En caso de que el comportamiento contrario a la convivencia también constituya una conducta tipificada en el Código Penal, la medida correctiva a imponer no podrá tener la misma naturaleza que la sanción prevista en este último. La autoridad de Policía lo pondrá en conocimiento de la Fiscalía General de la Nación e impondrá las medidas de naturaleza distinta previstas en el presente Código.',
                    STYLE: ''
                }]
        }, {
            PARENT: 'L2T2C1A26',
            NOMBRE: 'Deberes de convivencia.',
            VALOR: 'Es deber de todas las personas en el territorio nacional comportarse de manera favorable a la convivencia. Para ello, además de evitar comportamientos contrarios a la misma, deben regular sus comportamientos a fin de respetar a las demás personas, en el ejercicio de sus derechos y deberes ciudadanos, en su vida, honra y bienes, de conformidad con la Constitución Política y las leyes, y especialmente con lo dispuesto en la presente ley.',
            STYLE: '',
            ORDEN: '',
            ID: 'T1',
            PARAGRAFOS: []
        }, {
            PARENT: 'L2T4C1A31',
            NOMBRE: '',
            VALOR: 'El derecho a la tranquilidad y a unas relaciones respetuosas es de la esencia de la convivencia. Por ello, es fundamental prevenir la realización de comportamientos que afecten la tranquilidad y la privacidad de las personas.',
            STYLE: '',
            ORDEN: '',
            ID: 'T1',
            PARAGRAFOS: []
        }, {
            PARENT: 'L2T4C1A32',
            NOMBRE: '',
            VALOR: 'Para efectos de este Código, se entiende por privacidad de las personas el derecho de ellas a satisfacer sus necesidades y desarrollar sus actividades en un ámbito que le sea exclusivo y por lo tanto considerado como privado.<br>No se consideran lugares privados:<br>1. Bienes muebles o inmuebles que se encuentran en el espacio público, en lugar privado abierto al público o utilizados para fines sociales, comerciales e industriales.<br>2. Los sitios públicos o abiertos al público, incluidas las barras, mostradores, áreas dispuestas para: almacenamiento, preparación, fabricación de bienes comercializados o utilizados en el lugar, así como también las áreas dispuestas para el manejo de los equipos musicales o Disc jockey, y estacionamientos a servicio del público.',
            STYLE: '',
            ORDEN: '',
            ID: 'T1',
            PARAGRAFOS: []
        }, {
            PARENT: 'L2T4C1A33',
            NOMBRE: '',
            VALOR: '<Artículo corregido por el artículo 2 del Decreto 555 de 2017. El nuevo texto es el siguiente:> Los siguientes comportamientos afectan la tranquilidad y relaciones respetuosas de las personas y por lo tanto no deben efectuarse:<br>1. En el vecindario o lugar de habitación urbana o rural: Perturbar o permitir que se afecte el sosiego con:<br>a) <Aparte subrayado CONDICIONALMENTE exequible> Sonidos o ruidos en actividades, fiestas, reuniones o eventos similares que afecten la convivencia del vecindario, cuando generen molestia por su impacto auditivo, en cuyo caso podrán las autoridades de Policía desactivar temporalmente la fuente del ruido, en caso de que el residente se niegue a desactivarlo;<br>b) <Aparte subrayado CONDICIONALMENTE exequible> Cualquier medio de producción de sonidos o dispositivos o accesorios o maquinaria que produzcan ruidos, desde bienes muebles o inmuebles, en cuyo caso podrán las autoridades identificar, registrar y desactivar temporalmente la fuente del ruido, salvo sean originados en construcciones o reparaciones en horas permitidas;<br>c) Actividades diferentes a las aquí señaladas en vía pública o en privado, cuando trascienda a lo público, y perturben o afecten la tranquilidad de las personas.<br>2. En espacio público, lugares abiertos al público, o que siendo privados trasciendan a lo público:<br>a) Irrespetar las normas propias de los lugares públicos tales como salas de velación, cementerios, clínicas, hospitales, bibliotecas y museos, entre otros.<br>b) Realizar actos sexuales o de exhibicionismo que generen molestia a la comunidad.<br>c) <Apartes tachados INEXEQUIBLES> Consumir sustancias alcohólicas, psicoactivas o prohibidas, no autorizados para su consumo.<br>d) Fumar en lugares prohibidos.<br>e) Limitar u obstruir las manifestaciones de afecto y cariño que no configuren actos sexuales o de exhibicionismo en razón a la raza, origen nacional o familiar, orientación sexual, identidad de género u otra condición similar.',
            STYLE: '',
            ORDEN: '',
            ID: 'T1',
            PARAGRAFOS: [{
                    NOMBRE: 'PARÁGRAFO 1o.',
                    VALOR: 'Quien incurra en uno o más de los comportamientos antes señalados, será objeto de la aplicación de las siguientes medidas correctivas:<br>COMPORTAMIENTOS	MEDIDA CORRECTIVA A APLICAR<br>Numeral 1	Multa General tipo 3; Disolución de reunión o actividad que involucra aglomeraciones de público no complejas.<br>Numeral 2, literal a)	Multa General tipo 3.<br>Numeral 2, literal b)	Multa General tipo 3. <br>Numeral 2, literal c)	Multa General tipo 2; Disolución de reunión o actividad que involucra aglomeraciones de público no complejas.<br>Numeral 2, literal d)	Amonestación.<br>Numeral 2, literal e)	Multa general tipo 1.',
                    STYLE: ''
                }, {
                    NOMBRE: 'PARÁGRAFO 2o.',
                    VALOR: 'No constituyen actos sexuales o de exhibicionismo los besos o caricias que las personas, sin importar su género, color de piel, orientación sexual o identidad de género, manifiesten como expresiones de cariño, en ejercicio de su derecho al libre desarrollo de la personalidad.',
                    STYLE: ''
                },
            ]
        }
    ],
};
