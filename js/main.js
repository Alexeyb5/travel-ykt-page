$('.open-popup').click(function(e) {
	e.preventDefault();
	$('.popup-bg').fadeIn(600);
	$('html').addClass('no-scroll');
});

$('.pop_up_close').click(function(e) {
	e.preventDefault();
	$('.popup-bg').fadeOut(600);
	$('html').Class('no-scroll');
});

$('.popup-bg').click(function (e) {
	if (!$(e.target).closest(".popup").length) {
	  $('.popup-bg').fadeOut(600);
	}
  });

$(document).ready(function() {
	$('.header_burger').click(function(event) {
		$('.header_burger, .menu').toggleClass('active');
	});
});
  