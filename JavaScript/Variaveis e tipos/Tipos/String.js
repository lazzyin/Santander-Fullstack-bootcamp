nome="Dio"
sobrenome="Brando"

console.log(typeof(nome))

concatenado=nome+" "+sobrenome
concatenado2 = nome + "\n " + sobrenome
concatenado3=`${nome} ${sobrenome}`

console.log(concatenado)
console.log(concatenado2)
console.log(concatenado3)
console.log(typeof (concatenado));

exemplo = new String("String como objeto")
console.log(typeof exemplo)

empty = ""
console.log(typeof empty)

frase="Hello friend"
console.log(frase.split(""))
console.log(frase.split(" "))

console.log(frase.includes("Hello"))
console.log(frase.startsWith("H"))
console.log(frase.startsWith("o"))

fraseReplace = frase.replace("friend", "world")

console.log(frase);
console.log(fraseReplace);
console.log(frase[2])