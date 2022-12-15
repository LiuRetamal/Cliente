function ponerBorde(parrafo){
    let ancho = document.getElementById("ancho").value;
    document.getElementById(parrafo).style.borderWidth = ancho;
    document.getElementById(parrafo).style.border = "solid black";
}
function quitarBorde(parrafo){
    document.getElementById(parrafo).style.border = "0px solid";
}