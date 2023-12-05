
let title = document.querySelector("h1");
let addBookDialog = document.querySelector("#addBookDialog")
let addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", () => addBookDialog.showModal())












const myLibrary = [];

function Book(title, author, pages, description, readStatus, submittedBy) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.description = description;
  this.readStatus = readStatus;
  this.submittedBy = submittedBy
}



function addBookToLibrary() {
    // do stuff here
}






let readCheckboxLabel = document.querySelector("label[for='readCheckbox']");
let readCheckbox = document.querySelector("#readCheckbox")
readCheckbox.addEventListener("change", () => {
    if (readCheckbox.checked) {
        readCheckboxLabel.textContent = "Book has been read"
    } else {
        readCheckboxLabel.textContent = "Book is unread"
    }
})


//////Example cards 

let example1 = document.querySelector("#example1")
let readStatus1 = document.querySelector("#readStatus1")
let readCheckbox1 = document.querySelector("#readCheckbox1")
let rmvBtn1 = document.querySelector("#rmvBtn1")

readCheckbox1.addEventListener("change", () => {
    if (readCheckbox1.checked) {
        readStatus1.textContent = "Read"
        readStatus1.style.color = "black";
    } else {
        readStatus1.textContent = "Unread"
        readStatus1.style.color = "bisque";
    }
})

rmvBtn1.addEventListener("click", () => {
    if (confirm("Are you sure?")) {
        example1.style.display = "none"
    };
})


let example2 = document.querySelector("#example2")
let readStatus2 = document.querySelector("#readStatus2")
let readCheckbox12 = document.querySelector("#readCheckbox2")
let rmvBtn2 = document.querySelector("#rmvBtn2")

readCheckbox2.addEventListener("change", () => {
    if (readCheckbox2.checked) {
        readStatus2.textContent = "Read"
        readStatus2.style.color = "black";
    } else {
        readStatus2.textContent = "Unread"
        readStatus2.style.color = "bisque";
    }
})

rmvBtn2.addEventListener("click", () => {
    if (confirm("Are you sure?")) {
        example2.style.display = "none"
    };
})



//////run at least once at init

if (readCheckbox1.checked) {
    readStatus1.textContent = "Read"
    readStatus1.style.color = "black";
} else {
    readStatus1.textContent = "Unread"
    readStatus1.style.color = "bisque";
}
if (readCheckbox2.checked) {
    readStatus2.textContent = "Read"
    readStatus2.style.color = "black";
} else {
    readStatus2.textContent = "Unread"
    readStatus2.style.color = "bisque";
}