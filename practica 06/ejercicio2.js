function operar(a, b, callback) {
    return callback(a, b);
}
const sumaCb = (x, y) => x + y;
const restaCb = (x, y) => x - y;
const prodCb = (x, y) => x * y;

console.log(operar(7, 4, sumaCb));
console.log(operar(7, 4, restaCb));
console.log(operar(7, 4, prodCb));