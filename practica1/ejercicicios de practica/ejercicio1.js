//  1. Palíndromo (string): Crear una función que reciba una palabra o frase y devuelva true si es palíndromo (ignorar espacios, signos de puntuación y 
// mayúsculas), false en caso contrario. Hint: replace(/[^a-z0-9]/gi, '') para filtrar caracteres. 

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log("--Verificar si una palabra o frase el palindromo--") 
rl.question('Ingresa una palabra o frase: ', (palabra) => {
    const entradaFiltrada = palabra.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const entradaInvertida = entradaFiltrada.split('').reverse().join('');
    const esPalidormo = entradaFiltrada === entradaInvertida;
    console.log(`La entrada "${palabra}" ${esPalidormo ? 'es' : 'no es'} un palíndromo.`);
    rl.close();
});
