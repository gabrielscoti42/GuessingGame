//Variables

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnTryAgain = document.querySelector("#btnTryAgain")
let randomNumber = Math.round(Math.random() * 10)
let attempts = 1

// Events

btnTry.addEventListener('click', handleTry)
btnTryAgain.addEventListener('click', handleTryAgain)
document.addEventListener("keypress", closeWindowEnter)

//Functions

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function handleTry (event) {
    event.preventDefault()
    
    const inputNumber = document.querySelector("#inputNumber")
    
    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        document.querySelector(".screen2 h1").innerHTML = `Acertou em ${attempts} tentativas`
    }
        inputNumber.value = ""
        attempts++
}

function handleTryAgain() {
    toggleScreen()
    randomNumber = Math.round(Math.random() * 10)
    attempts = 1
}

function closeWindowEnter(e) {
    if(e.key == "Enter" && screen1.classList.contains("hide")) {
        handleTryAgain()
}
}
