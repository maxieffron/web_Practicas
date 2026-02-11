/* ****** LIBRERÍAS ****** */

init()

function init(){

    agregarAccionConToastify()
    agregarAccionConToastifyStyled()
    agregarAccionConToastifyAction()
    agregarAccionConToastifyDestiny()

}

function agregarAccionConToastify()
{
    const btn = document.getElementById("btnTOAST")
    btn.addEventListener("click",() =>{
        
        Toastify({

            text:"Esto es un toast!",
            duration:2000
        }).showToast()


    })
}

function agregarAccionConToastifyStyled()
{
    const btn = document.getElementById("btnTOAST2")
    btn.addEventListener("click",() =>{
        
        Toastify({

            text:"Esto es un toast CON ESTILO!",
            gravity:'bottom',
            position:'left',
            style:{
                background:'purple',
                color:'orange'
            },
            duration:2000
        }).showToast()


    })

}

function agregarAccionConToastifyAction()
{
    const btn = document.getElementById("btnTOAST3")
    btn.addEventListener("click",() =>{
        
        Toastify({

            text:"Esto es un toast CON ACCIONES!",
            gravity:'top',
            position:'center',
            style:{
                background:'#0099FF',
                color:'#FF9999'
            },
            duration:3000,
            onClick: () =>{
                
                Toastify({
                text: 'Clickeaste un Toast',
                duration:1500,
                position:'left',
                gravity:'bottom'

                }).showToast()
                
            }

        }).showToast()


    })

}


function agregarAccionConToastifyDestiny()
{

    const btn = document.getElementById("btnTOAST4")
    btn.addEventListener("click",() =>{
        
        Toastify({

            text:"Esto es un toast A DESTINO!",
            gravity:'top',
            position:'center',
            style:{
                color:'red'
            },
            destination:'https://www.ole.com.ar/',
            duration:3000
        }).showToast()


    })

}