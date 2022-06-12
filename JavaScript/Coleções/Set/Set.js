const myArray=[1,2,2,2,3,3,4,5,6,6,6,7,8]
const mySet=new Set(myArray)

console.log(mySet)//Vai retornar o array, mas sem repetir os numeros

const meuSet = new Set()

meuSet.add(1);
meuSet.add(2)

console.log(meuSet.has(1))
console.log(meuSet.has(3))

meuSet.delete(1);
console.log(meuSet.has(1))