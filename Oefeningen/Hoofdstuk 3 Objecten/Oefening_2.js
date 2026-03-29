// Methodes
let createBook = (title, author, published, wordCount) => {
  return {
    title: title,
    author: author,
    published: published,
    wordCount: wordCount,
    getInfo: function () {
      return `Title: ${this.title} author: ${this.author} published: ${this.published} wordcount: ${this.wordCount}`;
    },
    typeOfBook: function () {
      // if (books.wordCount === undefined){
      //     return `${this.books.title} is a Unknown.`;
      // }

      if (books.wordCount < 7500) {
        return `${this.books.title} is a short story.`;
      } else if (books.wordCount < 20000) {
        return `${this.books.title} is a novella.`;
      } else if (books.wordCount < 250000) {
        return `${this.books.title} is a novel.`;
      } else {
        return `${this.books.title} is a Doorstopper.`;
      }
    },
  };
};

// Creating objects
const books = [
  createBook("The Hobbit", "J.R.R. Tolkien", 1937, typeOfBook()),
  createBook("1984", "George Orwell", 1949, 88900, typeOfBook()),
  createBook("Pride and Prejudice", "Jane Austen", 1813, 124713, typeOfBook()),
  createBook("War and Peace", "Leo Tolstoy", 1867, 544406, typeOfBook()),
  createBook("The Tell-Tale Heart", "Edgar Allan Poe", 1843, 2093, typeOfBook()),
  createBook("The Metamorphosis", "Franz Kafka", 1915, 22185, typeOfBook()),
  createBook("Strange Case of Dr Jekyll and Mr Hyde", "Robert Louis Stevenson", 1886, 13500, typeOfBook()),
];

// Methoden oproepen
// for (const boek in books) {
//     if (!Object.hasOwn(books, boek)) continue;

//     const element = books[boek];
//     console.log(element.getInfo());
// }

for (const book in books) {
  if (!Object.hasOwn(books, book)) continue;

  const element = books[book];
  console.log(element.typeOfBook());
}
