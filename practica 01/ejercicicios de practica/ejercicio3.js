// 3. Anagrama simple: dada una palabraA y palabraB, comprobar si son anagramas (mismas letras, distinto orden). Hint: normalizar y ordenar 
// caracteres. 

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("--Verificar si dos palabras son anagramas--")
rl.question("Ingrese la primera palabra: ", (palabra1) => {
    rl.question("Ingrese la segunda palabra: ", (palabra2) => {
        const limpio1 = palabra1.toLowerCase();
        const limpio2 = palabra2.toLowerCase();
        const ordenado1 = limpio1.split("").sort().join('');
        const ordenado2 = limpio2.split("").sort().join('');
        if (ordenado1 === ordenado2) {
            console.log(`Las palabras ${palabra1} y ${palabra2} si son Anagramas`)
        } else {
            console.log(`Las palabras ${palabra1} y ${palabra2} no son Anagramas`)
        }
        rl.close();
    })
})