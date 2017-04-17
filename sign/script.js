$(document).ready(function(){

	$(".button").on("click", function() {
		$(this).toggleClass("active");
		$("body").toggleClass("dark");
	});

});