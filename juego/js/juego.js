$(principal) ;
function principal(){
    const t = $("tablero");

    const letras = "kljasdhf";

    for (var i = 0; i < letras.length; i++) {
        t.append("<span >"+letras[i]+"</span>");
    }
}
function comprobar(){
    console.log("comprueba")
}