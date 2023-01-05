let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    switch (read) {
        case true:
            read = "yes";
            // console.log("yes called", read);
            break;
        case false:
            read = "no";
            // console.log("no called", read);
            break;
        default:
            this.read = read;
    }
    return {title, author, pages, read};
}

function addBookToLibrary(Book) {
    myLibrary.push(Book);
    // console.log("Function called");
}

const asd = new Book("title", "author", 123, "yes");
const asd1 = new Book("title", "author", 123, "yes");
const asd2 = new Book("title", "author", 123, "no");
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
    ); // 3.2.1
    for (let i of myLibrary) {
        view.push(`
            <tr>
                <td>${i.title}</td>
                <td>${i.author}</td>
                <td>${i.pages}</td>
                <td>${i.read}</td>
                <td><button type="button" onclick="deleteBook(${myLibrary.indexOf(i)})">Delete</button></td>
            </tr>
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

// TODO 6. Add a button on each book’s display to change its read status.

// TODO Use prototype and object to unify functions and book library.