// grande volume de texto, necessário quebrar linha
var textoUm = "Lorem Ipsum is simply dummy text of the printing\nand typesetting industry. Lorem Ipsum has been the industry's \nstandard dummy text ever since the 1500s, when an unknown printertook a galley\nof type and scrambled it to make a type specimen book.";

// grande volume de texto com template literals
var textoDois = `Lorem Ipsum is simply dummy text of the printing
and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printertook a galley
of type and scrambled it to make a type specimen book.`;

/*
* expressões
*/

var preco = 100;
var desconto = 0.10;

// interpolando expressões
var expreUm = "O valor com desconto é R$ " + (preco - (preco * desconto)) + " reais.";

// interpolando expressões com template literals
var expreDois = `O valor com desconto é R$ ${(preco - (preco * desconto))} reais`;