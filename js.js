// let myLibrary = [];

const Book = function(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    return {title, author, pages, read};
}
/*
function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

const asd = new Book("title", "author", 123, true);
const asd1 = new Book("title", "author", 123, false);
const asd2 = new Book("title", "author", 123, true);
addBookToLibrary(asd);
addBookToLibrary(asd1);
addBookToLibrary(asd2);

function displayBook() {
    // 3. Making an array to store inner html codes and export to real innerHtml. With this way, I can manage to store the content of the object.
    let view = []; // 3.1
    view.push("<table>" +
        "<tr>" +
            "<th>Title</th>" +
            "<th>Author</th>" +
            "<th>Pages</th>" +
            "<th>Read</th>" +
            "<th>Delete</th>" +
        "</tr>"
    );
    for (let i of myLibrary) {
        console.log(i);
        i.read ?
            // 6.1 Print as checked if read value is true
            view.push(`
            <tr>
                <td>${i.title}</td>
                <td>${i.author}</td>
                <td>${i.pages}</td>
                <td><input type="checkbox" checked onchange="changeRead(${myLibrary.indexOf(i)})"></td>
                <td><button type="button" onclick="deleteBook(${myLibrary.indexOf(i)})">Delete</button></td>
            `) :
            view.push(`
            <tr>
                <td>${i.title}</td>
                <td>${i.author}</td>
                <td>${i.pages}</td>
                <td><input type="checkbox" onchange="changeRead(${myLibrary.indexOf(i)})"></td>
                <td><button type="button" onclick="deleteBook(${myLibrary.indexOf(i)})">Delete</button></td>
            `); // 3.2.2
                // 5.1 - Create delete button and assign delete function
    }
    view.push("</table>"); // 3.2.3
    const library = document.querySelector(".library"); // 3.3
    library.innerHTML = view.join(""); // 3.4
}

// console.log("myLibrary", myLibrary);
displayBook();

// 4. Add New Book button
// 4.1 Create New Book button and input boxes
// 4.1.1 Remove New Button when users input available.
function createInput() { // Assign function to ".new" button class.
    document.querySelector(".new").outerHTML =
        "<form class=\"form\">" +
            "<label for='title'>Book Title: </label>" +
            "<input id='title' class=\"forms\" name=\"title\" type='text'><br>" +
            "<label for='author'>Book Author: </label>" +
            "<input id='author' class='forms' name=\"author\" type='text'><br>" +
            "<label for='pages'>Book Pages: </label>" +
            "<input id='pages' class='forms' name=\"pages\" type='number'><br>" +
            "<label for='read'>Book Read? </label>" +
            "<input id='read' class='forms' name=\"read\" type='checkbox'><br>" +
            "<input class ='submit' type='submit' onclick='clickSubmit()' value='Submit'><br>" +
        "</form>"
    ;
}

// 4.2.0 Get data and reset input form to previous state
// 4.2.1 use addBookToLibrary function to add books to the array.
// 4.2.2 Restore New Button when user clicks submits button
function clickSubmit() {
    event.preventDefault();
    // console.log("title: ", document.querySelector("#title").value);
    // console.log("author: ", document.querySelector("#author").value);
    // console.log("pages: ", document.querySelector("#pages").value);
    // console.log("read: ", document.querySelector("#read").checked);
    let newBook = new Book(document.querySelector("#title").value, document.querySelector("#author").value,
        document.querySelector("#pages").value, document.querySelector("#read").checked) // 4.2.0
    addBookToLibrary(newBook); // 4.2.1
    document.querySelector(".form").outerHTML = "<button type=\"submit\" class=\"new\" onclick='createInput()'>New Book</button>"; // 4.2.2
    displayBook();
}

// 5. Add a button on each book’s display to remove the book from the library.
// 5.2 Delete function
function deleteBook(item) {
    myLibrary.splice(item, 1);
    displayBook();
}

// 6. Add a button on each book’s display to change its read status.
// 6.1 Print as checked if read value is true
// 6.2 Function to invoke read status
function changeRead(item) { // 6.2
    switch (myLibrary[item].read) {
        case true: {
            myLibrary[item].read = false;
            break;
        }
        case false: {
            myLibrary[item].read = true;
            break;
        }
        default: {
            myLibrary[item].read = true;
            break;
        }
    }
    displayBook();
}*/

// TODO Use prototype and object to unify functions and book library.
const bookLibrary = () => {
    const myLibrary = [];
    const addBookToLibrary = (Book) => {
        myLibrary.push(Book);
    };
    const displayBook = () => {
        // 3. Making an array to store inner html codes and export to real innerHtml. With this way, I can manage to store the content of the object.
        let view = []; // 3.1
        view.push("<table>" +
            "<tr>" +
            "<th>Title</th>" +
            "<th>Author</th>" +
            "<th>Pages</th>" +
            "<th>Read</th>" +
            "<th>Delete</th>" +
            "</tr>"
        );
        for (let i of myLibrary) {
            console.log(i);
            i.read ?
                // 6.1 Print as checked if read value is true
                view.push(`
        <tr>
            <td>${i.title}</td>
            <td>${i.author}</td>
            <td>${i.pages}</td>
            <td><input type="checkbox" checked onchange="myLibrary.changeRead(${myLibrary.indexOf(i)})"></td>
            <td><button type="button" onclick="myLibrary.deleteBook(${myLibrary.indexOf(i)})">Delete</button></td>
        `) :
                view.push(`
        <tr>
            <td>${i.title}</td>
            <td>${i.author}</td>
            <td>${i.pages}</td>
            <td><input type="checkbox" onchange="myLibrary.changeRead(${myLibrary.indexOf(i)})"></td>
            <td><button type="button" onclick="myLibrary.deleteBook(${myLibrary.indexOf(i)})">Delete</button></td>
        `); // 3.2.2
            // 5.1 - Create delete button and assign delete function
        }
        view.push("</table>"); // 3.2.3
        const library = document.querySelector(".library"); // 3.3
        library.innerHTML = view.join(""); // 3.4
    };
    const createInput = () => {
        document.querySelector(".new").outerHTML =
            "<form class=\"form\">" +
            "<label for='title'>Book Title: </label>" +
            "<input id='title' class=\"forms\" name=\"title\" type='text'><br>" +
            "<label for='author'>Book Author: </label>" +
            "<input id='author' class='forms' name=\"author\" type='text'><br>" +
            "<label for='pages'>Book Pages: </label>" +
            "<input id='pages' class='forms' name=\"pages\" type='number'><br>" +
            "<label for='read'>Book Read? </label>" +
            "<input id='read' class='forms' name=\"read\" type='checkbox'><br>" +
            "<input class ='submit' type='submit' onclick='myLibrary.clickSubmit()' value='Submit'><br>" +
            "</form>"
        ;
    };
    const clickSubmit = () => {
        event.preventDefault();
        let newBook = new Book(document.querySelector("#title").value, document.querySelector("#author").value,
            document.querySelector("#pages").value, document.querySelector("#read").checked) // 4.2.0
        addBookToLibrary(newBook); // 4.2.1
        document.querySelector(".form").outerHTML = "<button type=\"submit\" class=\"new\" onclick='myLibrary.createInput()'>New Book</button>"; // 4.2.2
        displayBook();
    };
    const changeRead = (item) => {
        switch (myLibrary[item].read) {
            case true: {
                myLibrary[item].read = false;
                break;
            }
            case false: {
                myLibrary[item].read = true;
                break;
            }
            default: {
                myLibrary[item].read = true;
                break;
            }
        }
        displayBook();
    };
    const deleteBook = (item) => {
        myLibrary.splice(item, 1);
        displayBook();
    }
    return { displayBook, createInput, clickSubmit, changeRead, addBookToLibrary, deleteBook };
}

const myLibrary = bookLibrary();

const book1 = new Book("test1", "test1", 55, false);
const book2 = new Book("test2", "test2", 56, true);
const book3 = new Book("test3", "test3", 57, false);
const book4 = new Book("test4", "test4", 58, true);

myLibrary.addBookToLibrary(book1);
myLibrary.addBookToLibrary(book2);
myLibrary.addBookToLibrary(book3);
myLibrary.addBookToLibrary(book4);

myLibrary.displayBook();

