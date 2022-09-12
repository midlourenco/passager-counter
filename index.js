
let count = 0
console.log(count)
let countEl = document.getElementById("count-el")
let prevEntries = document.getElementById("prev-entries")

let historic = ""
//function for th button action - add one to the counter:
function increment () {
    count +=1
    countEl.textContent = count
    console.log("clicked: ", count)
}

// let buttonInc = document.getElementById("increment-btn")
// //buttonInc.addEventListener(onclick,increment)

//function to save the value
function save () {
    console.log("save: ", count)
    historic +=  count +" - "
    prevEntries.textContent="Previous entries: " + historic
    count=0
    countEl.textContent = count
}

