//Boeken object
let books = {
    boek1:{
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937,
        getInfo: function() {
            if (books.boek1.wordCount === undefined){
                return `${this.title} by ${this.author}, published in ${this.year}`;
            }
            else{
                return `${this.title} by ${this.author}, published in ${this.year} (${this.wordCount})`;
            }
        }
    },
    boek2:{
        title: "1984",
        author: "George Orwell",
        year: 1949,
        wordCount: 88900,
        getInfo: function() {
            if (books.boek2.wordCount === undefined){
                return `${this.title} by ${this.author}, published in ${this.year}`;
            }
            else{
                return `${this.title} by ${this.author}, published in ${this.year} (${this.wordCount} words)`;
            }
        }
    },
    boek3:{
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        wordCount: 124713,
        getInfo: function() {
            if (books.boek3.wordCount === undefined){
                return `${this.title} by ${this.author}, published in ${this.year}`;
            }
            else{
                return `${this.title} by ${this.author}, published in ${this.year} (${this.wordCount} words)`;
            }
        }
    }
}

for (const book in books) {
    if (!Object.hasOwn(books, book)) continue;
    
    const element = books[book];
    
    console.log(element.getInfo());
}