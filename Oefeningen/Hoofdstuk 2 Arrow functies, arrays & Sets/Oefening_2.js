// Arrow Functie
// Methoden
const getallenVragen = () => {
    let input;
    let getal;

    let getallen = [];

    while (true) {
        input = prompt("Geef een getal in, of druk op enter om te stoppen: [] ");
        
        if (input === null || input.trim() === "") {
            break;
        }
        else {
            getal = Number(input);

            if (!isNaN(getal)) {
                getallen.push(getal);
            }
        }
    }

    return getallen;
}

// Main program
let arrayGetallen = getallenVragen();
console.log(`Je hebt volgende getallen ingegeven: [ ${arrayGetallen.join(`, `).trim()} ]`);

// Gevraagde versie
let kleinsteGetal;
let grootsteGetal;

for (let index = 0; index < arrayGetallen.length; index++) {
    const element = arrayGetallen[index];

    if (index === 0) {
        kleinsteGetal = element;
        grootsteGetal = element;
    }
    else {
        if (element < kleinsteGetal) {
            kleinsteGetal = element;
        }
        if (element > grootsteGetal) {
            grootsteGetal = element;
        }
    }
}

//Verkorte versie
// console.log(`Het kleinste getal is: ${Math.min(...arrayGetallen)}`);
// console.log(`Het grootste getal is: ${Math.max(...arrayGetallen)}`);
console.log(`Het kleinste getal is: ${kleinsteGetal}`);
console.log(`Het grootste getal is: ${grootsteGetal}`);
console.log(`De som van de getallen is ${arrayGetallen.reduce()}`);