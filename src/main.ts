import { GerenciadorDeAlgoritimo } from './gerenciador_de_algoritimo';
import { IAlgoritimo } from './interface/algoritimo';
import { QuestaoUm } from './questao1/questao1';
import { QuestaoDois } from './questao2/questao2';
import { QuestaoSete } from './questao7/questao7';
import { QuestaoOito } from './questao8/questao8';
import { QuestaoNove } from './questao9/questao9';

const algoritimos: Array<IAlgoritimo> = [new QuestaoNove()]

const gerenciadorDosAlgoritimos: GerenciadorDeAlgoritimo =
  new GerenciadorDeAlgoritimo(algoritimos);

gerenciadorDosAlgoritimos.executar();
