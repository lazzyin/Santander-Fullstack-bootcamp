function Palimdromo(valor1) {
    if (!valor1) return "Valor invalido";
    valor2= valor1.split("").reverse().join("");
    valor2=== valor1 ?
        console.log("É palimdromo"):
        console.log("Não é palimdromo")
}
function Palimdromo2(valor) {
    for (i = 0; i < valor.length / 2; i++){
        if (valor[i] !== valor[valor.length - 1 - i]){
            return console.log("Não é palimdromo")
        }
        else {
        return console.log("É palimdromo")}
    }
    
}
word="tenet"
Palimdromo(word)
Palimdromo("teste")
Palimdromo2(word)
Palimdromo2("teste")