// makePet function 
export function makePet(name, type, age, food, toys) {
    return {
        name: name,
        type: type,
        age: age,
        food: food,
        toys: toys
    };
}



// transforms key:value pairs into new output assembly
export function formatWork(data) {
    return {
        work: data.book.title,
        writer: (data.author.first + ' ' + data.author.last)//string concatenation ''+

    };
}
// navigate the input object. title is property of book which is part 
// of the data object 
// You're hunting through the list for what you need. 

export function formatReverse(data) {
    //const [first, last] = data.writer.split(' ');
    //destructured way of writing it ^^
    // destructuring can be used when defining variables or in
    //function parameters
    const names = data.writer.split(' ');
    const first = names[0];
    const last = names[1];
    return {
        author: {
            first: first,
            last: last
        },
        book: {
            title: data.work
        }  
    };
}