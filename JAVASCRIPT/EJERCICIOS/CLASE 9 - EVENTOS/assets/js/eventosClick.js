// ****** EVENTOS CLICK ******


//addEventListener
const botonSaludar = document.getElementById("saludar")

/* Recibe 2 parámetros:
  1) El Evento
  2) La acción que quiero hacer. Una función, una llamada a función, etc...
 */
botonSaludar.addEventListener("click",
    () => {
        alert("Hola, soy el botón Saludar")
    }
)


//onClick: Este evento espera que se le asigne una función o una llamada a función
const botonMenu = document.getElementById("mostrarMenu")
botonMenu.onclick = ()=> {
    botonMenu.innerHTML = "Soy el Botón Mostar Menu"

}