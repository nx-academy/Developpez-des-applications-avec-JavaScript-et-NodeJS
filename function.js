// Notre première fonction
function sayHello() {
    console.log("Hello!")
}

sayHello()

// Notre deuxième fonction
const sayHelloAgain = () => {
    console.log("Hello!")
}

sayHelloAgain()

// Notre troisième fonction
function sayHelloToSomeone(name) { // name est un paramètre
    console.log(`Hello ${name}`)
}

sayHelloToSomeone("Thomas") // "Thomas" est un argument

// Notre quatrième fonction
function sayHelloToSomeoneAgain(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`)
}

sayHelloToSomeoneAgain("Thomas", "Dimnet")

// Notre cinquième fonction
function generateFullName(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`
    return fullName
}

const me = generateFullName("Thomas", "Dimnet")
console.log(`Je m'appelle ${me}`)
