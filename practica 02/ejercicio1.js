import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el primer precio: \n", (precio1) => {
rl.question("Ingrese el segundo precio: \n", (precio2) => {
rl.question("Ingrese el tercer precio: \n", (precio3) => {
    const total = parseFloat(precio1) + parseFloat(precio2) + parseFloat(precio3);
    console.log(`La suma total de precios es: ${total.toFixed(2)}`);
rl.close(); 

    });
    });  
});