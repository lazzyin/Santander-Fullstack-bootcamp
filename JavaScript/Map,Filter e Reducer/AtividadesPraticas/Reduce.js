function Sum(array) {
   return array.reduce(function (prev, current) {
       console.log({prev})
       console.log({current})
        return prev + current;
    })
}

array = [25, 8, 7]
console.log(Sum(array))
//-------------------------------------------------------------




list = [{
    name:"Nissin Lamem",
    preco:2,
},
{
    name:"Salmão",
    preco:30,
},
{
    name:"Molho",
    preco:5,
},
]

const Saldo = 100;

function calcSaldo(saldo, lista) {
    return list.reduce(function (prev, curr, index) {
        return prev - curr.preco;
    },saldo)
}

console.log(calcSaldo(Saldo, list))