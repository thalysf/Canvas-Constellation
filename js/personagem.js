function Personagem(context, teclado, cor, planetSprite)
{
    this.x = context.canvas.width/2 - 64; // personagem começa no meio da tela
    this.y = context.canvas.height/2 - 64;
    this.cor = cor;
    this.context = context;
    this.teclado = teclado;
    this.planetSprite = planetSprite;
}
Personagem.prototype = {
    atualizar: function()
    {
        if((teclado.pressionada(SETA_ESQUERDA) || teclado.pressionada(TECLA_A)) && this.x >= 1)
        {
            this.x -= 5;
        }
        if((teclado.pressionada(SETA_DIREITA) || teclado.pressionada(TECLA_D)) && this.x <= context.canvas.width - 128)
        {
            this.x += 5;
        }
        if((teclado.pressionada(SETA_SUPERIOR) || teclado.pressionada(TECLA_W)) && this.y >= 1)
        {
            this.y -= 5;
        }
        if((teclado.pressionada(SETA_INFERIOR) || teclado.pressionada(TECLA_S)) && this.y <= context.canvas.height - 128)
        {
            this.y += 5;
        }
    },
    desenhar: function()
    {
        this.context.drawImage(this.planetSprite, this.x, this.y, 128, 128);
    }
}