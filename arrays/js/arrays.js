onload=iniciar;
let texto =""; //ambito global

let datoUsuario;
let salida;
let numero;

function iniciar(){
    //recuperar objetos del DOM (elementos o nodos)
    datoUsuario = document.getElementById("valores");
    salida = document.getElementById("salida");
    numero = document.getElementById("numero");
}

function arraysBasico (){
    //recuperar objetos del DOM (elementos o nodos)
    datoUsuario = document.getElementById("valores");
    salida = document.getElementById("salida");

    let listaNum = datoUsuario.value.split(" ");
    
    listaNum[10]= "daw";
    //array tiene:
    // 10-20-30-40
    //aplica la funcion suma a cada elemento
    listaNum.forEach(suma2) ; 
    

    for (num of listaNum){
        texto += "a "+num+"<br>";
    }

    salida.innerHTML = texto;
}

function suma2(value){
    texto += (parseInt(value) + 2) + "<br>";
}

function arrayToString(){
    salida.innerHTML = datoUsuario.value.split(" ").toString();
}

function arrayJoin(){
    salida.innerHTML = datoUsuario.value.split(" ").join(numero.value);
}
function arrayPop(){
    let lista = datoUsuario.value.split(" ");
    lista.pop();
    salida.innerHTML = lista.join("-");
}
function arrayPush(){
    let lista = datoUsuario.value.split(" ");
    lista.push(numero.value);
    salida.innerHTML = lista.join("-");
    
}