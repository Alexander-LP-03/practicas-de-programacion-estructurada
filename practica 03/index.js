
const perfil = {
    isActive: true,
    edad: 18,
    nombre: "Alexander",
    estudios: {
        escuelaBasica: {
            inicio: "2013/02/01",
            graduacion: "2021/11/08"
        },
        Bachillerato: {
            inicio: "2022/02/01",
            graduacion: "2023/11/15"
        },
        universidad: {
            inicio: "2024/07/01",
            graduacion: "2030/12/01"
        }
    },
}

console.log(perfil.estudios.universidad);
console.log(Object.entries(perfil));






// const frutas = ["uva", "pera", "manzana"]
// console.log(frutas.length);
// const nums = [1, 4, 7, 10];
// nums.forEach(n => {
//     console.log(n * 2);
// });





// frutas.forEach((fruta, index) => {
//     console.log(`${fruta} en el indice ${index}`);
// })




// Array.map()         //transformar elementos
// Array.filter()    //filtrar elementos
// Array.finde()  //encontrar un elemento
// Array.reduce() //reducir a un solo valor

const resultado = nums.reduce((sum, num) => sum + num, 0);
console.log(resultado)


const numerosSuma = nums.map(num => num - 2);
console.log(numerosSuma);

const pares = nums.filtar(num => num % 2 === 0);
console.log(pares);


const inventario = [
    { name: apples, quantity: 20 },
    { name: strawberries, quantity: 200 },
    { name: pineaples, quantity: 10 },
]

const encontarFruta = inventario.find(fruta => fruta.name === 'apples');
console.log(encontarFruta)