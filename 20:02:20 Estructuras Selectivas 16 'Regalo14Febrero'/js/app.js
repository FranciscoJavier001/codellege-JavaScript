/*
El 14 de febrero una persona desea comprarle al ser querido que mas aprecia en ese momento, su dilema radica en regalo puede hacerle, las alternativas que tienen son los siguientes:
Tarjeta = $ 10.00 o menos
Chocolates = $ 11.00 a $ 100.00
Flores = $ 101.00 a $ 250.00
Anillo = Más de $ 251.00
•	Desarrolle una solución para decidir qué regalo puede comprar.
•	Una compañía de paquetería internacional tiene servicio en algunos países de América del Norte, América Central, América del sur, Europa y Asia.
*/

const button = document.getElementById('btnApp');
button.addEventListener('click', calcularRegalo);

function calcularRegalo() {
    const presupuesto = Number(document.getElementById('inpPresupuesto').value);
    const ZonePrint = document.getElementById('zonePrint');

    if (presupuesto <= 10) {
        ZonePrint.innerText = `Regalo: Tarjeta`;
    } else if (presupuesto >= 11 && presupuesto <= 100) {
        ZonePrint.innerText = `Regalo: Chocolates`;
    } else if (presupuesto >= 101 && presupuesto <= 250) {
        ZonePrint.innerText = `Regalo: Flores`;
    } else {
        ZonePrint.innerText = `Regalo: Anillo`;
    }
}