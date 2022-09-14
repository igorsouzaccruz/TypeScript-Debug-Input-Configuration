import { GerenciadorDeAlgoritimo } from './gerenciador_de_algoritimo';
import { IAlgoritimo } from './interface/algoritimo';
import { QuestaoUm } from './questao1/questao1';
import { QuestaoDois } from './questao2/questao2';

const algoritimos: Array<IAlgoritimo> = [new QuestaoDois()];

const gerenciadorDosAlgoritimos: GerenciadorDeAlgoritimo =
  new GerenciadorDeAlgoritimo(algoritimos);

gerenciadorDosAlgoritimos.executar();
