const myLibrary = [];
// const Book = function (title, author, pages, read) {
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.addLibrary = function addLibrary(library) {
  library.push({
    title: this.title, author: this.author, pages: this.pages, read: this.read,
  });
};

const asd = new Book('asd', 'ab1', 123, true);
const asd1 = new Book('asd1', 'ab2', 123, false);
const asd2 = new Book('asd2', 'ab3', 123, true);
asd.addLibrary(myLibrary);
asd1.addLibrary(myLibrary);
asd2.addLibrary(myLibrary);

function displayBook() {
  // 3. Making an array to store inner html codes and export to real innerHtml.
  //    With this way, I can manage to store the content of the object.
  const view = []; // 3.1
  view.push(
    '<table>'
      + '<tr>'
      + '<th>Title</th>'
      + '<th>Author</th>'
      + '<th>Pages</th>'
      + '<th>Read</th>'
      + '<th>Delete</th>'
      + '</tr>',
  );
  myLibrary.forEach((i) => {
    if (i.read) {
      view.push(`
            <tr>
                <td>${i.title}</td>
                <td>${i.author}</td>
                <td>${i.pages}</td>
                <td><input type="checkbox" checked onchange="changeRead(${myLibrary.indexOf(i)})"></td>
                <td><button type="button" onclick="deleteBook(${myLibrary.indexOf(i)})">Delete</button></td>
            `);
    } else {
      view.push(`
            <tr>
                <td>${i.title}</td>
                <td>${i.author}</td>
                <td>${i.pages}</td>
                <td><input type="checkbox" onchange="changeRead(${myLibrary.indexOf(i)})"></td>
                <td><button type="button" onclick="deleteBook(${myLibrary.indexOf(i)})">Delete</button></td>
            `);
    } // 3.2.2
  }); // 5.1 - Create delete button and assign delete function
  view.push('</table>'); // 3.2.3
  const library = document.querySelector('.library'); // 3.3
  library.innerHTML = view.join(''); // 3.4
}

displayBook();

// 4. Add New Book button
// 4.1 Create New Book button and input boxes
// 4.1.1 Remove New Button when users input available.
// eslint-disable-next-line no-unused-vars
function createInput() {
  // Assign function to ".new" button class.
  document.querySelector('.new').outerHTML = '<form class="form">'
      + "<label for='title'>Book Title: </label>"
      + "<input id='title' class=\"forms\" name=\"title\" type='text'><br>"
      + "<label for='author'>Book Author: </label>"
      + "<input id='author' class='forms' name=\"author\" type='text'><br>"
      + "<label for='pages'>Book Pages: </label>"
      + "<input id='pages' class='forms' name=\"pages\" type='number'><br>"
      + "<label for='read'>Book Read? </label>"
      + "<input id='read' class='forms' name=\"read\" type='checkbox'><br>"
      + "<input class ='submit' type='submit' onclick='clickSubmit()' value='Submit'><br>"
      + '</form>';
}

// 4.2.0 Get data and reset input form to previous state
// 4.2.1 use addLibrary method to add books to the array.
// 4.2.2 Restore New Button when user clicks submits button
// eslint-disable-next-line no-unused-vars
function clickSubmit() {
  // eslint-disable-next-line no-restricted-globals
  event.preventDefault();
  const newBook = new Book(
    document.querySelector('#title').value,
    document.querySelector('#author').value,
    document.querySelector('#pages').value,
    document.querySelector('#read').checked,
  ); // 4.2.0
  newBook.addLibrary(myLibrary); // 4.2.1
  document.querySelector('.form').outerHTML = '<button type="submit" class="new" onclick=\'createInput()\'>New Book</button>'; // 4.2.2
  displayBook();
}

// 5. Add a button on each book’s display to remove the book from the library.
// 5.2 Delete function
// eslint-disable-next-line no-unused-vars
function deleteBook(item) {
  myLibrary.splice(item, 1);
  displayBook();
}

// 6. Add a button on each book’s display to change its read status.
// 6.1 Print as checked if read value is true
// 6.2 Function to invoke read status
// eslint-disable-next-line no-unused-vars
function changeRead(item) {
  // 6.2
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
}
