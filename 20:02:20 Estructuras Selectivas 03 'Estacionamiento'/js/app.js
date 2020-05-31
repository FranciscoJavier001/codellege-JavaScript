/* 3.	El dueño de un estacionamiento requiere un diagrama de flujo con el algoritmo que le permita determinar cuánto debe cobrar por el uso del estacionamiento a sus clientes. Las tarifas que se tienen son las siguientes: 
•	Las dos primeras horas a $5.00 c/u.
•	Las siguientes tres a $4.00 c/u.
•	Las cinco siguientes a $3.00 c/u.
•	Después de diez horas el costo por cada una es de $2.00.
 */

const button = document.getElementById('btnApp');
button.addEventListener('click', resultadoTiempo)

function resultadoTiempo() {
    const tiempoEstacionamiento = Number(document.getElementById('inpTiempo').value);
    let ZonePrint = document.getElementById('zonePrint');

    if (tiempoEstacionamiento <= 2) {
        ZonePrint.innerText = `Tiempo Estacionamiento ${tiempoEstacionamiento} hrs
        Precio por Hora: $5.00
        Total a Pagar: $${(tiempoEstacionamiento*5).toFixed(2)}`;
    } else if (tiempoEstacionamiento > 2 && tiempoEstacionamiento <= 5) {
        ZonePrint.innerText = `Tiempo Estacionamiento ${tiempoEstacionamiento} hrs
        Precio por Hora: $4.00
        Total a Pagar: $${(tiempoEstacionamiento*4).toFixed(2)}`;
    } else {
        ZonePrint.innerText = `Tiempo Estacionamiento ${tiempoEstacionamiento} hrs
        Precio por Hora: $3.00
        Total a Pagar: $${(tiempoEstacionamiento*3).toFixed(2)}`;
    }
}