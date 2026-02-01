//CONSTRUCTOR CON FUNCIONES

function Producto(id,nombre,precio)
{
    this.id = id
    this.nombre = nombre
    this.precio = precio

    //Ejemplo de Método con función común
    this.getIva = function(){
        const iva = this.precio * 0.21
        return iva
    }
    //Ejemplo de Método con Arrow Function
    this.getPrecioFinal = () => this.precio + this.getIva()
}

const producto = new Producto(0,"Carne",200)
console.log("IVA:",producto.getIva())
console.log("PRECIO FINAL",producto.getPrecioFinal())

const productoDos = new Producto(1,"Tomates",410)
console.log("IVA:",productoDos.getIva())
console.log("PRECIO FINAL",productoDos.getPrecioFinal())


//CÓMO SABER SI UNA PROPIEDAD ESTÁ DEFINIDA EN MI OBJETO? CON "IN"
//Ejeplo: Quiero saber si el atributo "precio" está definido dentro de la Objeto
console.log("Atributo Precio:","precio" in producto)

//RECORRER LAS PROPIEDADES(LOS NOMBRES DE LOS ATRIBUTOS Y MÉTODOS) DE MI OBJETO
for (let prop in producto)
{
    console.log(prop)
}