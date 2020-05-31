/* Pedir por teclado el tamaño de un arreglo de números y pedir los valores numéricos con los
que se rellena. Los valores no se pueden repetir. Mostrar el arreglo con los valores
al final */
const output = document.getElementById("output");

function eventListener() {
    document.getElementById("btnInputs").addEventListener("click", mostrarInputs);
}

eventListener();

function mostrarInputs() {
    const NumeroInputs = Number(document.getElementById("NumeroInputs").value);

    if (NumeroInputs > 1000 || NumeroInputs <= 0) return;

    EliminarElementos();

    const row = document.createElement("div");
    row.setAttribute = ("class", "row");

    for (let i = 0; i < NumeroInputs; i++) {
        const divCol = document.createElement("div");
        divCol.setAttribute("class", "col-12");

        const divFG = document.createElement("div");
        divFG.setAttribute("class", "form-group");

        const label = document.createElement("label");
        label.innerText = `Ingrese numero a guardar en el arreglo`;

        const input = document.createElement("input");
        input.setAttribute("class", "form-control");
        input.setAttribute("type", "number");
        input.setAttribute("id", `valorInput${i}`);

        row.appendChild(divCol);
        divCol.appendChild(divFG);
        divFG.appendChild(label);
        divFG.appendChild(input);
    }
    output.appendChild(row);

    const buttonObtenerResultado = document.createElement("button");
    buttonObtenerResultado.setAttribute(
        "class",
        "btn btn-outline-success btn-block"
    );
    buttonObtenerResultado.setAttribute("id", "btnCalcularResultado");

    buttonObtenerResultado.innerText = "Calcular Resultado";
    row.appendChild(buttonObtenerResultado);

    document
        .getElementById("btnCalcularResultado")
        .addEventListener("click", RealizarComparacion);
}

const NumeroInputs = document.getElementsByTagName("input");

function RealizarComparacion() {
    let acumulador = 0;

    for (let x = 0; x < NumeroInputs.length; x++) {
        for (let y = x + 1; y < NumeroInputs.length; y++) {
            if (NumeroInputs[x].value == NumeroInputs[y].value) {
                NumeroInputs[y].value = "";
            }
        }
        console.log(NumeroInputs[x].value);
    }
    MostrarDatos(NumeroInputs);
}

function EliminarElementos() {
    while (output.firstChild) {
        output.firstChild.remove();
    }
}

function MostrarDatos(NumeroInputsArreglo) {
    let imprimir = ' ';
    for (x = 0; x < NumeroInputs.length; x++) {
        if (NumeroInputs[x].value != "") {
            imprimir += (NumeroInputs[x].value);
        }
        const imprimir1 = document.getElementById("imprimir1");
        imprimir1.innerText = `${imprimir}`;
    }
}