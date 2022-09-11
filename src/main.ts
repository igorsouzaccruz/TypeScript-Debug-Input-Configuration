import { GerenciadorDeAlgoritimo } from './gerenciador_de_algoritimo';
import { IAlgoritimo } from './interface/algoritimo';
import { QuestaoTres } from './questao_3/questao3';
import { QuestaoQuatro } from './questao_4/questao4';
import { QuestaoCinco } from './questao_5/questao5';
import { QuestaoOito } from './questao_8/questao8';
import { QuestaoNove } from './questao_9/questao9';
import { QuestaoDoze } from './questao_12/questao12';

const algoritimos: Array<IAlgoritimo> = [new QuestaoDoze()];

const gerenciadorDosAlgoritimos: GerenciadorDeAlgoritimo =
  new GerenciadorDeAlgoritimo(algoritimos);

gerenciadorDosAlgoritimos.executar();
