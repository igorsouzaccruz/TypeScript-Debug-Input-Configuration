import PromptSync from "prompt-sync";
export abstract class Questao {
  //Comando para entrada de dados
  private prompt = PromptSync();

  public foiRespondida: boolean;
  public resposta: string;

  constructor(private _numeroQuestao: string) {}

  get numeroQuestao(): string {
    return `- QUESTÃO ${this._numeroQuestao}`;
  }

  public leia(): string {
    return this.prompt("");
  }

  public escreval(texto: string) {
    console.log(texto);
  }
}
