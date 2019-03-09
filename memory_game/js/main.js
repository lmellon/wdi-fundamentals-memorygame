//create array with objects for each card
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

//create array for the cards that were selected
var cardsInPlay = [];

//create function to check for a match
var checkForMatch = function(){
	if (cardsInPlay [0] === cardsInPlay [1]) {
	alert("You found a match!");
	} else {
	alert("Sorry, try again.")
	}
};

//create function to flip cards
var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);

	// console.log("User flipped " + cards[cardId].rank);
	// console.log(cards[cardId].cardImage);
	// console.log(cards[cardId].suit)
	
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length ===2); {
		checkForMatch();
	}
}; 


//create function createBoard with no parameters
var createBoard = function() {
for (var i = 0; i < cards.length; i++) {	
	var cardElement = document.createElement("img");
	cardElement.setAttribute('src', 'images/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();
