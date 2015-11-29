$(document).ready(function(){
	$('#deal').on('click', function(){
		deal();
		var D = getCard();
		var P = getCard();
		var cardPvalue = $('<div class=\'cardsPlayer\'>'+P.value+'</div>');
		var cardDvalue = $('<div class=\'cardsDealer\'>'+D.value+'</div>');
		var cardPsuit = $('<p>'+P.suit+'</p>');
		var cardDsuit = $('<p>'+D.suit+'</p>');

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
		var newCard = $('<div class=\'cardsPlayer\'>'+P.value+'<p>'+P.suit+'</p></div>');
		$(this).closest('#table').find('#cardsbot').append(newCard);
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
		deck[k] = new Card(i,'spade',false);
	for (var i = 2; i<15; i++, k++)
		deck[k] = new Card(i,'heart',false);
	for (var i = 2; i<15; i++, k++)
		deck[k] = new Card(i,'diamond',false);
	for (var i = 2; i<15; i++, k++)
		deck[k] = new Card(i,'club',false);

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