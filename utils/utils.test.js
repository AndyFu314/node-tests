const utils = require('./utils.js');

it('should add two numbers', () => {
    var result = utils.add(28, 13);
    
    if (result !== 41){
        throw new Error(`Expected 41, but got ${result}`);
    }
});

it('should square a number', () => {
    var result = utils.square(4);

    if (result !== 16){
        throw new Error(`Expected 16, but got ${result}`);
    }
});