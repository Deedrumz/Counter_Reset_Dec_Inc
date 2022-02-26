let h2 = document.querySelector('h2')
let dec = document.querySelector('.dec')
let res = document.querySelector('.res')
let inc = document.querySelector('.inc')


document.body.style.backgroundColor = 'pink'

let bgrc = document.body

// let body = document.body.style.backgroundColor

let count = 0;


//FUNCTION TO INCREASE THE COUNTER
function onIncrease() {
    count++
    h2.textContent = count;
    h2.style.color = "aqua";
    if (h2.textContent > 0) {
        bgrc.style.backgroundColor = 'yellow'
    }
}

inc.addEventListener('click', onIncrease)

//FUNCTION TO DECCREASE THE COUNTER
function onDecrease() {
    count--
    h2.textContent = count;
    h2.style.color = "red";
    if (h2.textContent < 0) {
        bgrc.style.backgroundColor = 'aqua'
    }
}

dec.addEventListener('click', onDecrease)


//FUNCTION TO RESET THE COUNTER
function onReset() {
    count = 0;
    h2.textContent = count;
    h2.style.color = "black";
    if (h2.textContent == 0) {
        bgrc.style.backgroundColor = 'red'
    }
}

res.addEventListener('click', onReset)

//FUNCTION TO CHANGE COLOR

let change = document.querySelector('.butch')

let bckg = document.body

function changeColor() {
    let colours = ["lemon", "blue", "green", "red", "purple"];

    let randomCol = Math.ceil(Math.random() * 5)

     bckg.style.backgroundColor = colours[randomCol];
}

change.addEventListener('click', changeColor)