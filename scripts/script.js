$(document).ready(function(){
	$('#deal').on('click', function(){
		deal();
		var D = getCard();
		var P = getCard();
		var cardPvalue = $('<div class=\'cardsPlayer\'>'+P.value+'</div>');
		var cardDvalue = $('<div class=\'cardsDealer\'>'+D.value+'</div>');
		var cardPsuit = $(""+P.suit+"");
		var cardDsuit = $(""+D.suit+"");

		$(this).closest('#table').find('#cardstop').append(cardDvalue);
		$(this).closest('#table').find('.cardsDealer').append(cardDsuit);
		$(this).closest('#table').find('#cardsbot').append(cardPvalue);
		$(this).closest('#table').find('.cardsPlayer').append(cardPsuit);

		$(this).addClass('hidden');
		$(this).closest('#table').find('#pass').fadeIn();
		$(this).closest('#table').find('#hit').fadeIn();
	});

	$('#hit').on('click', function(){
		var P = getCard();
		var newCardValue = $('<div class=\'cardsPlayer\'>'+P.value+'</div>');
		var newCardSuit = $(""+P.suit+"");
		$(this).closest('#table').find('#cardsbot').append(newCardValue);
		$(this).closest('#table').find('.cardsPlayer:last').append(newCardSuit);
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