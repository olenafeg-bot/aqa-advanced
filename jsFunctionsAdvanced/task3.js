const divide = (numenator, denominator) => {
   try {
    if (denominator === 0){
        return 'Error: Division by zero is not allowed.';
    } else if (isNaN(denominator) || isNaN(numenator)) {
        return 'Error: Invalid input. Please provide numeric values.';
    } else {
        return numenator / denominator;
    }  
    } catch (error) {
        return `Error: ${error.message}`;
    } finally {
        console.log('Execution completed.');
    }
};
console.log(divide(15, 5));
console.log(divide(6, 0));
console.log(divide(8, 'd'));