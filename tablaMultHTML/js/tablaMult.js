onload = principal;

function principal(){
    let num = 0; //inicializacion del numero q se pide
    let tam = 10; //elementos de la tabla
    let salida = "";// acumular texto de la tabla
    
    num = parseInt(document.getElementById("nume").value);

    for (let i = 0; i < tam; i++) {
        salida += num+" * "+i+" = " +i*num +"<br>";
    }			
    document.getElementById("demo").innerHTML = salida;
}