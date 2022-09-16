import PromptSync from 'prompt-sync'
import { IAlgoritimo } from '../interface/algoritimo'
export class QuestaoSeis implements IAlgoritimo {
  prompt = PromptSync()
  temperaturaFahrenheit: number
  temperaturaCelsius: number

  titulo(): string {
    return 'QUESTÃO 6'
  }

  entradaDeDados(): void {
    this.temperaturaFahrenheit = Number(
      this.prompt('Informe a temperatura em Fahrenheit: ')
    )
  }

  processamentoDosDados() {
    this.temperaturaCelsius = (5 * (this.temperaturaFahrenheit - 32)) / 9
  }

  saidaDosDados() {
    console.log(
      `A temperatura em Fahrenheit é ${this.temperaturaFahrenheit} e a mesma temperatura em Celsius é ${this.temperaturaCelsius} `
    )
  }
}
