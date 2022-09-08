import { QuestaoUm } from './questao_1/questao1';
import { IAlgoritimo } from './interface/algoritimo';
import { QuestaoSete } from './questao_7/questao7';

const questoes: Array<IAlgoritimo> = [new QuestaoUm(), new QuestaoSete()]

const questoes_entradaDeDados = () => {
    console.log('------------------ ENTRADA DE DADOS ------------------');
        
    questoes.forEach(questao => {
        questao.entradaDeDados();
    });
    console.log();
};

const questoes_processamentoDosDados = () => {
    console.log('---------------- PROCESSANDO OS DADOS ----------------');
        
    questoes.forEach(questao => {
        questao.processamentoDosDados();
    });
    const cincoSegundosAFrente = new Date();
    cincoSegundosAFrente.setSeconds((cincoSegundosAFrente.getSeconds() + 1))
    console.log(' Carregando...');
    while (cincoSegundosAFrente > new Date()) { }
    console.log(' Dados processados!!!');
    
};

const questoes_saidaDeDados = () => {
    console.log('--------------------- RESULTADOS ---------------------');
        
    questoes.forEach(questao => {
        console.log();
        questao.saidaDosDados();
    });
    console.log('------------------------------------------------------');
};

questoes_entradaDeDados()
console.log();
questoes_processamentoDosDados()
console.log();
questoes_saidaDeDados();
