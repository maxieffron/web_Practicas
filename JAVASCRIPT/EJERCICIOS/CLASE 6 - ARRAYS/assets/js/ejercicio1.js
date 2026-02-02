/*
- Pedir 6 números
- Imprimir cada número ingresado
- Imprimir el Array sin el último elemento
- Imprimir el Array sin el primer elemento

- Agregar un nuevo número e imprimir el array completo
*/

let personas = []
for (let i=0;i<=6;i++)
{
    const nombre = prompt("Ingrese su nombre")
    personas[i] = nombre
    console.log("Nombre: ",personas[i])
}

//Array Completo
console.log("ARRAY COMPLETO",personas)

//Sin último elemento
personas.pop()
console.log("SIN ÚLTIMO NOMBRE: ",personas)

//Sin el primer elemento
personas.shift()
console.log("SIN PRIMER NOMBRE: ",personas)

//Agrego un nuevo nombre al principio
personas.unshift(prompt("Ingrese un nuevo nombre:"))
console.log("CON NUEVO NOMBRE AL PRINCIPIO: ",personas)

//Agrego un nuevo nombre al final
personas.push(prompt("Ingrese un nuevo nombre:"))
console.log("CON NUEVO NOMBRE AL FINAL: ",personas)