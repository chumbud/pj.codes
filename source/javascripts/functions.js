$(document).ready(function() {
	$('.info').hover(function() {
		$(this).closest('.project-list-item').find('.thumbnail').addClass('hover');
	}, function() {
		$(this).closest('.project-list-item').find('.thumbnail').removeClass('hover');
	});

	$('.thumbnail .wrapper').hover(function() {
		$(this).closest('.project-list-item').find('.info').addClass('hover');
	}, function() {
		$(this).closest('.project-list-item').find('.info').removeClass('hover');
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