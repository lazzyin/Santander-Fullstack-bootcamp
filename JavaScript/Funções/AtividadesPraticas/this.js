function calculaIdade(anos) {
    return console.log(`Daqui a ${anos} anos, ${this.name} tera ${this.age + anos} anos de idade`);
}

const person = {
    name: "Mike",
    age:15,
}

calculaIdade.call(person, 10)
calculaIdade.apply(person,[15])