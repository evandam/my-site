$(document).ready(function() {
	// $(window).resize(resize);
	// resize();

	// generate lorem ipsum dummy text
	$('.ipsum').each(function() {
		lorem_ipsum(this, $(this).attr('ipsum-paras'));
	});

	// autoRefresh(5000);
});

function resize() {
	$('main > div').css('min-height',
		$(window).height() - $('.navbar').height()
	);
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