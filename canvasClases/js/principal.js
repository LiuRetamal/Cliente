onload = principal;

let ancho;
let alto;

let rectangulo;

function principal(){
    ancho = document.getElementById("ancho").value;
    alto = document.getElementById("alto").value;
    miCanvas = document.getElementById("miCanvas");

    rectangulo = new Rectangulo(ancho, alto);
    dbjCanvas.dibujaRect(miCanvas, rectangulo);
}

//Asociada onchange de inputs
function dibuja(){
    ancho = document.getElementById("ancho").value;
    alto = document.getElementById("alto").value;
    
    rectangulo = new Rectangulo(ancho, alto);
    dbjCanvas.dibujaRect(miCanvas, rectangulo);
}