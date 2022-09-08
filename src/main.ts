import PromptSync from 'prompt-sync'
import { QuestaoUm } from './questao_1/questao1';
import { QuestaoQuatro } from './questao_4/questao4';
import { QuestaoSete } from './questao_7/questao7';
import { Candidato } from './questao_7/candidato';
import { IQuestao } from './interface/iquestao';
const prompter = PromptSync();

const questoes: Array<IQuestao> = [];

const questao1 = () => {
    console.log('--------------- QUESTÃO 01 ---------------');
    let resposta: string;
    do {
        console.log('(Q1) - Informe um numero inteiro ou digite S para sair da questão')
        resposta = prompter('');
        if (resposta.toUpperCase() == 'S') {
            break;
        }
    } while (resposta === '' || !Number.isInteger(Number(resposta)));

    //TODO melhorar o nome desse booleano
    if (Number.isInteger(Number(resposta))){
        questoes.push(new QuestaoUm(Number(resposta)))
    }
}

const questao4 = () => {
    console.log('--------------- QUESTÃO 04 ---------------');
    console.log('Não necessita de entrada de dados.');
    console.log('Deve calcular a soma dos inteiros dos numeros de 1 a 100');
    questoes.push(new QuestaoQuatro())
}

const questao7 = () => {
    console.log();
    console.log('--------------- QUESTÃO 07 ---------------');
    let resposta: string;
    
    const candidatos:Array<Candidato> = [new Candidato(1, 'Igor'), new Candidato(2, 'kaike'), new Candidato(3, 'Emanuel')]
    do {
        console.log('(Q7) Informe número de votantes? ou digite S para sair da questão')
        resposta = prompter('');
        if (resposta.toUpperCase() == 'S') {
            break;
        }
    } while (resposta === '' || !Number.isInteger(Number(resposta)) || Number(resposta) <= 0);

    //TODO melhorar o nome desse booleano
    if (Number(resposta) > 0) {
        const  questao7 = new QuestaoSete(Number(resposta), candidatos);
        questao7.realizarVotacao();
        questoes.push(questao7);
    }
};

const saidaDeDadosDasQuestoes = () => {
    questoes.forEach(questao => {
        console.log();
        questao.mostrarSaidaDeDados();
    });
};
questao1();
questao4();
questao7();

saidaDeDadosDasQuestoes();
