

// Crie um programa que receba seu nome e a sua idade
// e apresente na saida qual será sua idade aqui
// a 25 anos
// Saida - "Ewerton daqui a 25 anos sua idade será 50"

let entrada = require('prompt-sync')();
let nome = entrada('Digite seu nome: ');
let idade = parseInt(entrada('Digite sua idade: '));

 let idade25 = idade + 25;

console.log(nome + ' daqui a 25 anos sua idade será: ' + idade25);