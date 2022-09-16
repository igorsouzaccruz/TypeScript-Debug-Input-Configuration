import PromptSync from 'prompt-sync'
import { IAlgoritimo } from '../interface/algoritimo'
export class QuestaoSete implements IAlgoritimo {
  prompt = PromptSync()
  private candidatoUm: number = 0
  private candidatoDois: number = 0
  private candidatoTres: number = 0
  private votosInvalidos: number = 0
  private votos: number[] = []

  titulo(): string {
    return 'QUESTÃO 7'
  }

  entradaDeDados(): void {
    let numeroVotantes = Number(this.prompt('Informe o número de votantes: '))

    for (let votantes = 0; votantes < numeroVotantes; votantes++) {
      this.votos.push(
        Number(
          this.prompt(
            'Vote em um dos candidados Lula, Bolsonaro, Ciro respectivamente a seguir 1, 2 ou 3: ')))
    }
  }

  processamentoDosDados() {
    this.votos.forEach(voto => {
      switch (voto) {
        case 1:
          this.candidatoUm++
          break
        case 2:
          this.candidatoDois++
          break
        case 3:
          this.candidatoTres++
          break
        default:
          this.votosInvalidos++
          break
      }
    })
  }
  saidaDosDados() {
    console.log(`Candidato Lulinha: ${this.candidatoUm} voto(s) `)
    console.log(`Candidato Boso: ${this.candidatoDois} voto(s) `)
    console.log(`Candidato Ciro: ${this.candidatoTres} voto(s) `)
    console.log(`Entregar o Brasil para os índios: ${this.votosInvalidos} voto(s) `)
  }
}
