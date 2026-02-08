/* ****** JSON ****** */

const usuario = {

    id:1,
    nombre:"Armando",
    apellido: "Unchurro"
}

//PARA GUARDAR UN OBJETO EN UN STORAGE, LO TENGO QUE TRANSFORMAR EN UN JSON

//JSON.stringify: Convierte un objeto a un string JSON
localStorage.setItem("usuario",JSON.stringify(usuario))

//PARA LEER UN JSON QUE ESTÁ EN EL STORAGE, LO TENGO QUE CONVERTIR A OBJETO
//Esto se logra con: JSON.parse
console.log(JSON.parse(localStorage.getItem("usuario")))

