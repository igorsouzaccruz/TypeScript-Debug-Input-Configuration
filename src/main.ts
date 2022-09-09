import PromptSync from 'prompt-sync'
import { QuestaoUm } from './questao_1/questao1';
import { QuestaoQuatro } from './questao_4/questao4';
import { QuestaoSete } from './questao_7/questao7';
import { Candidato } from './questao_7/candidato';
import { IQuestao } from './interface/iquestao';
import { QuestaoSeis } from './questao_6/questao6';
const prompter = PromptSync();

const resultadosQuestoes: Array<IQuestao> = [];

const questao1 = () => {
    console.log('- QUESTÃO 01');
    let resposta: string;
    do {
        console.log(' Informe um numero inteiro ou digite S para sair da questão')
        resposta = prompter('');
        if (resposta.toUpperCase() == 'S') {
            break;
        }
    } while (resposta === '' || !Number.isInteger(Number(resposta)));

    //TODO melhorar o nome desse booleano
    if (Number.isInteger(Number(resposta))){
        resultadosQuestoes.push(new QuestaoUm(Number(resposta)))
    }
}

const questao4 = () => {
    console.log();    
    console.log('- QUESTÃO 04');
    console.log(' Não necessita de entrada de dados.');
    console.log(' Deve calcular a soma dos inteiros dos numeros de 1 a 100');
    resultadosQuestoes.push(new QuestaoQuatro())
}

const questao6 = () => {
    console.log('- QUESTÃO 06');
    let resposta: string;
    do {
        console.log(' Informe a temperatura que em Fahrenheit(°F) que será convertida em Celsius(°C): ')
        resposta = prompter('');
        if (resposta.toUpperCase() == 'S') {
            break;
        }
    } while (resposta === '' || !Number.isFinite(Number(resposta)) || Number(resposta) <= -459.67);

    if (Number.isFinite(Number(resposta)) && Number(resposta) >= -459.67){
        resultadosQuestoes.push(new QuestaoSeis(Number(resposta)))
    }
}

const questao7 = () => {
    console.log();
    console.log('- QUESTÃO 07');
    let resposta: string;
    
    do {
        console.log(' Informe número de votantes? ou digite S para sair da questão')
        resposta = prompter('');
        if (resposta.toUpperCase() == 'S') {
            break;
        }
    } while (resposta === '' || !Number.isInteger(Number(resposta)) || Number(resposta) <= 0);

    //TODO melhorar o nome desse booleano
    if (Number.isInteger(Number(resposta))) {
        const candidatos:Array<Candidato> = [new Candidato(1, 'Igor'), new Candidato(2, 'kaike'), new Candidato(3, 'Emanuel'), new Candidato(4,'Blibli')]
        const  questao7 = new QuestaoSete(Number(resposta), candidatos);
        resultadosQuestoes.push(questao7);
    }
};

const saidaDeDadosDasQuestoes = () => {
    console.log();
    console.log();
    console.log('--------------- RESULTADOS ---------------');
        
    resultadosQuestoes.forEach(questao => {
        console.log();
        questao.mostrarResultado();
    });
    console.log();
    console.log('------------------------------------------');
};
console.log('--------------- QUESTÕES ---------------');
// questao1();
// questao4();
questao6();
// questao7();

saidaDeDadosDasQuestoes();
