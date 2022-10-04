let texto =""; //ambito global
function arraysBasico (){
    //recuperar objetos del DOM (elementos o nodos)
    let datoUsuario = document.getElementById("valores");
    let salida = document.getElementById("salida");

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
