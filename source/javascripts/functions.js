$(document).ready(function() {
	$('.info a').hover(function() {
		$(this).closest('.project-list-item').find('.thumbnail a').addClass('hover');
	}, function() {
		$(this).closest('.project-list-item').find('.thumbnail a').removeClass('hover');
	});

	$('.thumbnail a').hover(function() {
		$(this).closest('.project-list-item').find('.info a').addClass('hover');
	}, function() {
		$(this).closest('.project-list-item').find('.info a').removeClass('hover');
	});

	$('.read-more').on('click', function(e) {
		e.preventDefault();
		if($('.read-more-section').hasClass('open')) {
			$('.read-more').text('read more');
		} else {
			$(this).text('actually, pls stop');
		}

		$('.read-more-section').toggleClass('open');
	});

	var nav = $(".nav");
	var nav_height = $('.nav').height() + $('.home').height() + 80;

	$(window).scroll(function() {
		if ($(this).scrollTop() > nav_height) {
			nav.addClass('fixed');
		} else {
			nav.removeClass('fixed');
		}
	});
});