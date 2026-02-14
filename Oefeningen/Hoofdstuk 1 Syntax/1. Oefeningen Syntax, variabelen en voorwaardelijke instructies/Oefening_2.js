let getal1 =  Number(prompt("Geef een eerste gatal in: [0]"));
let getal2 =  Number(prompt("Geef een tweede gatal in: [1]"));

let som = getal1 + getal2;
let verschil = getal1 - getal2;
let product = getal1 * getal2;
let quotiënt = getal1 / getal2;
let rest = getal1 % getal2;

console.log(`De som van ${getal1} en ${getal2} is ${som}`);
console.log(`Het verschil tussen ${getal1} en ${getal2} is ${verschil}`);
console.log(`Het product van ${getal1} en ${getal2} is ${product}`);
console.log(`Het quotiënt van ${getal1} en ${getal2} is ${quotiënt}`);
console.log(`De rest bij deling van ${getal1} door ${getal2} is ${rest}`);