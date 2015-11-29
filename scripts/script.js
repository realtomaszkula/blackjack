var dealerScore = 0;
var playerScore = 0;
var playerAltScore = 0;
var gameover = false;

$(document).ready(function(){
	$('#deal').on('click', function(){
		deal();

		var dealerCard1 = getCard();
		var dealerCard2 = getCard();
		var playerCard1 = getCard();

		var playerCard1Icon = $('<div class=\'cardsPlayer\'>'+playerCard1.icon+'</div>');
		var dealerCard1Icon = $('<div class=\'cardsDealer\'>'+dealerCard1.icon+'</div>');
		var dealerCard2Icon = $('<div class=\'cardsDealer\'>'+dealerCard2.icon+'</div>');

		var fakeCard = $('<div class="deckDealer" id="red">CARD</div>');
		$(this).closest('#table').find('#cardstop').append(fakeCard);

		$(this).closest('#table').find('#cardstop').append(dealerCard1Icon);
		$(this).closest('#table').find('.cardsDealer').append(dealerCard1.suit).hide();

		$(this).closest('#table').find('#cardstop').append(dealerCard2Icon);
		$(this).closest('#table').find('.cardsDealer:last').append(dealerCard2.suit);

		$(this).closest('#table').find('#cardsbot').append(playerCard1Icon);
		$(this).closest('#table').find('.cardsPlayer').append(playerCard1.suit);


		$(this).addClass('hidden');
		$(this).closest('#table').find('#pass').fadeIn();
		$(this).closest('#table').find('#hit').fadeIn();
		$(this).closest('#table').find('#newgame').fadeIn();

		blackjackPlayer(playerCard1.value);
		blackjackDealer(dealerCard2.value);
		blackjackDealer(dealerCard1.value);

	});

	$('#hit').on('click', function(){
		var playerCard2 = getCard();
		var playerCard2Icon = $('<div class=\'cardsPlayer\'>'+playerCard2.icon+'</div>');
		$(this).closest('#table').find('#cardsbot').append(playerCard2Icon);
		$(this).closest('#table').find('.cardsPlayer:last').append(playerCard2.suit);
		blackjackPlayer(playerCard2.value);
	});
		
	$('#pass').on('click', function(){
		$(this).closest('#table').find('.cardsDealer').show();
		$(this).closest('#table').find('#red').hide();

		if(dealerScore < 17){
			var dealerCard3 = getCard();
			var dealerCard3Icon = $('<div class=\'cardsDealer\'>'+dealerCard3.icon+'</div>');
			$(this).closest('#table').find('#cardstop').append(dealerCard3Icon);
			$(this).closest('#table').find('.cardsDealer:last').append(dealerCard3.suit);
			blackjackDealer(dealerCard3.value);
			if(gameover !== true){
				if(playerScore == dealerScore) chop();
				else if(playerScore > dealerScore) winner("Player");
				else winner("Dealer");
			}

		} else{
			if(playerScore == dealerScore) chop();
			else if(playerScore > dealerScore) winner("Player");
			else winner("Dealer");
		}
	});


});

var Card = function(icon, suit, isDrawn,value){
	this.icon = icon;
	this.suit = suit;
	this.isDrawn = isDrawn;
	this.value = value;
};

var deck = [];
var deal = function () {
	var k = 0;
	for (var i = 2; i<15; i++, k++) 
		deck[k] = new Card(i, $("<img src=images/club.png></img>"),false,i);
	for (var i = 2; i<15; i++, k++)
		deck[k] = new Card(i,$("<img src=images/heart.png></img>"),false,i);
	for (var i = 2; i<15; i++, k++)
		deck[k] = new Card(i,$("<img src=images/spade.png></img>"),false,i);
	for (var i = 2; i<15; i++, k++)
		deck[k] = new Card(i,$("<img src=images/diamond.png></img>"),false,i);

	for(var i = 0; i < deck.length; i++){
		var x = deck[i];
		if(x.icon == 10) x.icon ='T';
		if(x.icon == 11) x.icon ='J';
		if(x.icon == 12) x.icon ='Q';
		if(x.icon == 13) x.icon ='K';
		if(x.icon == 14) x.icon ='A';
	}
		for(var i = 0; i < deck.length; i++){
		var x = deck[i];
		if(x.value == 11) x.value = 10;
		if(x.value == 12) x.value = 10;
		if(x.value == 13) x.value = 10;
		if(x.value == 14) x.value = 11;
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


var winner = function(winner) {
	alert(winner+" wins!");
	$('#playerbuttons').find('#hit').fadeOut();
	$('#playerbuttons').find('#pass').fadeOut();
	gameover = true;
};

var chop = function() {
	alert("Draw!");
};


var blackjackPlayer= function (value){
	playerScore += value;
	if (value == 11 ) playerAltScore += value - 10;
	else playerAltScore += value;

	if(playerScore > 21 && playerAltScore > 21) winner("Dealer"); 
	console.log("d:"+dealerScore);
	console.log(" p:"+playerScore);
	console.log(" palt:"+playerAltScore);
} 

var blackjackDealer = function (value){
	dealerScore += value;
	if(dealerScore>21) winner("Player");
	console.log("d:"+dealerScore);
	console.log(" p:"+playerScore);
	console.log(" palt:"+playerAltScore);
} 

