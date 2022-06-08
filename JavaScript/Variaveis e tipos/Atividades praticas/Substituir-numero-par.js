function subsPar(array) {
    for (i = 0; i < array.length; i++){
        if (array[i] === 0) {
            console.log("Valor ja é 0");
        } else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }
    return array;
}

par = [1, 2, 3, 4, 5, 10, 25, 13];
console.log(subsPar(par))