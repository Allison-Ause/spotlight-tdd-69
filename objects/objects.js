export function makePet(name, type, age, food, toys) {
    return {
        name: name,
        type: type,
        age: age,
        food: food,
        toys: toys
    };
}





export function formatWork(data) {
    return {
        work: data.book.title,
        writer: (data.author.first + ' ' + data.author.last)//string concatenation ''+

    };
}
