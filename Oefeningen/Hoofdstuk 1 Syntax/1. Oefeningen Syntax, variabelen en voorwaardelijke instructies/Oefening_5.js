let getal = Number(prompt("Geef een getal in: "));

switch (true){
    case (getal < 10):
        console.log(`Getal ${getal} is kleiner dan 10`);
        break;
    case (getal > 20):
        console.log(`Getal ${getal} is groter dan 20`);
        break;
    case (getal >= 10 && getal <= 20):
        console.log(`Het kwadraat van dit getal is ${getal * getal}`);
        break;
}