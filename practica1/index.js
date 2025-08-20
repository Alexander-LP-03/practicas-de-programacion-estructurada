import readline from 'readline';
 const rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

rd.question('Iwhat is your namne? ', (name) => {
    console.log(" Welcome " + name);
    rd.close();
}); 