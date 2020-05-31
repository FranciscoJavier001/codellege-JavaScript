/* Desarrolle una solución que pida al usuario 2 números y diga si uno es múltiplo del otro. */

const button = document.getElementById('btnApp');
button.addEventListener('click', compruebaMultiplo);

function compruebaMultiplo() {
    const num1 = Number(document.getElementById('inpNumero1').value);
    const num2 = Number(document.getElementById('inpNumero2').value);

    const ZonePrint = document.getElementById('zonePrint');

    let multiplo = num1 % num2;

    if (multiplo == 0) {
        ZonePrint.innerText = `Numero Original: ${num1}
    Multiplo del Numero: ${num2} 
    Este Numero: Si es Multiplo`;
    } else { ZonePrint.innerText = `Numero Original: ${num1}
    Multiplo del Numero: ${num2} 
    Este Numero: No es Multiplo`; }
}