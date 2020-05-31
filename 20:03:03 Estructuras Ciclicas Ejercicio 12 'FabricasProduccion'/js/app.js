/*
Los datos reunidos en la secretaría de industrias relacionado con la producción de N fábricas en cada uno de los meses: se proporcionan de la siguiente forma:
a. Los totales anuales de producción de cada fabrica.
b. La clave de la fábrica que más produjo en el año. Indicar también el total de la producción.
c. Imprimir claves de las fabricas cuya producción en el mes de julio fueron superiores a los $3,000,000.
*/
eventListener();

function eventListener() {
    const button = document.getElementById('btnIfo');
    button.addEventListener('click', datosFabrica);
}

function datosFabrica() {
    const ZonePrint = document.getElementById('ZonePrint');
    let numFab = Number(prompt("Ingresa el numero de Fabricas: "));

    for (let i = 0; i < numFab; i++) {
        let res = 0; //Cuando lo ponemos aqui aprendemos a inicializarlo..
        for (let j = 1; j <= 2; j++) {
            let proMes = Number(prompt(`Ingresa la venta del mes ${j}`))
            res += proMes;
        }
        console.log(res);
    }
}