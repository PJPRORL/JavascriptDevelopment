// Arrow function
const StringFruitGroenten = () => {
    const groenten = new Set();
    const fruit = new Set();

    while (true){
        let input = prompt("Geef een fruit of groente in, of druk op enter om te stoppen: [] ");

        if (input === null || input.trim() === "") {
            break;
        }

        if (input.startsWith("g ")) {
            groenten.add(input.substring(2));
        } else if (input.startsWith("f ")) {
            fruit.add(input.substring(2));
        }
        
    }

    return {groenten, fruit};
}

// Main program
const groentenfruit = StringFruitGroenten();

console.log("Groenten: ", groentenfruit.groenten);
console.log("Groenten: " , groentenfruit.fruit);