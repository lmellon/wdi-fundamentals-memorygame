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
	if (cardsInPlay.length ===2);
	if (cardsInPlay [0] === cardsInPlay [1]) {
	alert("You found a match!");
	} else {
	alert("Sorry, try again.")
}
};

//create function to flip cards
var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	}; 

flipCard(0);
flipCard(2);