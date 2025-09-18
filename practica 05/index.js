import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Ingrese los nombres de los estudiantes separados por coma: ', (nombresInput) => {
  const nombres = nombresInput.split(',').map(n => n.trim());

  rl.question('Ingrese las notas de los estudiantes en el mismo orden, separadas por coma: ', (notasInput) => {
    const notas = notasInput.split(',').map(n => parseFloat(n.trim()));
    let estudiantes = nombres.map((nombre, index) => {
      return {
        nombre: nombre,
        nota: notas[index] || null 
      };
    });

    console.log('\n Información de estudiantes:');
    estudiantes.forEach(est => {
      console.log(`- ${est.nombre}: ${est.nota}`);
    });

    rl.close();
  });
});
