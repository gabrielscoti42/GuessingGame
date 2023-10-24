//Variables

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnTryAgain = document.querySelector("#btnTryAgain")
const randomNumber = Math.round(Math.random() * 10)
let attempts = 1

//Functions

function handleTry (event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        document.querySelector(".screen2 h1").innerHTML = `Acertou em ${attempts} tentativas`
    }
        inputNumber.value = ""
        attempts++
}

//Eventos

function handleTryAgain() {
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    attempts = 1
}

btnTry.addEventListener('click', handleTry)
btnTryAgain.addEventListener('click', handleTryAgain)


