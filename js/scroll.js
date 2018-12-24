$(document).ready(function() {
	"use strict";
	
	$("#mainNavBar").removeClass("navbar-dark");
	$("#mainNavBar").removeClass("navbar-light");
	$("#mainNavBar").addClass("navbar-light");
	
	$(".grid").on("click", function() {
		var fid = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(fid).offset().top
						}, 2000);
		//alert(currentHREF);
	});
	
	$('.customer-logos').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 4
			}
		}, {
			breakpoint: 520,
			settings: {
				slidesToShow: 3
			}
		}]
	});
});