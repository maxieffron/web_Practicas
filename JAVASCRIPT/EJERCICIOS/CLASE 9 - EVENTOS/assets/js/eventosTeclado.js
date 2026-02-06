// ****** EVENTOS DE TECLADO ******

const boton3 = document.getElementById("boton3")

//onchange --> Cuando cambia un valor presionando teclas y luego presiono "enter" o
//hago click fuera de ese campo. Es decir, CUANDO PIERDE EL FOCO.
const input2 = document.getElementById("input2")
input2.addEventListener("change",
    ()=> {
        input2.setAttribute("style","color:red")
        
    }

)

//keydown => Cuando se presiona una tecla
const input1 = document.getElementById("input1")
input1.addEventListener("keydown",
    ()=> {
        document.body.setAttribute("style","background-color:#2E5AD1")
        alert(input1.value)
    }

)


//keyup => Cuando se suelta una tecla
input1 = document.getElementById("input1")
input1.addEventListener("keyup",
    ()=> {
        document.body.setAttribute("style","background-color:#B835CA")
        alert(input1.value)
    }

)