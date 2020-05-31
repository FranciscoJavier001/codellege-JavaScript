/*
El costo por el servicio de paquetería se basa en el peso del paquete y la zona a la cual va dirigido.
Zona	Ubicación	Costo/Gramo
1	América del Norte	$11.00
2	América Central	$10.00
3	América del Sur	$12.00
4	Europa	$24.00
5	Asia	$27.00
•	Parte de su política implica que los paquetes con un peso superior a 5 kg no son transportados, por logística y seguridad.
*/

const button = document.getElementById('btnApp');
button.addEventListener('click', calcularEnvio);

function calcularEnvio() {
    const costoUbicacion = Number(document.getElementById('idUbicacion').value);
    const peso = Number(document.getElementById('inpPeso').value);

    const ZonePrint = document.getElementById('zonePrint');

    let gramos = peso * 1000,
        costoTotal;

    if (peso <= 5) {
        if (costoUbicacion == 11) {
            ZonePrint.innerText = `Paquete Diriguido: America del Norte
            Peso: ${gramos.toFixed(2)} gr
            Costo Total: $${(gramos*costoUbicacion).toFixed(2)}`;
        } else if (costoUbicacion == 10) {
            ZonePrint.innerText = `Paquete Diriguido: America Central
            Peso: ${gramos.toFixed(2)} gr
            Costo Total: $${(gramos*costoUbicacion).toFixed(2)}`;
        } else if (costoUbicacion == 12) {
            ZonePrint.innerText = `Paquete Diriguido: America del Sur
            Peso: ${gramos.toFixed()} gr
            Costo Total: $${(gramos*costoUbicacion).toFixed(2)}`;
        } else if (costoUbicacion == 24) {
            ZonePrint.innerText = `Paquete Diriguido: Europa
            Peso: ${gramos.toFixed(2)} gr
            Costo Total: $${(gramos*costoUbicacion).toFixed(2)}`;
        } else if (costoUbicacion == 27) {
            ZonePrint.innerText = `Paquete Diriguido: Asia
            Peso: ${gramos.toFixed(2)} gr
            Costo Total: $${(gramos*costoUbicacion).toFixed(2)}`;
        }
    } else {
        ZonePrint.innerText = `Sobrepeso del Paquete - No puede ser Enviado`;
    }
}