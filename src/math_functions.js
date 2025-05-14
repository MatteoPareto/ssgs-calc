// Define operations 
function sum(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
    if (parseFloat(b) === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return parseFloat(a) / parseFloat(b);
}

module.exports = { sum, subtract, multiply, divide };