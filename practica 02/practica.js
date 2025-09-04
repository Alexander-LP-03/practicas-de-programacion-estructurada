//pide al usuario que escriba una operacion matematica (por ejemplo: "10 + 20", #7.5 * 3", "100 / 0 )

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,   
    output: process.stdout
}); 

rl.question('Escribe una operacion matematica por ejemplo: "10 + 20", "7.5 * 3", "100 / 0": ', (operacion) => {
    let partes = operacion.split(" ");
    console.log(partes[0]);

    let tipoDeOperacion = partes[1];

    let valor1 = Number(partes[0]);

    let valor2 = Number(partes[2]);

    if(isNaN(valor1) || isNaN(valor2)){
        console.log("Error: Uno de los valores no es un numero");
    }

    //switch case parametro: tipo de operacion
    switch(tipoDeOperacion){
        case "+":
            console.log(`El resultado de la suma es: ${valor1 + valor2}`);
            break;
        case "-":
            console.log(`El resultado de la resta es: ${valor1 - valor2}`);
            break;
        case "*":
            console.log(`El resultado de la multiplicacion es: ${valor1 * valor2}`);
            break;
        case "/":
            if(valor2 === 0){
                console.log("Error: No se puede dividir por cero");
            } else {
                console.log(`El resultado de la division es: ${valor1 / valor2}`);
            }
            break;
        default:
            console.log("Error: Operacion no reconocida");
    }

    rl.close();

    });
   
