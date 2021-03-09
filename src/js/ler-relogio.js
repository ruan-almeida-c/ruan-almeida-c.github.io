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
    

// function attHour(){
//     now = new Date; 
//     if(minuto === 0)
//     {
//         p = document.getElementById("buttonRelogio");
//         h = addZero(now.getHours());
//         m = addZero(now.getMinutes());
//         p.innerHTML = h + ":" + m + ":" + now.getSeconds(now.getSeconds() + 1);
//         voz();
//         minuto = now.getMinutes();
//     }
//     else if(minuto != now.getMinutes())
//     {
//         p = document.getElementById("buttonRelogio");

//         h = addZero(now.getHours());
//         m = addZero(now.getMinutes());
//         p.innerHTML = h + ":" + m + ":" + now.getSeconds(now.getSeconds() + 1);

//         voz();
//         minuto = now.getMinutes();
//     }

//     p = document.getElementById("buttonData");
//     var mes = addZero(now.getMonth() + 1);

//     d = addZero(now.getDate());
//     y = now.getFullYear();
//     p.innerHTML = d + "/" + mes + "/" + y;
// }
// setInterval(attHour, 1000);