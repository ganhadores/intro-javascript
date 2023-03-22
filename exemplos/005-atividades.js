/*
Crie um programa que receba o nome e a nota de 4 matérias
Exibir o nome das 4 matérias com  a nota e a média final.
Ex:
Matemática: 7,00
Ingles: 10,00
Geografia: 8,00
Fisica: 8,00
Média: 8,25
*/

let entrada = require('prompt-sync')();
console.log ('Programa que receba a nota de 4 matérias')
let mat1 = entrada('Digite o nome da primeira matéria: ')
let n1 = parseFloat(entrada('Digite a nota de ' + mat1 + ': '));

let mat2 = entrada('Digite o nome da segunda materia: ')
let n2 = parseFloat(entrada('Digite a nota de' + mat2 + ': '));

let mat3 = entrada('Digite o nome da terceira materia: ')
let n3 = parseFloat(entrada('Digite a nota de ' + mat3 + ': '));

let mat4 = entrada('Digite o nome da quarta materia: ')
let n4 = parseFloat(entrada('Digite a nota da ' + mat4 + ': '));

let media = (n1 + n2 + n3 + n4) / 4;

console.log('Notas: ');
console.log(mat1 + ': ' + n1.toFixed(2));
console.log(mat1 + ': ' + n2.toFixed(2));
console.log(mat1 + ': ' + n3.toFixed(2));
console.log(mat1 + ': ' + n4.toFixed(2));
console.log('Media: ' + media.toFixed(2));


