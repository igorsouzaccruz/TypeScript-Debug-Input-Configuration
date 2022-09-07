import { IQuestao } from "../interface/iquestao";

export class QuestaoSete implements IQuestao {

    private candidatoA: number = 0;
    private candidatoB: number = 0;
    private candidatoC: number = 0;
    private votosInvalidos: number = 0;


    public analisarVotos(voto: number): void  {
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
    }
     
    mostrarSaidaDeDados(): void {
        console.log('------------ QUESTÃO 7 ------------');
        console.log(`Candidato A: ${this.candidatoA} voto(s)`);
        console.log(`Candidato B: ${this.candidatoB} voto(s)`);
        console.log(`Candidato C: ${this.candidatoC} voto(s)`);
        console.log(`Votos invalidos ou nulos: ${this.votosInvalidos} voto(s)`);
        console.log('------------      FIM       ------------');
        console.log();
    }



}