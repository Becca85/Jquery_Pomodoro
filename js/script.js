
var temps = 25 ; 
var sec_in_min = 60; 
var minuteur_minute ; 
var minuteur_sec ;
var decrementer;
var replay;
var alarm = new Audio('SON/gong.mp3');
var nb_pause = 0;

function lancerMinuteur(){
	$('#play').attr("disabled",true);
	$('#pause').attr("disabled",false);
	$('#stop').attr("disabled",false);
	if (! minuteur_sec){ // si les seconde ne sont pas définies
		minuteur_minute = temps;
		minuteur_sec = 0;
		decrementer = setInterval(decrementSec, 1000);
		return decrementer;
	}
	else { //si elles le sont
		decrementer = setInterval(decrementSec, 1000);
		return decrementer;
	}
}

function Mise_a_jour_interface(){
	document.getElementById('time').innerHTML = minuteur_minute + ":" + minuteur_sec;
}

function decrementSec(){
	if (minuteur_sec ==0 && minuteur_minute != 0){
		minuteur_sec = 59;
		minuteur_minute -- ;
	}
	else {
		minuteur_sec --;
	}

	if (minuteur_sec == 0 && minuteur_minute == 0){
		alarm.play();
		alert ("PAUSE!");
		nb_pause ++;
		/* lance function pause() mais du coup ça fait plus dong :-( */

		if (nb_pause == 4){
			minuteur_minute = 20;
			minuteur_sec = 59;
			minuteur_minute --;
			minuteur_sec --;
		}
		else {
			minuteur_minute = 4;
			minuteur_sec = 59;
			minuteur_minute --;
			minuteur_sec --;
		}
	}
	
	Mise_a_jour_interface();

}

function myPauseFunction() {
	replay = clearInterval(decrementer);
	$('#play').attr("disabled",false);
	$('#pause').attr("disabled",true);
	$('#stop').attr("disabled",false);
}

function remiseZero() {
	$('#play').attr("disabled",false);
	$('#pause').attr("disabled",false);
	$('#stop').attr("disabled",true);
	clearInterval(decrementer);
	minuteur_minute = temps;
	minuteur_sec = 0;
	document.getElementById('time').innerHTML = "25" + ":" + "00";
}



$('#fait').click(function effectuer(){
	$('.list-group').prepend("<li class='list-group-item'><s>" + $('#task').val() + "</s></li>");
	$('#task').val("");
});