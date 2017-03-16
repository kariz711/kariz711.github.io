$(document).ready(function() {
  var key = "f6b3bb146ca24b2d9fa24542171503";
  var url = "https://api.apixu.com/v1/current.json?key=" + key + "&q=NYC";

$.getJSON(url, function(data){
	console.log(data["current"]["temp_f"]);
	// $("#weather").html(data["current"]["temp_f"]);
	if(data["current"]["temp_f"] <30){
		$("#weather").html("it's cold af");
	} else {
		$("#weather").html("not cold af");
	}

	if(data["current"]["feelslike_f"] <30){
		$("#weather").html("feels cold af");
	} else if(data["current"]["feelslike_f"] >30<60) {
		$("#weather").html("suck it up");
	} else {
		$("#weather").html("fuck yeesssss");
	}
	// $("#weather").html(data["current"]["temp_f"]);

});


});


/*
    Get weather API key at
    https://www.apixu.com/signup.aspx
*/