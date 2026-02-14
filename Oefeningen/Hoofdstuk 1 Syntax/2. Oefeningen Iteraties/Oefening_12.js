let jaren = 0;
let leeuwen = 50;
let resultaat = "50 ";

let input = prompt("Wil je het aantal jaren zien? [y/N] ");

while (leeuwen <= 1000)
{
    leeuwen = leeuwen * 1.15;

    leeuwen = Math.floor(leeuwen);

    jaren++;

    if (input === "y"){
        console.log(`${jaren}: ${leeuwen}`);
    }else {
        resultaat += leeuwen + " ";
    }
}

if (input !== "y"){
    console.log(resultaat);
}