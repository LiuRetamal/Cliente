class dbjCanvas {
    static dibujaRect(cnv, rectangulo){
        
        let ctx = cnv.getContext("2d");

        //Variables del rectangulo
        let ancho = rectangulo.ancho;
        let alto = rectangulo.alto;
        let area = rectangulo.area;
        let perimetro = rectangulo.perimetro;

        
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, cnv.width, cnv.heigth);
        ctx.stroke();

        //Pintar texto "#293858" "#846294"
        ctx.font = "15px Arial";
        ctx.fillStyle = "#846294";
        ctx.fillText("Alto de: " + alto, 50, 50);
        ctx.fillText("Ancho de: " + ancho,  50, 100);
        ctx.fillText("Area de: " + area, 50, 150);
        ctx.fillText("Perimetro de: " + perimetro, 50, 200);
        ctx.stroke();

        //Calcular esquina izquierda superior
        let esquina = (cnv.width/2) - (ancho/2);

        //Pintar rectangulo
        ctx.fillStyle = "#456def";
        ctx.fillRect(esquina, 250, ancho, alto);
        ctx.stroke();
    }

}
