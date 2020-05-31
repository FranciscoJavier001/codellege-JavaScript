/*
La Langosta Ahumada" es una empresa dedicada a ofrecer banquetes, sus tarifas son las siguientes: el costo del platillo por persona es de $95.00, pero si el numero de personas es mayor a 200 pero menor o igual a 300, el costo es de $85.00. Para mas de 300 personas el costo del platillo es de $75.00. Se requiere un algorimo que ayude a determinar el presupuesto que se debe presentar a los clientes.
*/

const button = document.getElementById('btnApp');
button.addEventListener('click', calcularPresupuesto);

function calcularPresupuesto() {
    const numPersonas = Number(document.getElementById('inpPersonas').value);

    const ZonePrint = document.getElementById('zonePrint');

    let costo;

    if (numPersonas <= 200) {
        costo = numPersonas * 95;
        ZonePrint.innerText =
            `Presupuesto:
            Costo del Platillo: $95.00
        Cantidas de Personas: ${numPersonas}
        Costo Total: $${costo.toFixed(2)}`;
    } else if (numPersonas >= 201 && numPersonas <= 300) {
        costo = numPersonas * 85;
        ZonePrint.innerText =
            `Presupuesto:
            Costo del Platillo: $85.00
    Cantidas de Personas: ${numPersonas}
    Costo Total: $${costo.toFixed(2)}`;
    } else {
        costo = numPersonas * 75;
        ZonePrint.innerText =
            `Presupuesto:
        Costo del Platillo: $75.00
        Cantidas de Personas: ${numPersonas}
        Costo Total: $${costo.toFixed(2)}`;
    }
}