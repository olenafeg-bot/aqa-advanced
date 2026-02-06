class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    get title() {
    return this._title;
}
set title(value) {
    if (typeof value !== "string") {
        throw new Error("Title must be a string");
    }
    this._title = value;
}
get author() {
    return this._author;
}
set author(value) {
    if (typeof value !== "string") {
        throw new Error("Author must be a string");
    }
    this._author = value;
}
get year() {
    return this._year;
}
set year(value) {
    if (typeof value !== "number") {
        throw new Error("Year must be number");
    }
    this._year = value;
}
    printInfo() {
        console.log(`${this.title} by ${this.author}, published in ${this.year}`);
    }
    static oldestBook(books) {
    let oldestBook = books[0];
    let oldestYear = books[0].year;
    books.forEach(book => { 
        if (typeof book.year !== "number") {
            throw new Error("Year must be number");
        }     
        if (book.year < oldestYear) {
                oldestYear = book.year;
                oldestBook = book;
            }
        });
        console.log('the oldest book is: ' + oldestBook.title + ' by ' + oldestBook.author + ', published in ' + oldestBook.year);
}
}
    const book1 = new Book("The Picture of Dorian Gray", "Oscar Wilde", 1890);
        
    const book2 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
        
    const book3 = new Book("Ninth House", "Leigh Bardugo", 2013);
    
      
    book1.printInfo();
    book2.printInfo();
    book3.printInfo();

    Book.oldestBook([book1, book2, book3]);

module.exports = Book;