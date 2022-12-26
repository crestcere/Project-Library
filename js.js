let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // console.log("Book Called");
    return {title, author, pages, read};
}

function addBookToLibrary(Book) {
    myLibrary.push(Book);
    // console.log("Function called");
}

const asd = new Book("title", "author", 123, "yes");
const asd1 = new Book("title", "author", 123, "yes");
const asd2 = new Book("title", "author", 123, "yes");
addBookToLibrary(asd);
addBookToLibrary(asd1);
addBookToLibrary(asd2);

function displayBook() {
    const library = document.querySelector(".library");
    library.innerHTML = "<h1>Injected</h1>";
}

console.log("myLibrary", myLibrary);
displayBook();

// Function loops through array and display books


// Add New Book button