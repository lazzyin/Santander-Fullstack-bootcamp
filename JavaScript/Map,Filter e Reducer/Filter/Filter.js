/*
array.filter(callback, thisArg)

Callback:função a ser executada em cada elemento
thisArg(opcional):Valor de this dentro da função callback */

const frutas=['maçã','maçã verde', 'laranja', 'abacaxi']
console.log(frutas.filter((fruta)=>fruta.includes('maçã')))