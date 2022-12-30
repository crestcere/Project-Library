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
    // 3. Making an array to store inner html codes and export to real innerHtml. With this way, I can manage to store the content of the object.
    let view = []; // 3.1
    view.push("<table><tr><th>Title</th><th>Author</th><th>Pages</th><th>Read</th></tr>"); // 3.2.1
    for (let i of myLibrary) {
        view.push(`<tr><td>${i.title}</td><td>${i.author}</td><td>${i.pages}</td><td>${i.read}</td></tr>`); // 3.2.2
    }
    view.push("</table>"); // 3.2.3
    const library = document.querySelector(".library"); // 3.3
    library.innerHTML = view.join(""); // 3.4
}

console.log("myLibrary", myLibrary);
displayBook();

//  TODO 4. Add New Book button
// 4.1 Do not forget to use addBookToLibrary function to add books to the array.
const newButton = document.querySelector(".new");

// 4.2 It will bring up users to input to book values.
// 4.3 Remove New Button when users input available.
newButton.addEventListener("click", () => {
    console.log("New Book button is clicked");
    newButton.outerHTML = // 4.3.1
        "<form class=\"form\">" + // 4.2.*
            "<label>Book Title: </label>" +
            "<input class=\"title\" name=\"title\" type='text'><br>" +
            "<label>Book Author: </label>" +
            "<input class='author' name=\"author\" type='text'><br>" +
            "<label>Book Pages: </label>" +
            "<input class='pages' name=\"pages\" type='number'><br>" +
            "<label>Book Read? </label>" +
            "<input class='read' name=\"read\" type='checkbox'><br>" +
            "<input class ='submit' type='button' value='Submit'><br>" +
        "</form>";
});

// 4.4 Restore New Button when user click submit button
// if (document.querySelector(".submit") != null) {
//     document.querySelector(".submit").addEventListener("click", () => {
//         event.preventDefault();
//         console.log(document.querySelector(".title"));
//         console.log(document.querySelector(".author"));
//         console.log("Inside the query selector");
//         // addBookToLibrary()
//         document.querySelector(".form").outerHTML = "<button type=\"button\" class=\"new\">New Book</button>"; // 4.4.1
//     });
// }
if (document.querySelector(".submit") != null) {
    document.querySelector(".submit").addEventListener("click", () => {
        console.log("submit button clicked");
        document.querySelector(".form").outerHTML = "<button type=\"submit\" class=\"new\">New Book</button>"; // 4.4.1
    });
}

if (document.querySelector(".submit") != null) {
    const submit = document.querySelector(".submit");
    submit.addEventListener("click", () => {
        console.log("submit button is clicked");
    })
}

// const submit = document.querySelector(".submit");
// submit.addEventListener("click", () => {
//     console.log("submit button is clicked");
// })
// document.querySelector(".submit").addEventListener("click", () => {
//     console.log("submit button clicked");
//     document.querySelector(".form").outerHTML = "<button type=\"submit\" class=\"new\">New Book</button>"; // 4.4.1
// });

// 4.5 Save users input to the library.
// document.querySelector(".submit").addEventListener("click", () => {
//     console.log(document.querySelector(".title"));
//     console.log(document.querySelector(".author"));
//     // addBookToLibrary()
//     event.preventDefault();
//     document.querySelector(".form").outerHTML = "<button type=\"submit\" class=\"new\">New Book</button>"; // 4.4.1
// })