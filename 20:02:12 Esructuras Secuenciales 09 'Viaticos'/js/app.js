// Una empresa desea determinar el monto de un cheque que debe proporcionar a uno de sus empleados que tendrá que ir por equis número de días a la ciudad de Monterrey; los gastos que cubre la empresa son: hotel, comida y 100.00 pesos

let dias, hotel, comida, cheque;
const efectivo = 100;

let btnViaticos = document.getElementById('calcularViaticos');
btnViaticos.addEventListener('click', calcularViaticos);

function calcularViaticos() {
    dias = Number(document.getElementById('inpDias').value);
    hotel = Number(document.getElementById('inpHotel').value);
    comida = Number(document.getElementById('inpComida').value);

    cheque = dias * (hotel + comida + efectivo);

    let ZonePrint = document.getElementById('zonePrint');
    ZonePrint.innerText = `Viaticos: $${cheque.toFixed(2)}`;
}