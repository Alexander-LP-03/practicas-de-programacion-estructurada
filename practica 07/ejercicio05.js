import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese varios numeros, se pueden repetir y tienen que ir separado por comas: ", (input) => {
    const numeros = input.split(",").map(n => parseFloat(n.trim()));
    const unicos = numeros.filter((num, i) => numeros.indexOf(num) === i);

    console.log("Array original:", numeros);
    console.log("Array sin repetidos:", unicos);

    rl.close();
});