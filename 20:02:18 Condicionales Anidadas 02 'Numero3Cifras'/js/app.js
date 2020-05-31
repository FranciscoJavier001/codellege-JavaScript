// Crear un pseudocodigo que solicite un numero entero positivo de hasta tres cifras y muestre un mensaje indicando si tiene 1, 2, 3, cifras. Mostrar un mensaje de error si el numero de cifras es mayor

const button = document.getElementById('btnVerifica');
button.addEventListener('click', verificaNumero);

function verificaNumero() {
    const numero = Number(document.getElementById('inpNumber').value);
    const ZonePrint = document.getElementById('zonePrint');

    if (numero > 0 && numero < 10) {
        ZonePrint.innerText = `Cifras del Numero: 1 Digito`;
    } else if (numero > 9 && numero < 100) {
        ZonePrint.innerText = `Cifras del Numero: 2 Digitos`;
    } else if (numero > 99 && numero < 1000) {
        ZonePrint.innerText = `Cifras del Numero: 3 Digitos`;
    } else
        ZonePrint.innerText = `Cifras del Numero: Error`;
}