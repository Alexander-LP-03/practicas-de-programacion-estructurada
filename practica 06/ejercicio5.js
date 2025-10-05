const personas = [
    { nombre: "wendy", edad: 24 },
    { nombre: "angel", edad: 15 },
    { nombre: "alex", edad: 18 }
];
const mayorEdad = personas.find(p => p.edad > 18);
console.log(mayorEdad);