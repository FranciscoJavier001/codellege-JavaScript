/*
Se necesita el registro de la producción (unidades) logradas por un operario a lo largo de la semana (lunes a sábado). Elabore un algoritmo que nos muestre si el operario recibirá incentivos sabiendo que el promedio de producción mínima es de 100 unidades.
*/

const button = document.getElementById('btnCalcular');
button.addEventListener('click', calculaProduccion);

function calculaProduccion() {
    const lunes = Number(document.getElementById('inpLunes').value);
    const martes = Number(document.getElementById('inpMartes').value);
    const miercoles = Number(document.getElementById('inpMiercoles').value);
    const jueves = Number(document.getElementById('inpJueves').value);
    const viernes = Number(document.getElementById('inpViernes').value);
    const sabado = Number(document.getElementById('inpSabado').value);

    const ZonePrint = document.getElementById('zonePrint');

    let promedio = (lunes + martes + miercoles + jueves + viernes + sabado) / 6;

    if (promedio >= 100) {
        ZonePrint.innerText = `Operario Recibira Incentivos.
        Produccion Semanal Promedio: ${promedio.toFixed(2)} unidades`;
    } else {
        ZonePrint.innerText = `Operario No Recibira Incentivos.
        Produccion Semanal Promedio: ${promedio.toFixed(2)} unidades`;
    }
}