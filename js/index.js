$(document).ready(function () {
	function resize (evt) {
        $('.section').css('min-height', $(window).height() - 90);
    }
    
    function scroll (evt) {
        if ($(window).scrollTop() > 0) {
            if ($('.navbar').hasClass('navbar-at-top'))
                $('.navbar').removeClass('navbar-at-top');
        } else if (!$('.navbar').hasClass('navbar-at-top'))
            $('.navbar').addClass('navbar-at-top');
    };
    
    // setup callbacks
	$(window).resize(resize);
	$(window).scroll(scroll);
	resize();

	// dismiss navbar on link clicks
	$('.navbar li a').click(function () {
		$('.navbar-collapse').collapse('hide');
	});
});


