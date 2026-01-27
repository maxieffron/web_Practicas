/*
OPERACIONES: SUMA, RESTA, MULTIPLICACIÓN Y DIVISIÓN
 */

//Suma
let num1 = 6;
let num2 = 2;
let resultadoSuma = num1 + num2
console.log ("SUMA:",resultadoSuma);

//Resta
let num3 = 28;
let num4 = 11;
let resultadoResta = num3 - num4
console.log ("RESTA:",resultadoResta);

//Multiplicación
let num5 = 2;
let num6 = 32;
let resultadoMul = num5 * num6;
console.log("MULTIPLICACIÓN:",resultadoMul);

//División
let num7 = 40;
let num8 = 8;
let resultadoDiv = num7 / num8;
console.log("DIVISIÓN:", resultadoDiv);


//****** CONCATENACIÓN ******

let nombre = "Lionel";
let apellido = "Messi";
let nombreCompleto = nombre + " " + apellido;
console.log("CONCAT:", nombreCompleto);

//****** CASTEO DE DATOS ******
let nombre2 = "24"
let apellido2 = 16
let nombreRaro = nombre2 + apellido2
console.log("NOMBRE RARO:", nombreRaro) //Va a mostrar: 2416. O SEA, UNA CADENA DE CARACTERES

//PEEEEEEEERO, SI LO CASTEAMOS:
nombre2 = Number("24")
nombreRaro = nombre2 + apellido2
console.log("CASTEO:",nombreRaro)