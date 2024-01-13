// Exercício: Desestruturação de Arrays
// Considere o seguinte array de alunos:

const alunos = [
    { nome: "Carlos", idade: 22, curso: "Engenharia", notas: { matematica: 75, portugues: 80, historia: 90 } },
    { nome: "Maria", idade: 21, curso: "Medicina", notas: { matematica: 90, portugues: 85, historia: 78 } },
    { nome: "Pedro", idade: 23, curso: "Arquitetura", notas: { matematica: 82, portugues: 88, historia: 92 } }
];

// Agora, crie variáveis utilizando a desestruturação para extrair informações específicas do 
// segundo aluno (Maria). Crie variáveis chamadas nome, idade, curso, notaMatematica, notaPortugues e 
// notaHistoria e atribua a elas os valores correspondentes.

const [aluno1, aluno2, aluno3] = alunos;

console.log(`O nome do aluno é: ${aluno2.nome}`);
console.log(`A idade do aluno é: ${aluno2.idade}`);
console.log(`O curso do aluno é: ${aluno2.curso}`);
console.log(`-----------`);
console.log(`Nota em matematica: ${aluno2.notas.matematica}`);
console.log(`Nota em português: ${aluno2.notas.portugues}`);
console.log(`Nota em historia: ${aluno2.notas.historia}`);
