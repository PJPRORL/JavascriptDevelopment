let eersteGetal = Number(prompt("Geef het eerste getal: [0] "));
let tweedeGetal = Number(prompt("Geef het tweede getal: [0] "));
let derdeGetal = Number(prompt("Geef het derde getal: [0]"));

let kleinsteGetal;
let middelsteGetal;
let grootsteGetal;

if (eersteGetal <= tweedeGetal && eersteGetal <= derdeGetal) {
    kleinsteGetal = eersteGetal;
    if (tweedeGetal <= derdeGetal) {
        middelsteGetal = tweedeGetal;
        grootsteGetal = derdeGetal;
    }
    else {
        middelsteGetal = derdeGetal;
        grootsteGetal = tweedeGetal;
    }
}
else if (tweedeGetal <= eersteGetal && tweedeGetal <= derdeGetal) {
    kleinsteGetal = tweedeGetal;
    if (eersteGetal <= derdeGetal) {
        middelsteGetal = eersteGetal;
        grootsteGetal = derdeGetal;
    }
    else {
        middelsteGetal = derdeGetal;
        grootsteGetal = eersteGetal;
    }
} 
else {
    kleinsteGetal = derdeGetal;
    if (eersteGetal <= tweedeGetal) {
        middelsteGetal = eersteGetal;
        grootsteGetal = tweedeGetal;
    }
    else {
        middelsteGetal = tweedeGetal;
        grootsteGetal = eersteGetal;
    }
}

console.log(`Het kleinste getal is: ${kleinsteGetal}`);
console.log(`Het middelste getal is: ${middelsteGetal}`);
console.log(`Het grootste getal is: ${grootsteGetal}`);