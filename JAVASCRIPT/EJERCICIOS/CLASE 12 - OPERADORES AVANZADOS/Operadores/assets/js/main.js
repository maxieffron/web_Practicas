/* ****** OPERADORES AVANZADOS ****** */


//** Operador ++    **
//Son diferentes maneras de incrementar en 1 la variable
let numero = 3
numero = numero + 1 //--> Da 4
numero+=1 //--> Da 5
numero++ //--> Da 6

//** Operador Ternario **
//Se utiliza para simplificar un "if". 
// Ejemplo:

let edad = Number(prompt("Ingrese su edad:"))
let mensaje = ""
//****** Hacer esto ******
if (edad>=18)
{ 
    mensaje = "Puede comprar cerveza"
}
else { 
    mensaje = "No Puede comprar cerveza"
}
alert(mensaje)

//****** Es lo mismo que hacer esto ******
let mensaje2 = (edad>=18) ? "Op. Ternario: Puede comprar cerveza" : "Op. Ternario: No Puede comprar cerveza"
alert(mensaje2)


//** Operador AND. **
// Resume en una sola línea un if, solamente cuando se ejecuta algo verdadero.
// Ejemplo:
const carrito = []
//****** Hacer esto ******
if (carrito.length === 0)
{
    console.log("El carrito está vacío")
}

//****** Es lo mismo que hacer esto ******
(carrito.length === 0) && console.log("Op. AND: El carrito está vacío")