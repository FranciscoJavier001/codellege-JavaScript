// La conagua requiere determinar el pago que debe realizar una persona por el total de metros cúbicos que consume de agua al llenar una alberca. Realice un algoritmo y represéntelo mediante un diagrama de flujo y el pseudocódigo que permita determinar ese pago.

let usados, costo, gasto;

let btnCalcular = document.getElementById('calcularCosto');
btnCalcular.addEventListener('click', costoTotal);

function costoTotal() {
    usados = Number(document.getElementById('inpUsados').value);
    costo = Number(document.getElementById('inpCosto').value);

    total = costo * usados;

    let mostrarCosto = document.getElementById('mostrarTotal');
    mostrarCosto.innerText = `Cantidad a Pagar: $${total.toFixed(2)}`;
}