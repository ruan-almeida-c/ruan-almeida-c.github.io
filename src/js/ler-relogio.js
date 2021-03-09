var minuto = 0;

function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

function voz(){
    now = new Date;
    //var voices = window.speechSynthesis.getVoices();
    var msg = new SpeechSynthesisUtterance(now.getHours() + ":" + now.getMinutes());
    msg.lang = 'pt-BR';
    //msg.voice = voices[2];
    msg.pitch = 1;

    window.speechSynthesis.speak(msg);

 }

 setInterval(function attHour(){
    now = new Date; 
    if(minuto === 0)
    {
        p = document.getElementById("buttonRelogio");
        h = addZero(now.getHours());
        m = addZero(now.getMinutes());
        s = addZero(now.getSeconds());
        p.innerHTML = h + ":" + m + ":" + s;
        voz();
        minuto = now.getMinutes();
    }
    else if(minuto != now.getMinutes())
    {
        p = document.getElementById("buttonRelogio");

        h = addZero(now.getHours());
        m = addZero(now.getMinutes());
        s = addZero(now.getSeconds(now.getSeconds() + 1));
        p.innerHTML = h + ":" + m + ":" + s;

        voz();
        minuto = now.getMinutes();
    }

    p = document.getElementById("buttonData");
    var mes = addZero(now.getMonth() + 1);

    d = addZero(now.getDate());
    y = now.getFullYear();
    p.innerHTML = d + "/" + mes + "/" + y;
},1000)

// setInterval(attHour,600);

