const Book = require("./Book");
class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }
    get fileFormat() {
    return this._fileFormat;
}
    set fileFormat(value) {
    if (typeof value !== "string") {
        throw new Error("File format must be a string");
    }
    this._fileFormat = value;
}
    printInfo() {
        super.printInfo();
        console.log(`File format: ${this.fileFormat}`);
    }

    static newEbooks(book1, format) {
        const newEbooks = new EBook(book1.title, book1.author, book1.year, format);
        return newEbooks;
}
}
    const ebook1 = new EBook("Harry Potter", "J.K. Rowling", 1997, "PDF");
    
    
    ebook1.printInfo();

    const ebook2 = EBook.newEbooks(ebook1, "EPUB");


    ebook2.printInfo();
    
 

    module.exports = EBook;