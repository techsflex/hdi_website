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

function submitForm() {
	var url = "contact.php";
	// POST values in the background the the script URL
	$.ajax({
		type: "POST",
		url: url,
		data: {
			name: $("#form_name").val(),
			email: $("#form_email").val(),
			phone: $("#form_phone").val(),
			message: $("#form_message").val(),

		},
		success: function (data) {
			alert("Message Sent!");
		}
		error: function (jqXHR, textStatus, errorThrown) {
			alert(textStatus + ": " + errorThrown);
		}
	});
	return false;
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
	
	$("#submitForm").on('click', function(){
		alert("Button Clicked!");
		submitForm();
	});
});