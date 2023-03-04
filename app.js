const maximumNumberOfTries = 10
console.log(`le nombre maximum d'essais est de ${maximumNumberOfTries}`)


function displayNumberOfAttempts(numberOfAttempts) {
    console.log(`le nombre de tentatives réalisées est de ${numberOfAttempts}`)
}


function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1
    return randomNumber
}


function main() {
    console.log("Bienvenue au jeu de devinette des nombres !")

    const randomNumber = generateRandomNumber()
    console.log(`la solution est ${randomNumber}`)

    // la constante guessNumber qui va vous servir à valider vos conditions
    const guessNumber = "thomas"

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


    let numberOfAttempts = 2
    displayNumberOfAttempts(numberOfAttempts)
}

main()