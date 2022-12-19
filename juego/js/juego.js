$(principal);
function principal(){
    const letras = "kljasdhf";    
    for (var i = 0; i < letras.length; i++) {
        $("#tablero").append("<span id='arrastrable"+i+"' draggable='true' ondragend='finArrastre(event)'>"+letras[i]+"</span>");
        //Se añaden los eventos para mover cada letra
        //Importante poner # para que lo coja del html
    }
}

//Solo se necesita funcion ondragend. 
//Al arrastrar las letras siempre se arrastrarán en el #tablero al final
function finArrastre(event){
    $("#tablero").append($("#"+ event.target.id))
    //Al tablero se le añade el id de cada span
}

function comprobar(){
    let letra = $("#tablero").text() //Coje el valor del tablero (solo el texto dentro de los span)
    for (let i = 1; i < letra.length; i++) { 
        if(letra[i]<letra[i-1]){
            return alert("La palabra no está ordenada.")
        }        
    }
    return alert("La palabra está ordenada.")
}