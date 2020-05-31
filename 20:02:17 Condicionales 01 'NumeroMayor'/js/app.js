const button = document.getElementById('btnComparar');
button.addEventListener('click', compararNumeros);

function compararNumeros() {
    let Numero1 = Number(document.getElementById('inpNumero1').value);
    let Numero2 = Number(document.getElementById('inpNumero2').value);

    const ZonePrint = document.getElementById('zonePrint');

    if (Numero1 > Numero2) {
        ZonePrint.innerHTML = `Resultado: Numero Mayor es: A`;
    } else if (Numero1 < Numero2) {
        ZonePrint.innerHTML = `Resultado: Numero Mayor es: B`;
    } else
        ZonePrint.innerHTML = `Resultado: Ambos numeros son Iguales`;
}