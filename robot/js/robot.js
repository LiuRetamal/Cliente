onload = principal;

function principal(){
    llamadaServidor();
    document.getElementById("pedirSiguiente").setAttribute("onclick", "llamadaServidor()");
}

function llamadaServidor(){
    //**********************************************************//
    // Configuracion y Objetos
    //**********************************************************//

    //Parrafo para la salida de datos
    let identificacion = document.getElementById("identificacion");
    let nacimiento = document.getElementById("nacimiento");
    let ciudad = document.getElementById("ciudad");

    //crear el objeto XMLHttpRequest para acceder al servidor
    let xmlhttp = new XMLHttpRequest();
        

    //**********************************************************//
    //  Codigo para tratar la respuesta
    //**********************************************************//
    xmlhttp.onreadystatechange = function(){
        //evaluar la respuesta del servidor
        if (this.readyState == 4 && this.status == 200) {
            let robot = JSON.parse(this.responseText);
            document.getElementById("icono").setAttribute("src", robot.avatar);
            identificacion.innerHTML = "<b>Identificación:</b> "+robot.first_name+" "+robot.last_name;
            nacimiento.innerHTML = "<b>Nacimiento:</b> "+robot.date_of_birth;
            ciudad.innerHTML = "<b>Ciudad:</b> "+robot.address.city;
        }
    }

    //**********************************************************//
    //  Configurar objeto para peticion al servidor 
    //**********************************************************//

     //construir la peticion al servidor
     xmlhttp.open("GET", "https://random-data-api.com/api/v2/users", true);
     //ejecutar la peticion al servidor
     xmlhttp.send();
}