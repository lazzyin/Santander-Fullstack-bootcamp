
/*array.map(callback,thisArg)

callback(item,index,array)
//callback:função a ser executada em cada elemento
//thisArg(opcional):valor de this dentro da função de callback*/

//MAP

const array = [1, 2, 3, 4, 5]
console.log(array.map((item) => item * 2)
)

//ForEach
console.log(array.forEach((item => item * 2)))
