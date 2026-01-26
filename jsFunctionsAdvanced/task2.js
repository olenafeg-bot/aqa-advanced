const newFunction = function(num) {
    console.log(num);
    if (num >= 0) {
        return newFunction(num - 1);
    } 
}
const result = newFunction(24);
console.log(result);

