/*
* Você foi contratado para escrever um programa que registrará
* os corredores para a corrida e lhes dará instruções sobre o dia da corrida.
*/

// nmero do corredor
let raceNumber = Math.floor(Math.random() * 1000);
// corredor registrado
const registeredEarly = false;
// idade corredor
let ageRunner = 20;

// condição nº 1
if(ageRunner > 18 && registeredEarly === true){
   raceNumber += 1000;
  console.log(`Corredor nº ${raceNumber} correrá às 09h30.`);
} else if (ageRunner >= 18 && registeredEarly === false){
	raceNumber += 1000;
  console.log(`Corredor nº ${raceNumber} correrá às 11h00.`);
} else if(ageRunner < 18){
  raceNumber += 1000;
	console.log(`Corredor nº ${raceNumber} correrá às 12h30.`);
} else {
  console.log(`Corredor nº ${raceNumber} compareça à mesa de registro.`);
}