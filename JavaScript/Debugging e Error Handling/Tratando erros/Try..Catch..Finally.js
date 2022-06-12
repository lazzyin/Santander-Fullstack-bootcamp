function verificaPalimdromo(string) {
    if (!string) throw "String invalida";

    return string === string.split('').reverse().join('');
}
function tryCatchThrow(string) {
    try {
        verificaPalimdromo(string)//Se não houver erros executa a função inteira
    } catch (error) {
        throw error//Retorna o erro como um erro de sistema
    }
    finally {
        console.log('A String enviada foi: '+ string)//Ira ser executado independente de haver erro ou não
    }
}

tryCatchThrow('tenet')
tryCatchThrow('gato')