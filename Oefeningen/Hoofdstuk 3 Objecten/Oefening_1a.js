let books = {
    boek1:{
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937
    },
    boek2:{
        title: "1984",
        author: "George Orwell",
        year: 1949,
        wordCount: 88900
    },
    boek3:{
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        wordCount: 124713
    }
}

console.log(books);
console.log(`Totaal woorden ${books.boek2.title} en ${books.boek3.title = "P&P"}: ${books.boek2.wordCount + books.boek3.wordCount}`);