function findMax() {
    max = -Infinity;

    for (i = 0; i < arguments.length; i++){
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

console.log(findMax(1,2,5,9,7,8))