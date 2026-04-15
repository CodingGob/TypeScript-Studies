// strings
let names: string[] = ["Alice", "Bob"];
console.log(names);

// numbers with generics
let ages: Array<number> = [25, 30, 35];
console.log(ages);

// mixed types with union types
let mixed: (string | number)[] = ["Alice", 25, "Bob", 30];
console.log(mixed);

// objects
interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: "Dylan" },
  { id: 2, name: "Sarah" },
];

console.log(users);

users.push({ id: 3, name: "John" });

console.log(users);
