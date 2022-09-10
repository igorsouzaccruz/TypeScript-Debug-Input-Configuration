import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';

export class QuestaoSete implements IAlgoritimo {
  prompt = PromptSync();

  votoCandidatoUm: number = 0;
  votoCandidatoDois: number = 0;
  votoCandidatoTres: number = 0;
  qtdEleitores: number;
  votos: number[] = [];

  titulo(): string {
    return 'QUESTÃO 7';
  }

  entradaDeDados(): void {
    this.qtdEleitores = Number(
      this.prompt(' Informe a quantidade de eleitores: ')
    );

    for (let index: number = 0; index < this.qtdEleitores; index++) {
      this.votos.push(Number(this.prompt(' Informe o número do candidato: ')));
    }
  }
  processamentoDosDados() {
    for (let index: number = 0; index < this.votos.length; index++) {
      if (this.votos[index] === 1) {
        this.votoCandidatoUm++;
      }
      if (this.votos[index] === 2) {
        this.votoCandidatoDois++;
      }
      if (this.votos[index] === 3) {
        this.votoCandidatoTres++;
      }
    }
  }
  saidaDosDados() {
    const votoNaoNulo: number =
      this.votoCandidatoUm + this.votoCandidatoDois + this.votoCandidatoTres;
    const votoNulo: number = this.qtdEleitores - votoNaoNulo;
    console.log(`Número de votantes: ${this.qtdEleitores}`);
    console.log(`Candidato 1 recebeu: ${this.votoCandidatoUm} de voto(s)`);
    console.log(`Candidato 2 recebeu: ${this.votoCandidatoDois} de voto(s)`);
    console.log(`Candidato 3 recebeu: ${this.votoCandidatoTres} de voto(s)`);
    console.log(`Total de voto(s): ${votoNaoNulo}`);
    console.log(`Total de voto(s) nulos: ${votoNulo}`);
  }
}
