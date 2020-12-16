/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var libros = [];
var titulos = [];
var capitulos = [];
var articulos = [];
var contenidos = [];
var arraySearch = [];

var strings = [
    "Hace muchos ruidos en la madrugada.", "tiene una parranda todos los fines de semana.", "No le baja al volumen de la música.",
    "No quiere bajarle al televisor en la noche.", "Tiene el radio a todo volumen.",
        "Tiene una mascota que ladra todo el día sin parar.", "Mi vecino dice que no es problema mio.",
    "No quiere conciliar.", "Cuando viene la policia si apaga la música...", "se la pasa fumando de todo y el olor se mete a la casa.",
    "Se la pasa con la esposa haciendo muchos ruidos todo el día.",  "Saca el taladro y el martillo a media noche."
];


init();
function init() {
    loadFont("GothamBlack", "gtbck");
    loadFont("GothamBold", "gtbold");
    loadFont("GothamBook", "gtbook");
    loadFont("GothamLight", "gtlight");
    loadFont("GothamBook-Italic", "gtbooki");
    loadFont("CenturyGothicRegular", "cgregular");
    loadFont("CenturyGothicBold", "cgbold");

    loadFont("AdelleSansBold", "adllbold");
    loadFont("AdelleSansLight", "adllthin");
    loadFont("AdelleSansLight", "adlllight");
    loadFont("AdelleSansBook", "adllbook");

    loadFont("Chantal-Bold", "chantal-bold");
    loadFont("Chantal-BoldItalic.otf", "chantal-bold-italic");
    loadFont("Chantal-Light-Italic", "chantal-light-italic");
    loadFont("Chantal-Light", "chantal-light");
    loadFont("Chantal-Regular", "chantal-regular");

    startGallery();
}

function loadFont(name, family) {
    var newStyle = document.createElement('style');
    newStyle.appendChild(document.createTextNode("\
    @font-face {\
        font-family: " + family + ";\
        src: url(" + urlcanonical + '/fonts/' + name + '.otf)' + ";\
    }\
    "));
    document.head.appendChild(newStyle);
}





function startGallery() {



    setTimeout(function () {

        var typed = new Typed("#vecino", {
            strings: strings,
            typeSpeed: 50,
            backSpeed: 20,
            loop: true,
            shuffle: true,
            backDelay: 5000,
        });

        legalSetup();
    }
    , 2000);
}




function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function initColors(idTmp, dataTmp) {

    let str = "";
    for (var obraTmp in dataTmp) {
        let r = dataTmp[obraTmp]["color"][0];
        let g = dataTmp[obraTmp]["color"][1];
        let b = dataTmp[obraTmp]["color"][2];
        if (!!r && !!g && !!b) {
            str += "" + "rgb(" + r + "," + g + "," + b + ")" + ",";
        } else {
            str += "" + "rgb(" + 0 + "," + 0 + "," + 0 + ")" + ",";
        }
    }

    str = str.substring(0, str.length - 1);
    str = "linear-gradient(to left," + str + ")";
    $("#" + idTmp).css("background", str);
    //console.log($("#" + idTmp) + " - " + str);
}

function truncate(str, n) {
    return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
}
;



/*
 * 
 */


function legalSetup() {

    for (var i in menuSettings) {
// Inserta menu items
        //$('#menu').append("<div id='st-" + menuSettings[i]['TYPE'] + "' class='parent ' ><p class='hap-txt-subtitulo-1'>" + menuSettings[i]['TYPE'] + ":</p></div>");
        //let itemTmp = {};
        //options.push()

        for (var j in legalObjects) {
            if (legalObjects[j]['CATEGORIA'] == menuSettings[i]['TYPE']) {
                let color = legalObjects[j]['COLOR'];
                let search = legalObjects[j]['VALOR'] + ";" + legalObjects[j]['ALIAS'];
                
                let id = legalObjects[j]['VALOR'];
                legalObjects[j]['ID'] = legalObjects[j]['VALOR'].replace(/\s/g, '').toLowerCase();

                console.log(legalObjects[j]['COLOR']);

                $('#dash-' + menuSettings[i]['TYPE'].toLowerCase()).append("<button type='button' class='btn btn-primary' id='item-" + legalObjects[j]['ID'] + "'>" + legalObjects[j]['VALOR'] + "</button>");


                $("#item-" + legalObjects[j]['ID']).mouseover(function () {
                    $(this).css("background", color);
                });


                $("#item-" + legalObjects[j]['ID']).mouseout(function () {
                    $(this).css("background", "gray");
                });


                // Click
                $('#item-' + legalObjects[j]['ID']).click(function () {

                    $(this).css("background", color);
                    let se = false;
                    /*for (var i in arraySearch) {
                        if (arraySearch[i] === search) {
                            se = true;
                            arraySearch.splice(i, 1);

                            $(".high-" + id.toLowerCase()).removeClass("high-" + id.toLowerCase());
                            //$(".high-" + id.toLowerCase()).parent().parent().hide();

                            /*$('.legalContent').each(function (i, obj) {
                                $(this).show();
                            });

                            break;
                        }
                    }*/

                        $(this).css("background-color", color);
                        searchText(search, id);
                    

                    //console.log(tmpArray, option, $('.high-acción').length, );

                    if (($('.high-personaje').length === 0 && id === "PERSONAJE")
                            || ($('.high-acción').length === 0 && id === "ACCIÓN")
                         //   || ($('.high-lugar').length === 0 && id === "LUGAR")
                          //  || ($('.high-objeto-legal').length === 0 && id === "OBJETO-LEGAL")
                            || ($('.high-sentimiento').length === 0 && id === "SENTIMIENTO") && se === false) {

                        $("#msj").text("No se encontró la categoría " + search);
                        $("#msj").addClass("red");
                        return;

                    } else {
                        $("#msj").removeClass("red");
                        $("#msj").text("-");
                    }

                    let arrayVisible = [];

                    getParentItem(arrayVisible, 'high-personaje');
                    getParentItem(arrayVisible, 'high-acción');
                    // getParentItem(arrayVisible, 'high-lugar');
                    getParentItem(arrayVisible, 'high-sentimiento');

// apagar items
                    /*for (var j in contenidos) {
                        contenidos[j]['VISIBLE'] = false;
                    }*/
/*
                    for (var i in arrayVisible) {
                        contenidos[arrayVisible[i]]['VISIBLE'] = true;
                    }*/

                    /*$('.legalContent').each(function (i, obj) {
                        //test  
                        let id = $(this).attr('id');

                        if (contenidos[i]['VISIBLE'] == false) {
                            $(this).hide(300);
                        } else {
                            $(this).show(300);
                        }
                    });*/

                });

                $('#item-' + legalObjects[j]['ID']).mouseout(function () {
                    let se = false;
                    for (var i in arraySearch) {
                        if (arraySearch[i] == search) {
                            se = true;
                            break;
                        }
                    }
                    if (!se) {
                        //$(this).css("background-color", "transparent");
                    }
                });
                // css mark
                /*var styleSheet = document.createElement('STYLE');
                 styleSheet.innerHTML += '.high-' + legalObjects[j]['CATEGORIA'] + '{ background-color:' + color + '; }';
                 styleSheet.innerHTML += '.high-' + legalObjects[j]['CATEGORIA'] + '{ color: black; }';
                 document.body.appendChild(styleSheet);
                 */
                $("<style type='text/css'> .high-" + legalObjects[j]['VALOR'].toLowerCase() + "{ background-color:" + color + "; } </style>").appendTo("head");
            }
        }
    }




    let tmpLibros = legalContent['LIBROS'];
    let tmpTitulos = legalContent['TITULOS'];
    let tmpCapitulos = legalContent['CAPITULOS'];
    let tmpArticulos = legalContent['ARTICULOS'];
    let tmpContenidos = legalContent['CONTENIDOS'];
    // Crear contenido
    for (var i in tmpLibros) {
        libros.push(tmpLibros[i]);
    }

// Titulos
    for (var i in tmpTitulos) {
        for (var j in libros) {
            if (tmpTitulos[i]['PARENT'] == libros[j]['ID']) {
                tmpTitulos[i]['ID'] = libros[j]['ID'] + tmpTitulos[i]['ID'];
                tmpTitulos[i]['LIBRO'] = libros[j];
                break;
            }
        }

        titulos.push(tmpTitulos[i]);
    }


    for (var i in tmpCapitulos) {
        for (var j in titulos) {
            if (tmpCapitulos[i]['PARENT'] == titulos[j]['ID']) {
                tmpCapitulos[i]['ID'] = titulos[j]['ID'] + tmpCapitulos[i]['ID'];
                tmpCapitulos[i]['TITULO'] = titulos[j];
                break;
            }
        }
        capitulos.push(tmpCapitulos[i]);
    }

    for (var i in tmpArticulos) {
        for (var j in capitulos) {
            if (tmpArticulos[i]['PARENT'] == capitulos[j]['ID']) {
                tmpArticulos[i]['ID'] = capitulos[j]['ID'] + tmpArticulos[i]['ID'];
                tmpArticulos[i]['CAPITULO'] = capitulos[j];
                break;
            }
        }
        articulos.push(tmpArticulos[i]);
    }

    for (var i in tmpContenidos) {
        for (var j in articulos) {
            if (tmpContenidos[i]['PARENT'] == articulos[j]['ID']) {
                tmpContenidos[i]['ID'] = articulos[j]['ID'] + tmpContenidos[i]['ID'];
                tmpContenidos[i]['ARTICULO'] = articulos[j];

                break;
            }
        }
        contenidos.push(tmpContenidos[i]);
    }




// Contenidos

    buildContent('INIT');


}

/*
 * var libros = [];
 var titulos = [];
 var capitulos = [];
 var contenido = [];
 */



function searchText(search, option) {

    arraySearch.push(search);
    let tmpArray = search.split(";");

    for (var i in tmpArray) {
        if (tmpArray[i] != "") {
            findInText(tmpArray[i], option);
        }
    }
}


function findInText(text, option) {

    //$('#viewer').empty();
    //buildContent("search");
    instance = new Mark(document.querySelector("#viewer"));

    instance.mark(text, {
        "element": "span",
        "className": "high-" + option.toLowerCase(),
        separateWordSearch: false
    });
}


function buildContent(action) {



    let lastTmpLibro = "";
    let lastTmpTitulo = "";
    let lastTmpCapitulo = "";

    for (var i in contenidos) {

        if (action == 'INIT') {
            contenidos[i]['VISIBLE'] = true;
            // El selector es la misma posición
        }
        if (contenidos[i]['VISIBLE'] == false) {
            continue;
        }

        let tmpLibro = contenidos[i]['ARTICULO']['CAPITULO']['TITULO']['LIBRO'];
        let tmpTitulo = contenidos[i]['ARTICULO']['CAPITULO']['TITULO'];
        let tmpCapitulo = contenidos[i]['ARTICULO']['CAPITULO'];
        let tmpArticulo = contenidos[i]['ARTICULO'];
        let tmpContenido = contenidos[i];
        let tmpParagrafo = contenidos[i]['PARAGRAFOS'];


        $("#viewer").append("<div id='" + i + "' class='legalContent'> </div>");

        if (lastTmpLibro != tmpLibro['NOMBRE']) {
            lastTmpLibro = tmpLibro['NOMBRE'];
            $("#" + i).append("<p class='legal-libro-1'>" + tmpLibro['NOMBRE'] + "</p>");
        }
        if (lastTmpTitulo != tmpTitulo['NOMBRE']) {
            lastTmpTitulo = tmpTitulo['NOMBRE'];
            $("#" + i).append("<p class='legal-titulo-1'>" + tmpTitulo['NOMBRE'] + "</p>");
        }
        if (lastTmpCapitulo != tmpCapitulo['NOMBRE']) {
            lastTmpCapitulo = tmpCapitulo['NOMBRE'];
            $("#" + i).append("<p class='legal-libro-1'>" + tmpCapitulo['NOMBRE'] + "</p>");
        }

        $("#" + i).append("<p class='legal-articulo-1'>" + tmpArticulo['NOMBRE'] + "</p>");
        $("#" + i).append("<p class='legal-contenido-1'>" + tmpContenido['VALOR'] + "</p>");

        for (var j in tmpParagrafo) {
            $("#" + i).append("<p class='legal-paragrafo-1'><span class='bold'>" + tmpParagrafo[j]['NOMBRE'] + ": </span>" + tmpParagrafo[j]['VALOR'] + "</p>");
        }
    }

}


function getParentItem(array, action) {
    $('.' + action).each(function (i, obj) {
        //test  
        let id = $(this).parent().parent().attr('id');

        array.push(id);
    });

}