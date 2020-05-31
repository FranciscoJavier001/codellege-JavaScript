const button = document.getElementById('btnMayor');
button.addEventListener('click', compararNumero);

function compararNumero() {
    const numero1 = Number(document.getElementById('inpNum1').value);
    const numero2 = Number(document.getElementById('inpNum2').value);
    const numero3 = Number(document.getElementById('inpNum3').value);

    const ZonePrint = document.getElementById('zonePrint');

    if (numero1 > numero2) {
        if (numero1 > numero3) {
            ZonePrint.innerText = `El numero mayor es: ${numero1}`;
        } else {
            ZonePrint.innerText = `El numero mayor es: ${numero3}`;
        }
    } else if (numero2 > numero3) {
        ZonePrint.innerText = `El numero mayor es: ${numero2}`;
    } else {
        ZonePrint.innerText = `El numero mayor es: ${numero3}`;
    }
}