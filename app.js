const maximumNumberOfTries = 10
console.log(`le nombre maximum d'essais est de ${maximumNumberOfTries}`)


function displayNumberOfAttempts(numberOfAttempts) {
    console.log(`le nombre de tentatives réalisées est de ${numberOfAttempts}`)
}


function generateRandomNumber() {
    const randomNumber = 6
    return randomNumber
}


function main() {
    console.log("Bienvenue au jeu de devinette des nombres !")

    // Première User Story
    const randomNumber = generateRandomNumber()
    console.log(`la solution est ${randomNumber}`)

    // Deuxième User Story
    let numberOfAttempts = 2
    displayNumberOfAttempts(numberOfAttempts)
}

main()