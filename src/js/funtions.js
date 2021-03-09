function voz(frase){
  var text = frase.value;
  var msg = new SpeechSynthesisUtterance(text);
  msg.lang = 'pt-BR';
  window.speechSynthesis.speak(msg);
}