//Buttons

const $button1 = document.querySelector("#button-1");
const $button2 = document.querySelector("#button-2");
const $button3 = document.querySelector("#button-3");
const $button4 = document.querySelector("#button-4");
const $button5 = document.querySelector("#button-5");
const $button6 = document.querySelector("#button-6");
const $button7 = document.querySelector("#button-7");
const $button8 = document.querySelector("#button-8");

//Value to each button

const buttonValues = {
	button1: 1,
	button2: 2,
	button3: 3,
	button4: 4,
	button5: 5,
	button6: 6,
	button7: 7,
	button8: 8,
};

const options = [1, 2, 3, 4, 5, 6, 7, 8];
const computerSelection = [];

function computerTurn() {
	function buttonSelection(array) {
		for (i = 0; i <= 4; i++) {
			const selectedValue = array[Math.floor(Math.random() * array.length)];
			computerSelection.push(selectedValue);
		}
	}

	buttonSelection(options);
	console.log(computerSelection);
}

computerTurn();
