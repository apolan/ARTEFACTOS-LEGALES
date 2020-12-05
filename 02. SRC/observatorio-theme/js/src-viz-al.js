/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var indexPregunta = 0;

// 0 Nivel - Abogado
var paramCiudadano = 0;

// 0 Cobro
var paramTema = 0;

// 0 No quiero denunciar
var paramAccion = 0;



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



/*
 * MANAGER PREGUTNAS
 */

function mngPregunta(id, nextId, value) {
    if (id == 1) {
        $("#p-" + id).hide();
        createPregunta(nextId);

        if (value == "si") {
            addConfig("abogado", "Soy abogado");
            paramCiudadano = 1;

        } else if (value == "no") {
            addConfig("abogado", "No soy abogado");
            paramCiudadano = 0;
        }
    } else if (id == 2) {
        $("#p-" + id).hide();
        createPregunta(nextId);

        if (value == "info-enganosa") {
            addConfig("info-enganosa", "Información engañosa");
        } else if (value == "info-cobro") {
            addConfig("info-cobro", "Cobro injustificado");
        }
    } else if (id == 3) {
        $("#p-" + id).hide();
        createPregunta(nextId);

        if (value == "info-tc") {
            addConfig("producto", "Mi tarjeta de crédito");
        } else if (value == "info-li") {
            addConfig("producto", "Mi crédito de libre inversión");
        }
    } else if (id == 4) {
        $("#p-" + id).hide();
        createPregunta(nextId);

        if (value == "si") {
            addConfig("denuncia", "No quiero denunciar");
        } else if (value == "no") {
            addConfig("denuncia", "Si quiero denunciar");
        }


    } else if (id == 5) {
        $("#p-" + id).hide();
        $('#dash').show();

        if (value == "explorar") {
            addConfig("explorar", "Explorar");
        }
    }
}
function addConfig(option, value) {
    $("#settingsList").append("<li class='txt-normal'>" + value + "</li>");
}

/**
 * 
 * @param {type} id
 * @returns {undefined}
 */
function createPregunta(id) {

    var pregunta = getPreguntaById(id);

    var div = $('<div id="p-' + pregunta["id"] + '">').addClass(pregunta["styleA"]);

    var preguntaTxt = "";
    console.log(pregunta);

    for (var opcion in pregunta["opciones"]) {
        preguntaTxt += '<li class="list-group-item txt-subtitulo-4 ' + pregunta["opciones"][opcion]["style"] + '" onclick="' + pregunta["opciones"][opcion]["function"] + '">' + pregunta["opciones"][opcion]["label"] + '</li>';
    }

    div.append('<div class="col-md-12"><p class="txt-subtitulo-1 text-center">'
            + pregunta["titulo"] + '</p> <p class="txt-normal-1 text-center">' + pregunta["descripcion"] +
            '</p><div class="row justify-content-center section-menu"><ul class="list-group list-group-horizontal ">' + preguntaTxt + ' </ul></div></div></div>');

    $("#preguntas").append(div);

}


function getPreguntaById(id) {

    for (var pregunta in preguntas) {
        if (preguntas[pregunta]["id"] == id) {
            console.log(preguntas[pregunta]);
            return preguntas[pregunta];
        }
    }
}








/*
 *  MANAGER GRAPGH
 */

var state = "none";



function activateGrap(action) {
    if (action === "none") {
        state = "none";
        location.reload();

    } else if (action === "cazador" && state !== "cazador") {

        state = "cazador";
        var src = urlcanonical + "/js/" + 'd3-symbol-extra.min.js';


        var srcD3 = 'http://d3js.org/d3.v5.min.js';

        $('<script>').attr('src', srcD3).appendTo('head');

        $('<script>').attr('src', src).appendTo('#panel-cazador');

        $("#panel-cazador").append("<svg width='1000' height='900'></svg>");

        setTimeout(
                function ()
                {
                    //alert(d3.version);
                    remap();
                    run();
                    $("#menu-filter").show();
                    /*
                    $("#menu-filter").show();
                    
                     *
                     **/
                    //run2();
                }, 3000);
        //run();

    }
}




function remap() {

    // TIPO DE DATOS
    var array = grapN["nodes"];

    for (var i in grapN["nodes"]) {
        grapN["nodes"][i]["SERIAL"] = parseInt(grapN["nodes"][i]["SERIAL"]);

        grapN["nodes"][i]['SIZE'] = parseInt(grapN["nodes"][i]['SIZE'] * 100);

        if (grapN["nodes"][i]['SIZE'] <= 0) {
            grapN["nodes"][i]['SIZE'] = 100;
        }


// CALCULAR FORMA
// COLOR

        if (grapN["nodes"][i]['CODIFICACION'] == 'Bajo') {
            grapN["nodes"][i]['SHAPE'] = 'N3';
        }

        if (grapN["nodes"][i]['CODIFICACION'] != 'Bajo' && paramCiudadano == 0) {
            grapN["nodes"][i]['SHAPE'] = 'N4';
        }

        if (grapN["nodes"][i]['CODIFICACION'] != 'Medio' && paramCiudadano == 0) {
            grapN["nodes"][i]['SHAPE'] = 'N6';
        } else if (grapN["nodes"][i]['CODIFICACION'] != 'Medio' && paramCiudadano == 1) {
            grapN["nodes"][i]['SHAPE'] = 'N3';
        }

        if (grapN["nodes"][i]['CODIFICACION'] != 'Alto' && paramCiudadano == 0) {
            grapN["nodes"][i]['SHAPE'] = 'N8';
        } else if (grapN["nodes"][i]['CODIFICACION'] != 'Alto' && paramCiudadano == 1) {
            grapN["nodes"][i]['SHAPE'] = 'N6';
        }



        //Funcion calcular figura
        // A. Soy abogado
        // B. mi premisa
        // C. Acción


        if (paramCiudadano == 0) {
            // 1. Cuantas muestra - Relaciones más complejas - nivel 1 de interacciones con respecto a los artefactos que tengan información relevantes
            // 2. Formas de lsa figuras

        } else if (paramCiudadano == 1) {


        }


        /*paramTema
         paramAccion*/

    }


    // TIPO DE DATOS
}
/*
 * GRAPH
 */




var cards = [];

var sides = 0;
var posX = 60;
var posY = 60;

function polyPaint() {
    var radialLineGenerator = d3.radialLine();
    sides = $("#txtPoly").val();

    if (sides == 3) {
        sides = 6;
    } else if (sides == 6) {
        sides = 3;
    } else if (sides == 5) {
        sides = 10;
    }

    d3.select("svg").append("path").attr("transform", "translate(" + posX + ", " + posY + ")").attr("class", "radial").attr("d", radialLineGenerator(poly(sides, 3)));

    posX += 50;

}

function poly(count, size) {

    var size = 10 * size;

    var r1 = 0, r2 = 0, valueA = (Math.PI * 2) / (count), value = 0;

    r1 = size;
    r2 = size - (size * 2);


    var radialpoints = [];


    for (var i = 0; i < count; i++) {

        radialpoints.push([value, r1]);
        value += valueA;
        radialpoints.push([value, r2]);
        value += valueA;
        //radialpoints.push([size * Math.sin(2 * Math.PI * i / count),  size * Math.cos(2 * Math.PI * i / count)]);
    }

    if (count % 2 == 0) {

    } else {
        radialpoints.push([0, r1]);
        value += valueA;
        radialpoints.push([value, r2]);
        value += valueA;
    }

    // radialpoints.push([0, r1]);
    //console.log(radialpoints);

    return radialpoints;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function run2() {

    var svg;
//polygon(6).scale(10)();
    var radialLineGenerator = d3.radialLine();

    var radialpoints = poly(10, 13); // Son los puntos

    var width = 300;
    var height = 300;

    var radialData = radialLineGenerator(radialpoints);
    console.log(radialData);


    /*  for(var i=0;i<7;i++){
     //var radial = svg.append("path").attr("transform", "translate("+getRndInteger(0,660)+", "+getRndInteger(0,660)+")").attr("class", "radial").attr("d", radialLineGenerator(poly(getRndInteger(3,9), 13)));      
     var radial = svg.append("path").attr("transform", "translate("+getRndInteger(0,660)+", "+getRndInteger(0,660)+")").attr("class", "radial").attr("d", radialLineGenerator(poly(3, 13)));      
     }*/

    $("#panel-cazador").append("<form name='myform' '><input name='Submit'   value='Generar poligono' onClick='polyPaint()'><input type='text' id='txtPoly' placeholder='Lados del poligono' ></form>");

}


var logos = {
    star: "M14.615,4.928c0.487-0.986,1.284-0.986,1.771,0l2.249,4.554c0.486,0.986,1.775,1.923,2.864,2.081l5.024,0.73c1.089,0.158,1.335,0.916,0.547,1.684l-3.636,3.544c-0.788,0.769-1.28,2.283-1.095,3.368l0.859,5.004c0.186,1.085-0.459,1.553-1.433,1.041l-4.495-2.363c-0.974-0.512-2.567-0.512-3.541,0l-4.495,2.363c-0.974,0.512-1.618,0.044-1.432-1.041l0.858-5.004c0.186-1.085-0.307-2.6-1.094-3.368L3.93,13.977c-0.788-0.768-0.542-1.525,0.547-1.684l5.026-0.73c1.088-0.158,2.377-1.095,2.864-2.081L14.615,4.928z",
    apple: "M24.32,10.85c-1.743,1.233-2.615,2.719-2.615,4.455c0,2.079,1.078,3.673,3.232,4.786c-0.578,1.677-1.416,3.134-2.514,4.375c-1.097,1.241-2.098,1.862-3.004,1.862c-0.427,0-1.009-0.143-1.748-0.423l-0.354-0.138c-0.725-0.281-1.363-0.423-1.92-0.423c-0.525,0-1.1,0.11-1.725,0.331l-0.445,0.16l-0.56,0.229c-0.441,0.176-0.888,0.264-1.337,0.264c-1.059,0-2.228-0.872-3.507-2.616c-1.843-2.498-2.764-5.221-2.764-8.167c0-2.095,0.574-3.781,1.725-5.061c1.149-1.279,2.673-1.92,4.568-1.92c0.709,0,1.371,0.13,1.988,0.389l0.423,0.172l0.445,0.183c0.396,0.167,0.716,0.251,0.959,0.251c0.312,0,0.659-0.072,1.04-0.217l0.582-0.229l0.435-0.16c0.693-0.251,1.459-0.377,2.297-0.377C21.512,8.576,23.109,9.334,24.32,10.85zM19.615,3.287c0.021,0.267,0.033,0.473,0.033,0.617c0,1.317-0.479,2.473-1.438,3.467s-2.075,1.49-3.347,1.49c-0.038-0.297-0.058-0.51-0.058-0.639c0-1.12,0.445-2.171,1.337-3.153c0.891-0.982,1.922-1.558,3.096-1.725C19.32,3.329,19.447,3.311,19.615,3.287z",
    glasses: "M14.075,9.531c0,0-2.705-1.438-5.158-1.438c-2.453,0-4.862,0.593-4.862,0.593L3.971,9.869c0,0,0.19,0.19,0.528,0.53c0.338,0.336,0.486,3.741,1.838,5.094c1.353,1.354,4.82,1.396,5.963,0.676c1.14-0.718,2.241-3.466,2.241-4.693c0-0.38,0-0.676,0-0.676c0.274-0.275,1.615-0.303,1.917,0c0,0,0,0.296,0,0.676c0,1.227,1.101,3.975,2.241,4.693c1.144,0.72,4.611,0.678,5.963-0.676c1.355-1.353,1.501-4.757,1.839-5.094c0.338-0.34,0.528-0.53,0.528-0.53l-0.084-1.183c0,0-2.408-0.593-4.862-0.593c-2.453,0-5.158,1.438-5.158,1.438C16.319,9.292,14.737,9.32,14.075,9.531z"
};

var groupLogo = {
    1: logos.star,
    2: logos.apple
}

function run() {

    var width = 800;
    var height = 600;
    var color = d3.scaleOrdinal(d3.schemeCategory10);

    graph = grapN;

    var label = {
        'nodes': [],
        'links': []
    };

    graph.nodes.forEach(function (d, i) {
        label.nodes.push({node: d});
        label.nodes.push({node: d});
        label.links.push({
            source: i * 2,
            target: i * 2 + 1
        });
    });

    var labelLayout = d3.forceSimulation(label.nodes)
            .force("charge", d3.forceManyBody().strength(-50))
            .force("link", d3.forceLink(label.links).distance(0).strength(2));

    var graphLayout = d3.forceSimulation(graph.nodes)
            .force("charge", d3.forceManyBody().strength(-3000))
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force("x", d3.forceX(width / 2).strength(1))
            .force("y", d3.forceY(height / 2).strength(1))
            .force("link", d3.forceLink(graph.links).id(function (d) {
                return d.ID;
            }).distance(50).strength(1))
            .on("tick", ticked);

    var adjlist = [];

    graph.links.forEach(function (d) {
        adjlist[d.source.ID + "-" + d.target.ID] = true;
        adjlist[d.target.ID + "-" + d.source.ID] = true;
    });

    function neigh(a, b) {
        return a == b || adjlist[a + "-" + b];
    }

    var svg = d3.select("svg").attr("width", width).attr("height", height);
    var container = svg.append("g");

    svg.call(
            d3.zoom()
            .scaleExtent([.1, 4])
            .on("zoom", function () {
                container.attr("transform", d3.event.transform);
            })
            );

    var link = container.append("g").attr("class", "links")
            .selectAll("line")
            .data(graph.links)
            .enter()
            .append("line")
            .attr("stroke", "#aaa")
            .attr("stroke-width", "1px");

    //var symbol = d3.symbol().size(1000).type(d3.symbolPentagon);

    //var customSqr = d3.symbol().type(customSymbolSquare).size(500);

    var node = container.append("g").attr("class", "nodes")
            .selectAll("g")
            .data(graph.nodes)
            .enter()
            .append("path")
            .style("stroke", "#313131e8")
            .style("fill", function (d) {
                var color;
                if (d.NATURALEZA == "Ley") {
                    color = '#41b41f';
                } else if (d.NATURALEZA == "Circular") {
                    color = '#1f77b4';
                } else {
                    color = '#cacacae8';
                }
                return color;
            })
            .attr("d", function (d) {
                var symbol;

                if (d.SHAPE == "N3") {
                    symbol = d3.symbol().size(d.SIZE).type(d3.symbolTriangleLeft);
                } else if (d.SHAPE == "N4") {
                    symbol = d3.symbol().size(d.SIZE).type(d3.symbolDiamondSquare);
                } else if (d.SHAPE == "N5") {
                    symbol = d3.symbol().size(d.SIZE).type(d3.symbolPentagon);
                } else if (d.SHAPE == "N6") {
                    symbol = d3.symbol().size(d.SIZE).type(d3.symbolHexagon);
                } else if (d.SHAPE == "N8") {
                    symbol = d3.symbol().size(d.SIZE).type(d3.symbolOctagon);
                } else {
                    symbol = d3.symbol().size(d.SIZE).type(d3.symbolTriangleLeft);
                }

                return symbol();
            });

    node.on("mouseover", focus).on("mouseout", unfocus);

    node.call(
            d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended)
            );

    var labelNode = container.append("g").attr("class", "labelNodes")
            .selectAll("text")
            .data(label.nodes)
            .enter()
            .append("text")
            .text(function (d, i) {
                return i % 2 == 0 ? "" : d.node.NOMBRE;
            })
            .style("fill", "#555")
            .style("font-family", "Arial")
            .style("font-size", 12)
            .style("pointer-events", "none"); // to prevent mouseover/drag capture

    node.on("mouseover", focus).on("mouseout", unfocus);

    function ticked() {

        node.call(updateNode);
        link.call(updateLink);

        labelLayout.alphaTarget(0.3).restart();
        labelNode.each(function (d, i) {
            if (i % 2 == 0) {
                d.x = d.node.x;
                d.y = d.node.y;
            } else {
                var b = this.getBBox();

                var diffX = d.x - d.node.x;
                var diffY = d.y - d.node.y;

                var dist = Math.sqrt(diffX * diffX + diffY * diffY);

                var shiftX = b.width * (diffX - dist) / (dist * 2);
                shiftX = Math.max(-b.width, Math.min(0, shiftX));
                var shiftY = 16;
                this.setAttribute("transform", "translate(" + shiftX + "," + shiftY + ")");
            }
        });
        labelNode.call(updateNode);

    }

    function fixna(x) {
        if (isFinite(x))
            return x;
        return 0;
    }

    function focus(d) {
        var index = d3.select(d3.event.target).datum().index;
        node.style("opacity", function (o) {
            return neigh(index, o.index) ? 1 : 0.1;
        });
        labelNode.attr("display", function (o) {
            return neigh(index, o.node.index) ? "block" : "none";
        });
        link.style("opacity", function (o) {
            return o.source.index == index || o.target.index == index ? 1 : 0.1;
        });
    }

    function unfocus() {
        labelNode.attr("display", "block");
        node.style("opacity", 1);
        link.style("opacity", 1);
    }

    function updateLink(link) {
        link.attr("x1", function (d) {
            return fixna(d.source.x);
        })
                .attr("y1", function (d) {
                    return fixna(d.source.y);
                })
                .attr("x2", function (d) {
                    return fixna(d.target.x);
                })
                .attr("y2", function (d) {
                    return fixna(d.target.y);
                });
    }

    function updateNode(node) {
        node.attr("transform", function (d) {
            return "translate(" + fixna(d.x) + "," + fixna(d.y) + ")";
        });
    }

    function dragstarted(d) {
        d3.event.sourceEvent.stopPropagation();
        if (!d3.event.active)
            graphLayout.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }

    function dragended(d) {
        if (!d3.event.active)
            graphLayout.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

}



function deleteCard(node) {
    for (var i = 0; i < cards.length; i++) {
        if (node === cards[i]) {
            cards.splice(i, 1);
            return;
        }
    }
    $('#card-' + node).remove();
}


// Demonstration only, use d3.symbolSquare if a square is needed
var customSymbolSquare = {
    draw: function (context, size) {
        let s = Math.sqrt(size) / 2;
        context.moveTo(s, s);
        context.lineTo(s, -s);
        context.lineTo(-s, -s);
        context.lineTo(-s, s);
        context.closePath();
    }
};





