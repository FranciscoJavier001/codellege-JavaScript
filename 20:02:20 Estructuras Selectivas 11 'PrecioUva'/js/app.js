/* La asociación de vinicultores tiene como política fijar un precio inicial al kilo uva, la cual se clasifica en tipos A y B, y además en tamaños 1 y 2. Cuando se realiza la venta del producto, esta es de un solo tipo y tamaño, se requiere determinar cuánto recibirá un productor por la uva que entrega un embarque, considerando lo siguiente:
•	Si es tipo A, se le cargan 20c al precio inicial cuando es de tamaño 1; y 30c cuando es de tamaño 2.
•	Si es tipo B, se rebajan 30c cuando es de tamaño 1, y 50c cuando es de tamaño 2  */

const button = document.getElementById('btnApp');
button.addEventListener('click', calcularUvas);

function calcularUvas() {
    const tipo = document.getElementById('inpTipo').value;
    const tamaño = Number(document.getElementById('inpTamano').value);
    const costo = Number(document.getElementById('inpCosto').value);
    const vendidos = Number(document.getElementById('inpVendidos').value);

    const ZonePrint = document.getElementById('zonePrint');

    let costoFinal;

    if (tipo == 'A') {
        if (tamaño == 1) {
            costoFinal = costo + .20;
            ZonePrint.innerText = `Tipo Uva: ${tipo}
            Tamaño Uva: ${tamaño}
            Costo: $${costo.toFixed(2)}
            Costo Final: $${(costoFinal).toFixed(2)}
            Kg Vendidos: ${vendidos} Kg
            Costo Total: $${(costoFinal*vendidos).toFixed(2)}`;
        } else {
            costoFinal = costo + .30;
            ZonePrint.innerText = `Tipo Uva: ${tipo}
            Tamaño Uva: ${tamaño}
            Costo: $${costo.toFixed(2)}
            Costo Final: $${(costoFinal).toFixed(2)}
            Kg Vendidos: ${vendidos} Kg
            Costo Total: $${(costoFinal*vendidos).toFixed(2)}`;
        }
    } else {
        if (tamaño == 1) {
            costoFinal = costo - .30;
            ZonePrint.innerText = `Tipo Uva: ${tipo}
            Tamaño Uva: ${tamaño}
            Costo: $${costo.toFixed(2)}
            Costo Final: $${(costoFinal).toFixed(2)}
            Kg Vendidos: ${vendidos} Kg
            Costo Total: $${(costoFinal*vendidos).toFixed(2)}`;
        } else {
            costoFinal = costo - .50;
            ZonePrint.innerText = `Tipo Uva: ${tipo}
            Tamaño Uva: ${tamaño}
            Costo: $${costo.toFixed(2)}
            Costo Final: $${(costoFinal).toFixed(2)}
            Kg Vendidos: ${vendidos} Kg
            Costo Total: $${(costoFinal*vendidos).toFixed(2)}`;
        }
    }
}