const readline = require('readline');

const inquierer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateRandomNumber() {
  const maxNumber = 10
  return Math.floor(Math.random() * maxNumber) + 1
}

const randomNumber = generateRandomNumber()

console.log("====")
console.log(randomNumber)
console.log("====")

function main() {
  inquierer.question("Pick a number between 1 and 10: ", function (input) {
    if (Number(input) === randomNumber) {
      console.log("Well done")
    } else if (Number(input) > randomNumber) {
      console.log("Too hight")
    } else if (Number(input) < randomNumber) {
      console.log("Too low")
    } else {
      console.log("Something went wrong")
    }

    main(); //Calling this function again to ask new question
  });
};

main()

