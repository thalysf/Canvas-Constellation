var url = window.location.href; // pegando url da pagina
var result = url.split("?"); // separando a url pelo carectere "?"
result.shift(); // removendo a url original e deixando apenas os parâmetros

var ESTRELAS = Number(result[0]);
var ASTEROIDES = Number(result[1]);
var PLANETAS = Number(result[2]);

const context = document.getElementById("myCanvas").getContext('2d');
const planetSprit = document.getElementById("planetSprite");
context.canvas.width = window.innerWidth - 8;
context.canvas.height = window.innerHeight - 8;
const teclado = new Teclado(document);
const personagem = new Personagem(context, teclado, '#6247aa', planetSprit);
const animacao = new Animacao(context, ESTRELAS, ASTEROIDES, PLANETAS);
animacao.novoSprite(personagem);

animacao.ligar();