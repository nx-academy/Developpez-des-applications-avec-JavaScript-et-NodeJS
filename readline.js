const readline = require('readline') // J'importe le module

// Je crée l'interface de communication
const inquierer = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Je pose ma question via l'interface de communication
inquierer.question("Comment vous appelez-vous ? ", (name) => { // Je récupère le nom renseigné par l'utilisation
    console.log(`Enchanté ${name}. Comment allez-vous ?`); // Je l'affiche
    inquierer.close() // Je stoppe l'excecution 
})
