/* ****** OPERADORES AVANZADOS ****** */

/*
EJERCICIO Nº1: USANDO OPERADORES AVANZADOS.
1) Al ingresar el nombre de un usuario, escribir un mensaje de bienvenida.
2) Si el usuario no ingresó su nombre, tiene 2 intentos para hacerlo.
Luego de esos dos intentos, se debe mostrar un mensaje que diga
"No podemos continuar. Por favor comuníquese con el Administrador del Sistema."
*/

const divLogin = document.getElementById("divLogin")
//Creamos un botón dentro del div del login
const btnLogin = document.createElement("button")
btnLogin.id = "botonLogin"
btnLogin.innerHTML = "Login"
divLogin.appendChild(btnLogin)

btnLogin.addEventListener("click",() => {
    let nombre = ""
    let cantIntentos = 0

    
    do {
        
        nombre = prompt("Ingrese su Nombre")
        

       cantIntentos = (nombre === "") ? cantIntentos+1 : 9999


    }while(cantIntentos<2)
       
    let msg = (cantIntentos === 9999) ? 
    `Bienvenido, ${nombre}`
    : `No podemos continuar. Por favor comuníquese con el Administrador del Sistema.`

    alert(msg) 
})
