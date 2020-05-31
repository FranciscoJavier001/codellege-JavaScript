/* Realice un programa que imprima la serie numérica del 100 al 0 */

EventListener();

function EventListener() {
    const button = document.getElementById('btnGenerar');
    button.addEventListener('click', generarSerie);
}

function generarSerie() {
    let cadena = '';

    for (let x = 100; x >= 0; x--) {
        cadena = cadena + `${x}` + ', ';
    }

    const zonaImprimir = document.getElementById('divAlert');
    zonaImprimir.innerText = cadena;
}