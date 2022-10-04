function convierte() {
    let n = parseInt(document.getElementById('numero').value);
    let salida = "";
    salida = (typeof n)+"<br>"+
                n.toString(16)+"<br>"+
                n.toString(8)+"<br>"+
                n.toString(2);

    document.getElementById("salida").innerHTML = salida;
}
function calculaMiliseg(){
    let hoy = Number(new Date ("2022-10-3"));
    let cumple = Number(new Date ("2000-01-26"));

    let solucion = hoy-cumple;
    document.getElementById("miliseg").innerHTML = solucion;
}