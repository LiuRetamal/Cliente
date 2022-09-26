onload=principal; //carga el html

function principal(){
    let num = prompt("Introduce un número"); //variable para número que se escribe
    
    let adiv = Math.floor(Math.random() * 11); //variable para un numero aleatorio

    while (num != adiv){    
        if (num > adiv){
            num = prompt("El número a adivinar es menor")
        }else if (num < adiv){
            num = prompt("El número a adivinar es mayor")
        }        
    }
    alert("Has acertado")
    principal();
}