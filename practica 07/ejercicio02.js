import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese numeros separados por coma para sumarlos. Ej => 2, 5: ", (input) => {
    const numeros = input.split(",").map(n => parseFloat(n.trim()));
    const suma = numeros.reduce((acc, n) => acc + n, 0);
    console.log("Las suma total es:", suma);
    rl.close();
});