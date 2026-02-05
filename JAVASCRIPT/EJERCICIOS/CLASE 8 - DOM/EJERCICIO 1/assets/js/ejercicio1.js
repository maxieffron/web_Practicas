//****** EJERCICIO ******

let nombre = prompt("Ingrese su nombre")

const mih1 = document.getElementsByTagName("h1")[0]
//Se inserta texto en mi h1
mih1.innerText = `¡¡Bienvenido, ${nombre}!!`


//Cambio el contenido del div
const miDiv = document.getElementById("miContenido")

//Se inserta contenido HTML
miDiv.innerHTML = `<b>Esto es negrita </b> </br>
                   Esto NO es negrita </br>
                   <i>Esto es Itálica </i></br>
                   <p>Esto NO es un párrafo </p>
                  `