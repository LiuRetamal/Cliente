/*EJERCICIO BIEN*/
function cambiaFondo(parrafo){
    document.getElementById("p1").style.backgroundColor = "white";
    document.getElementById("p2").style.backgroundColor = "white";
    document.getElementById("p3").style.backgroundColor = "white";
    document.getElementById(parrafo).style.backgroundColor = "lightblue";
}


/*EJERCICIO MAL*/
/*
function cambiaFondo('p1'){
    let p1 = document.getElementById('p1');
    let p2 = document.getElementById('p2');
    let p3 = document.getElementById('p3');
    const cambiaP1 = style.backgroundColor("lightblue");
    const cambiaP2 = style.backgroundColor("white");
    const cambiaP3 = style.backgroundColor("white");

    p1.appendChild(cambiaP1);
    p2.appendChild(cambiaP2);
    p3.appendChild(cambiaP3);
}
function cambiaFondo('p2'){
    let p1 = document.getElementById('p1');
    let p2 = document.getElementById('p2');
    let p3 = document.getElementById('p3');
    const cambiaP1 = style.backgroundColor("white");
    const cambiaP2 = style.backgroundColor("lightblue");
    const cambiaP3 = style.backgroundColor("white");

    p1.appendChild(cambiaP1);
    p2.appendChild(cambiaP2);
    p3.appendChild(cambiaP3);
}
function cambiaFondo('p3'){
    let p1 = document.getElementById('p1');
    let p2 = document.getElementById('p2');
    let p3 = document.getElementById('p3');
    const cambiaP1 = style.backgroundColor("white");
    const cambiaP2 = style.backgroundColor("white");
    const cambiaP3 = style.backgroundColor("lightblue");

    p1.appendChild(cambiaP1);
    p2.appendChild(cambiaP2);
    p3.appendChild(cambiaP3);
}
*/