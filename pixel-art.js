var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

function recorroColores(){
  for (var i = 0; i < nombreColores.length; i++) {
    var color = document.createElement('div');
    color.className = ('color-paleta');
    color.style.backgroundColor= (nombreColores[i]);
    paleta.appendChild(color);
    }
}

function recorroGrilla() {
  for (var i = 0; i < 1750; i++){
    var cuadrado = document.createElement('div');
    grillaPixeles.appendChild(cuadrado);
  }
}

var indicadorColor = document.getElementById('indicador-de-color');
paleta.addEventListener('click', cambiarColor);

function cambiarColor(e) {
  indicadorColor.style.backgroundColor = e.target.style.backgroundColor;
}

grillaPixeles.addEventListener('click', pintarPixel);

function pintarPixel(e) {
e.target.style.backgroundColor = indicadorColor.style.backgroundColor;
}

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorColor.style.backgroundColor = colorActual;

  })
);

var mouseClick = false;

grillaPixeles.addEventListener("mousedown", clickear);
grillaPixeles.addEventListener("mouseup", soltarclick);
grillaPixeles.addEventListener("mouseover", mover);

function clickear(e){
  mouseClick=true;
}

function soltarclick(e){
  mouseClick=false;
}

function mover(e) {
  if (mouseClick === true) {
    pintarPixel(e);
}
}

$("#borrar").click (function () {
  var $pixelBorrado = $("#grilla-pixeles div").animate({"background-color": "#ffffff"},2000);
});

$("#batman").click (function () {
  cargarSuperheroe(batman);
});

$("#wonder").click (function () {
  cargarSuperheroe(wonder);
});

$("#flash").click (function () {
  cargarSuperheroe(flash);
});

$("#invisible").click (function () {
  cargarSuperheroe(invisible);
});


$("#guardar").click (function () {
  guardarPixelArt();
});

window.onload = function () {
recorroGrilla();
recorroColores();
}
