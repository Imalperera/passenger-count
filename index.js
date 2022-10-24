let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(countEl)
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
    console.log(count)
}

function save() {
    let display = count + " - "
    count = 0
    countEl.innerText = count
    saveEl.textContent += display
    console.log(count)
}