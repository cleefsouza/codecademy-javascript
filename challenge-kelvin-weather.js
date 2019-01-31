/*
* No fundo do seu laboratório de meteorologia ao lado da montanha, o cientista louco Kelvin dominou a previsão do tempo.
* Recentemente, Kelvin começou a publicar suas previsões do tempo em seu site. No entanto, há um problema: todas as suas
* previsões descrevem a temperatura em Kelvin. Com o nosso conhecimento de JavaScript, vamos converter Kelvin para Celsius
* e depois para Fahrenheit.
*/

// temperatura em kevin
let kelvin = 293;
// temperatura em celsius
const celsius = kelvin - 273;

// convertendo em fahrenheit
const fahrenheit = Math.floor(celsius * (9 / 5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`); // The temperature is 68 degrees Fahrenheit.

// convertendo em newton
const newton = Math.floor(celsius * (33 / 100));

console.log(`The temperature is ${newton} degrees Newton.`); // The temperature is 6 degrees Newton.