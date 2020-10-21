function Astro(context, x, y, color = "empty", tipo, img = "empty")
{
    this.context = context;
    this.x = x;
    this.y = y;
    this.color = color;
    this.originX = x;
    this.originY = y;
    this.tipo = tipo;
    this.img = img;
}
Astro.prototype = {
    atualizar: function(posPersonagemX, posPersonagemY)
    {
        const direcao = this.proximidade(posPersonagemX, posPersonagemY);
        const velocidade = this.tipo != "estrela"? 6: 5;
        switch (direcao){
            case "Esquerda":
                    if(this.x >= 10)
                    {
                        this.color = "#be0303";
                        this.x -= velocidade;
                    }
                    break;
            case "Direita":
                    if(this.x <= this.context.canvas.width -10)
                    {
                        this.color = "#be0303";
                        this.x += velocidade;
                    }
                    break;
            case "Acima":
                    if(this.y >= 10)
                    {
                        this.color = "#be0303";
                        this.y -= velocidade;
                    }
                    break;
            case "Abaixo":
                    if(this.y <= this.context.canvas.height - 10)
                    {
                        this.color = "#be0303";
                        this.y += velocidade;
                    }
                    break;
            default:
                   this.retornarOrigem();
        }
    },
    desenhar: function(tipo){
      if(tipo == "estrela")
      {
        this.context.save();
      
        // Cria estrela
        this.context.translate(this.x, this.y);
  
        var escala = Math.random()*1.2;
        this.context.scale(escala, escala);
  
        var raioMax = 12;
        var raioMin = 6;
  
        this.context.beginPath();
        this.context.rotate(Math.random());
        this.context.moveTo(raioMax, 0);
  
        for(var i = 0; i < 10; i++)
        {
           this.context.rotate(Math.PI/5);
           if((i % 2) == 0)
           {
              this.context.lineTo(raioMin, 0)
           }
           else
           {
              this.context.lineTo(raioMax, 0)
           }
        }
        
        this.context.closePath();
        this.context.fillStyle = this.color;
        this.context.fill();
        this.context.restore();
      }
      else{
        if(tipo == "asteroide")
        {
            // Desenha asteroide
            this.context.drawImage(this.img, this.x, this.y, 42, 42);
        }
        else
        {
            // Desenha planeta
            this.context.drawImage(this.img, this.x, this.y, 64, 64);
        }
      }
    },
    proximidade: function(playerX, playerY)
    {
        var LEFT_OUT = 20;
        var LEFT_IN = -60;
        var DIR_OUT = -140;
        var DIR_IN = -70;
        var BOTTOM_OUT = -140;
        var BOTTOM_IN = -50;
        var TOP_OUT  = 30;
        var TOP_IN = -70;
        if(this.tipo == "asteroide")
        {
            LEFT_OUT = 70;
            LEFT_IN = -50;
            DIR_OUT = -160;
            DIR_IN = -50;
            BOTTOM_OUT = -160;
            BOTTOM_IN = -50;
            TOP_OUT  = 100;
            TOP_IN = -50;
        }
        else
        {
            LEFT_OUT = 100;
            LEFT_IN = -40;
            DIR_OUT = -160;
            DIR_IN = -50;
            BOTTOM_OUT = -160;
            BOTTOM_IN = 0;
            TOP_OUT = 100;
            TOP_IN = -80;
        }
        // Posição dos astros em relação ao jogador
        if((playerX - this.x >= DIR_OUT && playerX - this.x <= DIR_IN) && (playerY - this.y >= -120 && playerY - this.y <= -10))
        {
            return "Direita";
        }
        if((playerX - this.x <= LEFT_OUT && playerX - this.x >= LEFT_IN) && (playerY - this.y >= -120 && playerY - this.y <= -10))
        {
            return "Esquerda";
        }
        if((playerY - this.y >= BOTTOM_OUT && playerY - this.y <= BOTTOM_IN) && ((playerX - this.x >= -120 && playerX - this.x <= -10)))
        {
            return "Abaixo";
        }
        if((playerY - this.y <= TOP_OUT && playerY - this.y >= TOP_IN) && ((playerX - this.x >= -160 && playerX - this.x <= 90)))
        {
            return "Acima";
        }
        return "Permanece";
    },
    retornarOrigem: function(velocidadeRetorno)
    {
        this.color = "#FFF";
        if(this.x != this.originX || this.y && this.originY)
        {
           var distanciaX = this.x - this.originX;
           var distanciaY = this.y - this.originY;
          if(distanciaY > 0) this.y -= 5;
          if(distanciaY < 0) this.y += 5;
          if(distanciaX > 0) this.x -= 5;
          if(distanciaX < 0) this.x += 5;
        }
    }
}