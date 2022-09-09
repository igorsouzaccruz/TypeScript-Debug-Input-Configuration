// Faça um algoritmo que lê uma temperatura em Fahrenheit e calcula a temperatura
// correspondente em Celsius. Ao final o programa deve exibir as duas temperaturas.
// – Usar a fórmula: C = (5 * (F-32) / 9)

const calculaTemperatura = (fahrenheit : number) : void => {
  let celsius : number = (5 * (fahrenheit - 32) / 9)

  console.log("Temperatura em Fanrenheit: "+ fahrenheit + "°F");
  console.log("Temperatura em Celsius: " + celsius.toFixed(2) + "°C");
  
}

calculaTemperatura(102);