const meuElemento=document.getElementById("meu-elemento")

meuElemento.classList.add("novo-estilo");
//adiciona a classe "novo-estilo"

meuElemento.classList.remove("classe")
//remove a classe "classe"

meuElemento.classList.toggle("dark-mode")
//adiciona a classe "dark-mode", caso ela não faça parte da lista e remove caso faça.

//Acessando diretamento o css de um elemento:

document.getElementsByTagName("p").style.color = "blue";
//a .style acessa os estilos do elemento e adiciona a cor azul