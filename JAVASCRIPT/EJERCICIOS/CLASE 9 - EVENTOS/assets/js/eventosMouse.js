// ****** EVENTOS DE MOUSE ******


const botonSaludar = document.getElementById("saludar")
const botonMenu = document.getElementById("mostrarMenu")

//mouseover --> Cuando se pasa el mouse por encima del botón
botonSaludar.addEventListener("mouseover",
    ()=> {
        botonSaludar.setAttribute("style","background-color:#99FF00")
    })


//mouseout --> Cuando se quita el mouse de encima del botón
botonSaludar.addEventListener("mouseout",
    ()=> {
        botonSaludar.setAttribute("style","none")
    })

//mousedown --> Eventos que suceden mientras mantengo apretado del mouse
botonMenu.addEventListener("mousedown",
    ()=> {
        
        document.body.setAttribute("style","background-color:#E6CF99")
    })

//mouseup --> Eventos que suceden una vez que solté el apretado del mouse
botonMenu.addEventListener("mouseup",
    ()=> {
        
        document.body.setAttribute("style","none")
    })