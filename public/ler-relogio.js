var minuto = -1;

function voz(){
    now = new Date;
    //var voices = window.speechSynthesis.getVoices();
    var msg = new SpeechSynthesisUtterance(now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
    msg.lang = 'pt-BR';
    //msg.voice = voices[2];
    msg.pitch = 1;

    window.speechSynthesis.speak(msg);

 }

function attHour(){
    now = new Date; 
    if(minuto === -1)
    {
        p = document.getElementById("buttonRelogio");

        p.innerHTML = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        voz();
        minuto = now.getMinutes();
    }
    else if(minuto != now.getMinutes())
    {
        if(now.getMinutes() >= 0 && now.getMinutes() <= 9)
        {
            p = document.getElementById("buttonRelogio");

            p.innerHTML = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
            voz();
            minuto = now.getMinutes();
        }
        else
        {
            p = document.getElementById("buttonRelogio");

            p.innerHTML = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
            voz();
            minuto = now.getMinutes();
        }
        
    }

    p = document.getElementById("buttonData");
    var mes = now.getMonth() + 1;

    p.innerHTML = now.getDate() + "/" + mes + "/" + now.getFullYear();
}

setInterval(attHour,1000);