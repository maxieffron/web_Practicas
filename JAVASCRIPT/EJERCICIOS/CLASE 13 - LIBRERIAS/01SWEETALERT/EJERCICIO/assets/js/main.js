/* ****** LIBRERÍAS ****** */

init()

function init(){

    saludarConSweetAlert()
}

function saludarConSweetAlert()
{
    const botonSweet = document.getElementById("btnSweet")
    botonSweet.addEventListener("click",() => {

        const name = prompt('Ingrese su nombre')

        Swal.fire({
            title:`Hola, ${name}!!`,
            text:`Estamos saludando al genio de ${name}`,
            color:'#FF0000',
            background:'#F2E7CC',
            icon:'success',
            confirmButtonText:'Bien ahí!'
        })
    })
}