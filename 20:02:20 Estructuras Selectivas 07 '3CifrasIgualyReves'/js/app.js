/* Diseñe un algoritmo que lea un número de tres cifras y determine si es igual al revés del número. */

const button = document.getElementById('btnApp');
button.addEventListener('click', verificarNumero);

function verificarNumero() {
    const num = document.getElementById('inpNumber').value;
    let = num1 = 0, NUM1 = 0, num2 = 0, NUM2 = 0, num3 = 0, NUM3 = 0, invertido = 0;

    const ZonePrint = document.getElementById('zonePrint');

    num3 = num % 10
    num2 = num % 100 / 10;
    num1 = num % 1000 / 100;

    NUM1 = Number(parseInt(num1));
    console.log(NUM1);
    NUM2 = Number(parseInt(num2));
    console.log(NUM2);
    NUM3 = Number(parseInt(num3));
    console.log(NUM3);

    invertido = ((NUM3 * 100) + (NUM2 * 10) + (NUM1 * 1));

    if (num >= 100 && num <= 999) {
        if (num == invertido) {
            ZonePrint.innerText = `Numero Original: ${num}
            Numero Invertido: ${invertido}
            Numero: Igual`
        } else {
            ZonePrint.innerText = `Numero Original: ${num}
            Numero Invertido: ${invertido}
            Numero: Diferente`
        }
    } else {
        ZonePrint.innerText = `Error`
    }
}