import readline from 'readline';
const rd = readline.createInterface({
input: process.stdin,
output: process.stdout
}); 

rd.question('Iwhat is your namne? ', (name) => {
console.log(" Welcome " + name);
rd.close();
}); 


//verificar si la paabra es palindromo
//escribir la palabra en consola y procesar para saber si lo es
rd.question('ingresa una palabra para saber si es palindromo: ', (word) => {
    let palabraMinuscula = word.toLowerCase();
    let palabraInvertida = palabraMinuscula.split("").reverse().join("");
    console.log(palabraInvertida + " " + word);
    let respuesta;
    if(palabraMinuscula === palabraInvertida){
        respuesta = "es palindromo";
    }else{
        respuesta = "no es palindromo"; 
    }+
    console.log("la palabra " + word + " " + respuesta);    
    rd.close();
});


//verificar si la la primera letra es mayuscula
rd.question('ingresa una palabra para saber si la primera letra es mayuscula: ', (word) => {
    let primeraLetra = word.substring(0,1);
    let respuesta;
    if(primeraLetra === primeraLetra.toUpperCase()){
        respuesta = "la primera letra es mayuscula";   
    }else{
        respuesta = "la primera letra no es mayuscula"; 
    }
    console.log("la palabra " + word + " " + respuesta);    
    rd.close();
});