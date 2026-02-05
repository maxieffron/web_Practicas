// ****** DOM ******


//body
const nodoPrincipal = document.body

console.log(nodoPrincipal)


//getElementById() --> Obtenemos un nodo del documento a través de su "id"
//O sea que puedo acceder a un solo elemento
const nodoDiv = document.getElementById("miContenidoDiv")
console.log("DIV:",nodoDiv)


//getElementsByClassName() --> Obtenemos un nodo del documento a través de su "class"
//O sea que puedo acceder a un cojunto de elementos
const nodoParrafo = document.getElementsByClassName("miParrafo")
console.log("miParrafo",nodoParrafo)


//getElementsByTagName() --> Obtenemos un nodo del documento a través de su etiqueta (tag)
//O sea que puedo acceder a uno o varios conjuntos de elementos
const nodosH1 = document.getElementsByTagName("h1")
console.log("H1",nodosH1)


//Recorremos la colección de párrafos:
console.log("TODOS LOS PÁRRAFOS")
for (let parrafo of nodoParrafo)
{
    console.log(parrafo)
}