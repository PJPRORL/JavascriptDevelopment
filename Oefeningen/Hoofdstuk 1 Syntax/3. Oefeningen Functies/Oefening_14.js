// Main program
let i = 1;

let getal1 = LeesGetal(i);
i++;
let getal2 = LeesGetal(i);

console.log(`De ingegeven getallen zijn ${getal1} en ${getal2}`);

let som = berekenSom(getal1, getal2);
let verschil = berekenVerschil(getal1, getal2);
let product = berekenProduct(getal1, getal2);

console.log(`De som is: ${som}`);
console.log(`Het verschil is: ${verschil}`);
console.log(`Het product is: ${product}`);

// Functions
function StringLeegOfEmtpy(i){
    let input;

    do {
        input = prompt(`Geef getal${i} [0] in: `);
    } while (input === null || input.trim() === "");

    return input;
}

function LeesGetal(i){
    let input;
    let getal;
    
    do {
        input = StringLeegOfEmtpy(i);
        getal = Number(input);    
    } while (input === null || isNaN(getal));
    
    return getal;
}

function berekenSom(getal1, getal2){
    return getal1 + getal2;
}

function berekenVerschil(getal1, getal2){
    return getal1 - getal2;
    
}

function berekenProduct(getal1, getal2){
    return getal1 * getal2;    
}