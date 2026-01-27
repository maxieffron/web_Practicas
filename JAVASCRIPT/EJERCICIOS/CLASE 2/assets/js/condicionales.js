
// CONDICIONALES
const datoUsuario = prompt("Ingrese una cadena")

if (datoUsuario === "SALUDAR")
{
    console.log ("HOLA")
}
else {
    console.log ("CHAU")

}

//CONDICIONALES ANIDADOS

const nombre = prompt("Ingrese un nombre");

if (nombre == "MAXI")
{
    console.log ("Ese soy yo!")
}
else if (nombre == "DANI") 
    {
    //console.log ("Mi nombre es",nombre);
    console.log ("Mi nombre es " + nombre)
    }
else 
{
    console.log ("Me autopercibo un auto rojo")
}