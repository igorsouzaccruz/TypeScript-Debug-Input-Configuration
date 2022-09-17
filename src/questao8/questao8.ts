import PromptSync from 'prompt-sync'
import { IAlgoritimo } from '../interface/algoritimo'
export class QuestaoOito implements IAlgoritimo {
  prompt = PromptSync()
  numeroInicial: number = 0
  numeroFinal: number = 0
  numerosPrimos: number[] = []

  titulo(): string {
    return 'QUESTÃO 8'
  }

  entradaDeDados(): void {
    console.log('Digite o número inicial e final do intervalo')
    this.numeroInicial = Number(
      this.prompt('Digite o valor inicial do intervalo ')
    )
    do {
      this.numeroFinal = Number(
        this.prompt('Digite o valor final do intervalo ')
      )
    } while (this.numeroInicial >= this.numeroFinal)
  }

  processamentoDosDados() {
    for (let numero = this.numeroInicial; numero < this.numeroFinal; numero++) {
      if (
        (!(numero % 2 === 0) &&
          !(numero % 3 === 0) &&
          !(numero % 7 === 0) &&
            numero > 1) ||
            numero === 2 ||
            numero === 3 ||
            numero === 5 ||
            numero === 7
      ) {
        this.numerosPrimos.push(numero)
      }
    }
  }
  saidaDosDados() {
    this.numerosPrimos.forEach(numeroEquacao => {
      console.log('')
      console.log('É número primo: ' + numeroEquacao)
    })
  }
}
