//Buttons

//Empezas a jugar
const $buttonStart = document.querySelector(".button-start");

const $button1 = document.querySelector("#button-1");
const $button2 = document.querySelector("#button-2");
const $button3 = document.querySelector("#button-3");
const $button4 = document.querySelector("#button-4");
const $button5 = document.querySelector("#button-5");
const $button6 = document.querySelector("#button-6");
const $button7 = document.querySelector("#button-7");
const $button8 = document.querySelector("#button-8");
const $counterUser = document.querySelector(".counterusuario");
const $counterComputer = document.querySelector(".countercomputer");

const options = [1, 2, 3, 4, 5, 6, 7, 8]; //opciones para seleccionar
let computerSelection = []; //seleccion computadora
let playerSelection = [];
let selectedButton = 0;
let round = 0;
let counterUser = 0;
let counterComputer = 0;
let dificultyLevel = 2;
let playingTime = 5000;

//seleccion de botones por parte de la computadora
function buttonSelection(options) {
	const selectedValue = options[Math.floor(Math.random() * options.length)];
	computerSelection.push(selectedValue);
	document.querySelector(`#button-${selectedValue}`).classList.add("glow");
	console.log(computerSelection);
	selectedButton = document.querySelector(`#button-${selectedValue}`);
}
function clearBorder(selectedButton) {
	selectedButton.classList.remove("glow");
}
function runner(repeats) {
	if (repeats > 0) {
		buttonSelection(options);
		let prevButton = selectedButton;
		setTimeout(() => clearBorder(prevButton), 1000);
		setTimeout(() => runner(repeats - 1), 1000);
	}
}

//Start Game

$buttonStart.onclick = function () {
	round = round + 1;
	document.querySelector(".round").innerText = `Round Number: ${round}`;
	computerSelection = []; //reset computer selection
	playerSelection = []; //resets player selection
	runner(dificultyLevel);
	dificultyLevel = dificultyLevel + 1;

	setTimeout(() => {
		if (JSON.stringify(computerSelection) === JSON.stringify(playerSelection)) {
			counterUser = counterUser + 1;
			$counterUser.innerText = `User Score: ${counterUser}`;
		} else {
			counterComputer = counterComputer + 1;
			$counterComputer.innerText = `Computer Score: ${counterComputer}`;
		}
		console.log(computerSelection, playerSelection);
	}, playingTime);
	playingTime = playingTime + 2000;
};
//Toma los inputs del jugador y los guarda en un array

$button1.onclick = function () {
	playerSelection.push(1);
	console.log(playerSelection);
	$button1.classList.add("animation");
	setTimeout(() => {
		$button1.classList.remove("animation");
	}, 1000);
};
$button2.onclick = function () {
	playerSelection.push(2);
	$button2.classList.add("animation");
	setTimeout(() => {
		$button2.classList.remove("animation");
	}, 1000);
};
$button3.onclick = function () {
	playerSelection.push(3);
	$button3.classList.add("animation");
	setTimeout(() => {
		$button3.classList.remove("animation");
	}, 1000);
};
$button4.onclick = function () {
	playerSelection.push(4);
	$button4.classList.add("animation");
	setTimeout(() => {
		$button4.classList.remove("animation");
	}, 1000);
};
$button5.onclick = function () {
	playerSelection.push(5);
	$button5.classList.add("animation");
	setTimeout(() => {
		$button5.classList.remove("animation");
	}, 1000);
};
$button6.onclick = function () {
	playerSelection.push(6);
	$button6.classList.add("animation");
	setTimeout(() => {
		$button6.classList.remove("animation");
	}, 1000);
};
$button7.onclick = function () {
	playerSelection.push(7);
	$button7.classList.add("animation");
	setTimeout(() => {
		$button7.classList.remove("animation");
	}, 1000);
};
$button8.onclick = function () {
	playerSelection.push(8);
	$button8.classList.add("animation");
	setTimeout(() => {
		$button8.classList.remove("animation");
	}, 1000);
};
