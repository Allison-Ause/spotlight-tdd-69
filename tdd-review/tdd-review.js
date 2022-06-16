export function arrayLength(arrayInput) {
    return arrayInput.length;
}

export function produceThird(arrayInput) {

    // if (arrayInput.length < 3) {
    //    return ('The array is shorter than 3');
    // }
    //else {
    return arrayInput[2];
    //}
}

// returns first key and last value

export function firstAndLast(input) {
    const keys = Object.keys(input);
    const firstKey = keys[0]; 

    const lastKey = keys[keys.length - 1];
    const lastValue = input[lastKey];

    return { firstKey, lastValue };
    // const lastKey = input.length - 1;

    // return (keys[0], lastKey);
}