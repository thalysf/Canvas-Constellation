var rangeStar = document.getElementById("numEstrelas");
var rangeAsteroide = document.getElementById("numAsteroides");
var rangePlanetas = document.getElementById("numPlanetas");

var outputStar = document.getElementById("outputStar");
var outputAsteroide = document.getElementById("outputAsteroide");
var outputPlaneta = document.getElementById("outputPlaneta");

outputStar.textContent = rangeStar.value;
outputAsteroide.textContent = rangeAsteroide.value;
outputPlaneta.textContent = rangePlanetas.value;

rangeStar.oninput = function() {
    outputStar.textContent = this.value;
}
rangeAsteroide.oninput = function() {
    outputAsteroide.textContent = this.value;
}
rangePlanetas.oninput = function() {
    outputPlaneta.textContent = this.value;
}
var outputs = document.getElementsByClassName('output');
var i = 0;
for(i in outputs)
{
    if(i < 3)
        outputs[i].addEventListener("click", tornarConteudoEditavel);
    i++;
}

outputs[0].addEventListener("keydown", function(e)
{
    if(e.which == 13)
    {
        this.setAttribute("contenteditable", "false");
        this.classList.remove("tornarConteudoEditavel");
        if(Number(this.textContent) > 1000) this.textContent = 1000;
        rangeStar.value = Number(this.textContent);
    }
});

outputs[1].addEventListener("keydown", function(e)
{
    if(e.which == 13)
    {
        this.setAttribute("contenteditable", "false");
        this.classList.remove("tornarConteudoEditavel");
        if(Number(this.textContent) > 1000) this.textContent = 1000;
        rangeAsteroide.value = Number(this.textContent);
    }
});
outputs[2].addEventListener("keydown", function(e)
{
    if(e.which == 13)
    {
        this.setAttribute("contenteditable", "false");
        this.classList.remove("tornarConteudoEditavel");
        if(Number(this.textContent) > 1000) this.textContent = 1000;
        rangePlanetas.value = Number(this.textContent);
    }
});

function tornarConteudoEditavel()
{
    this.setAttribute("contenteditable", "true");
    this.classList.add("conteudo-editavel");
}

document.getElementById("btn-comeca").addEventListener("click", function()
{
    window.location.href = "constellation.html?" + rangeStar.value + "?" + rangeAsteroide.value + "?" + rangePlanetas.value;
});