onload = principal;

let ctx;

function principal(){
    
    //EJEMPLO RECTANGULOS CANVAS
    let canvas = document.getElementById("myCanvas");

    ctx = canvas.getContext("2d");
    console.log(canvas.width) ;
    console.log(canvas.height) ;

    //Rectángulos
    ctx.fillStyle = "#FFQ000";
    ctx. fillRect(0, 0, 150, 75);//0 x, 0 y. Empieza el rectangulo
    ctx.fillStyle = "#00FF00"; //Color
    ctx. fillRect(10, 10, 150, 75); //150 alto, 75 ancho
    /***********************************************************************************************/
    //RECTANGULOS 1
    let canvas1 = document.getElementById("myCanvas1");

    ctx = canvas1.getContext("2d");
    console.log(canvas1.width) ;
    console.log(canvas1.height) ;
    //Rectangulo desde arriba izquierda. Ancho y alto, mitad del tamaño del canvas (cuadrado)
    ctx.fillStyle = "#FFQ000";
    ctx. fillRect(0, 0, 150, 150);
    //Rectangulo mismo tamaño. Centro del canvas
    ctx.fillStyle = "#FFQ000";
    ctx. fillRect(150, 150, 150, 150);

    //Rectangulo abajo izquierda
    ctx.fillStyle = "#00FF00";
    ctx. fillRect(0, 150, 150, 150);
    //ctx. fillRect(0, canvas1.height/2, canvas1.width/2, canvas1.height/2);

    //Rectangulo arriba derecha
    ctx.fillStyle = "#00FF00";
    ctx. fillRect(150, 0, 150, 150);
    //ctx. fillRect(canvas1.width/2, 0, canvas1.width/2, canvas1.height/2);

}
/***********************************************************************************************/
//RECTANGULOS 2
function dibujaLinea(){
    var canvas2 = document.getElementById("myCanvas2");
    var ctx = canvas2.getContext("2d");       

    let x = document.getElementById("coordx").value;
    let y = document.getElementById("coordy").value;
    let ancho = document.getElementById("ancho").value;
    let color = document.getElementById("color").value;

    ctx.beginPath();
    ctx.lineWidth = ancho; //ancho de la linea
    ctx.strokeStyle = color; //Color
    ctx.moveTo(canvas2.width / 2, canvas2.height / 2); //empieza en el centro
    ctx.lineTo(x, y);//acaba donde marca los inputs
    ctx.stroke(); //ctx.fill() o ctx.closePath() Cerrar camino

    /*
    ctx.beginPath();
    ctx.lineWidth = 10; //ancho de la linea
    ctx.strokeStyle = red; //Color
    ctx.moveTo(0,0); //empieza en el centro
    ctx.lineTo(100, 100);//acaba donde marca los inputs
    ctx.fill(); //ctx.fill() o ctx.closePath() Cerrar camino
    */
}
/***********************************************************************************************/
    //CIRCULO
    function dibujaCirculo(){

        var canvas3 = document.getElementById("myCanvas3");
        var ctx = canvas3.getContext("2d");       

        let x = document.getElementById("centrox").value;
        let y = document.getElementById("centroy").value;
        let radio = document.getElementById("radio").value;
        let colorCirculo = document.getElementById("colorCirculo").value;

        ctx.beginPath();
        ctx.strokeStyle = colorCirculo; //Color
        ctx.arc(x, y, radio, 0 , 2 * Math.PI); //x, y,radio, comienzo angulo, fin angulo
        

        ctx.arc(50, 50, radio, 0 , 2 * Math.PI); //x, y,radio, comienzo angulo, fin angulo
        ctx.stroke();

    }