/* 
  Criar um programa que receba 1 nota de 0 a 10 e retorne aprovado caso a nota seja maior ou igual a 7

*/ 

const entrada = require ('prompt-sync') ();

const  notaTxt = (entrada('Digite a sua nota: '));
const nota = parseFloat(nptaTxt);

if (nota < 0 || nota > 10 || isNaN(nota)) {
    console.log('A nota deve ser entre 0 e 10! ');
} else {

if (nota >= 7 ) {
 console.log('voce foi aprovado!');
} else {

  console.log('voce foi reprovado!');
 
}
}
