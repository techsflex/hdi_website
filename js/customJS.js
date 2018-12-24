function clearMainContent() {
	"use strict";
	$("#main_content").empty();
}

function modifyNavbar(option) {
	"use strict";
	if (option === "dark") {
		$('#mainNavBar').removeClass('navbar-light');
		$('#mainNavBar').addClass('navbar-dark');
		$('#mainNavBar').addClass('bg-dark');
	}
	else {
		$('#mainNavBar').removeClass('navbar-dark');
		$('#mainNavBar').removeClass('bg-dark');
		$('#mainNavBar').addClass('navbar-light');
	}
	
}

function loadPage(el){
	"use strict";
	var option = el.innerHTML;

	if(option === "Home"){
		clearMainContent();
		//modifyNavbar("light");
		$("#main_content").load("home.html");
	}

	else if(option === "About Us"){
		clearMainContent();
		//modifyNavbar("dark");
		$("#main_content").load("about.html");
	}
	
	else if(option === "<strong>Sales</strong>"){
		clearMainContent();
		$("#main_content").load("sales.html");
	}
	
	else if(option === " - Mechanical"){
		clearMainContent();
		$("#main_content").load("service_mech.html");
	}
	
	else if(option === " - Body &amp; Paint"){
		clearMainContent();
		$("#main_content").load("service_body.html");
	}
	
	else if(option === "<strong>Spare Parts</strong>"){
		clearMainContent();
		$("#main_content").load("spareparts.html");
	}
	
	else if(option === "Cars"){
		clearMainContent();
		$("#main_content").load("cars.html");
	}
	
	else if(option === "After Sales"){
		clearMainContent();
		$("#main_content").load("aftersales.html");
	}
	
	else if(option === "Contact"){
		clearMainContent();
		$("#main_content").load("contact.html");
	}
	else {
		alert(option);
	}
}

$(document).ready(function($) {
	"use strict";
	
	$("#main_content").load("home.html");
	
	$('#navbarResponsive').on('hide.bs.collapse', function () {
		$('#headerCarousel .carousel').css('margin-top', '-4.5em');
	});
		
	$('#navbarResponsive').on('show.bs.collapse', function () {
		$('#headerCarousel .carousel').css('margin-top', '0em');
	});
	
	document.querySelector(".card-flip").classList.toggle("flip");

	$(window).resize(function(){
		var ww = document.body.clientWidth;
		if (ww > 768) {
			$('#headerCarousel .carousel').css('margin-top', '-4.5em');
		}

		else {
			var isCollapsed = $("#navbarResponsive").is(":visible");
			if (isCollapsed) {
				$('#headerCarousel .carousel').css('margin-top', '-4.5em');	
			}
			else {
				$('#headerCarousel .carousel').css('margin-top', '0em');	
			}
		}

	});
});