import {
    makePet,
    formatWork,
    formatReverse
} from './objects.js';

const test = QUnit.test;

QUnit.module('objects');

//creates a new pet with an array
test('makes pet', (expect) => {
    const actual = makePet(
        'felix',
        'cat', 
        6, 
        'tuna', 
        ['feather chaser', 'laser pointer', 'ball of yarn']
    );

    expect.deepEqual(actual, { 
        name: 'felix',
        type: 'cat',
        age: 6,
        food: 'tuna',
        toys: ['feather chaser', 'laser pointer', 'ball of yarn'] });
});




//transforms 
test('returns work and writer', (expect) => {
    const actual = formatWork({
        author: {
            last: 'wells',
            first: 'h.g.'
        },
        book: {
            title: 'war of the worlds',
            genre: 'scifi',
            word: 312000
        }
    });

    expect.deepEqual(actual, { 
        work: 'war of the worlds', 
        writer: 'h.g. wells' 
    });
});


// attempt to reverse the input and output

test('returns longform book info', (expect) => {
    const actual = formatReverse({
        work: 'war of the worlds',
        writer: 'h.g. wells'
    });
            

    expect.deepEqual(actual, { 
        author: {
            last: 'wells', 
            first: 'h.g.'
        },
        book: {
            title: 'war of the worlds', 
        }
    });
});




// START OF TDD-REVIEW WORK