const { sum, subtract, multiply, divide } = require('../src/math_functions.js');


test('add 2 and 5 to make 7', () => {
    expect(sum(2, 5)).toBe(7);
});

test('subtract 5 from 10 to make 5', () => {
    expect(subtract(10, 5)).toBe(5);
});

test('multiply 2 and 5 to make 10', () => {
    expect(multiply(2, 5)).toBe(10);
});

test('divide 10 by 2 to make 5', () => {
    expect(divide(10, 2)).toBe(6);
});

test('division by zero throws an error', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
});