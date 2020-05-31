let altoPared;
let anchoPared;
let costoMetro;
let resultado;

let buttonCotizacion = document.getElementById('btnCotizacion');

buttonCotizacion.addEventListener('click', cotizacion)

function cotizacion() {
    // Entradas
    altoPared = Number(document.getElementById('inpAlto').value);
    anchoPared = Number(document.getElementById('inpAncho').value);
    costoMetro = Number(document.getElementById('inpMc').value);

    // Procesos

    resultado = altoPared * anchoPared * costoMetro;

    // Salidas

    let Imprimir = document.getElementById('imprimirResultado');
    Imprimir.innerText = `El Presupuesto de
    Alto ${altoPared}mt y Ancho ${anchoPared}mt 
    a un Costo de $${costoMetro} mt2 
    Costo Total $${resultado}`;
}