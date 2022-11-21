onload=principal;

function principal(){
    let texto1 = document.getElementsById("texto1");
    let texto2 = document.getElementsById("texto2");

    const evento1 = document.createEvent(onchange("crearAlert1()"))
    const evento2 = document.createEvent(onchange("crearAlert2()"))
    texto1.appendChild(evento1);
    texto2.appendChild(evento2);
}
function crearAlert1(){
    alert(texto1)
}
function crearAlert2(){
    alert(texto2)
}