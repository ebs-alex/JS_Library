let title = document.querySelector("h1")






























///Example cards 

let example1 = document.querySelector("#example1")
let readStatus1 = document.querySelector("#readStatus1")
let readCheckbox1 = document.querySelector("#readCheckbox1")
let rmvBtn1 = document.querySelector("#rmvBtn1")

readCheckbox1.addEventListener("change", () => {
    if (readCheckbox1.checked) {
        readStatus1.textContent = "Read"
    } else {
        readStatus1.textContent = "Unread"
    }
})

rmvBtn1.addEventListener("click", () => {
    example1.style.display = "none"
})


let example2 = document.querySelector("#example2")
let readStatus2 = document.querySelector("#readStatus2")
let readCheckbox12 = document.querySelector("#readCheckbox2")
let rmvBtn2 = document.querySelector("#rmvBtn2")

readCheckbox2.addEventListener("change", () => {
    if (readCheckbox2.checked) {
        readStatus2.textContent = "Read"
    } else {
        readStatus2.textContent = "Unread"
    }
})

rmvBtn2.addEventListener("click", () => {
    example2.style.display = "none"
})





// readStatus1.textContent = "Read"



// exampleCards.forEach(addEventListener)




// title.style.textDecoration = "underline"