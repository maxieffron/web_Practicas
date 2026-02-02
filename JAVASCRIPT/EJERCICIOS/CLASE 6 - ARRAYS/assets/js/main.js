// ****** ARRAYS ******

//Números
const misNumeros =[18,9,6,22,19,84]
console.log("NÚMEROS: ",misNumeros)

//Cadenas
const misPalabras = ["Hola","Maxi","Pelota","River Plate"]
console.log("PALABRAS: ", misPalabras)

//Booleanos
const misBooleanos = [true,false,true,true,false,true]
console.log("BOOLEANOS: ",misBooleanos)


//Mixtos (Se mezclan diferentes tipos de datos. NO ES LO IDEAL)
const mixto = ["Messi",10,true,{nombre:"Lionel",edad:65}]
console.log("MIXTO: ", mixto)



// ****** POSICIONES E ÍNDICES ******
const misNumbers = [10,82,65,70,35,40,6,90]

/*
Los índices siempre arrancan desde el cero.
Es decir que:
- La posición Nº1 corresponde al Índice 0.
- La posición Nº2 corresponde al Índice 1.
- La posición Nº7 corresponde al Índice 8.
........
- La posición NºX corresponde al Índice X-1.
*/

//Quiero ver el 1er elemento:
console.log(misNumbers[0]) //10

//Quiero ver el 6to elemento:
console.log(misNumbers[5]) //40

// ** RECORRER UN ARRAY **

//Forma Nº1:
for (let i=0;i<=5;i++)
{
    console.log("CICLO FOR: ",misNumbers[i])
}


// ****** PROPIEDADES DE LOS ARRAYS ******
const numeritos = [46,92,5,60,86,55,90,8,33,20,87,79]

console.log(`Cantidad de Elementos del Array: ${numeritos.length}`)

//Forma Nº2 de recorrer un array:
for (let j=0;j<numeritos.length;j++)
{
    console.log("Elemento " + j + ": " + numeritos[j])
}


//push: Pone un elemento al final del array
numeritos.push(26)
console.log("Elementos del Array (push): ", numeritos)


//unshift: Pone un elemento al principio del array
numeritos.unshift(15)
console.log("Elementos del Array (unshift): ",numeritos)


//pop: Quita un elemento del final del array
numeritos.pop()
console.log("Elementos del Array (pop): ",numeritos)

//shift: quita un elemento al principio del array
numeritos.shift()
console.log("Elementos del Array (shift): ",numeritos)