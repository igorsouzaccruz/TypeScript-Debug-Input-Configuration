import { Questao } from "../heranca/questao";
import { IAlgoritimo } from "../interface/algoritimo";

export class QuestaoSeis extends Questao implements IAlgoritimo {
  fahrenheit : number;
  celsius : number;

  constructor() {
    super("06");
  }
  entradaDeDados(): void {

    this.escreval(" Informe a temperatura em Fahrenheit: ");
    this.fahrenheit = Number(this.leia());
  }
  processamentoDosDados() {
    this.celsius = (5 * (this.fahrenheit - 32) / 9);
  }
  saidaDosDados() {
    this.escreval(` Temperatura em Fahrenheit: ${this.fahrenheit}°F`);
    this.escreval(` Temperatura em Celsius: ${this.celsius.toFixed(2)}°C`)
  }
  
}
