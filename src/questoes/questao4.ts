// Faça um algoritmo que calcule a soma dos números inteiros de 1 a 100.

const calcularSomaDosNumeros = (numero : number) : void => {
  let soma = 0;

  for(let i = 0; i <= numero; i++){
    soma = soma + i;
  }

  console.log("A soma dos números inteiros é: " + soma);
}

calcularSomaDosNumeros(100);