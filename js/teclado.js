// Teclas que serão monitoradas
var SETA_SUPERIOR = 38;
var SETA_INFERIOR = 40;
var SETA_DIREITA = 39;
var SETA_ESQUERDA = 37;
var TECLA_A = 65;
var TECLA_D = 68;
var TECLA_S = 83;
var TECLA_W = 87;

function Teclado(local)
{
    this.local = local;
    this.teclasPressionadas = [];

    const teclado = this;

    local.addEventListener("keydown", function(e){
        const tecla = e.keyCode;
        teclado.teclasPressionadas[tecla] = true;
    });
    local.addEventListener('keyup', function(evento) {
        var tecla = evento.keyCode;
        teclado.teclasPressionadas[tecla] = false;
    });
}
Teclado.prototype = {
    pressionada: function(tecla)
    {
        return this.teclasPressionadas[tecla];
    }
}