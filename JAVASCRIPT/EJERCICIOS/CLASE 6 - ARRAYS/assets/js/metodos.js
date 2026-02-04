// ******     MÉTODOS DE LOS ARRAYS ******

//ARRAY DE OBJETOS

const productos = [
    {
        id:1,
        nombre:"leche",
        precio:2000
    },

    {
        id:2,
        nombre:"Carne",
        precio:3600
    },

    {
        id:3,
        nombre:"Tomate",
        precio:1380
    }

]

console.log(productos)

//Recorrer el array con Forma 1:
console.log("RECORRER CON FOR:")
for (let i=0;i<productos.length;i++)
{
    console.log(productos[i])
}


//Recorrer el array con Forma 2:
console.log("RECORRER CON FOR OF:")
for (let producto of productos)
{
    console.log(producto.nombre)
}


/* ** Método splice: ** Es un método que me permite borrar un elemento del array.
Pero no necesariamente un elemento del inicio o final del array.
Se usa como un "desde-hasta" */

//Ejemplo:
const perros = ["budhis","firulais","silver","lucy"]
console.log("PERROS: ",perros)

//Esto hace que se borre del array:
// - A PARTIR DE LA POSICIÓN
// - DOS ELEMENTOS
perros.splice(1,2)
//Aquí se borraron: "firulais" y "silver"
console.log("PERROS: ",perros)



/* ** Método join: **
Este método devuelve una cadena delimitada con lo que yo pase por parámetro
*/
const gatos = ["loki","michi","ursula","zuko","pola"]
console.log("GATOS: ", gatos)
const texto = gatos.join(" * ")
console.log("GATOS CON CARACTER DELIMITADOR:" ,texto)



/* ** Método concat: **
Este método lo que hace es unir 2 o más arrays
*/

//Ej: Esto me va a unir el array de perros con el de gatos
const mascotas = perros.concat(gatos)
console.log("MASCOTAS: ",mascotas)


/* ** Método slice: **
Este método devuelve una copia del array original.
Solo se le pasa por parámetro:
- INDICE DESDE DONDE ARRANCA
- HASTA DONDE LLEGA (NO SE INCLUYE ESE ÚLTIMO ELEMENTO)
*/
const nombres = ["Maxi","Enzo","Alberto","Martulina","Chicote","Ale"]
console.log("NOMBRES: ",nombres)
//En este ejemplo me guardo: "Enzo", "Alberto", "Martulina"
//Recordar que el elemento del índice 4 no se incluye
const menosNombres =  nombres.slice(1,4)
console.log("MENOS NOMBRES: ",menosNombres)


/* ** Método indexOf: **
Indica en cuál índice se encuentra un elemento determinado.
Si no existe ese elemento, se devuelve -1
*/

const deportes = ["Fútbol","Pádel","Tenis","Basket","Hockey","Curling"]
console.log("DEPORTES: ",deportes)
let buscoDeporte = prompt("Ingrese un Deporte")
const indice = deportes.indexOf(buscoDeporte)

if (indice === -1)
{
    console.log("El deporte ingresado no existe en el array 'deportes'")
}
else 
{
    console.log("El deporte ingresado existe en el array, en el Índice ", indice)
}

/* ** Método includes: **
Es similiar al indexOf. La diferencia es que este método solo me dice
si lo que estoy buscando en el array existe o no. O sea, devuelve un booleano
*/

let nuevoDeporte = prompt("Ingrese un nuevo Deporte")
const bExisteDeporte = deportes.includes(nuevoDeporte)
if (bExisteDeporte)
{
    alert(`El deporte ${nuevoDeporte} SÍ EXISTE en el array de deportes`)
}
else 
{
    alert(`El deporte ${nuevoDeporte} NO EXISTE en el array de deportes`)
}



/* ** Método reverse: **
Este método me permite voltear el array
*/
deportes.reverse()
console.log("REVERSE: ",deportes)