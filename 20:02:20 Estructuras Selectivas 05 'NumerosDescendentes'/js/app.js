// Dados los datos A, B y C que representan números enteros diferentes, construir un algoritmo para escribir estos números en forma descendente.

const button = document.getElementById('btnApp');
button.addEventListener('click', ordenarNumeros);

function ordenarNumeros() {
    const num1 = Number(document.getElementById('inpNum1').value);
    const num2 = Number(document.getElementById('inpNum2').value);
    const num3 = Number(document.getElementById('inpNum3').value);

    const ZonePrint = document.getElementById('zonePrint');

    if (num1 > num2) {
        if (num1 > num3) {
            if (num2 > num3) {
                ZonePrint.innerText = `Acomodo de los numeros es: ${num1}, ${num2}, ${num3}`
            } else {
                ZonePrint.innerText = `Acomodo de los numeros es: ${num1}, ${num3}, ${num2}`
            }
        } else {
            ZonePrint.innerText = `Acomodo de los numeros es: ${num3}, ${num1}, ${num2}`;
        }
    } else {
        if (num2 > num3) {
            if (num1 > num3) {
                ZonePrint.innerText = `Acomodo de los numeros es: ${num2}, ${num1}, ${num3}`;
            } else {
                ZonePrint.innerText = `Acomodo de los numeros es: ${num2}, ${num3}, ${num1}`;
            }
        } else {
            ZonePrint.innerText = `Acomodo de los numeros es: ${num3}, ${num2}, ${num1}`;
        }
    }
}