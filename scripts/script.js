$(document).ready(function(){
	$('#deal').on('click', function(){
		deal();
		var dealerCard1 = getCard();
		var playerCard1 = getCard();
		var playerCard1Value = $('<div class=\'cardsPlayer\'>'+playerCard1.value+'</div>');
		var dealerCard1Value = $('<div class=\'cardsDealer\'>'+dealerCard1.value+'</div>');
		var playerCard1Suit = $(""+playerCard1.suit+"");
		var dealerCard1Suit = $(""+dealerCard1.suit+"");

		$(this).closest('#table').find('#cardstop').append(dealerCard1Value);
		$(this).closest('#table').find('.cardsDealer').append(dealerCard1Suit);
		$(this).closest('#table').find('#cardsbot').append(playerCard1Value);
		$(this).closest('#table').find('.cardsPlayer').append(playerCard1Suit);

		$(this).addClass('hidden');
		$(this).closest('#table').find('#pass').fadeIn();
		$(this).closest('#table').find('#hit').fadeIn();
	});

	$('#hit').on('click', function(){
		var playerCard2 = getCard();
		var playerCard2Value = $('<div class=\'cardsPlayer\'>'+playerCard2.value+'</div>');
		var playerCard2Suit = $(""+playerCard2.suit+"");
		$(this).closest('#table').find('#cardsbot').append(playerCard2Value);
		$(this).closest('#table').find('.cardsPlayer:last').append(playerCard2Suit);
	});

});

var Card = function(value, suit, isDrawn){
	this.value = value;
	this.suit = suit;
	this.isDrawn = isDrawn;
}

var deck = [];
var deal = function () {
	var k = 0;
	for (var i = 2; i<15; i++, k++)
		deck[k] = new Card(i, "<img src=images/club.png></img>",false);
	for (var i = 2; i<15; i++, k++)
		deck[k] = new Card(i,"<img src=images/heart.png></img>",false);
	for (var i = 2; i<15; i++, k++)
		deck[k] = new Card(i,"<img src=images/spade.png></img>",false);
	for (var i = 2; i<15; i++, k++)
		deck[k] = new Card(i,"<img src=images/diamond.png></img>",false);

	for(var i = 0; i < deck.length; i++){
		var x = deck[i];
		if(x.value == 10) x.value ='T';
		if(x.value == 11) x.value ='J';
		if(x.value == 12) x.value ='Q';
		if(x.value == 13) x.value ='K';
		if(x.value == 14) x.value ='A';
	}
};

var getCard = function(){
	var x = Math.floor(Math.random() * 52);
	for(;;){
		var z = deck[x];
		if (z.isDrawn == false){
			z.isDrawn = true; return deck[x];
		}
		else {
			x++; if(x==51) {x = 0;}
		}
	}
};