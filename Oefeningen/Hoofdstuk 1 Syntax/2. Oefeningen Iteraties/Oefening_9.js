const voornaam = prompt("Geef je voornaam in: ");
const achternaam = prompt("Geef je achternaam in: ");

console.log(`Je naam is ${voornaam} ${achternaam}`);

let correct;

do{

    correct = prompt("Is dit correct? [y/N]");

    if (correct === "n")
    {
        console.log("Sorry voor de verwarring, geef je naam opnieuw in.");
    }
    else
    {
        console.log("Bedankt voor de bevestiging!");
        break;
    }

} while (correct !== "y")