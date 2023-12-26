let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let boxes = document.querySelectorAll('li');

let conditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

const ticTacToe = (element, index) => {
	element.innerText = currentPlayer;
	element.disabled = true;
	board[index] = currentPlayer;
	currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
	result.innerHTML = `Player ${currentPlayer} Turn`;

	for (let i = 0; i < conditions.length; i++) {
		let condition = conditions[i];
		let a = board[condition[0]];
		let b = board[condition[1]];
		let c = board[condition[2]];

		if (a == '' || b == '' || c == '') {
			continue;
		}

		if (a == b && b == c) {
			result.innerHTML = `Player ${a} Won 🎉`;
			boxes.forEach((box) => (box.disabled = true));
		}
	}
};

function reset() {
	board = ['', '', '', '', '', '', '', '', ''];
	boxes.forEach((box) => {
		box.innerText = '';
	});
	currentPlayer = 'X';
	result.innerHTML = `Player X Turn`;
	boxes.forEach((box) => (box.disabled = false));
}

document.querySelector('button').addEventListener('click', reset);

boxes.forEach((box, i) => {
	box.addEventListener('click', () => ticTacToe(box, i));
});
