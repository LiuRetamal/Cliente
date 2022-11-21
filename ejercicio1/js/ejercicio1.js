onload=principal; //carga el html

function principal(){
    let num = prompt("Introduce 4 números"); //variable para números que se escribe
    let media = sum(parseInt(num))/4; //variable para guardar la media.

    if (Number.isInteger(num)){
        num=true
    }else{
        num=alert("La media es "+media) 
    }
    
}