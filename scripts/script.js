$(document).ready(function(){
	$('#deal').on('click', function(){
		var cardP = $('<div class=\'cardsPlayer\'>A<p>SUIT</p></div>');
		var cardD = $('<div class=\'cardsDealer\'>A<p>SUIT</p></div>');
		$(this).closest('#table').find('#cardsbot').append(cardP);
		$(this).closest('#table').find('#cardstop').append(cardD);
		$(this).addClass('hidden');
		$(this).closest('#table').find('#pass').fadeIn();
		$(this).closest('#table').find('#hit').fadeIn();
	});

	$('#hit').on('click', function(){
		var newCard = $('<div class=\'cardsPlayer\'>A<p>SUIT</p></div>');
		$(this).closest('#table').find('#cardsbot').append(newCard);
	});

});


