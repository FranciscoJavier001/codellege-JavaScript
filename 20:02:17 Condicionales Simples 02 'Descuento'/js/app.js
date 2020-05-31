/* Un almacén se hace un 20% de descuento a los clientes cuya compra supere los $1000 ¿Cual será la cantidad que pagara una persona por su compra? */

const button = document.getElementById('btnCompra');
button.addEventListener('click', verificaCompra);

function verificaCompra() {
    const compra = Number(document.getElementById('monto').value);
    const ZonePrint = document.getElementById('zonePrint')
    if (compra >= 1000) {
        let resultado;
        resultado = compra * .80
        ZonePrint.innerText = `El Total a pagar: $${resultado.toFixed(2)}`;
    } else {
        ZonePrint.innerText = `El Total a pagar: $${compra.toFixed(2)}`;
    }
}