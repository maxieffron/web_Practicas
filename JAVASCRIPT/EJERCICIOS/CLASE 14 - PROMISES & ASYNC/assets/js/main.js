/* ****** PROMISES & ASYNC ****** */

/*
PROMISES o Promesas: Tiene su propio constructor "Promise".
Tiene 2 parámetros: resolve y reject. Ambos son funciones.
Una promesa devuelve un estado. Mientras la promesa no es resuelta, se encuentra
en estado "Pending" (Pendiente).

- Si la promesa se resuelve, llama a "resolve" --> La promesa cambiará 
su estado a "fulfilled", con el valor enviado a resolve().

- Si la promesa NO se resuelve, llama a "reject" --> La promesa cambiará
 su estado a "rejected" con el valor enviado a reject().
*/

/*
const promise = new Promise((resolve,reject) => {

    if (true)
    {
        resolve("Se resolvió la promesa")
    }
    else
    {
        reject("NO se resolvió la promesa")
    }


})

console.log(promise)
*/


//Voy a hacer un ejemplo más real, donde voy a crear una función.
const promise = (res) => new Promise((resolve,reject) => {

    if (res)
    {
        resolve({status:200, msg:"ok",id:6})
    }
    else
    {
        reject("NO se resolvió la promesa")
    }

})

promise(true)

//Si se resolvió la promesa, fue por el resolve.
//Entonces, se ejecuta el ".then". El ".then" espera como parámetro una función.
//Esto se ejecuta en caso de éxito.
.then((res)=> console.log(res)
)
//Si no se resolvió la promesa, fue por el "reject".
//El .catch() es una manejador de errores.
.catch((error) => console.log(error))

//Lo que vaya dentro de finally, se va a ejecutar pase lo que pase.
//Es decir, haya habido error o no.
.finally(() => console.log("LO LOGRAMOS"))
