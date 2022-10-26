onload=principal;

let tiempo = 0;
let salida;
let idTemporizador;
let tiempoActivo = false;

function principal(){
    //Asignar las funciones a cada boton
    document.getElementById("inicio").setAttribute("onclick", "iniciar()");    
    document.getElementById("parada").setAttribute("onclick", "parar()");    
    document.getElementById("reinicio").setAttribute("onclick", "reiniciar()");

    //Capturar elemento de salida
    salida = document.getElementById("salida");
}

//Boton de iniciar, Carga el tiempo e inicia el temporizador a 1 segundo (1000 milisegundos)
function iniciar() {
    if(!tiempoActivo){ //si no hay temporizador activo
        tiempoActivo=true;  //se marca temporizador
        tiempo = document.getElementById("tiempo").value; //se captura tiempo inicial
        salida.innerHTML=tiempo; //se pone en la salida
        idTemporizador=setInterval(actualizarSalida, 1000); //se inicia el temporizaodr por intervalo
    }
}

//Actualiza el tiempo, descuenta un segundo cada vez que se ejecuta.
function actualizarSalida(){    
    if(tiempo <= 1){ //finaliza el temporizador cuando es 1
        //cancelar el intervalo
        clearInterval(idTemporizador); //quita temporizador guardado en idTemporizador
        tiempoActivo=false; //se indica que ya no hay temporizador activo
    }
    tiempo--; //resta uno al tiempo
    salida.innerHTML=tiempo; //lo saca por el parrafo "salida"
}

//Boton parar.
function parar(){
    if(tiempoActivo){
        clearInterval(idTemporizador);
        tiempoActivo = false;
    }else{
        idTemporizador=setInterval(actualizarSalida, 1000);
        tiempoActivo=true;
    }
}

//Boton reiniciar
function reiniciar(){
    if(tiempoActivo){ clearInterval(idTemporizador); }
    salida.innerHTML=0;
    tiempo = 0;
    tiempoActivo= false;
}

