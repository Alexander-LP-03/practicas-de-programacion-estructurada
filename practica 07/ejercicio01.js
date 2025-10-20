import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function crearArrayObjetos() {
    rl.question("Cuantos elementos desea agregar ? ", (n) => {
        const cantidad = parseInt(n);
        const elementos = [];

        function pedirElemento(i) {
            if (i < cantidad) {
                rl.question(`Ingrese el nombre del elemento ${i + 1}: `, (nombre) => {
                    rl.question(`Ingrese el valor del elemento ${i + 1}: `, (valor) => {
                        elementos.push({ nombre, valor });
                        pedirElemento(i + 1);
                    });
                });
            } else {
                console.log("El nombre y valor de los elementos son: ", elementos);
                rl.close();
            }
        }

        pedirElemento(0);
    });
}

crearArrayObjetos();