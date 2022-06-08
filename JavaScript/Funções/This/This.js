const person = {
    firstName: "John",
    lastName: "Doe",
    id: 1,
    fullName: function () {
        return console.log(`${this.firstName} ${this.lastName}`);
    },
    getId: function () {
        return console.log(`${this.id}`);
    }
};

person.fullName()
person.getId()

console.log(this)//Global

/*(function () {
        console.log(this);
})()//Global*/

