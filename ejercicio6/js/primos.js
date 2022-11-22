/*EJERCICIO BIEN*/
function compruebaPrimo(){
    let n = parseInt(document.getElementById("num").value);

    if(Number.isInteger(n)){
        if(n>=0 && n<100){
            //Se necesita el objeto XMLHttpRequest para poder hacer la petición al servidor
            let peticion = new XMLHttpRequest();
            //Tratar la respuesta
            peticion.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){ //200 petición se ejecutó correctamente
                    let resp = JSON.parse(this.responseText);
                    if(resp){
                        document.getElementById("salida").innerHTML = n + "es un número primo";
                    }else{
                        document.getElementById("salida").innerHTML = n + "no es un número primo";
                    }
                }
            }
            //Hacer la petición al servidor
            peticion.open("GET","ejer6.py?numero="+n,true);
            peticion.send();
        }else{
            alert("No está entre 0 y 100");
        }
    }else{
        alert("No es un número");
    }
}


/*EJERCICIO MAL*/
/*
function principal(){
    document.getElementById("num").setAttribute("onclick", "compruebaPrimo()");
}

function compruebaPrimo(){
    let numero = document.getElementById("num").value();
    //parrafo para la salida de datos
    let parrafo = document.getElementById("salida");

    //crear el objeto XMLHttpRequest para acceder al servidor
    let jsonhttp = new XMLHttpRequest();

    //**********************************************************/
    //  Codigo para tratar la respuesta
    //**********************************************************//
    /*
    jsonhttp.onreadystatechange = function(){
        //evaluar la respuesta del servidor
        if (this.readyState == 4 && this.status == 200) {
            numero = JSON.parse(this.responseText);
            if (numero > 100){
                parrafo.innerHTML= numero;
            }
        }
    }

    //**********************************************************/
    //  Configurar objeto para peticion al servidor 
    //**********************************************************//
    /*

     //construir la peticion al servidor
    jsonhttp.open("GET", "primos.py", true);
     //ejecutar la peticion al servidor
    jsonhttp.send();
}*/