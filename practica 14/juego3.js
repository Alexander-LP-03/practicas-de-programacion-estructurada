const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntar(txt) {
    return new Promise(res => rl.question(txt, r => res(r)));
}

function esPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function generarNumeroEstrategia(opcion) {
    switch (opcion) {
        case 1:
            return Math.floor(Math.random() * 20) + 1;

        case 2:
            let par;
            do {
                par = Math.floor(Math.random() * 20) + 1;
            } while (par % 2 !== 0);
            return par;

        case 3:
            let primo;
            do {
                primo = Math.floor(Math.random() * 20) + 1;
            } while (!esPrimo(primo));
            return primo;

        case 4:
            let tipo = Math.floor(Math.random() * 3) + 1;
            return generarNumeroEstrategia(tipo === 3 ? 1 : tipo);
    }
}

async function elegirEstrategia() {
    let op;
    do {
        op = Number(await preguntar(
            "\nElige tu estrategia:\n" +
            "1. Valores aleatorios\n" +
            "2. Solo números pares\n" +
            "3. Solo números primos\n" +
            "4. Combinación (par/primo/aleatorio)\n> "
        ));
    } while (![1,2,3,4].includes(op));

    return op;
}

async function solicitarObjetivo() {
    let num;
    do {
        num = Number(await preguntar("\nIngresa el número objetivo (mayor a 10): "));
    } while (isNaN(num) || num <= 10);
    return num;
}

async function jugarPartida(record) {
    const objetivo = await solicitarObjetivo();
    const estrategia = await elegirEstrategia();

    let total = 0;
    let rondas = 0;
    let rechazos = 3;
    let historial = [];

    console.log(`\nObjetivo: ${objetivo}`);
    console.log(`Rechazos disponibles: ${rechazos}\n`);

    while (true) {
        const generado = generarNumeroEstrategia(estrategia);
        console.log(`\nNúmero generado: ${generado}`);

        let eleccion;
        do {
            eleccion = await preguntar("¿Aceptar (A) o rechazar (R)? > ");
            eleccion = eleccion.trim().toUpperCase();
        } while (!["A","R"].includes(eleccion));

        if (eleccion === "R") {
            rechazos--;
            console.log(`Rechazo usado. Te quedan ${rechazos}.`);
            if (rechazos === 0) {
                console.log("\nPerdiste por agotar los rechazos.");
                return null;
            }
            continue;
        }

        total += generado;
        rondas++;
        historial.push(generado);

        console.log(`Total actual: ${total}`);

        if (total === objetivo) {
            console.log("\n¡Llegaste EXACTO al objetivo!");
            console.log(`Rondas usadas: ${rondas}`);
            console.log(`Historial: ${historial.join(" + ")}`);
            return rondas;
        }

        if (total > objetivo) {
            console.log("\nTe pasaste del objetivo. Perdiste.");
            return null;
        }
    }
}

async function main() {
    let record = Infinity;
    let jugarDeNuevo;

    console.log("Bienvenido a CARRERA DE NÚMEROS");

    do {
        const resultado = await jugarPartida(record);

        if (resultado !== null) {
            if (resultado < record) {
                console.log(`\n¡Nuevo récord! Lograste la meta en ${resultado} rondas.`);
                record = resultado;
            } else {
                console.log(`\nTu récord actual es ${record} rondas. ¡Intenta superarlo!`);
            }
        }

        jugarDeNuevo = await preguntar("\n¿Deseas jugar nuevamente? (S/N): ");
        jugarDeNuevo = jugarDeNuevo.trim().toUpperCase();

    } while (jugarDeNuevo === "S");

    console.log("\nGracias por jugar. ¡Vuelve cuando quieras!");
    rl.close();
}

main();
