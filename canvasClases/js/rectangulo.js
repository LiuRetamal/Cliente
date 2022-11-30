class Rectangulo {
    constructor (an, al){
        this._ancho = an;
        this._alto = al;
        this._area = (an*al);
        this._perimetro = (an*2)+(al*2);
    }

    //Get 

    get ancho(){
        return this._ancho;
    }
    get alto(){
        return this._alto;
    }
    
    //Metodos Area y Perimetro
    get area (){
        return this._area;
    }
    get perimetro (){
        return this._perimetro;
    }
}