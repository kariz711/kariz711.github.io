$(document).ready(function() {
	console.log("1");

var movementStrength = 100;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();


$("#top-image").mousemove(function(e){
	console.log("2");
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 25;
          var newvalueY = height * pageY * -1 - 50;
          $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
});


// $(".fabricrip").on("click", function() {
// 	$(this).toggleClass("fabricrip-active");
// 	console.log("3");
// });	

$('.texture2').okzoom({
  width: 200,
  height: 200,
  round: true,
  background: "black",
  backgroundRepeat: "repeat",
  shadow: "0 0 10px black",
  border: "0px solid black"
});

$(function(){

	console.log("4");
    
    		$('.texture2').okshadow();
    		$('.texture2').data("okshadow").setoption({
  			"color": "black",
});


 });



});	