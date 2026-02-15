/* ****** AJAX y Fetch ****** */

/*
Fetch es un método que me permite hacer la petición http a algún servicio externo o API
Fetch me devuelve una promesa en un objeto Response.
Para acceder al contenido de ese Response, hay que hacer un pasito más.
Por eso se hace otro .then
*/
fetch('https://jsonplaceholder.typicode.com/todos/')

//Si la petición (Request) es exitoso, entonces va a ir por el .then()
.then((res)=>res.json()) //Transformamos ese Responde a un JSON para poder trabajarlo.
    
    //Esa transformación a JSON es una promesa. Y por lo tanto esperará una respuesta.
    .then((json)=> console.log(json))

    

// ****** VAMOS A HACER EL EJERCICIO DE VER Y ADMINISTRAR EL BLOG ******
programarAcciones()

function programarAcciones()
{
    programarBotonVer()
    programarBotonAdmin()
}

function programarBotonVer(){

    const btn = document.getElementById("ver")
    btn.addEventListener("click", ()=>{
            cargarListadoDePosts();
        })
}

function cargarListadoDePosts(){

    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((res)=>res.json())
        
    .then((json)=> mostrarListadoDePosts(json))

    .catch((error)=>alert("No se puede ver la info. Intente más tarde. Error: " + error))
}

function mostrarListadoDePosts(posts)
{
    const container = document.getElementById("appContainer")
    container.innerHTML = ''
    //Recorremos todos los posts que vienen en el JSON.
    //Dentro del JSON viene un array de objetos. Por eso podemos usar foreach().
    posts.forEach((blogpost)=>{
        //Vamos a tomar cada elemento por separado.
        mostrarPost(blogpost,container)

    })
}

function mostrarPost(post,div){

    const divPost = document.createElement("div")
    //"title" y "body" son parámetros del JSON que estoy consumiendo. 
    //Por eso se que se llaman así.
    divPost.innerHTML = `<h2>${post.title}</h2>
                         <p>${post.body.substr(0,20)}</p>`
    const btn = document.createElement("button")
    btn.innerHTML = `VER MÁS`
    btn.addEventListener("click",() =>{

        loadMoreInfo(post.id)
    })
    divPost.appendChild(btn)

    divPost.setAttribute("style","width:25%; padding:2%; border-radius:10px; border:1px solid #0099FF; margin:2%")
    divPost.style.background ="#E6CF99"
    div.appendChild(divPost) 
    
}

async function loadMoreInfo(idPost)
{
    //Al poner al final el "idPost" significa que solo queremos consultar un recurso.
    //Es decir, solo un objeto en particular.
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    let json = await response.json()
    mostrarPostById(json)

}


function mostrarPostById(post)
{
    const container = document.getElementById("appContainer")
    container.innerHTML = "" //Vacío el html
    container.innerHTML = `<h2 style="display:block"> ${post.title} </h2>
                           <p> ${post.body} </p> `
}


function programarBotonAdmin()
{

    const btn = document.getElementById("admin")
    btn.addEventListener("click", ()=>{
            cargarNuevoPost();
        })

}

function cargarNuevoPost()
{
    const titulo = prompt("Ingrese el título")
    const contenido = prompt("Ingrese el contenido")

    crearNuevoPost(titulo,contenido)

}

function crearNuevoPost(titulo,contenido)
{
    /* Todo lo que viene después de la ruta, son una serie de parámetros */
    fetch('https://jsonplaceholder.typicode.com/posts/',{
            method:'POST',
            body:JSON.stringify({
                title:'foo',
                body: 'bar',
                userId: 1,
            }),
            headers:{
                'Content-type':'application/json; charset=UTF-8',},
        })
 
    .then((response)=>response.json())
        
    .then((json)=> alert("Post creado correctamente."))

    .catch((error)=> alert("No se pudo crear el post. Error: " + error))
}