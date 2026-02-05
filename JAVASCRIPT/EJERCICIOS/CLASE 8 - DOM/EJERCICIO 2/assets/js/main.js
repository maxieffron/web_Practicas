//EJERCICIO: TENEMOS QUE HACER UN CRUD


const mascotas = ["firulais","Ringo","Goku","Silver","Jack","Noia"]

const nodoH1 = document.getElementsByTagName("h1")[0]
nodoH1.innerText = "MASCOTAS"

const miDiv = document.getElementById("miContenido")

const miListaUL = document.createElement("ul")

mascotas.forEach((masc) => {
    
    const misItemsLI = document.createElement("li")
    
    //Con esto le cambiamos un atributo(En el ejemplo, le cambiamos el estilo)
    miListaUL.setAttribute("style","list-style-type:none;border:1px solid blue")
    
    misItemsLI.innerText = masc

    miListaUL.appendChild(misItemsLI)

    misItemsLI.setAttribute("style","border: 1px solid red;padding:10px")
})


miDiv.setAttribute("style","border: 2px solid green")
miDiv.appendChild(miListaUL)

document.body.appendChild(miDiv)










/*
function mostrarMenu()

{
    let option = 0

    while(option!==10)
    {
        option = Number(prompt(`Ingrese una opción:
                                1. Agregar Usuario
                                2. Eliminar Usuario
                                3. Modificar Usuario
                                4. Mostrar Usuarios
                                5. Buscar Usuario
                                6. Filtrar por NOMBRE y/o APELLIDO
                                10. Salir         
                              `))

        
        switch(option)
        {
            case 1: //Agregar Usuario

                
                agregarUsuario(nombre,apellido)
                break; 

            case 2: //Eliminar Usuario
                
            borrarUsuario()
                 break;

            case 3: //Modificar Usuario

                modificarUsuario()
                break;

            case 4: //Mostrar Usuarios
                
                mostrarUsuarios()
                break;

            case 5: //Buscar Usuario
                
                BuscarUsuario()
                break;

            case 6: //Filtrar por NOMBRE y APELLIDO
                
                
            
            break;

            case 10: //Salir
                alert(`¡¡Muchas gracias por usar nuestra App!!`)
            break;

            default: //Defecto
                alert(`La opción seleccionada no es válida. Intente nuevamente.`)
            break;

        }

    }


}



function inicializarAplicacion()
{
    let nombre = prompt("Ingrese su nombre")

    const miH1 = document.getElementById("miH1")
    miH1.innerText = `¡¡Bienvenido, ${nombre}!!`

    const miH2 = document.getElementById("miH2")
    miH2.innerText = "SISTEMA DE GESTIÓN DE USUARIOS"

    mostrarMenu()
}

function mostrarUsuarios()
{   
    //Creamos un elemento HTML
    const nodoUL = document.createElement("ul") //<ul></ul>
    usuarios.forEach((usuario) =>{
        
        //Definimos tantos elementos "li" como cantidad de usuarios tenga en el array de usuarios
        const nodoLI = document.createElement("li") //<li></li>
        nodoLI.innerText = `Usuario ${usuario.nombre} ${usuario.apellido}`

        //Le agregamos a la lista "ul" todos sus hijos "li"
        nodoUL.appendChild(nodoLI)

    })

    document.body.appendChild(nodoUL)

}
    */