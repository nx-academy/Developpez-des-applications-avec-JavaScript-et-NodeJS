const readline = require('readline')

const inquierer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function displayNumberOfAttempts(numberOfAttempts) {
    console.log(`\nVous êtes actuellement à ${numberOfAttempts} tentatives\n`)
}


function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1
    return randomNumber
}

const maximumNumberOfTries = 10

const randomNumber = generateRandomNumber()
console.log(`la solution est ${randomNumber}`) // N'hésitez pas à commenter cette ligne

let numberOfAttempts = 0

console.log("Bienvenue au jeu de devinette des nombres !\n")

function main() {    
    displayNumberOfAttempts(numberOfAttempts)

    inquierer.question("Veuillez choisir un nombre entre 1 et 10 : ", (answer) => {
        console.log(`\nvous avez choisi le nombre ${answer}`)
        const guessNumber = Number(answer)

        if (guessNumber < randomNumber) {
            console.log("Votre proposition est trop basse")
        } else if (guessNumber > randomNumber) {
            console.log("Votre proposition est trop élévée")
        } else if (guessNumber === randomNumber) {
            console.log("Bien joué !")
            process.exit()
        } else {
            console.log("Cette proposition n'est pas valide")
        }
    })
}

main()
