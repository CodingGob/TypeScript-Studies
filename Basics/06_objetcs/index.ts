function passCoordinates(coord: {x: number, y: number}) { // Structural Typing: The function expects an object with x and y properties, but it can accept any object that has those properties, even if it has additional ones.
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}

const shipLocation = { x: 10, y: 20, name: "Millennium Falcon" }; // it has more properties than the function expects, but that's fine in TypeScript

passCoordinates(shipLocation);


// Using Type Aliases
type Point = {x: number, y: number} // Type Aliases: You define the object

function showCoordinates(coord: Point) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}

const GenLocation: Point = { x: 329, y: 84.2 };

showCoordinates(GenLocation);

// Using Symbols as Property Keys
const id: symbol = Symbol("id");
let user1 = {
    [id]: "1234", // Using a symbol as a property key, [] are needed to define and access a computed property name
    name: "John Doe",
    age: 30
}

console.log(user1.name);
console.log(user1[id]);
console.log(user1);

const array: string[] = [ "Maria", "João" ];