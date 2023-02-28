// Notre première condition
const isInStock = true

if (isInStock) {
    // affiche le mot “En stock”
    console.log("En stock")
} else {
    // affiche le mot “Indisponible”
    console.log("Indisponible”")
}


// Notre deuxième condition
const isAvailable = false
const canBePreOrder = true

if (isAvailable) {
    // affiche le mot “En stock”
    console.log("En stock")
} else if (canBePreOrder) {
    // affiche le mot “Précommande disponible”
    console.log("Précommande disponible")
} else {
    // affiche le mot “Indisponible”
    console.log("Indisponible”")
}


// Notre troisie1me condition
const canBeBuy = true
const isPreOrderable = true

if (canBeBuy) {
    // affiche le mot “En stock”
    console.log("En stock")
} else if (isPreOrderable) {
    // affiche le mot “Précommande disponible”
    console.log("Précommande disponible")
} else {
    // affiche le mot “Indisponible”
    console.log("Indisponible”")
}
