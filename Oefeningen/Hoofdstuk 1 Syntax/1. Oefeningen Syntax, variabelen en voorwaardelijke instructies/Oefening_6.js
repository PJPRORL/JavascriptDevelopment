let antwoord = Number(prompt("Geef je leeftijd in: "));

if (antwoord < 5){
    console.log("Je mag gratis naar binnen.");
} else if (antwoord >= 5 && antwoord <= 12){
    console.log("Je betaalt je ticket aan halve prijs.");
} else if (antwoord >= 13 && antwoord <= 54) {
    console.log("Je krijgt geen korting.");
} else if (antwoord > 54){
    console.log("Je ticket is gratis.");
} else {
    console.log("Je hebt geen geldige leeftijd ingegeven.");
}