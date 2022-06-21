const myName = prompt('Enter your name')
const height = prompt('Enter your height in ft')
const country = prompt('Enter your country')

let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')
let p3 = document.getElementById('p3')

p1.innerHTML = `Your name is ${myName}.`
p2.innerHTML = `Your height is ${height}ft.`
p3.innerHTML = `Your country is ${country}.`

alert(`Your name is ${myName}, Your height is ${height}ft, Your country is ${country}.`)