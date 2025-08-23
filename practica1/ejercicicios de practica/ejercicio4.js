// 4. Palabra más frecuente: dada una frase, devolver la palabra que aparece más veces (ignorar mayúsculas y signos). Si hay empate, devolver 
// cualquiera. 

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("--Verificar la palabra mas frecuente en una frase--")
rl.question("Ingrese una frase: ", (frase) => {
    const fraseLimpia = frase.toLowerCase().replaceAll(/[^a-z\s]/gi, "");
    const palabras = fraseLimpia.split(" ").filter(w => w !== "");
    const contar = {};
    for (const palabra of palabras) {
        contar[palabra] = (contar[palabra] || 0) + 1;
    }
    let maxPalabra = "";
    let maxContar = 0;

    for (const palabra in contar) {
        if (contar[palabra] > maxContar) {
            maxPalabra = palabra;
            maxContar = contar[palabra];
        }
    }
    console.log(`La palabra más frecuente es "${maxPalabra}" con ${maxContar} repeticiones`);
    rl.close();

})