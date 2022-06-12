function verificaPalimdromo(string) {
    if (!string) throw "String invalida";

    return string === string.split('').reverse().join('');
}

console.log(verificaPalimdromo(''))//Vai retornar um erro chamado "String invalida"
