onload = principal;

function principal(){
    document.getElementById("num").setAttribute("onclick", "compruebaPrimo()");
}

function compruebaPrimo(){
    let numero = document.getElementById("num").value();
    //parrafo para la salida de datos
    let parrafo = document.getElementById("salida");

    //crear el objeto XMLHttpRequest para acceder al servidor
    let jsonhttp = new XMLHttpRequest();

    //**********************************************************//
    //  Codigo para tratar la respuesta
    //**********************************************************//
    jsonhttp.onreadystatechange = function(){
        //evaluar la respuesta del servidor
        if (this.readyState == 4 && this.status == 200) {
            numero = JSON.parse(this.responseText);
            if (numero > 100){
                parrafo.innerHTML= numero;
            }
        }
    }

    //**********************************************************//
    //  Configurar objeto para peticion al servidor 
    //**********************************************************//

     //construir la peticion al servidor
    jsonhttp.open("GET", "primos.py", true);
     //ejecutar la peticion al servidor
    jsonhttp.send();
}
