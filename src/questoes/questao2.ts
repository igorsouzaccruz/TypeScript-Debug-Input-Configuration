// Ler três notas de um aluno, calcular a média e informar se ele foi aprovado (Média ≥ 7),
// reprovado (Média < 7) ou aprovado com louvor (Média = 10)

const calcularNota = (nota1 : number, nota2 : number, nota3 : number) => {

  let somaDasNotas = nota1 + nota2 + nota3;
  let numeroDeNota = [nota1, nota2, nota3];
  let media = somaDasNotas / numeroDeNota.length;

  if(media === 10){
    console.log("APROVADO COM LOUVOR!");
  }else if(media >= 7){
    console.log("APROVADO!");
  }
  else if(media < 7){
    console.log("REPROVADO!");
  }
}

calcularNota(10, 10, 10);
calcularNota(7, 7, 7);
calcularNota(6, 6, 6);