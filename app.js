const readline = require('readline')

const inquierer = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function generateRandomNumber() {
  const maxNumber = 10
  return Math.floor(Math.random() * maxNumber) + 1
}

const randomNumber = generateRandomNumber()
let numberOfAttempts = 0

console.log("====")
console.log(randomNumber)
console.log("====")

function main() {
  numberOfAttempts++

  inquierer.question("Pick a number between 1 and 10: ", function(input) {
    if (Number(input) === randomNumber) {
      console.log("Well done")
      console.log(`Your number of attempts was ${numberOfAttempts}`)
      process.exit()
    } else if (Number(input) > randomNumber) {
      console.log("Too high")
    } else if (Number(input) < randomNumber) {
      console.log("Too low")
    } else {
      console.log("Invalid Input")
    }

    main() //Calling this function again to continue the game
  })
}

main()

