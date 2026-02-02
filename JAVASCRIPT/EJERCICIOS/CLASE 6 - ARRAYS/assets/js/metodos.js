// ******     MÉTODOS DE LOS ARRAYS ******

//ARRAY DE OBJETOS

const productos = [
    {
        id:1,
        nombre:"leche",
        precio:2000
    },

    {
        id:2,
        nombre:"Carne",
        precio:3600
    },

    {
        id:3,
        nombre:"Tomate",
        precio:1380
    }

]

console.log(productos)

//Recorrer el array con Forma 1:
console.log("RECORRER CON FOR:")
for (let i=0;i<productos.length;i++)
{
    console.log(productos[i])
}


//Recorrer el array con Forma 2:
console.log("RECORRER CON FOR OF:")
for (let producto of productos)
{
    console.log(producto.nombre)
}
