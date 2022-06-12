//Exportar

//Named Exports
export function mostraIdade(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}
 
export function mostraCidade(pessoa) {
    return `A cidade de ${pessoa.nome} é ${pessoa.cidade}`;
}
 
export function mostraHobby(pessoa) {
    return `O hobby de ${pessoa.nome} é ${pessoa.hobby}`;
}
 

//Default exports
function mostraCidade(pessoa) {
    return `A cidade de ${pessoa.nome} é ${pessoa.cidade}`;
}
 
function mostraHobby(pessoa) {
    return `O hobby de ${pessoa.nome} é ${pessoa.hobby}`;
}
export {
    mostraCidade
}

export default mostraHobby;

/**
-Só pode haver um default export por arquivo
-Sera o retorno padrão do seu arquivo
*/


//==================================================
//IMPORT

//Named imports
import{funcao,variavel,classe} from './arquivo.js'

//default exports
import valorDefault from './arquvo.js'

//Trocando nome de imports
import { arquivo as nome } from './arquivo.js'
nome.metodo()

//importando todos os dados de um arquivo
import * as infos from './arquivos.js'
infos.metodoA();
console.log(info.variavel)

