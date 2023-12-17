
class DomElement {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }

    getTextContent() {
        return this.element ? this.element.textContent : null
    }

    getValue() {
        return this.element ? this.element.value : null
    }

    getCheckedvalue() {
        return this.element ? this.element.checked : null
    }

    setValue(value) {
        if (this.element) {
            this.element.value = value
        }
    }

    setCheckedStatus (status) {
        if (this.element) {
            this.element.checked = status
        }
    }

    setTextContent(text) {
        if (this.element) {
            this.element.textContent = text
        }
    }



    setInnerHTML(thisHTML) {
        if (this.element) {
            this.element.innerHTML = thisHTML;
        }
    }
}

const dom = {
    title: new DomElement("h1"),
    totalBookCount: new DomElement("#totalBookCount"),
    readCount: new DomElement("#readCount"),
    unreadCount: new DomElement("#unreadCount"),
    cards: new DomElement("#cards"),

    addBtn: new DomElement(".addBtn"),
    addBookDialog: new DomElement("#addBookDialog"),
    submitBtn: new DomElement("#submitBtn"),
    cancelBtn: new DomElement("#cancelBtn"),
    entryTitle: new DomElement("#entryTitle"),
    entryAuthor: new DomElement("#entryAuthor"),
    entryPages: new DomElement("#entryPages"),
    entryDescription: new DomElement("#entryDescription"),
    submittedBy: new DomElement("#submittedBy"),
    readCheckboxLabel: new DomElement("label[for='readCheckbox']"),
    readCheckbox: new DomElement("#readCheckbox"),
    
    editBookDialog: new DomElement("#editBookDialog"),
    submitEditBtn: new DomElement("#submitEditBtn"),
    cancelEditBtn: new DomElement("#cancelEditBtn"),
    editTitle: new DomElement("#editEntryTitle"),
    editAuthor: new DomElement("#editEntryAuthor"),
    editPages: new DomElement("#editEntryPages"),
    editDescription: new DomElement("#editEntryDescription"),
    editsubmittedBy: new DomElement("#editSubmittedBy"),
    editReadCheckboxLabel: new DomElement("label[for='editReadCheckboxLabel']"),
    editReadCheckbox: new DomElement("#editReadCheckbox"),
};
















function RenderedLibrary() {
    const books = [];
    let currentEditBook = null
    console.log("library created")

    function init() {
        console.log("init")
        addExampleBooks();
        displayLibrary();
    }

    function addExampleBooks() {
        let exampleBook1 = new Book(
            "The Gift",
            "Hafez",
            "120",
            "Each line of The Gift imparts the wonderful qualities of this master Sufi poet and spiritual teacher: encouragement, an audacious love that touches lives, profound knowledge, generosity, and a sweet, playful genius unparalleled in world literature.",
            true,
            "Alex"
        );

        let exampleBook2 = new Book(
            "The Unsettling of America",
            "Wendell Berry",
            "246",
            "Wendell Berry argues that good farming is a cultural and spiritual discipline. Today’s agribusiness, however, takes farming out of its cultural context and away from families. As a result, we as a nation are more estranged from the land―from the intimate knowledge, love, and care of it.",
            false,
            "Alex"
        );

        books.push(exampleBook1);
        books.push(exampleBook2);

    }

    function addBookToLibrary() {
        console.log("adding a book")
        const newBook = new Book(
            dom.entryTitle.getValue(),
            dom.entryAuthor.getValue(),
            dom.entryPages.getValue(),
            dom.entryDescription.getValue(),
            dom.readCheckbox.element.checked,
            dom.submittedBy.getValue()
        );
        books.push(newBook);
        console.log(newBook.title + "nbt")
        displayLibrary();
    }

    function displayLibrary() {
        console.log("library displayed")
        dom.cards.setInnerHTML("");
        books.forEach( (b) =>{
            console.log(b)
            formatBook(b);
        })
        updateTotalBookCount()
        updateReadUnreadCount()
    }

    function formatBook(book) {
        console.log("formatting a book")
        
        let item = document.createElement("li");
        item.setAttribute("class", "card");
        
        let title = document.createElement("h3");
        title.textContent = book.title;
        console.log(book)
        title.setAttribute("class", "bookTitle");
        
        let author = document.createElement("div");
        author.setAttribute("class", "author");
        author.textContent = "By " + book.author;
        let pages = document.createElement("div");
        pages.textContent = book.pages + " pages"
        pages.setAttribute("class", "pages");
        let container1 =  document.createElement("div")
        container1.appendChild(author);
        container1.appendChild(pages);

        let description = document.createElement("div");
        description.textContent = book.description;
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
            book.readCheckbox = checkbox.checked
            if (checkbox.checked) {
                readStatus.textContent = "Read"
                readStatus.style.color = "black";
                updateReadUnreadCount()
            } else {
                readStatus.textContent = "Unread"
                readStatus.style.color = "bisque";
                updateReadUnreadCount()
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
            removeBook(book)
        })

        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.setAttribute("class", "removeBtn");
        editBtn.addEventListener("click", () => {
            currentEditBook = book;
            editForm(book)
        })

        let container4 = document.createElement("div");
        container4.appendChild(rmvBtn);
        container4.appendChild(editBtn);
        container4.style.display = 'flex';
        container4.style.justifyContent = 'end'

        item.appendChild(title);
        item.appendChild(container1);
        item.appendChild(description)
        item.appendChild(container2)
        item.appendChild(container3)
        item.appendChild(container4)
        dom.cards.element.appendChild(item);

    }


    function updateTotalBookCount() {
        console.log("updating total book count")
        let count = books.length;
        console.log(books.length)
        dom.totalBookCount.setTextContent(String(count));
    }

    function updateReadUnreadCount() {
        console.log("updating read unread count")
        let readCountNum = 0;
        let unreadCountNum = 0;
        books.forEach((book) => {
            if (book.readCheckbox === true) {
                readCountNum += 1
            } else {
                unreadCountNum += 1
            }
        });
        dom.unreadCount.setTextContent(String(unreadCountNum));
        dom.readCount.setTextContent(String(readCountNum));
    }

    function removeBook(book) {
        console.log("removing book")
        let index = books.indexOf(book)
        books.splice(index,1)
        displayLibrary()
    }

    function editForm(book) {
        console.log("presenting edit form")
        dom.editTitle.setValue(book.title);
        dom.editAuthor.setValue(book.author);
        dom.editPages.setValue(book.pages);
        dom.editDescription.setValue(book.description)
        dom.editReadCheckbox.setCheckedStatus(book.readCheckbox)
        dom.editsubmittedBy.setValue(book.submittedBy)
        editBookDialog.showModal()
    }
    
    function clearDialog() {
        dom.entryTitle.setValue('');
        dom.entryAuthor.setValue('');
        dom.entryPages.setValue('');
        dom.entryDescription.setValue('');
        dom.readCheckbox.setCheckedStatus(true);
        dom.submittedBy.setValue('');
    
        // editTitle.value = '';
        // editAuthor.value = '';
        // edityPages.value = '';
        // edityDescription.value = '';
        // editsubmittedBy.value = '';
    }





function editBook(book) {
    console.log("commencing editing of book")
    book.title = dom.editTitle.getValue();
    book.author = dom.editAuthor.getValue();
    book.pages = dom.editPages.getValue();
    book.description = dom.editDescription.getValue();
    book.readCheckbox = dom.editReadCheckbox.getCheckedvalue();
    book.submittedBy = dom.editsubmittedBy.getValue();
    console.log(book)
    // console.log(currentEditBook)
    displayLibrary()
    currentEditBook = null
}


    init(); 

    return {
        addBookToLibrary,
        editBook,
        clearDialog,
        currentEditBook: () => currentEditBook,
        editBook,
        getBooks: () => books.slice(), // Return a copy of books to avoid external modifications
        init,
    };


}






class Book {
    constructor(title, author, pages, description, readCheckbox, submittedBy) {
        console.log("Building a book");
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.description = description;
        this.readCheckbox = readCheckbox;
        this.submittedBy = submittedBy;
    }
}







document.addEventListener("click", (event) => {
    const target = event.target;

    if (target === dom.addBtn.element) {
        addBookDialog.showModal();
    } else if (target === dom.submitBtn.element) {
        event.preventDefault(); // We don't want to submit this fake form
        addBookDialog.close(myLibrary.addBookToLibrary() ); // Have to send the select box value here.
        myLibrary.clearDialog()
    } else if (target === dom.cancelBtn.element) {
        console.log("cancel")
    } else if (target === dom.readCheckbox.element) {
        if (dom.readCheckbox.element.checked) {
            dom.readCheckboxLabel.setTextContent("Book has been read");
            myLibrary.updateReadUnreadCount()
        } else {
            dom.readCheckboxLabel.setTextContent("Book is unread");
        }
    } else if (target === dom.submitEditBtn.element) {
        console.log("edit submit button activated")
        event.preventDefault(); // We don't want to submit this fake form
        editBookDialog.close(myLibrary.editBook(myLibrary.currentEditBook())); // Have to send the select box value here.
        myLibrary.clearDialog()
    }
});



        // checkbox.addEventListener("change", () => {
        //     book.readCheckbox = checkbox.checked
        //     if (checkbox.checked) {
        //         // book.readCheckbox = true
        //         readStatus.textContent = "Read"
        //         readStatus.style.color = "black";
        //         updateReadUnreadCount()
        //     } else {
        //         // book.readCheckbox = false
        //         readStatus.textContent = "Unread"
        //         readStatus.style.color = "bisque";
        //         updateReadUnreadCount()
        //     }
        // })




const myLibrary = RenderedLibrary();


