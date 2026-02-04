// ****** FUNCIONES DE ORDEN SUPERIOR ******

//Función que retorna una función
function mayorQue(n)
{
    return (m) => m>n
}


const mayorQueDiez = mayorQue(10)
console.log("Función que retorna una función: ",mayorQueDiez(5)) //Devuelve false porque (5>10) es Falso


//Función que recibe una fución por parámetro
function porCadaUno(arr,fun)
{   
    //Recorremos todo el array
    for (const elem of arr)
    {
        //Se llama a la función que se pasó como parámetro
        fun(elem)
    }
}

//porCadaUno([1,2,3,4,5,6],console.log)
//porCadaUno(["Hola","Maxi","cómo","te","va","?"],alert)
porCadaUno(["Hola","Maxi","cómo","te","va","?"],console.log)

