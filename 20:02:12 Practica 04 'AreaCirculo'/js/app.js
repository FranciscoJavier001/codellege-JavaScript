let radio, resultado;

let button = document.getElementById("btnCalcular");
button.addEventListener("click", AreaCirculo);

function AreaCirculo() {
    radio = Number(document.getElementById("InpRadio").value);

    let radioelevado = Math.pow(radio, 2);
    resultado = radioelevado * Math.PI

    let ZonePrint = document.getElementById("zonePrint");
    ZonePrint.innerText = `El Area del Circulo es: ${resultado}u`
}