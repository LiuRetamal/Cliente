function crearParrafo(){
    let divParrafos = document.getElementById('parrafos');

    let parr = document.createElement("p");
    let nTexto = document.createTextNode("hola");

    parr.appendChild(nTexto);

    divParrafos.appendChild(parr);
}

function crearEnlace(){
    //recuperar elemento padre del nuevo elemento
    let divEnlaces = document.getElementById('enlaces');

    //crear el nuevo elemento con sus atriutos, valores, estilos
    let enlace = document.createElement("a");
    enlace.setAttribute("href", "https://www.google.es");

    let nTexto = document.createTextNode("ir a google");
    enlace.appendChild(nTexto);

    divEnlaces.appendChild(enlace);
    
    //añadir el elemento nuevo a su padre
    let sl = document.createElement("<br>")
    divEnlaces.appendChild(sl);
}