// Fazer um algoritmo que:
// • Leia um número indeterminado de linhas contendo cada uma a idade de um indivíduo.
// • A última linha que não entrará nos cálculos, contém o valor da idade igual a zero.
// • Calcule e escreva a idade média deste grupo de indivíduos.
// • Escreva também a maior idade e a menor

const calcularIdades = (idades : string) : void => {
  let listaDeIdades = idades.split(", ");
  let maiorIdade = listaDeIdades[0];
  let menorIdade = listaDeIdades[0];
  let totalIdade = 0;
  
  for(let i = 0; i < listaDeIdades.length; i++){
    totalIdade = totalIdade + parseInt(listaDeIdades[i], 10);
    if(listaDeIdades[i] > maiorIdade){
      maiorIdade = listaDeIdades[i];
    }
    if(listaDeIdades[i] < menorIdade){
      menorIdade = listaDeIdades[i];
    }
  }
  let media = totalIdade / listaDeIdades.length

  console.log("A média das idades é: " + media);
  console.log("A maior idade é: " + maiorIdade);
  console.log("A menor idade é: " + menorIdade);
}

calcularIdades('1, 2, 3, 4, 5');