const expect = require('expect');

const utils = require('./utils.js');

it('should add two numbers', () => {
    var result = utils.add(22, 13);
    
    expect(result).toBe(35, `Expected 35, but got ${result}`).toBeA('number');
});

it('should square a number', () => {
    var result = utils.square(4);

    expect(result).toBe(16, `Expected 16, but got ${result}`).toBeA('number');
});

it('should verify first and last name', () => {
    var user = {
        age: 27,
        location: 'Taipei'
    };

    var result = utils.setName(user, 'Andy Fu');

    expect(result).toInclude({
        firstName: 'Andy',
        lastName: 'Fu'
    });
});