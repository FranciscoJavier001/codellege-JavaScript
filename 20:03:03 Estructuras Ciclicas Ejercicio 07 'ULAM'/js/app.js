/* La conjetura de ULAM consiste en lo siguiente:
a. Inicia a partir de cualquier número positivo entero.
b. Si el número es par, se divide entre 2; si es impar, se multiplica por 3 y se agrega uno. De manera que podemos obtener lo siguiente: 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1.
Dado un numero positivo, ejecute la serie ULAM. */

eventListener();

function eventListener() {
    const button = document.getElementById('btnULAM');
    button.addEventListener('click', generarULAM);
}

function generarULAM() {
    const numero = Number(prompt('Ingresa un numero positivo'));
    let serie = '';
    let auxNum = numero;

    serie = serie + `${auxNum} `;

    while (auxNum != 1) {
        if (auxNum % 2 == 0) {
            auxNum = auxNum / 2;
            serie = serie + `${auxNum} `;
        } else {
            auxNum = (auxNum * 3) + 1;
            serie = serie + `${auxNum} `;
        }
    }

    const zonaImprimir = document.getElementById('divAlert');
    zonaImprimir.innerText = serie;
}