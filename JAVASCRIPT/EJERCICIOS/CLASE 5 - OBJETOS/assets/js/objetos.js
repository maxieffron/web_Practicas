// ****** OBJETOS ******

//Ejemplo de un Método Constructor:
//Pasar parámetros
function Carta(id, numero, color, tipo){

    this.id = id
    this.numero = numero
    this.color = color
    this.tipo = tipo
}

//Crear un objeto
const cartaUnoRojo = new Carta(0,1,"rojo","normal")
const cartaReverseVerde = new Carta(1,2,"verde","reverse")
const cartaDosAzul = new Carta(2,2,"azul","normal")

console.log(cartaUnoRojo)
console.log(cartaReverseVerde)
console.log(cartaDosAzul)


//Otro Ejemplo de un Método Constructor:
//Pasar como parámetro un objeto
function CartaLiteral(objeto){

    this.id = objeto.id
    this.numero = objeto.numero
    this.color = objeto.color
    this.tipo = objeto.tipo
}

const carteTomeCuatro = new CartaLiteral({id:10,numero:-1,color:"",tipo:"Tome 4"})
console.log(carteTomeCuatro)