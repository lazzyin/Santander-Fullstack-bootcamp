var a = 1
var b = 2

if (a === 1) {
    var a = 11;//Variavel de escopo global
    let b = 22;//Variavel de escopo local

    console.log(`a:${a}  b:${b}`);//a:11   b:22
}

console.log(`a:${a}  b:${b}`);//a:11 b:2
