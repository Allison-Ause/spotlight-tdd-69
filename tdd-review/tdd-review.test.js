import {
    arrayLength,
    produceThird,
    firstAndLast,
} from './tdd-review.js';

const test = QUnit.test;

QUnit.module('tdd-review');

test('function returns length of array input', (expect) => {
//arrange: what goes in and out of the gumball machine?
    const arrayInput = [];

    const expected = 0;

//act: crank the gumball machine and store what comes out
    const actual = arrayLength(arrayInput);

//assert: did the gumball machine return what we expected?
    expect.equal(actual, expected);
});


// write a function that takes an array and 
// produces the third item in the array

test('function takes an array and returns third item', (expect) => {
    // Arrange, 
    const arrayInput = [1, 2, 3];
    const expected = 3;

    //Act, 
    const actual = produceThird(arrayInput);
    //Assert
    expect.equal(actual, expected);
    
});

test('Object keys returns array of keys', (expect) => {
    // Arrange, 
    const cat = {
        name: 'duchess',
        type: 'persian'
    };

    const expected = ['name', 'type'];

    const keys = Object.keys(cat);

    expect.deepEqual(keys, expected);

    expect.equal(keys[0], 'name');
    expect.equal(keys[keys.length[-1]], 'type'); // gives last value
    
    expect.equal(lastKey, 'type');
    const lastKey = keys.length[-1];    

    expect.equal(cat[lastKey], 'persian');

});

// test('returns first key and last value', (expect) => {
//     // Arrange, Act, Assert
//     const cat = {
//         name: 'felix',
//         type: 'cat',
//         food: 'tuna',
//         age: 6,
//     };

//     const expected = ['name', 6];

//     const keys = Object.keys(cat);
//     const lastKey = keys[keys.length - 1];

//     const actual = firstAndLast(cat); 

//     expect.deepEqual(keys[0], 'name');
//     expect.deepEqual(cat[lastKey], 6);


// });

test('first key, last value', (expect) => {
    // Arrange, Act, Assert
    const input = {
        name: 'felix',
        type: 'cat',
        food: 'tuna',
        age: 6,
    };

    const expected = {
        firstKey: 'name',
        lastValue: 6
    };

    const actual = firstAndLast(input);

    expect.deepEqual(actual, expected);


});