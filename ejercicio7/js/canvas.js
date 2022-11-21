onload = principal;

let ctx;

function principal(){
    
    let canvas = document.getElementById("myCanvas");

    ctx = canvas.getContext("2d");
     
        for (let i = 0; i < 64; i++) {
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(0, 0, 50,50);
            for (let j = 1; j < 64; j++){
                ctx.fillStyle = "#000000";
                ctx.fillRect(50, 0, 50,50);
            }
        }
    //Blanco
        ctx.fillStyle = "#FFFFFF";//Relleno del cuadrado 

            //Fila 1 horizontal
        ctx. fillRect(0, 0, 50, 50);
        ctx. fillRect(100, 0, 50, 50);
        ctx. fillRect(200, 0, 50, 50);
        ctx. fillRect(300, 0, 50, 50);
            //fila 2
        ctx. fillRect(50, 50, 50, 50);
        ctx. fillRect(150, 50, 50, 50);
        ctx. fillRect(250, 50, 50, 50);
        ctx. fillRect(350, 50, 50, 50);
            //fila3
        ctx. fillRect(0, 100, 50, 50);
        ctx. fillRect(100, 100, 50, 50);
        ctx. fillRect(200, 100, 50, 50);
        ctx. fillRect(300, 100, 50, 50);
            //fila 4
        ctx. fillRect(50, 150, 50, 50);
        ctx. fillRect(150, 150, 50, 50);
        ctx. fillRect(250, 150, 50, 50);
        ctx. fillRect(350, 150, 50, 50);
            //fila 5
        ctx. fillRect(0, 200, 50, 50);
        ctx. fillRect(100, 200, 50, 50);
        ctx. fillRect(200, 200, 50, 50);
        ctx. fillRect(300, 200, 50, 50);
            //fila 6
        ctx. fillRect(50, 250, 50, 50);
        ctx. fillRect(150, 250, 50, 50);
        ctx. fillRect(250, 250, 50, 50);
        ctx. fillRect(350, 250, 50, 50);
             //fila 7
        ctx. fillRect(00, 300, 50, 50);
        ctx. fillRect(100, 300, 50, 50);
        ctx. fillRect(200, 300, 50, 50);
        ctx. fillRect(300, 300, 50, 50);  
            //fila 8
        ctx. fillRect(50, 350, 50, 50);
        ctx. fillRect(150, 350, 50, 50);
        ctx. fillRect(250, 350, 50, 50);
        ctx. fillRect(350, 350, 50, 50); 
    
    //Negro
        ctx.fillStyle = "#000000";//Relleno del cuadrado

            //Fila 1 horizontal
        ctx. fillRect(50, 0, 50, 50);
        ctx. fillRect(150, 0, 50, 50);
        ctx. fillRect(250, 0, 50, 50);
        ctx. fillRect(350, 0, 50, 50);
            //fila 2
        ctx. fillRect(0, 50, 50, 50);
        ctx. fillRect(100, 50, 50, 50);
        ctx. fillRect(200, 50, 50, 50);
        ctx. fillRect(300, 50, 50, 50);
            //fila3
        ctx. fillRect(50, 100, 50, 50);
        ctx. fillRect(150, 100, 50, 50);
        ctx. fillRect(250, 100, 50, 50);
        ctx. fillRect(350, 100, 50, 50);
            //fila 4
        ctx. fillRect(0, 150, 50, 50);
        ctx. fillRect(100, 150, 50, 50);
        ctx. fillRect(200, 150, 50, 50);
        ctx. fillRect(300, 150, 50, 50);
            //fila 5
        ctx. fillRect(50, 200, 50, 50);
        ctx. fillRect(150, 200, 50, 50);
        ctx. fillRect(250, 200, 50, 50);
        ctx. fillRect(350, 200, 50, 50);
            //fila 6
        ctx. fillRect(0, 250, 50, 50);
        ctx. fillRect(100, 250, 50, 50);
        ctx. fillRect(200, 250, 50, 50);
        ctx. fillRect(300, 250, 50, 50);
             //fila 7
        ctx. fillRect(50, 300, 50, 50);
        ctx. fillRect(150, 300, 50, 50);
        ctx. fillRect(250, 300, 50, 50);
        ctx. fillRect(350, 300, 50, 50);  
            //fila 8
        ctx. fillRect(0, 350, 50, 50);
        ctx. fillRect(100, 350, 50, 50);
        ctx. fillRect(200, 350, 50, 50);
        ctx. fillRect(300, 350, 50, 50);     

 
}

