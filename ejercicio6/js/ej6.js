function compruebaLoteria(){
    let n = parseInt(document.getElementById("boleto").value);

    if(Number.isInteger(n)<5){
        if(n >=1 && n<60){
            //Se necesita el objeto XMLHttpRequest para poder hacer la petición al servidor
            let peticion = new XMLHttpRequest();
            //Tratar la respuesta
            peticion.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){ //200 petición se ejecutó correctamente
                    let resp = JSON.parse(this.responseText);
                    if(resp){
                        document.getElementById("salida").innerHTML = "Boleto con " + n + " aciertos";
                    }else{
                        document.getElementById("salida").innerHTML = "Boleto sin aciertos";
                    }
                }
            }
            //Hacer la petición al servidor
            peticion.open("GET","ej6.py?numeros="+n,true);
            peticion.send();
        }else{
            alert("No está entre 1 y 60");
        }
    }else{
        alert("No hay 5 números");
    }
}
