function Animacao(context, numEstrelas, numAsteroides, numPlanetas)
{
    this.context = context;
    this.astros = [];
    this.ligado = false;
    this.nStars = numEstrelas;
    this.nAsteroides = numAsteroides;
    this.nPlanetas = numPlanetas;
}
Animacao.prototype = {
    novoSprite: function(personagem){
        this.personagem = personagem;
    },
    novoAstro: function(astro)
    {
        this.astros.push(astro);
    },
    proxFrame: function(){
        if(!this.ligado) return;
        // Limpa Canvas ...
        this.limparTela();
        
        // Atualizar posição do personagem ...
        this.personagem.atualizar();
        
        // Desenhar personagens ...
        this.personagem.desenhar();
        
        // Atualizar posição dos astros ...
        for(let i in this.astros)
        {
            this.astros[i].atualizar(this.personagem.x, this.personagem.y);
        }
        // Desenhando astros ...
        for(let i in this.astros)
        {
            this.astros[i].desenhar(this.astros[i].tipo);
        }

        var self = this;
        requestAnimationFrame(function()
        {
            self.proxFrame();
        });
    },
    gerarAstros: function(qtdStars, qtdAsteroides, qtdPlanets)
    {
        var randomX = 0;
        var randomY = 0;
        var asteroideImgTeste = document.getElementsByClassName('asteroide')[0];
        var planetaImgTeste = document.getElementsByClassName('planeta')[2];
        var ctx = this.context;
        // Gerando estrelas ... 
        for(let i = 0; i < qtdStars; i++)
        {
            randomX = randomNumbers(10, this.context.canvas.width - 10);
            randomY = randomNumbers(10, this.context.canvas.height - 10);
            this.novoAstro(new Astro(ctx, randomX, randomY, "#FFF", "estrela"));
        }
        // Gerando asteróides ...
        for(let i = 0; i < qtdAsteroides; i++)
        {
            randomX = randomNumbers(10, this.context.canvas.width - 10);
            randomY = randomNumbers(10, this.context.canvas.height - 10);
            this.novoAstro(new Astro(ctx, randomX, randomY, "", "asteroide", asteroideImgTeste));
        }
        // Gerando planetas ... 
        for(let i = 0; i < qtdPlanets; i++)
        {
            randomX = randomNumbers(10, this.context.canvas.width - 10);
            randomY = randomNumbers(10, this.context.canvas.height - 10);
            this.novoAstro(new Astro(ctx, randomX, randomY, "", "planeta", planetaImgTeste));
        }
    },
    limparTela: function()
    {
        let ctx = this.context;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    },
    ligar: function()
    {
        this.ligado = true;
        this.gerarAstros(this.nStars, this.nAsteroides, this.nPlanetas);
        this.proxFrame();
    },
    desligar: function()
    {
        this.ligado = false;
    }
}