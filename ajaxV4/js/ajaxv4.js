onload = principal;

function principal(){
    document.getElementById("pedirDatos").setAttribute("onclick", "llamadaServidor()");
}

function llamadaServidor(){
    //**********************************************************//
    // Configuracion y Objetos
    //**********************************************************//

    //Parrafo para la salida de datos
    let parrafo = document.getElementById("salida");

    //Recoger datos de los input
    let inicio = document.getElementById("inicio").value;
    let final = document.getElementById("final").value;

    //crear el objeto XMLHttpRequest para acceder al servidor
    let jsonhttp = new XMLHttpRequest();
        

    //**********************************************************//
    //  Codigo para tratar la respuesta
    //**********************************************************//
    jsonhttp.onreadystatechange = function(){
        //evaluar la respuesta del servidor
        if (this.readyState == 4 && this.status == 200) {
            if (inicio < final){

                let listaN = JSON.parse(this.responseText);
                let lista = "<ul>";
                for (n of listaN){
                    lista += "<li>" +n+ "</li>";
                }
                lista += "</ul>";
                parrafo.innerHTML=lista;
            }else{
                parrafo.innerHTML= "uwu";
            }
        }
    }

    //**********************************************************//
    //  Configurar objeto para peticion al servidor 
    //**********************************************************//

     //construir la peticion al servidor
    jsonhttp.open("GET", "dimeFibo.py?inicio="+inicio+"&final="+final, true);
     //ejecutar la peticion al servidor
    jsonhttp.send();
}