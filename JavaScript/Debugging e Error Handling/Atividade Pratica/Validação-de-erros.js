function validar(array, num) {
    if (!array && !num) throw new ReferenceError("Informe os valores")

    if(typeof array !=='object') throw new TypeError("Array de tipo invalido, informe um valor de tipo object")
    if (typeof num !== 'number') throw new TypeError("Num de tipo invalido, informe um valor de tipo number")
    
    if (array.length !== num) throw RangeError("Tamanho invalido");

    return console.log(array);
}

function Try(array,num){
    try {
        validar(array,num)
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log("Erro do tipo ReferenceError")
            console.log(error.message)
        }
       else if (error instanceof TypeError) {
            console.log("Erro do tipo TypeError")
            console.log(error.message)
        }
       else if (error instanceof RangeError) {
            console.log("Erro do tipo RangeError")
            console.log(error.message)
        }
        else {
            console.log("Erro não esperado: "+error)
        }
    }
}

//console.log(Try())  ReferenceError
//console.log(Try(2))  TypeError no Array
//console.log(Try([],'a'))  TypeError no Num
//console.log(Try([1, 2, 3], 4));  RangeError
Try([1, 2, 3], 3);