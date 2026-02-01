/*
DEFINICIÓN DE UNA CLASE:
*/

class Carta {
    //Método Constructor
    constructor(id,numero,color,tipo)
    {
        this.id = id
        this.numero = numero
        this.color = color
        this.tipo = tipo

    }

    //Métodos
    getColor(){
        return this.color
    }

}

const rojoUno = new Carta(1,1,"rojo","normal")
rojoUno.getColor()
