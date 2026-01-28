const numbers = [10, 20, 30, 40, 50];
const sumNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of numbers:", sumNumbers);