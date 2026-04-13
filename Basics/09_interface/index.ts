interface Point {
    x: number;
    y: number;
    z: number;
}

function showCoords(obj: Point): void {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);    
}

const ship: Point = {
    x: 2.3343,
    y: -4.3495,
    z: 3.4089
}

showCoords(ship);


interface Person {
    name: string;
}

interface Person { // interfaces can be merged
    age: number;
}

const almira: Person = {
    name: "Almira",
    age: 57
}

console.log(`Nome: ${almira.name} Age: ${almira.age}`);
