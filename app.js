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

    const randomNumber = generateRandomNumber()
    console.log(`la solution est ${randomNumber}`)

    // la constante guessNumber qui va vous servir à valider vos conditions
    const guessNumber = 1

    // Ajouter ici vos conditions


    let numberOfAttempts = 2
    displayNumberOfAttempts(numberOfAttempts)
}

main()