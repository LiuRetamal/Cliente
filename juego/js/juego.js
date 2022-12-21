$(principal);
function principal(){
    const letras = "nba";    
    for (var i = 0; i < letras.length; i++) {
        $("#tablero").append("<span id='arrastrable"+i+"' draggable='true' ondragend='finArrastre(event)'>"+letras[i]+"</span>");
        //Se añaden los eventos para mover cada letra
        //Importante poner # para que lo coja del html
    }
    comprobar();
}

//Solo se necesita funcion ondragend. 
//Al arrastrar las letras siempre se arrastrarán en el #tablero al final
function finArrastre(event){
    $("#tablero").append($("#"+ event.target.id))
    //Al tablero se le añade el id de cada span
    comprobar();
}

function comprobar(){
    //$("#tablero").text() -> Coje el valor del tablero (solo el texto dentro de los span)
    let ordenado=true;
    for (let i = 1; i <  $("#tablero").text().length; i++) { 
        if( $("#tablero").text()[i]< $("#tablero").text()[i-1]){
            ordenado=false;              
        }        
    }
    if(ordenado){
        $("#tablero").css('color', '#0CC722') //Si está ordenado se pinta en verde
    }else{
        $("#tablero").css('color', 'red') //Si está mal ordenado se pinta en rojo
    }
}