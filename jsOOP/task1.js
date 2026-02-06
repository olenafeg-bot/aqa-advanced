const Book = require("./Book");
const EBook = require("./EBook");

const book1 = new Book("The Picture of Dorian Gray", "Oscar Wilde", 1890);
const ebook1 = new EBook("Harry Potter", "J.K. Rowling", 1997, "PDF");
book1.printInfo();
ebook1.printInfo();
book1.title = "Shadow and Bone";
book1.author = "Leigh Bardugo";
book1.year = 2012;
ebook1.fileFormat = "DOCX";
book1.printInfo();
ebook1.printInfo();

const book2 = new Book("1984", "George Orwell", 1948);
book2.title = 1984; // This will throw an error

console.log("New title:", book1.title);
console.log("New author:", book1.author);
console.log("New year:", book1.year);
console.log("New file format:", ebook1.fileFormat);
console.log("Book 2 title:", book2.title);

Book.oldestBook([book1, book2, book3, ebook1]);