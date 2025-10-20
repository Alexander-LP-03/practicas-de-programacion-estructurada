import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese numeros separados por coma para filtrar. Ej => 4, 8: ", (input) => {
    const numeros = input.split(",").map(n => parseFloat(n.trim()));

    rl.question("Ingrese el numero limite: ", (limite) => {
        const numLimite = parseFloat(limite);
        const mayores = numeros.filter(n => n > numLimite);
        console.log(`Hay ${mayores.length} valores mayores que ${numLimite}`);
        rl.close();
    });
});