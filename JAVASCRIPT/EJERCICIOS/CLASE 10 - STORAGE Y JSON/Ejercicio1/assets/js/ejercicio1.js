/* ****** STORAGE Y JSON ****** */

/*
EJERCICIO Nº1: Cambiar el modo de vista de la página principal
Para eso, hay que agregar un botón que cambie todo.
*/




//Si el LocalStorage no tiene nada, por defecto asignamos un no.
let modoOscuro = localStorage.getItem("modoOscuro") || "no"
let nodoContenedor = document.getElementById("contenedor")

nodoContenedor.innerHTML = `<button id="btnChangeMode"> Cambiar a Modo Oscuro </button>`
let btnChangeMode = document.getElementById("btnChangeMode")
aplicarModo(modoOscuro)


btnChangeMode.addEventListener("click", () =>
    {
        modoOscuro = localStorage.getItem("modoOscuro") === "no" ? "si" : "no"
        aplicarModo(modoOscuro)
    })

function aplicarModo(modo)
{
    if (modo === "si")
    {
        //CAMBIAR A MODO OSCURO
        CambiarModoVista("black","si","white","white","black")
                        
    }
    else {
        //CAMBIAR A MODO CLARO
        CambiarModoVista("white","no","black","black","white")
    }
}

function CambiarModoVista(bgBody,lSEsOscuro,fontColorH1,bgbtnChangeMode,fontColorbtnChangeMode)
{
    
    localStorage.setItem("modoOscuro",lSEsOscuro)
    //Cuerpo
    document.body.style.backgroundColor= bgBody

    //h1
    let soyH1 = document.getElementsByTagName("h1")
    if (soyH1.length > 0) {
        soyH1[0].style.color = fontColorH1;
    }
    

    //Botón
    btnChangeMode.style.backgroundColor= bgbtnChangeMode
    btnChangeMode.style.color = fontColorbtnChangeMode
    if (lSEsOscuro ==="no")
    {
        btnChangeMode.innerText = "Cambiar a Modo Oscuro"
    }
    else{
        btnChangeMode.innerText = "Cambiar a Modo Claro"
    }
    
    
}