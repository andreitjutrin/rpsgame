$(document).ready(function(){

//Computer generated random choise************

function getComputerPlay() {
	var play = plays[Math.floor(Math.random() * plays.length)];
	return play;
	};
	
var plays = ['rock', 'paper', 'scissors'];
var computer = getComputerPlay();
/*********************************************/

//Buton selection functions*******************
function scissors(){
	var player = 'scissors';
	return compare(player);
	};

function rock() {
	var player = 'rock';
	return compare(player);
	};

function paper(){
	var player = 'paper';
	return compare(player);
};
/*********************************************/

//Making win/loss/tie choises****************
function compare(player){
	var bot = getComputerPlay();
	if (bot == player) {
  	rText = '<h3>Its a tie</h3>';
  	resultText(rText);
 	} else {
		if(bot == 'rock' && player == 'scissors') {
		botWins();
   	}	else if (bot == 'rock' && player == 'paper') {
   		playerWins();
   	}	else if (bot == 'paper' && player == 'rock') {
   		botWins();
   	}	else if (bot == 'paper' && player == 'scissors') {
   		playerWins();
   	}	else if (bot == 'scissors' && player == 'rock') {
   		playerWins();
   	}	else if (bot == 'scissors' && player == 'paper') {
   		botWins();
   	}
   			};
};
/*********************************************/
//Result functions****************************

totalBot = parseInt(0);
function botWins() {
	totalBot = totalBot + 1;
	$('#computerScore').html(totalBot);
	rText = '<h3>Bot Wins</h3>';
	resultText(rText);
};

totalPlayer = parseInt(0);
function playerWins() {
	totalPlayer = totalPlayer + 1;
	$('#humanScore').html(totalPlayer);
	rText = '<h3>Player Wins</h3>';
	resultText(rText);
};

function resultText(a) {
	$('#status').empty();
	$('#status').append(a);
};


/*********************************************/

//Call functions*******************************

$('#scissors').click(scissors);
$('#rock').click(rock);
$('#paper').click(paper);
/*********************************************/
}); 