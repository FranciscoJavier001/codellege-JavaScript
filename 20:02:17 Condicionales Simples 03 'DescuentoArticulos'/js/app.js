/* 
Hacer un Pseudocodigo que imprima el nombre de un articulo, clave, precio original y su precio con descuento. El descuento lo hace en base a la clave, si la clave es 01 el descuento es del 10% y si la clave es 02 el descuento en del 20% (solo existen dos claves). 
*/
const button = document.getElementById('btnDescuento');
button.addEventListener('click', calculaDescuento);

function calculaDescuento() {
    const articulo = document.getElementById('inpArticulo').value;
    const clave = document.getElementById('idClaves').value;
    const precio = Number(document.getElementById('inpPrecio').value);

    const ZonePrint = document.getElementById('zonePrint');

    let precioDescuento;

    if (clave == '01') {
        precioDescuento = precio * .9;
        ZonePrint.innerText =
            `Codigo: ${clave} (Descuento: 10%)
        Articulo: ${articulo}
        Precio Normal: $${precio.toFixed(2)}
        Precio Descuento: $${precioDescuento.toFixed(2)}`;
    } else {
        precioDescuento = precio * .8;
        ZonePrint.innerText =
            `Codigo: ${clave} (Descuento: 20%)
        Articulo: ${articulo}
        Precio Normal: $${precio.toFixed(2)}
        Precio Descuento: $${precioDescuento.toFixed(2)}`;
    }
}