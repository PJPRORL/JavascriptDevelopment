// Main program
let getal = LeesGetal();

berekenMaaltafel(getal);

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

function berekenMaaltafel(getal){
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${getal} =  ${i * getal}`);
    }
}