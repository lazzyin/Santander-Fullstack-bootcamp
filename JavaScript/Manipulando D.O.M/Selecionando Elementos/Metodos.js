//Selecionando elementoa de uma pagina

document.getElementById('title')//Selecionando pelo id
document.getElementsByTagName('li')//Selecionando pela tag
document.getElementsByClassName('textos')//Selecionando pela classe

document.querySelectorAll('.primeira-classe .segunda-classe')//Retorna os elementos que tem as duas condições, no caso duas classes
document.querySelectorAll('li .opcao')//Retorna os elementos que tem as duas condições, no caso que tenha a tag li e a classe opcao