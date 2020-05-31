// 2.	Una compañía de viajes cuenta con cuatro tipos de autobuses (A, B, C y D), cada uno tiene un precio por kilómetro recorrido por persona, los costos respectivos son $1.5, $2.0, $2.5 y $3.0. Se requiere determinar el costo total y por persona del viaje considerando que cuando éste se presupuesta debe haber un mínimo de 20 personas, de lo contrario el cobro se realiza con base en este número límite (20).

const button = document.getElementById('btnApp');
button.addEventListener('click', calcularCosto);

function calcularCosto() {
    const costoKM = Number(document.getElementById('inpBus').value);
    const distanciaKm = Number(document.getElementById('inpDistancia').value);
    const numPersonas = Number(document.getElementById('inpPersonas').value);

    const ZonePrint = document.getElementById('zonePrint');
    let costoTotal, costoPersona;

    if (numPersonas > 20) {
        costoTotal = costoKM * distanciaKm * numPersonas;
        costoPersona = costoTotal / numPersonas;
        ZonePrint.innerText = `Presupuesto: 
        Precio Km Autobus: $${costoKM.toFixed(2)}
        Distancia: ${distanciaKm}Km
        Pasajeros: ${numPersonas}
        Costo Pasajero: $${costoPersona.toFixed(2)}
        Costo Total: $${costoTotal.toFixed(2)}`;
    } else {
        costoTotal = costoKM * distanciaKm * 20;
        costoPersona = costoTotal / numPersonas;
        ZonePrint.innerText = `Presupuesto: 
        Precio Km Autobus: $${(costoKM*2).toFixed(2)}
        Distancia: ${distanciaKm}Km
        Pasajeros: ${numPersonas} Personas
        Costo Pasajero: $${costoPersona.toFixed(2)}
        Costo Total: $${costoTotal.toFixed(2)}`;;
    }
}