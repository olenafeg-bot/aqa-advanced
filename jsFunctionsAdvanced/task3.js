const divide = (numenator, denominator) => {
      if (denominator === 0){
        throw 'Error: Division by zero is not allowed.';
    } else if (isNaN(denominator) || isNaN(numenator)) {
        throw 'Error: Invalid input. Please provide numeric values.';
    } else {
        return numenator / denominator;
    }  
};
try {
    console.log(divide(15, 5));
} catch (error) {
    console.log(error);
} finally {
    console.log('Execution completed.');
} try {
    console.log(divide(20,0));
} catch (error) {
    console.log(error);
} finally {
    console.log('Execution completed.'); 
} try {
    console.log(divide(8,'d'));
} catch (error) {
    console.log(error);
} finally {
    console.log('Execution completed.');
}

