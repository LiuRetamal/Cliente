onload=principal;

class Calcula{

    constructor(){
        this.operando1 = 0;
        this.operando2 = 0;
        this.operacion = 0; //1 +, 2 -, 3 *, 4 /
    }

    completaOper1(n){
        this.operando1 = this.operando1*10 + n;
    }
    completaOper2(n){
        this.operando2 = this.operando2*10 + n;
    }
    
    igual(){
        switch(this.operacion){
            case 1:
                return suma();
                break;
            case 2:
                return resta();
                break;
            case 3:
                return multiplicacion();
                break;
            case 4:
                return division();
                break;
            default:
                return -1;
        }
    }
    suma(){
        return operando1 + operando2;
    }
    resta(){
        return operando1 - operando2;
    }
    multiplicacion(){
        return operando1 * operando2;
    }
    division(){
        if(operando2==0){
            return"division por 0";
        }
        return operando1 / operando2;
    }
}

let listaBotones;
let simboloBotones = ["7","8","9","\"+\"","4","5","6","\"-\"","1","2","3","\"*\"","\",\"","0","\"=\"","\"/\""];
let cal = new Calcula();
function principal() {
    dibujaCalculadora();
}

function dibujaCalculadora() {
   
    let calculadora = document.getElementById("calculadoraId");
   
    listaBotones = document.getElementById("calculadoraId").childNodes;
    for (let index = 1; index < 17; index++) {
        let texto = document.createElement("p");
        texto.setAttribute("class","boton")
        texto.setAttribute("onclick","pulsado("+simboloBotones[index-1]+")");
        calculadora.appendChild(texto);
        listaBotones[index].innerHTML=simboloBotones[index-1];
    }
}

function pulsado(n) {
    console.log(n);
}