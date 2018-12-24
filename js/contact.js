function fontSize (vw) {
	"use strict";
	var maxwidth = 1536;
	var minwidth = 419;
	var maxsizep = 21;
	var minsizep = 10;
	var maxsizeh3 = 24;
	var minsizeh3 = 9;
	
	var sizep  = minsizep  + ((vw - minwidth) / ((maxwidth - minwidth) / (maxsizep  - minsizep)));
	var sizeh3 = minsizeh3 + ((vw - minwidth) / ((maxwidth - minwidth) / (maxsizeh3 - minsizeh3)));
	
	$(".details p").css("font-size", sizep);
	$(".details h3").css("font-size", sizeh3);
}

$(document).ready(function() {
	"use strict";
	
	$("#mainNavBar").removeClass("navbar-dark");
	$("#mainNavBar").removeClass("navbar-light");
	$("#mainNavBar").addClass("navbar-light");
	
	var vw = +document.body.clientWidth;
	fontSize(vw);
	
	$(window).resize(function(){
		var vw = +document.body.clientWidth;
		fontSize(vw);
	});
	
	$('#contactus').submit(function(e) {
		e.preventDefault();
		alert("Form Submitted!");
	});
});