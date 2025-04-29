const sum = require('./math.js');

test('add 2 and 5 to make 7', () => {
    expect(sum(2, 5)).toBe(7);
}
);  

test('add 3 and 5 to make 7', () => {
    expect(sum(3, 5)).toBe(8);
}
);  