/*
10.	Desarrolle una solución que pida al usuario un número entre 0 y 9,999, decir si es capicúa.
*/

const button = document.getElementById('btnApp');
button.addEventListener('click', verificarNumero);

function verificarNumero() {
    const num = Number(document.getElementById('inpNumber').value);
    const ZonePrint = document.getElementById('zonePrint');

    let inverso = 0,
        aux = 0,
        resto = 0;
    aux = num;

    if (num >= 0 && num <= 9999) {
        while (aux != 0) {
            resto = Math.floor(aux % 10);
            inverso = Math.floor(inverso * 10 + resto);
            aux = Math.floor(aux / 10);
        }

        if (num == inverso) {
            ZonePrint.innerText = `Numero Original: ${num}
            Numero Invertido: ${inverso}
            Numero: Es Capicula`;
        } else {
            ZonePrint.innerText = `Numero Original: ${num}
            Numero Invertido: ${inverso}
            Numero: No es Capicula`;
        }
    } else {
        ZonePrint.innerText = `Error`;
    }
}