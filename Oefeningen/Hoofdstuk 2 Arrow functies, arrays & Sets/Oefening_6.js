// Functions
const gemeenschappelijkeArray = (array, array2) => {
    let arrayGetallen = [1, 4, 5, 8, 11];
    let arrayGetallen2 = [10, 4, 5, 12, 15];
    let nieuweArray = [];

    if (arrayGetallen.includes(4, 5) && arrayGetallen2.includes(4, 5)) {
        console.log(`Gemeenschappelijke elementen (array): ${arrayGetallen.join(`[ , ]`)}`)
    }
}

const gemeenschappelijkeList = () => {
    const ListGetallen = new Set(1, 2, 3, 4, 5);
    const ListGetallen2 = new Set(4, 5, 6, 7, 8);

    
}

// Main program
gemeenschappelijkeArray();