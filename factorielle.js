function factorialize(num) {
  console.log(`num vaut ${num}`)
  if (num === 0) { // Je définis ma condition d'arrêt
    return 1
  }
  return num * factorialize(num - 1) // Tant que num n'est pas égale à 0, continue d'appeler la fonction
}

const result = factorialize(5)
console.log(`Le résultat de la factoriel de 5 est ${result}`)
