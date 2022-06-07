function Compara(a, b) {
    sum = a + b
    a === b ?
        console.log(`Os numeros ${a} e ${b} são iquais`)
        : console.log(`Os numeros ${a} e ${b} não são iquais`)
    
    sum > 10
        ? console.log(`A soma dos valores é iqual a ${sum}, que é maior que 10`)
        : console.log(`A soma dos valores é iqual a ${sum} que é menor que 10 e menor que 20`)
    
    sum > 20
        ? console.log(` e maior que 20`)
        : console.log(` e menor que 20`)
}

num1 = 5;
num2 = 6;
Compara(num1, num2);