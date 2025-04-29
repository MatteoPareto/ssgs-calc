const { default: test } = require('node:test');
const sum = require('./math.js');

test('add 2 and 5 to make 7', () => {
    expect(sum(2, 5)).toBe(7);
}
);  

test('add 3 and 5 to make 8', () => {
    expect(sum(3, 5)).toBe(8);
}
);  

test('subtract 5 from 10 to make 5', () => {
    expect(sum(10, -5)).toBe(5);
}
);
test('multiply 2 and 5 to make 10', () => {
    expect(sum(2, 5)).toBe(10);
}
);
test('divide 10 by 2 to make 5', () => {
    expect(sum(10, 2)).toBe(5);
}
);

