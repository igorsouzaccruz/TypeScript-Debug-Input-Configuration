import { Candidato } from './candidato';
import { Questao } from '../heranca/questao';
import { IAlgoritimo } from "../interface/algoritimo";

export class QuestaoSete extends Questao implements IAlgoritimo {

    private votosInvalidos: number = 0;

    private quantidadeVotantes: number;
    private candidatos:Array<Candidato>;

    private votos:Array<Number>;

    foiRespondida: boolean = false;

    constructor() {
        super('07');
        // this.entradaDeDados();
        // this.processamentoDosDados();
    }

    entradaDeDados(): void {
        console.log();
        console.log(this.numeroQuestao);
        do {
            console.log(' Informe número de votantes? ou digite S para sair da questão')
            this.resposta = this.prompter('');
            if (this.resposta.toUpperCase() == 'S') {
                break;
            }
        } while (this.resposta === '' || !Number.isInteger(Number(this.resposta)) || Number(this.resposta) <= 0);

         //TODO melhorar o nome desse booleano
        if (Number.isInteger(Number(this.resposta)) && Number(this.resposta) > 0) {
            this.quantidadeVotantes = Number(this.resposta);
            this.candidatos =  [new Candidato(1, 'Igor'), new Candidato(2, 'kaike'), new Candidato(3, 'Emanuel')]
            this.foiRespondida = true;

            const mensagemParaPedirVoto: string = this.mensagemParaPedirVoto();
            for (let index = 0; index < this.quantidadeVotantes; index++) {
                console.log()
                console.log(mensagemParaPedirVoto)
                const voto: number = Number(this.prompter(''));
                this.addVoto(voto);
            }
        }
    }
    processamentoDosDados() {
        if (this.foiRespondida) {
            this.candidatos.forEach(candidato => {
                this.resultados.push(` O Candidato ${candidato.nome} recebeu ${candidato.votos} voto(s)`);    
            });
            this.resultados.push(` Votos anulados: ${this.votosInvalidos} voto(s)`);
        }
    }

    private mensagemParaPedirVoto(): string {
        const ultimaVirgulaEncontrada = new RegExp(', '+"([^"+','+"]*)$");
        const trocarPorOu = ' ou '+'$1'; //$1 representa a string depois da ULTIMA virgula encontrada
        const opcoesDeVotos = this.candidatos.map(candidato => candidato.id).join(', ').replace(ultimaVirgulaEncontrada, trocarPorOu)
        return `Deseja votar em quem? Lembrando números (${opcoesDeVotos})`;
    }

    private addVoto(voto: number): void  {
        const foiInvalidado = this.votoInvalido(voto)
        if (foiInvalidado) {
            console.log(`Seu voto foi anulado`);
            return ;
        }
        const candidatoVotado:Candidato = this.candidatos.find(candidato => candidato.id === voto);
        candidatoVotado.addVoto();
    }

    private votoInvalido(voto: number): boolean {
        if (isNaN(voto)){
            this.votosInvalidos++; 
            return true;
        }
        let candidatoVotado:Candidato = this.candidatos.find(candidato => candidato.id === voto);
        if (!candidatoVotado) {
            this.votosInvalidos++; 
            return true;
        }
        return false;
    }
     
    
}