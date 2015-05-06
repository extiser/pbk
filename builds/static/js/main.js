jQuery(document).ready(function($) {
	$('.ie8 .clients-list__item:nth-child(5)').css('margin-left', '205px');
});

$(window).scroll(function(event) {
	var scrollTop = $(document).scrollTop();
	if (scrollTop > 10) {
		$('#header').addClass('fixed');
	} else {
		$('#header').removeClass('fixed');
	}
});
jQuery(document).ready(function($) {
	$('.ie8 .header-menu__item:nth-child(3)').css('margin-right', '160px');
	$('.ie8 .header-menu__item:nth-child(4)').css('margin-left', '160px');
});

jQuery(document).ready(function($) {
	$('.slider').slick({
		accessibility: false,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		infinite: true,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: 0,
		pauseOnHover: false,
		prevArrow: '<span class="slick-nav slick-nav--prev"></span>',
		nextArrow: '<span class="slick-nav slick-nav--next"></span>'
	});
});
