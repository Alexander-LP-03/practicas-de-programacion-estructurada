function crearAcumulador() {
    let total = 0;
    return function (num) {
        total += num;
        return total;
    };
}
const suma = crearAcumulador();
console.log(suma(6));
console.log(suma(4));
console.log(suma(8)); 