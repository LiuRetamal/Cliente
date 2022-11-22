/*Ejercicio BIEN*/
//Introducir 4 numeros usando prompts. Validar que cada numero es entero.
//Hacer media de esos 4 numeros y sacarlos con alert. Si da error en los numeros introducidos, con alert
let n1 = parseInt(prompt("Introduce un numero"));
let n2 = parseInt(prompt("Introduce un segundo numero"));
let n3 = parseInt(prompt("Introduce un tercer numero"));
let n4 = parseInt(prompt("Introduce un cuarto numero"));

if (Number.isInteger(n1)&& Number.isInteger(n2)&& Number.isInteger(n3) &&Number.isInteger(n4)){
    let media = (n1+n2+n3+n4)/4;
    alert("La media es "+media);
}else{
    alert("Error en los datos introducidos");
}


/* Ejercicio MAL
function principal(){
    let num = prompt("Introduce 4 números"); //variable para números que se escribe
    let media = sum(parseInt(num))/4; //variable para guardar la media.

    if (Number.isInteger(num)){
        num=true
    }else{
        num=alert("La media es "+media) 
    }
    
}*/