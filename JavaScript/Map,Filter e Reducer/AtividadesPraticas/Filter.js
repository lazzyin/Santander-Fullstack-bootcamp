

function filtraPares(array) {
    return array.filter(function(item){
       return item%2==0
    })
}


array = [1, 3, 5, 6, 2, 0, 52]
console.log(filtraPares(array))