let nums = prompt("Introduce tres numeros separados").split(" ");
n1 = nums[0];
n2 = nums[1];
n3 = nums[2];


if (n1 && n2 && n3){
    if ((n1 > n2) && (n1 > n3)){
        alert("El numero mayor es: "+n1);
    }else if ((n2 > n1) && (n2 > n3)){
        alert("El numero mayor es: "+n2);
    }else{
        alert("El numero mayor es: "+n3);
    }
}else{
    alert("Error en los datos introducidos");
}