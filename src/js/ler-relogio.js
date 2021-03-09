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

 var clock = document.getElementById('buttonRelogio');
    

setInterval(function () {
    clock.innerHTML = ((new Date).toLocaleString().substr(11, 8));  
}, 1000);
    

