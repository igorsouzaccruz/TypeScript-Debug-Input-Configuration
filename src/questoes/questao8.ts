// Número primo é aquele que só é divisível por ele mesmo e pela unidade. Fazer um
// algoritmo que determine e escreva os números primos compreendidos entre um
// intervalo fornecido pelo usuário.

const mostrarPrimosCompreendidos = (valorInicial : number, valorFinal : number) : void => {
  let primosCompreendidos : number[] = new Array();

  for(let index : number = 0; index <= valorFinal; index++){
    if(valorInicial % 2 === 0){
      let addPrimos = valorInicial;
        primosCompreendidos.push(addPrimos);
    }
  }

  console.log(`Números compreendidos entre ${valorInicial} e ${valorFinal}, é: ${primosCompreendidos}`);

}
mostrarPrimosCompreendidos(1, 10);
mostrarPrimosCompreendidos(2, 20);
mostrarPrimosCompreendidos(1, 30);