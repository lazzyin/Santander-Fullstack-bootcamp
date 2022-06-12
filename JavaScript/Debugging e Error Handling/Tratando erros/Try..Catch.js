function verificaPalimdromo(string) {
    if (!string) throw "String invalida";

    return string === string.split('').reverse().join('');
}

function tryCatchExp(string) {
    try {
        verificaPalimdromo(string)//Se não houver erros executa a função inteira
    } catch (error) {
        console.log(error)//Caso haja um erro vai executar a função ate o ponto do erro e retornar o tipo do erro no console
    }
}
function tryCatchThrow(string) {
    try {
        verificaPalimdromo(string)//Se não houver erros executa a função inteira
    } catch (error) {
        throw error//Retorna o erro como um erro de sistema
    }
}

tryCatchExp('')
tryCatchThrow('')