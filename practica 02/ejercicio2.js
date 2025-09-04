import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese una serie de números enteros separados por espacios: \n", (input) => {
    const numeros = input.split(" ").map(Number);
    const max = Math.max(...numeros);
    const min = Math.min(...numeros);
    const num = numeros.reduce((acc, val) => acc + val, 0) / numeros.length;

    console.log(`\n EL número mayor es: ${max}`);
    console.log(`\n El número menor es: ${min}`);
    console.log(`\n El promedio es: ${num.toPrecision(3)}`);
    rl.close();
});