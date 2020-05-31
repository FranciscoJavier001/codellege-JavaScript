/*
Una compañía de seguros para autos ofrece dos tipos de póliza: cobertura amplia (A) y daños a terceros (B). Para el plan A, la cuota base es de $1,200, y para el B, de $950.00. A ambos planes se les carga el 10% del costo si la persona conduce tiene por habito beber alcohol, 5% si utiliza lentes, 5% si padece alguna enfermedad (deficiencia cardiaca o diabetes), y si más de 40 años se le carga el 20% de lo contrario solo 10%.
•	Todos estos cargos se realizan sobre el costo del sueldo base.
•	Determinar cuánto le cuesta a una persona contratar una póliza.
*/

const button = document.getElementById('btnApp');
button.addEventListener('click', calcularSeguro);

function calcularSeguro() {
    const costoSeguro = Number(document.getElementById('idPoliza').value);
    const edad = Number(document.getElementById('inpEdad').value);
    const alcohol = document.getElementById('cbxAlcohol');
    const lentes = document.getElementById('cbxLentes');
    const enfermedad = document.getElementById('cbxEnfermedad');
    const ZonePrint = document.getElementById('zonePrint');

    let costoTotal = costoSeguro;

    if (edad > 40) {
        costoTotal = costoTotal + (costoSeguro * .2);
    } else {
        costoTotal = costoTotal + (costoSeguro * .1);
    }
    if (alcohol.checked) {
        costoTotal = costoTotal + (costoSeguro * Number(alcohol.value));
    }
    if (lentes.checked) {
        costoTotal = costoTotal + (costoSeguro * Number(lentes.value));
    }
    if (enfermedad.checked) {
        costoTotal = costoTotal + (costoSeguro * Number(enfermedad.value));
    }

    ZonePrint.innerText = `Edad: ${edad}
    Precio Poliza Original: $${costoSeguro}
    Precio Poliza Total: $${costoTotal}`;
}