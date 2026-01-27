/*
 Las variables:
 - Siempre deben arrancar con una letra, con el signo $ o con un guión bajo
 - Si la variable tiene más de una palabra, separalas con un guión bajo

 - Las constantes siempre se deben declarar en mayúsculas
 */


/* DECLARACIÓN DE VARIABLES*/

//var (ESTO NO SE DEBE USAR. SE SOLÍA USAR PARA VARIABLES GLOBALES. PERO HOY YA NO SE USA)
var mascota = "Perro"
console.log(mascota)


//let (PARA VARIABLES, MEJOR USAR ESTA)
let jugador = "Lionel Messi"
console.log(jugador)


//const (SE USA PARA CONSTANTES)
const EDAD = 18
console.log(EDAD)

mascota = "León"
//Muestra por consola el contenido de la variable mascota y su tipo de dato
console.log(mascota,typeof mascota)