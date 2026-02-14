let getal = Number(prompt("Geef een getal in: "));

let resultaat = "";

for (let i = getal; i < 100; i+=12) {
    resultaat += i + " ";
}

console.log(resultaat);