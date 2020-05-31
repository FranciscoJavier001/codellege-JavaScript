/*
Cierta empresa proporciona un bono mensual a sus trabajadores, el cual puede ser por su antigüedad o bien por el monto de su sueldo (el que sea mayor), de la siguiente forma:
•	Cuando la antigüedad es mayor a dos años, pero menor a 5, se otorga el 20% de su sueldo; cuando es de 5 años o más, 30%. Ahora bien, el bono por concepto de sueldo es si este es menor a $1000 se da 25% de este, cuando este es mayor a $1000, pero menor igual a $3500, se otorga el 15% de su sueldo, para más de 3500 el 10%. 
*/

const button = document.getElementById('btnApp');
button.addEventListener('click', calcularBono);

function calcularBono() {
    const antiguedad = Number(document.getElementById('inpAntiguedad').value);
    const sueldo = Number(document.getElementById('inpSueldo').value);
    const ZonePrint = document.getElementById('zonePrint');

    if (antiguedad > 5) {
        ZonePrint.innerText = `Sueldo: $${sueldo}
        Antguedad: ${antiguedad} años
        Bono: 30% ${(sueldo*.30).toFixed(2)}
        Total: $ ${(sueldo*1.30).toFixed(2)}`;
    } else if (sueldo <= 1000) {
        ZonePrint.innerText = `Sueldo: $${sueldo}
        Antguedad: ${antiguedad} años
        Bono: 25% ${(sueldo*.25).toFixed(2)}
        Total: $ ${(sueldo*1.25).toFixed(2)}`;
    } else if (antiguedad >= 2 && antiguedad <= 5) {
        ZonePrint.innerText = `Sueldo: $${sueldo}
        Antguedad: ${antiguedad} años
        Bono: 20% ${(sueldo*.20).toFixed(2)}
        Total: $ ${(sueldo*1.20).toFixed(2)}`;
    } else if (sueldo < 1000 && sueldo <= 3500) {
        ZonePrint.innerText = `Sueldo: $${sueldo}
        Antguedad: ${antiguedad} años
        Bono: 15% ${(sueldo*.15).toFixed(2)}
        Total: $ ${(sueldo*1.15).toFixed(2)}`;
    } else if (sueldo > 1000) {
        ZonePrint.innerText = `Sueldo: $${sueldo}
        Antguedad: ${antiguedad} años
        Bono: 10% ${(sueldo*.10).toFixed(2)}
        Total: $${(sueldo*1.10).toFixed(2)}`;
    }
}