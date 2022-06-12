const myMap=new Map()

myMap.set('John', 'name');

console.log(myMap.get('John'))//Retorna o a chave do valor
console.log(myMap.delete("John"))
console.log(myMap.get("John"))//Como o valor não existe mais retorna Undefined
console.log(myMap)
console.log(myMap.__proto__)
