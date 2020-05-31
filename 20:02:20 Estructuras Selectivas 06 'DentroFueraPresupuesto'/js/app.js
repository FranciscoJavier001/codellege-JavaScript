/* Desarrolle una solución que le pida al usuario un presupuesto y el precio de 4 artículos, y realice la suma, si la suma es mayor al presupuesto “El precio está fuera de presupuesto” en caso contrario “El precio está dentro del presupuesto”. */

const button = document.getElementById('btnApp');
button.addEventListener('click', resultadoPresupuesto);

function resultadoPresupuesto() {
    const precio1 = Number(document.getElementById('inpArticulo1').value);
    const precio2 = Number(document.getElementById('inpArticulo2').value);
    const precio3 = Number(document.getElementById('inpArticulo3').value);
    const precio4 = Number(document.getElementById('inpArticulo4').value);
    let totalProductos = precio1 + precio2 + precio3 + precio4;
    const presupuesto = Number(document.getElementById('inpPresupuesto').value);

    const ZonePrint = document.getElementById('zonePrint');

    if (presupuesto >= totalProductos) {
        ZonePrint.innerText = `Presupuesto: $${presupuesto.toFixed(2)}
        Precio Articulos: $${totalProductos.toFixed(2)}
        Situacion: Dentro del Presupuesto`;
    } else {
        ZonePrint.innerText = `Presupuesto: $${presupuesto.toFixed(2)}
        Precio Articulos: $${totalProductos.toFixed(2)}
        Situacion: Fuera del Presupuesto`;
    }
}