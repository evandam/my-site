var navHeight, navScrollPos;

$(document).ready(function() {
	// set vars used in callback functions to avoid recalcing
	navScrollPos = $('.section:first').position().top;
	navHeight = $('.navbar').height();
	// setup callbacks
	$(window).resize(resize);
	$(window).scroll(scroll);
	resize();

	// dismiss navbar on link clicks
	$('.navbar li a').click(function() {
		$('.navbar-collapse').collapse('hide');
	});


	// generate dummy text
	$('.ipsum').each(function() {
		lorem_ipsum(this, $(this).attr('ipsum-paras'));
	});

	// autoRefresh(5000);
});

function resize(evt) {
	$('.section').css('min-height',
		$(window).height() 
		- navHeight * 2
	);
}

function scroll(evt) {
	console.log(evt);
	if($(window).scrollTop() > navScrollPos) {
		if($('.navbar').hasClass('navbar-top'))
			$('.navbar').removeClass('navbar-top').addClass('navbar-fixed-top');
	} else if($('.navbar').hasClass('navbar-fixed-top'))
		$('.navbar').removeClass('navbar-fixed-top').addClass('navbar-top');
}

function autoRefresh(interval) {
	setTimeout(function() {
		location.reload();
	}, interval);
}

function lorem_ipsum(el, paras) {
	var url = 'http://baconipsum.com/api/?type=meat-and-filler';
	if(paras)
		url += '&paras=' + paras;
	
	$.get(url, function(data) {
		$(el).html('');
		for(var i = 0; i < data.length; i++)
			$(el).append('<p>' + data[i] + '</p>');
	});
}