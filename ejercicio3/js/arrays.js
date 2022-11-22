//Funcion recibe array con numeros
//Comprueba que todos son pares
//Devuelve true si se cumple

//EJERCICIO BIEN

function sonPares(listaNumeros){ //parametro pq hay un array
    let resp = true;
    for (var i = 0; i < listaNumeros.length; i++) {
        if(listaNumeros[i] %2 != 0){
            return false;
        }        
    }
    return resp;
}

sonPares([1,2,3,4]);
sonPares([2,4,6]);

/*
EJERCICIO MAL
function sonPares(){
    numeros=[4,3,5,6 ]
    while (numeros != 0){
        for (num of numeros){
            par = num %2;
            if(par == 0){
                numeros=true
            }else{
                numeros=false
            }
        }
        
    }
    
}*/