// o comando abaixo apresenta uma mensagem na tela 
console.log("Olá estou programando em javascript"); 

/*
    comentário que ocupa mais
    de uma linha

*/

// criação de variável do tipo texto 
let nome = 'Aysla Beatriz Novais';
// criação de variável do tipo numérico (inteiro)
let idade = 17;
// criação de variavél do tipo numérico (decimal)
let altura = 1.70;
// criação de variavél do tipo verdadeiro/falso
let trabalha = true; // true = verdadeiro | false = falso
// exemplo de variavél de nome composto
let corFavorita = 'Vermelho';
// exemplo de variavél do tipo lista de valores
let cores_favoritas = ['Vermelho', 'Branco', 'Preto'];
// exemplo de variavél que armazena um objeto 
let endereco = {
  'logradouro'    :  'Rua',
  'nome_logradouro'  :   'Brasil',
  'número'     : '50 A',
  'bairro'    :  'Centro',
  'cidade'   :   'Tupã'   

};
let covid;
let dengue = null;

console.log('Nome: ' + nome);
console.log('Idade: ' + idade);
console.log('Altura: ' + altura);
console.log('Trabalha: ' + trabalha);
console.log('Cor favorita: ' + corFavorita);
console.log('Cores favoritas: ' + cores_favoritas[0] + ', ' + cores_favoritas[1] + ', ' + cores_favoritas[2]);
console.log('Endereço: ' + endereco.logradouro + ' ' + endereco.nome_logradouro + ',  ' + endereco.número + ' - ' +  endereco.bairro + ' - ' +  endereco.cidade);
console.log('Covid: ' + covid);
console.log('Dengue: ' + dengue);


