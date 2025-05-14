//import the math functions
const { sum, subtract, multiply, divide } = require('./math_functions.js');

// CLI logic
let operations = ['Addition', 'Subtraction', 'Multiplication', 'Division'];

let step = 0;
let operation = '';
let firstNumber = '';
let secondNumber = '';

process.stdout.write('Hello User! \n\nPlease choose an operation via a specific number: \n 0) Addition \n 1) Subtraction \n 2) Multiplication \n 3) Division \n\n');

process.stdin.on('data', (data) => {
    let input = data.toString().trim();

    if (step === 0) {
        if (input === '0' || input === '1' || input === '2' || input === '3') {
            operation = input;
            console.log('You chose the operation ' + operations[operation] + '\nEnter the first number: ');
            step++;
        } else {
            console.log('Invalid operation. Please enter a number between 0 and 3: ');
        }
    } else if (step === 1) {
        firstNumber = input;
        console.log('First number: ' + firstNumber);
        process.stdout.write('Enter the second number: ');
        step++;
    } else if (step === 2) {
        secondNumber = input;
        console.log('Second number: ' + secondNumber);

        let result = 0;

        switch (operation) {
            case '0':
                result = sum(firstNumber, secondNumber);
                console.log('Result: ' + result);
                break;
            case '1':
                result = subtract(firstNumber, secondNumber);
                console.log('Result: ' + result);
                break;
            case '2':
                result = multiply(firstNumber, secondNumber);
                console.log('Result: ' + result);
                break;
            case '3':
                try {
                    result = divide(firstNumber, secondNumber);
                    console.log('Result: ' + result);
                } catch (error) {
                    console.log(error.message);
                    step--; // Go back to step 2 to re-enter the second number
                }
                break;
            default:
                console.log('Invalid operation. Please enter a number between 0 and 3: ');
                break;
        }

        if (operation !== '3' || parseFloat(secondNumber) !== 0) {
            console.log('Calculation complete. Restart the program to perform another operation.');
            process.exit(); // Exit after successful calculation
        }
    }
});