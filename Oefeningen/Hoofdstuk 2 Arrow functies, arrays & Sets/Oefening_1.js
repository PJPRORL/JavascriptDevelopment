// Main Program
let arrayNamen = new Array(5); 

arrayNamen = namenArray();

console.log(`a. ${arrayNamen.length}\n`);
console.log(`b.\n Eerste element: ${arrayNamen[0]}\n Derde element: ${arrayNamen[2]}\n Vijfde element: ${arrayNamen[4]}\n`);
console.log(`c. [ "${arrayNamen.sort().join('", "')}" ]`);
arrayNamen.push(StringLeegOfEmpty());
console.log(`\nd. [ "${arrayNamen.join(`", "`)}" ]\n`);
console.log(`e. ${arrayNamen.join(`;`)}`);

// Methoden
function StringLeegOfEmpty(){
    let input;

    do {
        input = prompt("Geef een string in: ");
    } while (input === null || input.trim() === "");

    return input;
}

function LeesGetal(){
    let input;
    let getal;

    do {
        input = StringLeegOfEmpty();
        getal = parseInt(input);
    } while (input === null || isNaN(getal));

    return getal;
}

function namenArray(){
    for (let i = 0; i < arrayNamen.length; i++){
        arrayNamen[i] = StringLeegOfEmpty();
    }

    return arrayNamen;
}