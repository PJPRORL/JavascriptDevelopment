const voornaam = prompt("Geef je voornaam in: ");
const achternaam = prompt("Geef je achternaam in: ");

console.log(`Je naam is ${voornaam} ${achternaam}`);

let correct = prompt("Is dit correct? [y/N]");

if (correct == "y"){
    console.log("Bedankt voor de bevestiging!");
}else{
    console.log("Sorry voor de verwarring, voeg het programma opnieuw uit om je correcte naam in te geven.");
}