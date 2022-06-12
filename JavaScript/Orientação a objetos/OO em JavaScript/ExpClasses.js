class Meal{
    constructor(food){
        this.food=food
    }
    eat() {
        return "EAT"
    }
}

class Animal{
    constructor(type = "Animal") {
        this.type=type
    }

    get type() {
        return this._type
    }

    set type(val) {
        this._type = val.toUpperCase()
    }

    makeSound() {
        console.log("Rugindo")
    }
}

a = new Animal
console.log(a.type)//ANIMAL

class Cat extends Animal{
    constructor() {
        super('cat')
    }
    makeSound() {
        super.makeSound()
        console.log("Meow")
    }
}

b = new Cat()
console.log(b.type)//CAT
console.log(b.makeSound)