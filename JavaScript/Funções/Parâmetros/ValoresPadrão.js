//Pré-ES2015
function exponencialPré2015(array, num) {
    if(num===undefined){
        num=1
    }
    const result = [];

    for (let i = 0; i < array.length; i++){
        result.push(array[i]**num)
    }
    return result;
}
console.log(exponencialPré2015([1, 2, 3, 4],4))

//Pós-ES2015
function exponencialPós2015(array, num = 1) {
    const result = [];
    
    for (i = 0; i < array.length; i++){
        result.push(array[i] ** num);
    }
    return console.log(result);
}
exponencialPós2015([1,2,3,4],4)