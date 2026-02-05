//EJERCICIO: TENEMOS QUE HACER UN CRUD
class Usuario {

    constructor(id,nombre,apellido)
    {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
    }
}

const usuario1 = new Usuario(1,"Enzo","Francescoli")
const usuario2 = new Usuario(2,"Lionel","Messi")
const usuario3 = new Usuario(3,"Diego","Maradona")
const usuario4 = new Usuario(4,"Homero","Simpson")
const usuario5 = new Usuario(5,"Armando","Unfaso")
const usuario6 = new Usuario(6,"Mariana","Estevez")

const usuarios = [usuario1,usuario2,usuario3,usuario4,usuario5,usuario6]
console.log("INICIAL",usuarios)


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