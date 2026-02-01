function mostrarMenu()
{
    let opcion = 0
    let num1 = 0
    let num2 = 0

    

    while(opcion!==5)
    {
        let resul = 0
        opcion = Number(prompt(`Ingrese una opción:
                                1. SUMA
                                2. RESTA
                                3. MULTIPLICACIÓN
                                4. DIVISIÓN
                                5. FIN`))

        if(opcion!==5)
        {
            num1 = Number(prompt("Ingrese un número"))
            console.log(num1)
            num2 = Number(prompt("Ingrese otro número"))
            console.log(num2)
        }

        switch(opcion)
        {
            case 1: //SUMA
                //IngresarNumeros(num1,num2)
                resul = sumar(num1,num2)
                console.log(`El resultado de la suma es ${resul}`)
                break;

            case 2: //RESTA
                //IngresarNumeros(num1,num2)
                console.log(`El resultado de la resta es ${restar(num1,num2)}`)
                break;

            case 3: //MULTIPLICACIÓN
                //IngresarNumeros(num1,num2)
                console.log(`El resultado de la multiplicación es ${num1 * num2}`)
                break;

            case 4: //DIVISIÓN
                //IngresarNumeros(num1,num2)
                if (num2 === 0){
                    alert("No es posible hacer una división por cero.")
                }
                else {
                    console.log(`El resultado de la división es ${dividir(num1,num2)}`)
                }

                break;
            case 5: //FIN DE CICLO
                alert("Fin de ciclo")
                break;

            default:
                alert("La opción ingresada no es válida")
                opcion = 6 //Opción distinta de 5 para que el programa siga funcionando
                break;

        }

    }

}

/*
function IngresarNumeros(numero1,numero2)
{

    numero1 = Number(prompt("Ingrese un número"))
    console.log(numero1)
    numero2 = Number(prompt("Ingrese otro número"))
    console.log(numero2)

    console.log(numero1 + numero2)
    //return numero1,numero2
}
*/

function sumar(numero1,numero2){
    console.log(numero1 + numero2)

    let resultado = numero1 + numero2
    return resultado
}

function restar(numero1,numero2){
    let resultado = numero1 - numero2
    return resultado
}

let dividir = (numero1,numero2) => numero1/numero2
