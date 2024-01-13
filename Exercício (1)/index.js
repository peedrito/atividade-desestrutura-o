// Exercício: Atribuição por Desestruturação
// Considere o seguinte objeto representando informações sobre um aluno:
const aluno = {
    nome: "Ana",
    idade: 20,
    curso: "Ciência da Computação",
    notas: {
      matematica: 85,
      portugues: 90,
      historia: 75
    }
  };

// Agora, crie variáveis utilizando a desestruturação para extrair as informações do objeto.
//  Crie variáveis chamadas nome, idade, curso, notaMatematica, 
// notaPortugues e notaHistoria e atribua a elas os valores correspondentes do objeto.

const {nome, idade, curso, notas: {matematica: matematica, portugues, historia}} = aluno;

// Exibindo as variáveis
console.log(`Nome do aluno é: ${nome}`);
console.log(`Idade do aluno é: ${idade}`);
console.log(`Curso do aluno é: ${curso}`);
console.log(`------`);
console.log(`Notas em português: ${portugues}`);
console.log(`Notas em matematica: ${matematica}`);
console.log(`Notas em historia: ${historia}`);