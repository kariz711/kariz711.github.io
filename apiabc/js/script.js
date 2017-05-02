$(document).ready(function() {
  var key = "f6b3bb146ca24b2d9fa24542171503";
  var url = "https://api.apixu.com/v1/current.json?key=" + key + "&q=nyc";

$.getJSON(url, function(data){
	console.log(data["current"]["temp_f"]);
	// $("#weather").html(data["current"]["temp_f"]);
	if(data["current"]["temp_f"] <30){
		$(".vid-1").toggle(true);
		$(".vid-2").toggle(false);
	} else {
		$(".vid-2").toggle(true);
		$(".vid-1").toggle(false);
		
	}

	if(data["current"]["feelslike_f"] <30){
		$("#weather").html("cold af");
	} else if(data["current"]["feelslike_f"] >30<60) {
		$("#weather").html("suck it up");
	} else {
		$("#weather").html("f yessss");
	}

});


});


/*
    Get weather API key at
    https://www.apixu.com/signup.aspx
*/