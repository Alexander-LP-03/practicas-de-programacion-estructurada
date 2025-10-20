import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese varios nombres separados por coma. Ej => Luis, alex: ", (input) => {
    const nombres = input.split(",").map(n => n.trim());

    rl.question("Ingrese el nombre a buscar: ", (buscar) => {
        const encontrado = nombres.find(n => n.toLowerCase() === buscar.toLowerCase());

        if (encontrado) {
            console.log(`"${buscar}" sí está en el array.`);
        } else {
            console.log(`"${buscar}" no se encontró.`);
        }

        rl.close();
    });
});