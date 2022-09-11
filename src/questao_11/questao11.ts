import { IAlgoritimo } from '../interface/algoritimo';
import PromptSync from 'prompt-sync';
export class QuestaoOnze implements IAlgoritimo {
  prompt = PromptSync();
  numeroTabuada:number = 0;
  resultado:string = '';

  titulo(): string {
    return 'QUESTÃO 11'
  }
  entradaDeDados(): void {
    this.numeroTabuada = Number(this.prompt('Até qual número deseja a tabuada?'));
  }
  processamentoDosDados() {
    let colunasPorImpressão:number = this.numeroTabuada/3
    let colunas:number = 1;
    let coluna = 0;

    if (colunasPorImpressão < 1) {
        do {
          for (let linha = 1; linha < 10; linha++) {
            for (coluna; coluna < this.numeroTabuada; coluna++) {
              this.resultado += `${coluna} * ${linha} = ${coluna * linha} | `;
            }
            this.resultado += ' ';
          }
        } while (coluna === this.numeroTabuada);
    } 
    
    if (this.numeroTabuada%3 === 0) {
      do {
        for (let linha = 1; linha < 10; linha++) {
          for (colunas; colunas < colunas+2; colunas++) {
            this.resultado += `${colunas} * ${linha} = ${colunas * linha} | `;
          }
          this.resultado += ' ';
        }
      } while (coluna === this.numeroTabuada);
    } 

//     repet <- (numero/3.0)
// colunas <- 1
// loop <- repet



// SE (numero%3=0) ENTAO
//   repita
//      para linha de 1 ate 10 faca
//         para coluna de colunas ate colunas+2 faca
//              escreva(coluna," * ", linha, " =  ", coluna * linha, " | ")
//         fimpara
//         escreval(" ")
//      fimpara
//      colunas <- colunas + 3
//      loop <- loop - 1
//   ate(loop = 0)
// FIMSE

// SE ((repet > 1) E (NAO(numero%3=0))) ENTAO

//    resto <- numero - (int(loop) * 3)

//      repita
//         para linha de 1 ate 10 faca
//            para coluna de colunas ate colunas + 2 faca
//                 escreva(coluna," * ", linha, " =  ", coluna * linha, " | ")
//            fimpara
//            escreval(" ")
//         fimpara

//      colunas <- colunas + 3
//      loop <- int(loop) - 1

//      ate(loop = 0)
  
// escreval(" ")

//      repita
//            para linha de 1 ate 10 faca
//                 para coluna de (numero - int(resto) + 1) ate numero faca
//                      escreva(coluna," * ", linha, " =  ", coluna * linha, " | ")
//                 fimpara
//                 escreval(" ")
//            fimpara

//      ate(coluna = numero)
  
// FIMSE

  }
  saidaDosDados() {
    throw new Error('Method not implemented.');
  }
}
