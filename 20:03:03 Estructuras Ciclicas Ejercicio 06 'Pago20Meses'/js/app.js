// Una persona adquirió un producto para pagar en 20 meses. El primer mes pago $10, el segundo $20, el tercero $40 y así sucesivamente. Realice un algoritmo para determinar cuánto debe pagar mensualmente y el total de lo que pago después de los 20 meses.

eventListener();

function eventListener() {
    const button = document.getElementById('btnMeses');
    button.addEventListener('click', calcularMeses);
}

function calcularMeses() {
    let pagoInicial = 10;
    let cadenaPagos = '';
    let pagoFinal = 0;
    for (let i = 1; i <= 20; i++) {
        cadenaPagos = cadenaPagos + `Mes ${i}: $${pagoInicial} `;
        pagoInicial *= 2;
        pagoFinal = pagoInicial;
    }

    const zonaImprimir = document.getElementById('divAlert');
    zonaImprimir.innerText = cadenaPagos;

    const zonaTotal = document.getElementById('divTotal');
    zonaTotal.innerText = `El total pagado es $${pagoFinal}`;
}