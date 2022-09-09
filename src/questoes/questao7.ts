// Numa eleição existem três candidatos identificados pelos números 1, 2 e 3. Faça um
// algoritmo que compute o resultado de uma eleição. Inicialmente o programa deve pedir o
// número total de votantes. Em seguida, deve pedir para cada votante votar (informando o
// numero do candidato) e ao final mostrar o número de votos de cada candidato.

import PromptSync from "prompt-sync";

const prompter = PromptSync();

let candidatoUm : number = 0;
let candidatoDois : number = 0;
let candidatoTres : number = 0;
let voto : number = 0;

console.log("Escreva a quantidade de eleitores:");
let quantidadeEleitores : number = Number(prompter(''));

for(let index : number = 0; index < quantidadeEleitores; index++){
  console.log("Digite o número do candidato:");
    voto = Number(prompter(''));
    if(voto == 1){
      candidatoUm++
    }
    if(voto == 2){
      candidatoDois++
    }
    if(voto == 3){
      candidatoTres++
    }
}
console.log(`Número de votantes: ${quantidadeEleitores}`);
console.log(`Candidato 1 recebeu: ${candidatoUm} de voto(s)`);
console.log(`Candidato 2 recebeu: ${candidatoDois} de voto(s)`);
console.log(`Candidato 3 recebeu: ${candidatoTres} de voto(s)`);
console.log(`Total de voto(s) computados: ${candidatoUm + candidatoDois + candidatoTres}`);
console.log(`Total de voto(s) nulos: ${quantidadeEleitores - (candidatoUm + candidatoDois + candidatoTres)}`);








