/* ****** LIBRERÍA SWEETALERT ****** */

init()

function init(){

    saludarConSweetAlert()
    alertSinBotonDeConfirmacion()
    alertConImagenes()
    alertConEventos()

}

function saludarConSweetAlert()
{

    const botonSweet = document.getElementById("btnSweet")
    botonSweet.addEventListener("click",() => {

        Swal.fire({
            title:'Hola a todos!!',
            text:'Esto es un saludo con Sweet Alert',
            icon:'success',
            confirmButtonText:'Está muy piola'
        })
    })

}

function alertSinBotonDeConfirmacion()
{
    
    const botonSweet2 = document.getElementById("btnSweet2")
    botonSweet2.addEventListener("click",() => {

        Swal.fire({
            title:'Hola a todos!!',
            text:'Esto es un saludo con Botón de Confirmación',
            icon:'success',
            showConfirmButton:false,
            timer:2000
        })
    })

}

function alertConImagenes()
{
    const botonSweet3 = document.getElementById("btnSweet3")
    botonSweet3.addEventListener("click",() => {

        Swal.fire({
            title:'Buenas!! Cómo te baila?',
            text:'Esto es un saludo con Botón Alert con Imágenes',
            color:'#0099FF',
            icon:'success',
            imageUrl:'../images/logo_DaletDesign.png',
            imageWidth:200
        })
    })

}

function alertConEventos()
{

    const botonSweet4 = document.getElementById("btnSweet4")
    botonSweet4.addEventListener("click",() => {

        Swal.fire({
            title:'** Aprendiendo a usar Sweet Alert **',
            text:'Esto es un saludo con Botón Alert con Eventos',
            color:'#FF1C1C',
            background:'#B4F3FE',
            icon:'success',
            imageUrl:'../images/Oliver.png',
            imageWidth:200,
            showCancelButton: true,
            confirmButtonText: '¡VAMOS!',
            cancelButtonText:'¡NO QUIERO!'

        }).then((result) =>{

            if (result.isConfirmed){
                //Presioné el botón "confirmButtonText"
                alert('QUE BIEN!!')
            }
            else{
                //Presioné el botón "cancelButtonText"
                alert('QUE MAL')
            }

        })
    })
}