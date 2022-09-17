import { GerenciadorDeAlgoritimo } from './gerenciador_de_algoritimo';
import { IAlgoritimo } from './interface/algoritimo';
import { QuestaoOnze } from './questao_11/questao11';

const algoritimos: Array<IAlgoritimo> = [new QuestaoOnze()];

const gerenciadorDosAlgoritimos: GerenciadorDeAlgoritimo =
  new GerenciadorDeAlgoritimo(algoritimos);

gerenciadorDosAlgoritimos.executar();
