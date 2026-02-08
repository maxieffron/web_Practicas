/* ****** LOCALSTORAGE ****** */


//SetItem (Para escribir)
/*
    Recibe 2 parámetros:
    1) Key (Clave) --> Una clave para luego poder acceder a la información
    2) Value (Valor) --> El valor de lo que quiero guardar
*/
localStorage.setItem("almacenamiento","GALLETITAS")

localStorage.setItem("autos","chevrolet")

let edad = Number(prompt("Ingrese su edad: "))

localStorage.setItem("edadUsuario",edad)

//GetItem (Para leer)
/*
    Recibe un solo parámetro:
    1) Key (Clave) --> La clave con la que accedemos al valor que queremos
*/
let edadUsuario = localStorage.getItem("edadUsuario")

const nodo = document.createElement("div")
nodo.innerHTML = `<h1> ${edadUsuario}</h1>`
document.body.appendChild(nodo)