/*
* Neste projeto vamos construir o Magic Eight Ball usando fluxo de controle em JavaScript.
* O usuário será capaz de inserir uma pergunta, então o nosso programa produzirá uma fortuna aleatória. 
*/

// nome do usuário
let useName = 'cleefsouza';

// boas vindas
useName ? console.log(`Hello, ${useName}!`) : console.log('Hello!');

// pergunta que o usuário deseja fazer a magic eight ball
let userQuestion = 'Qual a cor do cavalo branco de Napoleão?';
console.log(`${useName}: ${userQuestion}`);

// numero randonico
const randomNumber = Math.floor(Math.random() * 8);

// variavel mutavel que recebe o numero randonico
let eightBall = randomNumber;

// respostas da magic eight ball
switch (eightBall) {
    case 0:
        console.log('Magic Eight Ball: hummm, não sei se posso dizer...');
        break;
    case 1:
        console.log('Magic Eight Ball: nunca nem vi...');
        break;
    case 2:
        console.log('Magic Eight Ball: não quero!');
        break;
    case 3:
        console.log('Magic Eight Ball: rapazz, é complicado...');
        break;
    case 4:
        console.log('Magic Eight Ball: essa é fácil demais!');
        break;
    case 5:
        console.log('Magic Eight Ball: se prepara...');
        break;
    case 6:
        console.log('Magic Eight Ball: isso foi uma pergunta?');
        break;
    case 7:
        console.log('Magic Eight Ball: complicado...');
        break;
    default:
        console.log('Magic Eight Ball: pergunta estranha ¬¬');
        break;
}