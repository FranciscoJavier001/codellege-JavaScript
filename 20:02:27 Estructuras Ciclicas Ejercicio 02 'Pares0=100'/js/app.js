/* Realice un algoritmo para generar e imprimir los números pares que se encuentren entre 0 y 100 */

function eventListener() {
    const button = document.getElementById('btnIniciar');
    button.addEventListener('click', initApplication);
}

eventListener()

function initApplication() {
    let ZonaPrint = document.getElementById('ZonePrint');

    for (let i = 0; i <= 100; i++) {
        if (i % 2 == 0)
            ZonaPrint.innerText += ` ${ i },`;
    }
}