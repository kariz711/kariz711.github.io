$(document).ready(function() {
$(".block").on("click", function() {
	$(this).toggleClass("active");
});	


$(".title").on("click", function() {
	$(this).toggleClass("title-active");
	$(".contain-block").toggleClass("contain");
	$(".contain-letter").toggleClass("contain");
	$(".doc").toggleClass("doc-click");

});	
$(function(){
	console.log("work mfr");



});	



});