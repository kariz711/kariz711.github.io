$(document).ready(function() {
	// var key= "AIzaSyBU15lDu1_9jywYVdMfPrHNl0gOYpkzNBs";
	var url = "http://swapi.co/api/people/1/";
	

	$.getJSON(url, function(data){
		console.log(data);

		$(".name").html(data["name"]);


	});

		$(".ls").on("click", function (){
		$(".name").toggleClass("clicked");
	

		
		});
});