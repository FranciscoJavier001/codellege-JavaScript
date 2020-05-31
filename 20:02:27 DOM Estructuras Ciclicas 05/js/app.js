/* Se requiere un algoritmo para determinar, de N cantidades, cuantas son menores o iguales a 0 y cuantas mayores a 0 */

function eventListener() {
    const button = document.getElementById('btnIniciar');
    button.addEventListener('click', initApplication);
}

eventListener();

function initApplication() {
    const cantidades = Number(prompt('Cuantos numeros vas a evaluar: '));

    let acumuladorMenores = 0;
    let acumuladorMayores = 0;
    let respuestaComentadaNegativa = 0,
        respuestaComentadaPositiva = 0;

    for (let x = 0; x < cantidades; x++) {
        let Numero = Number(prompt('Numero a evaluar'));

        if (Numero <= 0) {
            acumuladorMenores++;
            respuestaComentadaNegativa = acumuladorMenores;
            // console.log(acumuladorMenores);
        } else {
            acumuladorMayores++;
            respuestaComentadaPositiva = acumuladorMayores;
            // console.log(acumuladorMayores);
        }
    }
    const ZonePrint = document.getElementById('ZonePrint');
    ZonePrint.innerText = 'Tienes tantos numeros negativos: ' + respuestaComentadaNegativa + '\nTienes tantos numeros positivos: ' + respuestaComentadaPositiva;

    respuestaComentadaPositiva + " y " + respuestaComentadaNegativa;
}