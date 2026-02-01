/*
1) Cerar un constructor de un Empleado (Nombre y Apellido)
2) Pedirle al usuario que ingrese los datos del empleado 
e imprimir el objeto por consola
*/

function Empleado(nombre,apellido){

    this.nombre = nombre
    this.apellido = apellido
}

//Forma 1:
const nombre = prompt("Ingrese el nombre")
const apellido = prompt("Ingrese el el apellido")

const empleadoUno = new Empleado(nombre,apellido)
/*
console.log(`Empleado Uno: 
    Nombre: ${empleadoUno.nombre} y Apellido: ${empleadoUno.apellido} `)
*/
console.log(empleadoUno)

//Forma 2:
const empleadoDos = new Empleado(prompt("Ingrese el nombre"),prompt("Ingrese el el apellido"))
/*
console.log(`Empleado Dos: 
    Nombre: ${empleadoDos.nombre} y Apellido: ${empleadoDos.apellido} `)
*/
console.log(empleadoDos)