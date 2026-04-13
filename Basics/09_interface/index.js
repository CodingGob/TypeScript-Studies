"use strict";
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const ship = {
    x: 2.3343,
    y: -4.3495,
    z: 3.4089
};
showCoords(ship);
const almira = {
    name: "Almira",
    age: 57
};
console.log(`Nome: ${almira.name} Age: ${almira.age}`);
