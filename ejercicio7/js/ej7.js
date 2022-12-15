onload = principal;

function principal(){
    let x = 200;
    let y = 200;

    //400x400
    let cnv = document.getElementById("myCanvas");
    let ctx = cnv.getContext("2d"); //obtenemos el contexto del elemento canvas

    //Circulo azul
    colorAzul = "#0000FF";
    radAzul = 150;
    ctx.beginPath();
    ctx.arc(x, y, radAzul, 0 , 2 * Math.PI); //x, y,radio, comienzo angulo, fin angulo
    ctx.strokeStyle = colorAzul;
    ctx.fillStyle = colorAzul;
    ctx.fill(); //Color
    ctx.stroke();
    
    //Circulo verde
    colorVerde = "#00FF00";
    radVerde = 100;
    ctx.beginPath();
    ctx.arc(x, y, radVerde, 0 , 2 * Math.PI); //x, y,radio, comienzo angulo, fin angulo
    ctx.strokeStyle = colorVerde;
    ctx.fillStyle = colorVerde;
    ctx.fill(); //Color
    
    //Circulo rojo
    colorRojo = "#FF0000";
    radRojo = 50;
    ctx.beginPath();
    ctx.arc(x, y, radRojo, 0 , 2 * Math.PI); //x, y,radio, comienzo angulo, fin angulo
    ctx.strokeStyle = colorRojo;
    ctx.fillStyle = colorRojo;
    ctx.fill(); //Color
    
    
}