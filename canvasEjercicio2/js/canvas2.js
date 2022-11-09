onload = principal;
let ctx;

//Canvas 1
function principal(){
    
    let canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");    
       
    //Cabeza
    ctx.strokeStyle = "#0036FF";
    ctx.lineWidth=4;
    ctx.beginPath();     
    ctx.arc(250, 90, 50, 0 , 2 * Math.PI); //x, y,radio, comienzo angulo, fin angulo
    ctx.stroke();

    //Ojo izquierdo    
    ctx.beginPath();    
    ctx.arc(230, 80, 10, 0 , 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();

    //Ojo derecho
    ctx.beginPath();
    ctx.arc(270, 80, 10, 0 , 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();

    //Cuerpo
    ctx.fillStyle = "#753C10";
    ctx.fillRect(180, 140, 140, 200);
    
    //Brazo izquierdo
    ctx.beginPath();  
    ctx.lineWidth=4;
    ctx.strokeStyle = "#753C10";   //ancho de linea
    ctx.moveTo(180,140); //x, y
    ctx.lineTo(140,240);
    ctx.lineTo(160, 250);
    ctx.lineTo(180, 200);
    ctx.stroke();
    //Brazo Derecho
    ctx.beginPath();  
    ctx.lineWidth=4;
    ctx.strokeStyle = "#753C10";   //ancho de linea
    ctx.moveTo(320,140); //x, y
    ctx.lineTo(360,240);
    ctx.lineTo(340,250);
    ctx.lineTo(318,200);
    ctx.stroke();

    //Pierna izquierda
    ctx.beginPath();  
    ctx.lineWidth=4;
    ctx.strokeStyle = "#753C10";   //ancho de linea
    ctx.moveTo(190,300); //x, y
    ctx.lineTo(190,480);
    ctx.lineTo(230,480);
    ctx.lineTo(230,300);
    ctx.stroke();

    //Pierna derecha
    ctx.beginPath();  
    ctx.lineWidth=4;
    ctx.strokeStyle = "#753C10";   //ancho de linea
    ctx.moveTo(310,330); //x, y
    ctx.lineTo(310,480);
    ctx.lineTo(270,480);
    ctx.lineTo(270,330);
    ctx.stroke();

}
