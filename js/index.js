$(document).ready(function() {
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
	$('.section').css('min-height', $(window).height() - 80);
}

function scroll(evt) {
	console.log($(window).scrollTop());
	if($(window).scrollTop() > 0) {
		if($('.navbar').hasClass('navbar-at-top'))
			$('.navbar').removeClass('navbar-at-top');
	} else if(!$('.navbar').hasClass('navbar-at-top'))
		$('.navbar').addClass('navbar-at-top');
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
