
//----------------------------CALL------------------
const person = {
    name: "Miquel"
};

const animal={
    name:"Doge"
}

function getSomething() {
    console.log(this.name);
}

getSomething.call(person);
getSomething.call(animal);

const meuObj = {
    n1: 1,
    n2: 2,
};

function sum(a, b) {
    console.log(this.n1 + this.n2 + a + b);
}

sum.call(meuObj, 3, 4)//É possivel passar parâmetros para essa função separando-as por virgulas

//--------------------------APPLY--------------

getSomething.apply(person);
getSomething.apply(animal);



sum.apply(meuObj,[ 3, 4])//É possivel passar parâmetros para essa função dentro de um array

//-----------------Bind-------

//Clona a estrutura da função onde é chamado e aplica o valor do objeto passo como parâmetro
const retornaNome = function () {
    return console.log(this.nome);
}

bruno = retornaNome.bind({ nome: 'Bruno' })

bruno()