const dom = (function(){
    let title = document.querySelector("h1");
    let currentEditBook = null;
    let addBookDialog = document.querySelector("#addBookDialog")
    
    let addBtn = document.querySelector(".addBtn");
    let entryTitle = document.querySelector("#entryTitle");
    let entryAuthor = document.querySelector("#entryAuthor");
    let entryPages = document.querySelector("#entryPages");
    let entryDescription = document.querySelector("#entryDescription")
    let submittedBy = document.querySelector("#submittedBy")

    let readCheckboxLabel = document.querySelector("label[for='readCheckbox']");
    let readCheckbox = document.querySelector("#readCheckbox")

})();