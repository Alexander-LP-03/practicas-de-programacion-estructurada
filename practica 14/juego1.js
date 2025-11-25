const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntar(p) {
    return new Promise(resolve => rl.question(p, r => resolve(r)));
}

function generarNumero(nivel) {
    switch (nivel) {
        case 1: return Math.floor(Math.random() * 10) + 1;
        case 2: return Math.floor(Math.random() * 50) + 1;
        case 3: return Math.floor(Math.random() * 100) + 1;
        default: return 1;
    }
}

function generarOperacion(nivel) {
    const ops = ["+", "-", "*", "/"];
    const op = ops[Math.floor(Math.random() * ops.length)];

    let a = generarNumero(nivel);
    let b = generarNumero(nivel);

    if (op === "/") {
        b = b === 0 ? 1 : b;
        a = a - (a % b);
    }

    let resultado;
    switch (op) {
        case "+": resultado = a + b; break;
        case "-": resultado = a - b; break;
        case "*": resultado = a * b; break;
        case "/": resultado = a / b; break;
    }

    return {
        texto: `${a} ${op} ${b}`,
        respuesta: resultado
    };
}

async function jugarTurno(nombre, nivel) {
    let puntos = 0;
    let racha = 0;

    console.log(`\n---- Turno de ${nombre} ----`);

    for (let i = 1; i <= 5; i++) {
        const o = generarOperacion(nivel);
        const user = Number(await preguntar(`Pregunta ${i}: ¿Cuánto es ${o.texto}? `));

        if (user === o.respuesta) {
    console.log("✔ Correcto");
    puntos += 10;
    racha++;

    if (racha >= 3) {
        console.log("¡Racha de 3 respuestas correctas! +5 puntos extra");
        puntos += 5;    
    }

} else {
    console.log(`Incorrecto (respuesta: ${o.respuesta})`);
    racha = 0;
}

    }

    return puntos;
}

async function main() {
    console.log("Bienvenido a EL DUELO DE MATEMÁTICAS");

    let nivel = Number(await preguntar(
        "Selecciona dificultad:\n1. Fácil\n2. Medio\n3. Difícil\n> "
    ));

    if (nivel < 1 || nivel > 3) {
        console.log("Nivel inválido. Se asigna Fácil.");
        nivel = 1;
    }

    const puntos1 = await jugarTurno("Jugador 1", nivel);
    const puntos2 = await jugarTurno("Jugador 2", nivel);

    console.log("\n--- Resultados ---");
    console.log(`Jugador 1: ${puntos1}`);
    console.log(`Jugador 2: ${puntos2}`);

    if (puntos1 > puntos2) {
        console.log("¡Gana el Jugador 1!");
    } else if (puntos2 > puntos1) {
        console.log("¡Gana el Jugador 2!");
    } else {
        console.log("¡Empate total!");
    }

    rl.close();
}

main();
