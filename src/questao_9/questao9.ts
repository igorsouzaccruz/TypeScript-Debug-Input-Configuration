import { IQuestao } from "../interface/iquestao";

// Fazer um algoritmo que calcule e escreva a soma dos 50 primeiros termos da seguinte série: 1000/1 - 997/2 + 994/3 - 991/4 + ...
export class QuestaoNove implements IQuestao {

    private somaDosTermosDaSerie:number = 1000;

    public mostrarResultado(): void {
        throw new Error("Method not implemented.");
    }

    //PROCESSAMENTO DE DADOS
    private somaDos50TermosDaSerie(): void {
        let termoDaSerie:number;
        for (let termo = 0; termo < 50; termo++) {
            termoDaSerie = (1000 - (termo * 3)) / (termo + 1);
            (termo % 2 === 0) ? this.somaDosTermosDaSerie += termoDaSerie:this.somaDosTermosDaSerie -= termoDaSerie
        }
    }

}