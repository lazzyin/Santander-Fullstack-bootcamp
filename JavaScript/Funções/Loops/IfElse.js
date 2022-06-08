/*function numeroPositivo(num){
    let resultado;

    if (num < 0) {
        resultado = false;
    } else {
        resultado=true
    }
    return console.log(resultado)
}



function numeroPositivo(num) {
    let resultado

    const negativo = num < 0;
    if (negativo) {
        resultado = false;
    }else{
        resultado=true
    }
    return console.log(resultado)
}*/

function numeroPositivo(num){
    const negativo = num < 0
    const maiorQueDez=num>10
    if (negativo) {
        return console.log("Numero negativo");
    } else if(!negativo && maiorQueDez){
        return console.log("Numero positivo e maior que 10");
    }
    return console.log("Positivo e menor que 10")
}

numeroPositivo(2)
numeroPositivo(-1)
numeroPositivo(11)