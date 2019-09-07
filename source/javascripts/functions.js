$(document).ready(function() {
	$('.info').hover(function() {
		$(this).closest('.project-list-item').find('.thumbnail, .faux-link').addClass('hover');
	}, function() {
		$(this).closest('.project-list-item').find('.thumbnail, .faux-link').removeClass('hover');
	});

	$('.thumbnail .wrapper').hover(function() {
		$(this).closest('.project-list-item').find('.info, .faux-link').addClass('hover');
	}, function() {
		$(this).closest('.project-list-item').find('.info, .faux-link').removeClass('hover');
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
	var nav_height = $('.nav').height() + 80;

	$(window).scroll(function() {
		if ($(this).scrollTop() > nav_height) {
			nav.addClass('fixed');
		} else {
			nav.removeClass('fixed');
		}
	});
});

function copy(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).text()).select();
	document.execCommand("copy");
	$temp.remove();
	$('#copy').addClass('copied');
}

function remove(element) {
	setTimeout(function() {
		$(element).removeClass('copied');
	}, 300);
}