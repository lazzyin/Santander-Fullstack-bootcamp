function getTrainer(map) {
    trainers=[]
    for ([key, value] of map) {
        if (value === "trainer") {
            trainers.push(key)
        }
    }
    return trainers;
}

function getPokemon(map) {
    pokes=[]
    for ([key, value] of map) {
        if (value === "pokemon") {
            pokes.push(key)
        }
    }
    return pokes;
}

const poke = new Map();

poke.set("Ash", "trainer")
poke.set("Red", "trainer")
poke.set("Charmander", "pokemon")
poke.set("Bulbbasaur","pokemon")

console.log(`Treinadores: ${getTrainer(poke)}`)
console.log(`Pokemons: ${getPokemon(poke)}`)