let res = 0;
let n = prompt("Introduce un numero")
console.log(n)


if (n > 0 && n < 11){
    console.log("Tabla del ", n);
    for (i = 1; i <= 10; i++) {
        res=i*n;
        console.log(i, "*",n,"=",res);
    }
}else
    console.log("Error")
//owo 
console.log("OwO")    