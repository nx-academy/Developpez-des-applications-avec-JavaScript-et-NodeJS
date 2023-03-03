// J'instancie un nouvel objet date
const now = new Date() // `new` me permet d'instancier un objet Date
console.log(now)

// Je récupère l'année complète
const nowFullYear = now.getFullYear()
console.log(nowFullYear)

// Je récupère le mois
const nowMonth = now.getMonth()
console.log(nowMonth)


// J'instancie une date correspond à mon anniversaire
const myBirthDay = new Date(1988, 7, 5)

// J'affiche ma date d'anniversaire
console.log(myBirthDay.toDateString())
