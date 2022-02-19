//Buttons

const $button1 = document.querySelector("#button-1");
const $button2 = document.querySelector("#button-2");
const $button3 = document.querySelector("#button-3");
const $button4 = document.querySelector("#button-4");
const $button5 = document.querySelector("#button-5");
const $button6 = document.querySelector("#button-6");
const $button7 = document.querySelector("#button-7");
const $button8 = document.querySelector("#button-8");

const options = [1, 2, 3, 4, 5, 6, 7, 8]; //opciones para seleccionar
const computerSelection = []; //seleccion computadora
let counter = 0; //contador de partida
let selectedButton = 0;

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
		counter = counter + 1;
		document.querySelector(".counter").innerText = counter;
	}
}

runner(5);

//Toma los inputs del jugador y los guarda en un array

const playerSelection = [];

$button1.onclick = function () {
	playerSelection.push(1);
	console.log(playerSelection);
};
$button2.onclick = function () {
	playerSelection.push(2);
};
$button3.onclick = function () {
	playerSelection.push(3);
};
$button4.onclick = function () {
	playerSelection.push(4);
};
$button5.onclick = function () {
	playerSelection.push(5);
};
$button6.onclick = function () {
	playerSelection.push(6);
};
$button7.onclick = function () {
	playerSelection.push(7);
};
$button8.onclick = function () {
	playerSelection.push(8);
};

function playerTurn() {}
