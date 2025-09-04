import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const base = Math.floor(Math.random() * 9) + 2;
const exponente = Math.floor(Math.random() * 5) + 1;

rl.question(`¿Cuánto es ${base} elevado a la ${exponente}? \n`, (input) => {
    const respuesta = parseInt(input);
    const resultado = Math.pow(base, exponente);

    if (respuesta === resultado) {
        console.log(`\nTu respuesta es: ${respuesta} \nLa respuesta es correcta, felicitaciones!`);
    } else {
        console.log(`\nTu respuesta es: ${respuesta} \nLa respuesta es incorrecta, suerte para la proxima\n La respuesta correcta es: ${resultado}`);
        console.log(` La diferencia absoluta es: ${Math.abs(respuesta - resultado)}`);
    }
    rl.close();
});