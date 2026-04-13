let numbers1: number[] = [1, 2, 4];
numbers1[2] = 3;

console.log(numbers1);

let numbers2: Array<number> = [10, 20, 30]; // This is another way to declare an array of numbers, not as common as the first one, but it works the same way.

console.log(numbers2);
console.log(numbers2.length);

const name1: string = "Mary";
const name2: string = "John";

let names: string[] = [];
names.push(name1);
names.push(name2);

console.log(names);

let mixed: any[] = [1, name1, 2, name2];

console.log(mixed);