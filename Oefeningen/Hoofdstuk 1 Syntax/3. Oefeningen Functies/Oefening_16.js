// Main Program
let startGetal = LeesGetal();

// Functions
function StringLeegOfEmtpy(){
    let input;

    do {
        input = prompt(`Geef getal [0] in: `);
    } while (input === null || input.trim() === "");

    return input;
}

function LeesGetal(){
    let input;
    let getal;
    
    do {
        input = StringLeegOfEmtpy();
        getal = Number(input);    
    } while (input === null || isNaN(getal));
    
    return getal;
}

function anoniemeFunctie(startGetal, anoniemeFunctie){
    
}