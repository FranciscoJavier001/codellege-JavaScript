/*
Elabore una aplicación que lea n números enteros y realice lo siguiente:
a. Cuantos números leídos fueron mayores que 0.
b. Promedio de los números positivos.
c. Promedio de todos los números.
*/

eventListener();

function eventListener() {
    const button = document.getElementById('btnApp');
    button.addEventListener('click', iniciaCalculos);
}

function iniciaCalculos() {
    const numeros = Number(prompt('Ingresa los numeros a evaluar'));
    let mayorCero = 0;
    let numerosPositivos = 0;
    let totalNumeros = 0;
    const ZonePrint = document.getElementById('ZonePrint');

    for (let i = 1; i <= numeros; i++) {
        let numero = Number(prompt('Ingresa un numero'));
        if (numero >= 0) {
            mayorCero++;
        }
        numerosPositivos += numero;
        //console.log(numerosPositivos); //Aqui ya me esta mostrando la suma
        totalNumeros += numero;
    }
    console.log(totalNumeros); //Aqui ya me esta contando los numeros totales que evaluo

    ZonePrint.innerText = `Numeros Mayores a 0 = ${mayorCero}\n
    Promedio de Numeros Positivos = ${numerosPositivos/mayorCero}\n
    Promedio de todos los numeros ${totalNumeros/numeros}`;
}