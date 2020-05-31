/* Desarrolle una solución que lea un numero M, obtenga y cuente todos los números primos menores a M. */

eventListener();

function eventListener() {
    const button = document.getElementById('btnCalcular');
    button.addEventListener('click', numerosPrimos);
}

function numerosPrimos() {
    let ZoneImprimir = document.getElementById('ZoneImprimir');
    let num = Number(prompt("Ingrese un numero: "));
    for (let i = 1; i <= num; i++) {
        let contador = 0;
        let j = 1;

        while (j <= i) {
            if (i % j == 0) {
                contador++
            }
            j++;
        }
        if (contador == 2) {
            console.log(i);
            ZoneImprimir.innerText += i + "\n";
        }
    }
}