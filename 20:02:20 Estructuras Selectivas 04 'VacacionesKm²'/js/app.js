/* Desarrolle una solución que nos ayude a decidir a qué lugar podrá ir de vacaciones una persona, considerando que la línea de autobuses cobra por kilómetro recorrido. Se debe considerar el costo del pasaje tanto de ida, como de vuelta; los datos que se conocen y que son fijos son: México, 750 km; P.V., 800 km; Acapulco, 1200 km, y Cancún, 1800 km. También se debe considerar la posibilidad de tener que quedarse en casa. */

const button = document.getElementById('btnApp');
button.addEventListener('click', calcularCosto);

function calcularCosto() {
    const costoKm = Number(document.getElementById('inpCosto').value);
    const claveKm = Number(document.getElementById('destinoTuristico').value);

    const ZonePrint = document.getElementById('zonePrint');

    ZonePrint.innerText = `Precio Km²: $${costoKm.toFixed(2)}
    Distancia Total Km²: ${claveKm}
    Costo Total: $ ${(costoKm*claveKm).toFixed(2)}`;
}