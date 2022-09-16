import { GerenciadorDeAlgoritimo } from './gerenciador_de_algoritimo';
import { IAlgoritimo } from './interface/algoritimo';
import { QuestaoUm } from './questao1/questao1';
import { QuestaoDez } from './questao10/questao10';
import { QuestaoOnze } from './questao11/questao11';
import { QuestaoDoze } from './questao12/questao12';
import { QuestaoDois } from './questao2/questao2';
import { QuestaoSete } from './questao7/questao7';
import { QuestaoOito } from './questao8/questao8';
import { QuestaoNove } from './questao9/questao9';

const algoritimos: Array<IAlgoritimo> = [new QuestaoDoze()]

const gerenciadorDosAlgoritimos: GerenciadorDeAlgoritimo =
  new GerenciadorDeAlgoritimo(algoritimos);

gerenciadorDosAlgoritimos.executar();
