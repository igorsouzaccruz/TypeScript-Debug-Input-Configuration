import { IAlgoritimo } from '../interface/algoritimo';
import PromptSync from 'prompt-sync';
export class QuestaoSete implements IAlgoritimo {

  prompt = PromptSync();
  private candidatoA: number = 0;
  private candidatoB: number = 0;
  private candidatoC: number = 0;
  private votosInvalidos: number = 0;
  private votos: number[] = [];

  titulo(): string {
    return 'QUESTÃO 7';
  }

  entradaDeDados(): void {
    let votantes = Number(this.prompt('Informe número de votantes? '));

    for (let index = 0; index < votantes; index++) {
      this.votos.push(Number(this.prompt("Deseja votar em quem? Lembrando números (1, 2 ou 3) ")));
    }
  }
  processamentoDosDados() {
    this.votos.forEach(voto => {
      switch (voto) {
        case 1:
          this.candidatoA++;
          break;
        case 2:
          this.candidatoB++;
          break;
        case 3:
          this.candidatoC++;
          break;
        default:
          this.votosInvalidos++;
          break;
      }
    });
  }
  saidaDosDados() {
    console.log(`Candidato A: ${this.candidatoA} voto(s)`);
    console.log(`Candidato B: ${this.candidatoB} voto(s)`);
    console.log(`Candidato C: ${this.candidatoC} voto(s)`);
    console.log(`Votos invalidos ou nulos: ${this.votosInvalidos} voto(s)`);
  }
}
