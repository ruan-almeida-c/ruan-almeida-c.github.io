window.onload = function() {
    const html = document.body.parentNode;

    //Necessário para poder acessar e alterar o tamanho da fonte
    html.style.fontSize = window.getComputedStyle(html).fontSize;
    
    const increase_font = document.getElementById("increase_font");
    const decrease_font = document.getElementById("decrease_font");
    

    //Aumenta a fonte em 1px
    function inc_font(){
        var atual = parseInt(html.style.fontSize);
        html.style.fontSize = (++atual).toString() + 'px';
    }

//Diminui em 1px
    function dec_font(){
        var atual = parseInt(html.style.fontSize);
        if(atual <= 25) return;
        html.style.fontSize = (--atual).toString() + 'px';
    }

    decrease_font.onclick = dec_font;
    increase_font.onclick = inc_font;
}