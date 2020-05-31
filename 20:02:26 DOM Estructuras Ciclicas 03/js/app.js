/* Se requiere un algoritmo para obtener la estatura promedio de un grupo de personas, cuyo numero de miembros se desconoce, el ciclo debe efectuarse siempre y cuando se tenga una estatura registrada */

EventListener();

function EventListener() {
    const button = document.getElementById('btnInit');
    button.addEventListener('click', InitApp);
}

function InitApp() {
    let continuar = true;
    let acumulador = 0;
    let contador = 0;

    while (continuar == true) {
        let estatura = Number(prompt('Ingresa la estatura'));
        if (estatura == 0) {
            continuar = false;
        }
        acumulador += estatura;
        contador++;
    }
    let resultado = acumulador / (contador - 1);

    const ZonePrint = document.getElementById('ZonaPrint');
    ZonePrint.innerText = `La estatura promedio: ${resultado}`;
    console.log(resultado);
}