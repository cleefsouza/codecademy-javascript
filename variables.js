/*
* variables
*/

// var
/* toda variável que é declarada com a palavra-chave var é elevada(hoisting) até o topo do contexto de execução */
var exibeMensagemVar = function () {
    var mensagemForaDoIfUm = "ECMAScript 6";
    if (mensagemForaDoIfUm == "ECMAScript 6") {
        var mensagemDentroDoIfUm = "JavaScript";
    }
    console.log(`Fora do IF: ${mensagemForaDoIfUm}`); // ECMAScript 6
    console.log(`Fora do IF: ${mensagemDentroDoIfUm}`); // JavaScript
}

exibeMensagemVar();

// let
/* quando utilizamos let, estamos atribuindo escopo de bloco à variável sendo criada e, portanto, não ocorre o hoisting */
var exibeMensagemLet = function () {
    var mensagemForaDoIfDois = "ECMAScript 6";
    if (mensagemForaDoIfDois == "ECMAScript 6") {
        let mensagemDentroDoIfDois = "JavaScript";
        console.log(`Dentro do IF: ${mensagemDentroDoIfDois}`); // JavaScript
    }
    // mensagemDentroDoIfDois não é mais acessível a partir deste ponto

    // apenas exemploVar existe nesse ponto
    console.log(`Fora do IF: ${mensagemForaDoIfDois}`); // ECMAScript    
}

exibeMensagemLet();

// const
/*  uma variável const não pode ser reatribuída porque é uma constante */
const entree = 'Enchiladas';
console.log(entree);

entree = 'Tacos'; // gerará uma exception: typeerror - assignment to constant variable.
