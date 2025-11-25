const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntar(texto) {
    return new Promise(res => rl.question(texto, r => res(r)));
}

function generarSecuencia() {
    const sec = [];
    for (let i = 0; i < 4; i++) {
        sec.push(Math.floor(Math.random() * 9) + 1);
    }
    return sec;
}

function validarEntrada(input) {
    if (!/^[1-9]{4}$/.test(input)) return false;
    return true;
}

function generarPistas(secreta, intento) {
    const pistas = [];
    const usadaSecreta = Array(4).fill(false);
    const usadaIntento = Array(4).fill(false);

    for (let i = 0; i < 4; i++) {
        if (intento[i] === secreta[i]) {
            pistas.push("🟩");
            usadaSecreta[i] = true;
            usadaIntento[i] = true;
        }
    }

    for (let i = 0; i < 4; i++) {
        if (usadaIntento[i]) continue;

        for (let j = 0; j < 4; j++) {
            if (!usadaSecreta[j] && intento[i] === secreta[j]) {
                pistas.push("🟨");
                usadaSecreta[j] = true;
                usadaIntento[i] = true;
                break;
            }
        }
    }

    for (let i = 0; i < 4; i++) {
        if (!usadaIntento[i]) pistas.push("⬛");
    }

    return pistas;
}

async function main() {
    console.log("Bienvenido a: ADIVINA LA SECUENCIA");
    console.log("Adivina una secuencia de 4 números (del 1 al 9).");
    console.log("Pistas:");
    console.log("🟩 - Número correcto en posición correcta");
    console.log("🟨 - Número correcto en posición incorrecta");
    console.log("⬛ - Número no está en la secuencia");
    console.log("Tienes 10 intentos. Buena suerte.\n");

    const secreta = generarSecuencia();
    const inicio = Date.now();
    let intentoNum = 0;

    while (intentoNum < 10) {
        const entrada = await preguntar(`Intento ${intentoNum + 1}/10 - Escribe 4 números (1-9): `);

        if (!validarEntrada(entrada)) {
            console.log("Entrada inválida. Deben ser 4 dígitos entre 1 y 9.\n");
            continue;
        }

        const intento = entrada.split("").map(Number);
        intentoNum++;

        const pistas = generarPistas(secreta, intento);
        console.log("Pistas:", pistas.join(" "));

        if (pistas.every(p => p === "🟩")) {
            const tiempo = ((Date.now() - inicio) / 1000).toFixed(2);
            console.log(`\n¡Felicidades! Adivinaste la secuencia.`);
            console.log(`Tiempo: ${tiempo}s`);
            console.log(`Intentos usados: ${intentoNum}`);
            rl.close();
            return;
        }

        console.log("");
    }

    console.log("\nSe acabaron los intentos.");
    console.log("La secuencia correcta era:", secreta.join(" "));
    rl.close();
}

main();
