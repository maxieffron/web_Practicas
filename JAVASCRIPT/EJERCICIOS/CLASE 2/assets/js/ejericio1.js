/*
Escribir un programa que pida al usuario:
- Una operación: SUMA O MUL (Suma o Multiplicación)
- Dos números
- imprimir en consola el resultado de la operación
*/

const operacion = prompt("Ingrese una operación (SUMA O MUL):")
const num1 = Number(prompt("Ingrese un número:"))
const num2 = Number(prompt("Ingrese otro número:"))


if (isNaN(num1) || isNaN(num2))
{
    alert("NÚMEROS NO VÁLIDOS")
}

else
{
    if (operacion === "SUMA")
    {
        console.log("El resultado de sumar " + num1 + " y " + num2 + " es: " + (num1 + num2))
    }
    else if (operacion === "MUL")
    {
        console.log("El resultado de multiplicar " + num1 + " por " + num2 + " es: " + (num1 * num2))
    }
    else {
        alert ("LA OPERACIÓN SELECCIONADA NO ES VÁLIDA")
    }
}