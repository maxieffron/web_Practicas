/* ****** SESSIONSTORAGE ****** */


//SetItem (Para escribir)
/*
    Recibe 2 parámetros:
    1) Key (Clave) --> Una clave para luego poder acceder a la información
    2) Value (Valor) --> El valor de lo que quiero guardar
*/
sessionStorage.setItem("nombreDeUsuario","Lionel Messi")

//GetItem (Para leer)
/*
    Recibe un solo parámetro:
    1) Key (Clave) --> La clave con la que accedemos al valor que queremos
*/
let nodoDiv = document.getElementById("contenedor")
let header2 = document.createElement("h2")
header2.innerText = sessionStorage.getItem("nombreDeUsuario")
header2.style.color = "#99FF00"
nodoDiv.appendChild(header2)
