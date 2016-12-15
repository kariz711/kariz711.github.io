/*global $*/
document.body.style.backgroundImage = "img('grass.jpg')";

$("#toggle").click(function() {
    
    if (clicked == false) {
        console.log("you clicked it");
        $("#status").html("GO");
        $("#status").css("background-color","green");
        $("#toggle").html("Stop");
        clicked = true;
    } else {
        $("#status").html("STOP");
        $("#status").css("background-color","red");
        $("#toggle").html("Start");
        clicked = false; /*global clicked*/
    }
});

for (var circle = 0; circle < 7; circle++) {
    $(".wrapper").append("<div class='circle'></div>");
    console.log("kjsdnv");
}

var counter = 1;
    $(".circle").each(function(){
    console.log(counter);

    });
    
    
    $(this).click(function(){
        $(this).css("top", "20px");
        $(this).html("Hey");
    });