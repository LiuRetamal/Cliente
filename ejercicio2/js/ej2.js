function validaDatos(){
    let resp = true;
    let texto = document.getElementById("tex").value;
    let num = parseInt(document.getElementById("num").value);
    if(texto.length > 10){
        alert("El texto no tiene menos de 10 caracteres");
        resp = false;
    }else if((Number.isInteger(num).length) > 100){
        alert("El numero no tiene menos de 100 caracteres");
        resp = false;
    } 
    return resp;
}
