import { GerenciadorDeAlgoritimo } from './gerenciador_de_algoritimo';
import { IAlgoritimo } from './interface/algoritimo';
import { QuestaoUm } from './questao1/questao1';
import { QuestaoDois } from './questao2/questao2';
import { QuestaoTres } from './questao3/questao3';
import { QuestaoQuatro } from './questao4/questao4';
import { QuestaoCinco } from './questao5/questao5';
import { QuestaoSeis } from './questao6/questao6';
import { QuestaoSete } from './questao7/questao7';
import { QuestaoOito } from './questao8/questao8';
import { QuestaoNove } from './questao9/questao9';
import { QuestaoDez } from './questao10/questao10'
import { QuestaoOnze } from './questao11/questao11'
import { QuestaoDoze } from './questao12/questao12'
import { QuestaoTreze } from './questao13/questao13';
import { QuestaoQuatorze } from './questao14/questao14';

const algoritimos: Array<IAlgoritimo> = [new QuestaoQuatorze()]

const gerenciadorDosAlgoritimos: GerenciadorDeAlgoritimo =
  new GerenciadorDeAlgoritimo(algoritimos);

gerenciadorDosAlgoritimos.executar();
