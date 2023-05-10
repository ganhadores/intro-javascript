// Array

/*

let aluno 1 = 'Thomas Trajano';
let aluno2 = 'Raissa Rebeca';
let aluno3 = 'Carlos Caetano';
let aluno4 = ' Helna Harris';

console.log('Lista de alunos: ');
console.log('- ' + aluno1);
console.log('- ' + aluno2);
console.log('- ' + aluno3);
console.log('- ' + aluno4);

*/

let alunos = ['Thomas Trajano', 'Raissa Rebeca', 'Carlos Caetano', 'Helna Harris'];

console.log('Lista de alunos: ');

for (let n = 0; n < alunos.length; n++) {
    console.log('- ' + alunos[n]);
}