function sumarArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumarArray(arr.slice(1));
}
console.log(sumarArray([1, 2, 3, 4]));