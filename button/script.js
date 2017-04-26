$(document).ready(function(){
// anon functioning? alwas start js with this
//ALL CODE GOES HERE
console.log("hello there");

	$(".button").on("click", function() {
		$(this).toggleClass("active");
		$("body").toggleClass("dark");
	});
});