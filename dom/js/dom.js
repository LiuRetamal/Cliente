onload = crearTabla;

//alert(document.URL)
//alert(document.doctype.valueOf())

function crearTabla(){
    let cuerpo = document.body;

    let tabla = "<table><tr><td>Hola</td></tr><tr><td>Adios</td></tr></table>";

    let imagen = "<img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elmundo.es%2Fviajes%2Famerica%2F2022%2F03%2F15%2F622885af21efa0f9518b45c4.html&psig=AOvVaw2N1KwbeWrXbi6NJ0H-cMK1&ust=1664884487283000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCKjGys3_w_oCFQAAAAAdAAAAABAD'>";

    let contenido = tabla + imagen;

    cuerpo.innerHTML= contenido;

    let parrafo = document.createElement("p");

    parrafo.innerHTML = "texto";

    cuerpo.appendChild(parrafo);
}