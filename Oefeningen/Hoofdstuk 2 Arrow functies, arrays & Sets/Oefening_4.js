// Arrow function
const StringFruitGroenten = () => {
    let groentenFruit = [];

    while (true){
        let input = prompt("Geef een fruit of groente in, of druk op enter om te stoppen: [] ");

        if (input === null || input.trim() === "") {
            break;
        }

        if (input.startsWith("g ")) {
            groentenFruit.push(input);
        } else if (input.startsWith("f ")) {
            groentenFruit.push(input);
        }
        
    }

    return groentenFruit;
}

// Main program
let groentenFruit = StringFruitGroenten();
let groenten = [];
let fruit = [];

console.log(`Je hebt volgende groenten en fruit ingegeven: [ ${groentenFruit.join(`, `).trim()} ]`);

for (let index = 0; index < groentenFruit.length; index++) {
    if (groentenFruit[index].startsWith("g ")) {
        groenten.push(groentenFruit[index].substring(2, groentenFruit[index].length));
    } else if (groentenFruit[index].startsWith("f ")) {
        fruit.push(groentenFruit[index].substring(2, groentenFruit[index].length));
    }
}

console.log(`Je hebt volgende groenten ingegeven: [ ${groenten.join(`, `).trim()} ]`);
console.log(`Je hebt volgende fruit ingegeven: [ ${fruit.join(`, `).trim()} ]`);