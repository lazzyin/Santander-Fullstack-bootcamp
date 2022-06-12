meuObj = {
    value:1,
}
meuObj2={
    value:2,
}

function mapThis(array,thisArg) {
    return array.map(function(item){
       return item * this.value;
    },thisArg)
}

nums=[1,2]
console.log(mapThis(nums, meuObj))
console.log(mapThis(nums, meuObj2))

function MapWithoutThis(array) {
   return array.map(function (item) {
        return item * 2;
    });
}

const num = [1, 5, 78, 90];
console.log(MapWithoutThis(num))