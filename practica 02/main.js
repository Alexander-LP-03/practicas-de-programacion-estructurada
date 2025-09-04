import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,   
    output: process.stdout
}); 

rl.question("ingrese un numero decimal: ej-> 3.14 \n ", (decimal) => {
    const floor = Math.floor(decimal);
    
    console.log(`El numero usando floor es:`, floor);
    console.log(`El numero usando ceil es:`, match.ceil(decimal));
    console.log(`El numero usando round es:`, match.round(decimal));
    console.log(`El numero usando trunc es:`, match.trunc(decimal));    
    rl.close();
    });