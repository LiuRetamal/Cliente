$(principal); //Cuando se carga el DOM
function principal(){
    $("p").dblclick(function(){ //A todos los parrafos "p" se le asigna una funcion al evento onclick
        $(this).hide("slow", "swing", function(){
            $(this).show(2000);
        }); //A this "p" se oculta cuando pinchas
    });
    $("p").mouseenter(function(){
        $(this).css("background-color", "#456abc");
        $(this).css("color", "white");
    });
      //Se le asigna funcion cambiaFondos a evento mouseenter
    $("p").mouseleave(cambiaFondoBlanco);
}
function cambiaFondoBlanco(){
    $(this).css("background-color", "white");
    $(this).css("color", "black");
}