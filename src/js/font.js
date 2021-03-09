function fonte(e){
	var elemento = document.body.parentNode;
  elemento.style.fontSize = window.getComputedStyle(elemento).fontSize;

	var fonte = parseInt(elemento.style.fontSize);

	if (e == 'a') {
		fonte++;
	}
	if (e == 'd'){
		fonte--;
	}
	if (e == 'n'){
		fonte = fonteNormal;
	}

	elemento.style.fontSize = fonte.toString() + 'px';
}