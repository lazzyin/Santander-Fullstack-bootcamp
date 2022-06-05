
var currentNumberWrapper=document.getElementById('currentNumber')
var currentNumber = 0;
var maxmin=document.getEelementById('max-min')


function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber >=0) {
        currentNumberWrapper.style.color='black'
    }
    if (currentNumber >= 10) {
        currentNumberWrapper.style.color='yellow'
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0) {
        currentNumberWrapper.style.color='red'
    }
    if (currentNumber>0 && currentNumber< 10) {
        currentNumberWrapper.style.color='black'
    }
}