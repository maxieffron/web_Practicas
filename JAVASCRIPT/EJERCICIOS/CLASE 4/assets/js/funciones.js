// ****** FUNCIONES ******

//Funcion Simple
function saludar()
{

    let nameUser = prompt ("Ingrese su nombre")

    alert(`HOLA ${nameUser}`)
    
}

// La invocamos
//saludar()


const number1 = Number(prompt("ingrese un Número"))
const number2 = Number(prompt("ingrese otro Número"))

//Función con Parámetros
function sumar(num1,num2)
{
    console.log (`La Suma es: ${num1 + num2}`)
}
sumar(number1,number2)


//Función con Retorno
function multiplicar(num1,num2)
{
    const resultado = num1 * num2
    return resultado
}

let res = multiplicar(number1,number2)
console.log(`El resultado de la multiplicación es: ${res}`)