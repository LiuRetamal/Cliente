onload=principal; //carga el html

function principal(){
    let n = prompt("Introduce un numero");
    console.log("Has elegido el número: "+n);
    let res = Math.floor(Math.random() * 11);
    while (n != res){    
        n = prompt("Fallaste, el número que debías adivinar era: "+res +" Introduce otro número", 0);
        res = Math.floor(Math.random() * 11);
    }
    alert("Has acertado")
}


