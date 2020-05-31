/*  Almacenes “Don Baratón” tiene una promoción: a todos los trajes que tienen un precio superior a $3600.00 se les aplicará un descuento de 16 %, a todos los demás se les aplicará sólo 7 %. Desarrolle una solución para determinar el precio final que debe pagar una persona por comprar un traje y de cuánto es el descuento que obtendrá. */

const button = document.getElementById('btnApp');
button.addEventListener('click', comprobarDescuento)

function comprobarDescuento() {
    const precioTraje = Number(document.getElementById('inpPrecioTraje').value);

    const ZonePrint = document.getElementById('zonePrint');

    if (precioTraje >= 3600) {
        ZonePrint.innerText = `Precio Traje: $ ${precioTraje}
        Descuento 16%
        Precio Descuento $${(precioTraje*.84.toFixed(2))}`
    } else {
        ZonePrint.innerText = `Precio Traje: $ ${precioTraje}
        Descuento 7%
        Precio Descuento $${(precioTraje*.93.toFixed(2))}`
    }
}