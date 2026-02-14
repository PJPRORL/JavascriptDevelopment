// Initialiseren van de valsnelheden van de verschillende planeten
//Vaste waarden declareren

const gMaan = 1.625;
const gJupiter = 25.93;
const gMars = 3.728;
const gVenus = 8.872;
const gNeptunus = 11.28;

// Variabelen waarde declareren

let gewicht;
let keuze;

// Opvragen van de massa en de planeet

let massa = Number(prompt("Geef je massa in: "));
let planeet = prompt("Op welke planeet wil je jouw gewicht berekenen?"
    + "\n\tA. Maan"
    + "\n\tB. Jupiter"
    + "\n\tC. Mars"
    + "\n\tD. Venus"
    + "\n\tE. Neptunus"
    + "\nJouw keuze: ");

if (isNaN(massa)) {
    console.log("Je hebt geen geldige planeet gekozen of je opgegeven massa kon niet geconverteerd worden naar een getal.");
} else {
    
    switch (planeet.toUpperCase()) {
    case "A":
        gewicht = massa * gMaan;
        keuze = "Maan";
        break;
    case "B":
        keuze = "Jupiter";
        gewicht = massa * gJupiter;
        break;
    case "C":
        keuze = "Mars";
        gewicht = massa * gMars;
        break;
    case "D":
        keuze = "Venus";
        gewicht = massa * gVenus;
        break;
    case "E":
        keuze = "Neptunus";
        gewicht = massa * gNeptunus;
        break;
    default:
        console.log("Je hebt geen geldige planeet gekozen of je opgegeven massa kon niet geconverteerd worden naar een getal.");
        break;
    }

    console.log(`Je gewicht op ${keuze} is ${gewicht} Newton`);
}