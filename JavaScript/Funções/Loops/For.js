function multiplicaPorDois(arr) {
    let multiplicados=[]

    for (i = 0; i < arr.length; i++){
        multiplicados.push(arr[i] * 2);
    }
    return console.log(multiplicados)

}

const meusNumeros = [2, 33, 456.2, 3];
multiplicaPorDois(meusNumeros)

function forInExemp(obj) {
    for (prop in obj) {
        console.log(prop)//chaves de prop
        console.log(obj[prop])//valor de prop
    }
}

const meuObj = {
    name: "John",
    age:20,
}

forInExemp(meuObj);

function logLetras(word) {
    for (letter of word) {
        console.log(letter)
    }
}

const word = "Teste";
logLetras(word)

function logNumeros(nums) {
    for (num of nums) {
        console.log(num)
    }
}

const nums = [1, 2, 3, 4, 5]
logNumeros(nums)