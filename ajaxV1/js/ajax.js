onload=principal;

function principal(){
    document.getElementById("enviar").setAttribute("onclick", "llamadaAjax()");
}
function llamadaAjax(){

    //**********************************************************//
    //  Configurar objeto para peticion al servidor 
    //  y calcular otros datos
    //**********************************************************//

    let numero = document.getElementById("numero").value();

        //crear el objeto XMLHttpRequest para acceder al servidor
    let xmlhttp = new XMLHttpRequest();

    //**********************************************************//
    //  Registro de la funcion que trata
    // la respuesta del servidor
    //**********************************************************//

        //registrar la funcion que se ejecuta con la respuesta del servidor
    xmlhttp.onreadystatechange = function() {

        //evaluar la respuesta del servidor
        if (this.readyState == 4 && this.status == 200) {

        //tratar los datos enviados por el servidor
        document.getElementById("salida").innerHTML = this.responseText;
        }
    };

    //**********************************************************//
    //  Codigo que realiza la peticion al servidor
    // Se pueden hacer peticiones GET, POST (y otros verbos HTTP)
    //**********************************************************//

        //construir la peticion al servidor
    xmlhttp.open("GET", "dimeNumero.py?num="+numero, true);
        //ejecutar la peticion al servidor
    xmlhttp.send();
}

