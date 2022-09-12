import { GerenciadorDeAlgoritimo } from './gerenciador_de_algoritimo';
import { IAlgoritimo } from './interface/algoritimo';
import { QuestaoTres } from './questao_3/questao3';
import { QuestaoQuatro } from './questao_4/questao4';
import { QuestaoCinco } from './questao_5/questao5';
import { QuestaoOito } from './questao_8/questao8';
import { QuestaoNove } from './questao_9/questao9';
import { QuestaoDoze } from './questao_12/questao12';
import { QuestaoDez } from './questao_10/questao10';
import { QuestaoTreze } from './questao_13/questao13';
import { QuestaoQuatorze } from './questao_14/questao14';
import { QuestaoOnze } from './questao_11/questao11';
import { QuestaoSete } from './questao_7/questao7';

const algoritimos: Array<IAlgoritimo> = [new QuestaoSete()];

const gerenciadorDosAlgoritimos: GerenciadorDeAlgoritimo =
  new GerenciadorDeAlgoritimo(algoritimos);

gerenciadorDosAlgoritimos.executar();
