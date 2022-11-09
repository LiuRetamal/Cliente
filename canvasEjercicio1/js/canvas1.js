onload = principal;
let ctx;

//Canvas 1
function principal(){
    let canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");      
    console.log(canvas.width);
    console.log(canvas.height); 

    //Empieza arriba a la derecha
    //Horizontal arriba, vetical izquierda arriba (borde)
    ctx.beginPath();  
    ctx.lineWidth=4;   //ancho de linea
    ctx.moveTo(0,0); //x, y
    ctx.lineTo(500, 0);
    ctx.lineTo(500, 200);
    ctx.stroke();

    //Vertical arriba izquierda primera
    ctx.beginPath();    
    ctx.moveTo(100,0); //x, y
    ctx.lineTo(100, 100);
    ctx.stroke();

    //Vertical izquierda larga (borde)
    ctx.beginPath();    
    ctx.moveTo(0,100); //x, y
    ctx.lineTo(0, 500);
    ctx.stroke();

    //Horizontal abajo larga (borde)
    ctx.beginPath();    
    ctx.moveTo(0,500); //x, y
    ctx.lineTo(500, 500);
    ctx.stroke();
    //Vertical abajo corto (borde)
    ctx.beginPath();    
    ctx.moveTo(500, 500); //x, y
    ctx.lineTo(500, 300);
    ctx.stroke();

    //Horizontal arriba corto izquierda
    ctx.beginPath();    
    ctx.moveTo(0, 200); //x, y
    ctx.lineTo(200, 200);
    ctx.stroke();
    //Vertical arriba corto izquierda
    ctx.beginPath();    
    ctx.moveTo(200, 200); //x, y
    ctx.lineTo(200, 100);
    ctx.stroke();
    //Horizontal arriba corto centro
    ctx.beginPath();    
    ctx.moveTo(200, 100); //x, y
    ctx.lineTo(300, 100);
    ctx.stroke();
    
    //Horizontal arriba corto derecha
    ctx.beginPath();    
    ctx.moveTo(500, 200); //x, y
    ctx.lineTo(300, 200);
    ctx.stroke();
    //Vertical arriba corto derecha
    ctx.beginPath();    
    ctx.moveTo(300, 200); //x, y
    ctx.lineTo(300, 300);
    ctx.stroke();
    //Vertical arriba corto derecha
    ctx.beginPath();    
    ctx.moveTo(400, 200); //x, y
    ctx.lineTo(400, 100);
    ctx.stroke();
    //Horizontal centro corto centro
    ctx.beginPath();    
    ctx.moveTo(300, 300); //x, y
    ctx.lineTo(100, 300);
    ctx.stroke();
    //Vertical abajo corto izquierda
    ctx.beginPath();    
    ctx.moveTo(100, 300); //x, y
    ctx.lineTo(100, 400);
    ctx.stroke();

    //Horizontal abajo corto derecha
    ctx.beginPath();    
    ctx.moveTo(500, 300); //x, y
    ctx.lineTo(400, 300);
    ctx.stroke();
    //Vertical abajo corto derecha
    ctx.beginPath();    
    ctx.moveTo(400, 300); //x, y
    ctx.lineTo(400, 400);
    ctx.stroke();
    //Horizontal abajo corto centro
    ctx.beginPath();    
    ctx.moveTo(400, 400); //x, y
    ctx.lineTo(200, 400);
    ctx.stroke();
}
