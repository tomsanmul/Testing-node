const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
    test("test", () =>{
        expect(true).toBe(true);  //I verify that jest is installed correctly
    });

    test('should print 1 if they recive 1', () =>{
        expect(1).toBe(fizzbuzz(1));  //first number 1
    });

    test('should print <fizz> if they receive a multiple of 3', () =>{
        expect('fizz').toBe(fizzbuzz(3));
    });

    test('should print <buzz> if they receive a multiple of 5', () =>{
        expect('buzz').toBe(fizzbuzz(5));
    });

    test('should print <fizzbuzz> if they receive a multiple of 3 and 5', () =>{
        expect('fizzbuzz').toBe(fizzbuzz(15));
    });

    test("test", () =>{ 
        expect('Error, the argument must be a number').toBe(fizzbuzz("16"));  //I verify that a numeric parameter is sent
    });
});