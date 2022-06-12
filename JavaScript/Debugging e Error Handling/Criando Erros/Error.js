//new Error(message, feliName, lineNumber)
//Todos os parâmetros são opcionais

const meuErro = new Error('Mensagem invalida');
meuErro.name='InvalidMessage'//Nome do erro

throw meuErro