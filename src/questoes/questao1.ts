//Determinar se um número é par ou ímpar e positivo ou negativo

const verficaNumero = (numero : number) : void => {
  
  if(numero % 2 == 0) {
    console.log("Número é par!");
  }else {
    console.log("Número é ímpar!");
  }
  if(numero >= 0) {
    console.log("Número é positivo!");
  }else{
    console.log("Número é negativo");
  }
}

verficaNumero(-2);
verficaNumero(-1);
verficaNumero(0);
verficaNumero(2);
verficaNumero(1);