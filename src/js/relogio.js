const options = {
	timeZone: 'America/Sao_Paulo',
	hour: 'numeric',
	minute: 'numeric'
};
function newDate (){
  const date = new Intl.DateTimeFormat([], options);
  return(date.format(new Date()));

}