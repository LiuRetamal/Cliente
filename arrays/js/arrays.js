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
function ordenarNormal(){
    let lista = datoUsuario.value.split(" ");
    lista.sort();
    salida.innerHTML = lista.join("-");
}
function ordenarNormalReverse(){
    let lista = datoUsuario.value.split(" ");
    lista.sort().reverse();
    salida.innerHTML = lista.join("-");
}
function ordenarNumericamente(){
    
    if(a<50){
        return 1;
    }else{
        return -1;
    }
}
function arrayForEach(){
    let lista = datoUsuario.value.split(" ");
    lista.forEach(pasaEntero);
}
function pasaEntero(value, index, array){
    salida.innerHTML += value + "-" + index + ":";
    
    return parseInt(value);
}

function arrayMap(){
    const lista = datoUsuario.value.split(" ");
    const nuevaLista = lista.map(pasaEntero);
    console.log(nuevaLista);
}