let count = 0
let column_el = document.getElementById("column") 
let counter_el = document.getElementById("counter")

function increment() {
    count += 1
    column_el.textContent = count
}

function save() {
    let counter_num = count + " - "
    counter_el.textContent += counter_num
    column_el.textContent = 0
    count = 0
}