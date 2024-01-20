// deck w/o aces 
let deck = [
	2, 2, 2, 2, 
	3, 3, 3, 3, 
	4, 4, 4, 4,
	5, 5, 5, 5, 
	6, 6, 6, 6,
	7, 7, 7, 7, 
	8, 8, 8, 8,
	9, 9, 9, 9,
	10, 10, 10, 10,
	11, 11, 11, 11,
	11, 11, 11, 11,
	11, 11, 11, 11
];

// Fisher-Yates shuffle
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

// dealer cards assign and counted
function dealerTwoCards() {
	// assign cards, d - dealer
	let dFirstCard = document.getElementById('d-first-card');
	let dSecondCard = document.getElementById('d-second-card');
	let card1 = deck.pop();
	let card2 = deck.pop();
	let dTotalHTML = document.getElementById('d-total');
	let dTotalJS = 0;

	dFirstCard.textContent = card1;
	dSecondCard.textContent = card2;

	// total
	dTotalHTML.textContent = card1 + card2;
	dTotalJS = card1 + card2;
	return dTotalJS;
}

// player cards assigned and counted
function playerTwoCards() {
	// assign cards, p - player
	let pFirstCard = document.getElementById('p-first-card');
	let pSecondCard = document.getElementById('p-second-card');
	let card1 = deck.pop();
	let card2 = deck.pop();
	let pTotalHTML = document.getElementById('p-total');
	let pTotalJS = 0;

	pFirstCard.textContent = card1;
	pSecondCard.textContent = card2;

	// total
	pTotalHTML.textContent = card1 + card2;
	pTotalJS = card1 + card2;
	return pTotalJS;
}

function totalCompare(dealer, player) {
	let outcome = document.getElementById('outcome');

	if (dealer > player) {
		outcome.textContent = "You lost";
	} else if (dealer < player) {
		outcome.textContent = "You won";
	} else {
		outcome.textContent = "It's a draw";
	} 
}

function play() {
	shuffle(deck);
	dealerTwoCards();
	playerTwoCards();
	totalCompare(dealerTwoCards(), playerTwoCards());
}

 

