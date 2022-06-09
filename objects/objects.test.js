import {
    makePet
} from './objects.js';

const test = QUnit.test;

QUnit.module('objects');

test('makes pet', (expect) => {
    const actual = makePet();

    expect.deepEqual(actual, { 
        name: 'felix',
        type: 'cat',
        age: '6',
        food: 'tuna',
        toys: ['feather chaser', 'laser pointer', 'ball of yarn'] });
});