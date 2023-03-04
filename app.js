const readline = require('readline')

const inquierer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const maximumNumberOfTries = 10
// console.log(`le nombre maximum d'essais est de ${maximumNumberOfTries}`)


function displayNumberOfAttempts(numberOfAttempts) {
    // console.log(`le nombre de tentatives réalisées est de ${numberOfAttempts}`)
}


function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1
    return randomNumber
}


function main() {
    console.log("Bienvenue au jeu de devinette des nombres !")

    const randomNumber = generateRandomNumber()
    console.log(`la solution est ${randomNumber}`)

    inquierer.question("Veuillez choisir un nombre entre 1 et 10 : ", (answer) => {
        console.log(`vous avez choisi le nombre ${answer}`)
        const guessNumber = Number(answer)

        // Ajouter ici vos conditions
        if (guessNumber < randomNumber) {
            console.log("Too low")
        } else if (guessNumber > randomNumber) {
            console.log("Too high")
        } else if (guessNumber === randomNumber) {
            console.log("Well done")
        } else {
            console.log("Invalid input")
        }
    })

    


    // let numberOfAttempts = 2
    // displayNumberOfAttempts(numberOfAttempts)
}

main()