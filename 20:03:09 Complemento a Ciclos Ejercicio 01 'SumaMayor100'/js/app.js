// <!-- Desarrolle una solución que permita al usuario capturar y sumar números y que la aplicación se detenga cuando la sume de los números sea mayor a 100. -->

eventListener();

function eventListener() {
    const button = document.getElementById('btnInit');
    button.addEventListener('click', initApp);
}

function initApp() {
    let suma = 0;

    while (suma < 100) {
        let num = Number(prompt('Ingresa un numero a sumar'));
        suma = suma + num;
    }

    const divAlert = document.getElementById('divAlert');
    divAlert.innerText = `El resultado de la suma es ${suma}`;
}