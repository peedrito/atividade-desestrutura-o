// Exercício: Desestruturação de Arrays com Iteração
const alunos = [
    { nome: "Carlos", idade: 22, curso: "Engenharia", notas: { matematica: 75, portugues: 80, historia: 90 } },
    { nome: "Maria", idade: 21, curso: "Medicina", notas: { matematica: 90, portugues: 85, historia: 78 } },
    { nome: "Pedro", idade: 23, curso: "Arquitetura", notas: { matematica: 82, portugues: 88, historia: 92 } }
  ];
// Agora, utilize um loop (como um for ou forEach) para iterar sobre todos os alunos no array. A cada iteração,
// exiba no console uma mensagem que inclua o nome, curso e a média das notas do aluno. 
// A média pode ser calculada como (notaMatematica + notaPortugues + notaHistoria) / 3.

for (aluno of alunos) {
    const media = (aluno.notas.matematica + aluno.notas.portugues + aluno.notas.historia) / 3
    console.log(`Carregando infos de ${aluno.nome}`);
    console.log(`O (A) ${aluno.nome} está cursando ${aluno.curso}, sua idade atual é ${aluno.idade}. Segue boletim:\n-------`);
    console.log(`Matematica: ${aluno.notas.matematica}`);
    console.log(`portugues: ${aluno.notas.portugues}`);
    console.log(`historia: ${aluno.notas.historia}`);
    console.log(`[MEDIA DO ALUNO]: ${media.toFixed}`);
    console.log(`---------`)
  };