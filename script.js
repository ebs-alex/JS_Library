
let title = document.querySelector("h1");
let addBookDialog = document.querySelector("#addBookDialog")
let addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", () => addBookDialog.showModal());

let entryTitle = document.querySelector("#entryTitle");
let entryAuthor = document.querySelector("#entryAuthor");
let entryPages = document.querySelector("#entryPages");
let entryDescription = document.querySelector("#entryDescription")
let submittedBy = document.querySelector("#submittedBy")

let readCheckboxLabel = document.querySelector("label[for='readCheckbox']");
let readCheckbox = document.querySelector("#readCheckbox")
readCheckbox.addEventListener("change", () => {
    if (readCheckbox.checked) {
        readCheckboxLabel.textContent = "Book has been read"
    } else {
        readCheckboxLabel.textContent = "Book is unread"
    }
})

let cards = document.querySelector("#cards");

let submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", (e) => {
    e.preventDefault(); // We don't want to submit this fake form
    addBookDialog.close(addBookToLibrary() ); // Have to send the select box value here.
});




const myLibrary = [];

function Book(title, author, pages, description, readCheckbox, submittedBy) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.description = description;
  this.readCheckbox = readCheckbox
  this.submittedBy = submittedBy
}



function addBookToLibrary() {
    let newBook = Object.create(Book);
    newBook.entryTitle = entryTitle.value;
    newBook.entryAuthor = entryAuthor.value;
    newBook.entryPages = entryPages.value;
    newBook.entryDescription = entryDescription.value;
    newBook.readCheckbox = readCheckbox.checked
    newBook.submittedBy = submittedBy.value

    myLibrary.push(newBook)
    displayLibrary();
}


function displayLibrary() {
    cards.innerHTML = "";
    myLibrary.forEach( (b) =>{
        formatBook(b);
    })
}

function formatBook(book) {
    let item = document.createElement("li");
    item.setAttribute("class", "card");
    
    let title = document.createElement("h3");
    title.textContent = book.entryTitle;
    title.setAttribute("class", "bookTitle");
    
    let author = document.createElement("div");
    author.setAttribute("class", "author");
    author.textContent = "By " + book.entryAuthor;
    let pages = document.createElement("div");
    pages.textContent = book.entryPages + " pages"
    pages.setAttribute("class", "pages");
    let container1 =  document.createElement("div")
    container1.appendChild(author);
    container1.appendChild(pages);

    let description = document.createElement("div");
    description.textContent = book.entryDescription;
    description.setAttribute("class", "description");

    let container2 = document.createElement("div")
    container2.setAttribute("class", "readStatusContainer");
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "readCheckbox");
    checkbox.checked = book.readCheckbox;
    let readStatus = document.createElement("div");
    readStatus.textContent = checkbox.checked ? "Read" : "Unread";
    readStatus.style.color = checkbox.checked ? "black" : "bisque";
    readStatus.setAttribute("class", "readStatus");
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            readStatus.textContent = "Read"
            readStatus.style.color = "black";
        } else {
            readStatus.textContent = "Unread"
            readStatus.style.color = "bisque";
        }
    })
    container2.appendChild(checkbox);
    container2.appendChild(readStatus);
    
    let container3 = document.createElement("div");
    let submitterLabel = document.createElement("div");
    submitterLabel.textContent = "Submitted by:";
    submitterLabel.setAttribute("class", "small-text");
    let submitter = document.createElement("div");
    submitter.textContent = book.submittedBy
    submitter.setAttribute("class", "submittedBy");
    container3.appendChild(submitterLabel)
    container3.appendChild(submitter)

    let rmvBtn = document.createElement("button");
    rmvBtn.textContent = "Remove";
    rmvBtn.setAttribute("class", "removeBtn");
    rmvBtn.addEventListener("click", () => {
        item.style.display = "none"
    })

    item.appendChild(title);
    item.appendChild(container1);
    item.appendChild(description)
    item.appendChild(container2)
    item.appendChild(container3)
    item.appendChild(rmvBtn)
    cards.appendChild(item);
}



///add example books

let exampleBook1 = Object.create(Book)

exampleBook1.entryTitle = "The Gift"
exampleBook1.entryAuthor = "Hafez"
exampleBook1.entryPages = "120"
exampleBook1.entryDescription = "Each line of The Gift imparts the wonderful qualities of this master Sufi poet and spiritual teacher: encouragement, an audacious love that touches lives, profound knowledge, generosity, and a sweet, playful genius unparalleled in world literature."
exampleBook1.readCheckbox = true;
exampleBook1.submittedBy = "Alex"
myLibrary.push(exampleBook1)

let exampleBook2 = Object.create(Book)
exampleBook2.entryTitle = "The Unsettling of America"
exampleBook2.entryAuthor = "Wendell Berry"
exampleBook2.entryPages = "246"
exampleBook2.entryDescription = "Wendell Berry argues that good farming is a cultural and spiritual discipline. Today’s agribusiness, however, takes farming out of its cultural context and away from families. As a result, we as a nation are more estranged from the land―from the intimate knowledge, love, and care of it."
exampleBook2.readCheckbox = false;
exampleBook2.submittedBy = "Alex"
myLibrary.push(exampleBook2)

displayLibrary()




/////////////// Example cards (deprecated) 

// let example1 = document.querySelector("#example1")
// let readStatus1 = document.querySelector("#readStatus1")
// let readCheckbox1 = document.querySelector("#readCheckbox1")
// let rmvBtn1 = document.querySelector("#rmvBtn1")

// readCheckbox1.addEventListener("change", () => {
//     if (readCheckbox1.checked) {
//         readStatus1.textContent = "Read"
//         readStatus1.style.color = "black";
//     } else {
//         readStatus1.textContent = "Unread"
//         readStatus1.style.color = "bisque";
//     }
// })

// rmvBtn1.addEventListener("click", () => {
//     if (confirm("Are you sure?")) {
//         example1.style.display = "none"
//     };
// })


// let example2 = document.querySelector("#example2")
// let readStatus2 = document.querySelector("#readStatus2")
// let readCheckbox12 = document.querySelector("#readCheckbox2")
// let rmvBtn2 = document.querySelector("#rmvBtn2")

// readCheckbox2.addEventListener("change", () => {
//     if (readCheckbox2.checked) {
//         readStatus2.textContent = "Read"
//         readStatus2.style.color = "black";
//     } else {
//         readStatus2.textContent = "Unread"
//         readStatus2.style.color = "bisque";
//     }
// })

// rmvBtn2.addEventListener("click", () => {
//     if (confirm("Are you sure?")) {
//         example2.style.display = "none"
//     };
// })


//////run at least once at init (for examples)

// if (readCheckbox1.checked) {
//     readStatus1.textContent = "Read"
//     readStatus1.style.color = "black";
// } else {
//     readStatus1.textContent = "Unread"
//     readStatus1.style.color = "bisque";
// }

// if (readCheckbox2.checked) {
//     readStatus2.textContent = "Read"
//     readStatus2.style.color = "black";
// } else {
//     readStatus2.textContent = "Unread"
//     readStatus2.style.color = "bisque";
// }