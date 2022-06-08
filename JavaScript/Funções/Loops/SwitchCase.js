function getAnimal(id) {
    switch (id) {
        case 1:
            return console.log("Cão");
        case 2:
            return console.log("Gato");
        case 3:
            return console.log("Passaro");
        default:
            return console.log("peixe");
    }

}

(getAnimal(1))
getAnimal(2)
getAnimal(4)
getAnimal("1")