const handleNum = (num, evenNum, oddNum) => {
    if ( num % 2 === 0 ) {
        evenNum(num);
    } else {
        oddNum(num);
    }
};
function handleEven(num) {
    console.log(`The number ${num} is even.`);
}
function handleOdd(num) {
    console.log(`The number ${num} is odd.`);
}
handleEven(10);
handleOdd(7);
handleNum(12, handleEven, handleOdd); 
handleNum(27, handleEven, handleOdd); 