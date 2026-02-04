//SISTEMA CRUD DE USUARIOS

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

let option = 0
let id = 6
let UsuarioEncontrado
let userSerach 

function mostrarMenu()

{

    while(option!==10)
    {
        option = Number(prompt(`Ingrese una opción:
                                1. Agregar Usuario
                                2. Eliminar Usuario
                                3. Modificar Usuario
                                4. Mostrar Usuarios
                                5. Buscar Usuario
                                6. Mostrar NOMBRE + APELLIDO
                                10. Salir         
                              `))

        
        switch(option)
        {
            case 1: //Agregar Usuario

                const nombre = prompt("Ingrese un Nombre")
                const apellido = prompt("Ingrese un Apellido")
                id++
                agregarUsuario(id,nombre,apellido)

                break; 

            case 2: //Eliminar Usuario
                userSerach = prompt(`Indique el nombre del usuario que quiere borrar`)

                UsuarioEncontrado = usuarios.find((elem) => elem.nombre === userSerach)
                if ( UsuarioEncontrado === undefined)
                {
                    alert(`El Usuario ${userSerach} NO EXISTE`)
                }
                else
                {
                    borrarUsuario(usuarios.findIndex((elem) => elem.id === UsuarioEncontrado.id))
                    
                }
            break;

            case 3: //Modificar Usuario
            
            break;

            case 4: //Mostrar Usuarios
                for (let usu of usuarios)
                {
                    console.log(`Usuario con: id: ${usu.id}, Nombre: ${usu.nombre}, Apellido: ${usu.apellido}`)
                }
            
            break;

            case 5: //Buscar Usuario
                
                userSerach = prompt(`Indique el nombre del usuario que quiere buscar`)

                BuscarUsuario(userSerach)
                
            break;

            case 6: //Mostrar NOMBRE + APELLIDO
                
            for (let usu of usuarios)
                {
                    console.log(`Usuario con Nombre: ${usu.nombre} y Apellido: ${usu.apellido}`)
                }
            
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

//function agregarUsuario(usuarios.push(new Usuario(id+1,nombre,apellido)))
function agregarUsuario(id,nombre,apellido)
{
    usuarios.push(new Usuario(id,nombre,apellido))
    return alert(`Se ha agregado el Usuario con:
    id: ${id}
    Nombre: ${nombre}
    Apellido: ${apellido}`)
}

function borrarUsuario(indiceUser)
{
    if (indiceUser === -1)
    {
        alert(`No se ha podido eliminar el Usuario ${usuarios[indiceUser].nombre}`)
    }
    else
    {
        alert(`Se ha eliminado el Usuario ${usuarios[indiceUser].nombre}`)
        usuarios.splice(indiceUser,1)    
    }
    
}

function BuscarUsuario(Usu)
{
    UsuarioEncontrado = usuarios.find((elem) => elem.nombre === userSerach)
    if ( UsuarioEncontrado === undefined)
    {
        alert(`El Usuario ${userSerach} NO EXISTE`)
    }
    else
    {
        
        alert(`Encontramos el Usuario con: 
        id: ${UsuarioEncontrado.id}
        Nombre: ${UsuarioEncontrado.nombre}
        Apellido: ${UsuarioEncontrado.apellido}`)
    }
}