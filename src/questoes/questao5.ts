// Fazer um algoritmo para calcular e escrever a soma dos cubos dos números pares
// compreendidos entre B e A (B > A). B e A são lidos pelo teclado.


const calcularSomaDosCubos = (B :number, A : number) : void =>{
  let somaDosNumerosPares : number = 0;
  let numerosCompreendidos : number[] = [0];
  
  if(A < B){
    for(let compreendidosEntreAEB = 0; compreendidosEntreAEB < B; compreendidosEntreAEB++){
      if(compreendidosEntreAEB % 2 == 0) {
        let adicionarNumerosCompreendidos = compreendidosEntreAEB;
        numerosCompreendidos.push(adicionarNumerosCompreendidos);
        somaDosNumerosPares = somaDosNumerosPares + (Math.pow(compreendidosEntreAEB, 3));
        }
      }
    } else {
  console.log("A é maior que B, logo, não pode efetuar a soma.");
  
    }
  numerosCompreendidos.shift();
  console.log("A soma do cubos dos números pares é: " + somaDosNumerosPares);
  console.log("Números compreendidos entre B e A: " + "[" + numerosCompreendidos + "]");
  
  }
  
  calcularSomaDosCubos(10, 1);