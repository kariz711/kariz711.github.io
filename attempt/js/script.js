/*global $*/
// $("body").css("background-color", "white");

// for (var dots = 0; dots < 100; dots++) {
//     $(".wrapper").append("<div class='circle'></div>");
//     console.log("kjsdnv");
// }

// var counter = 1;
//     $(".circle").each(function(){
//     console.log(counter);
//     $(this).html(Math.floor(Math.random()*counter));
//     $(this).css("opacity",(counter/100));
//     $(this).css("height", Math.floor(Math.random()*(100+counter)));
//     $(this).css("width",(100+counter)); 
//     $(this).css("font-size",(counter));
//     $(this).css("transform", "rotate("+(counter/100)*360 +"deg)");
    
//     $(this).css("top", newTop);
//     $(this).css("left", newLeft);
//     counter++;
//     //this code runs for each instance of circle
//     $(this).hover(function(){
//         $(this).css("background-color", "white");

//     }, function(){
//         $(this).css("background-color", "#0B10BB");
       
//     });
    
    
    for (var cups = 0; cups < 7; cups++) {
    $(".cup-wrapper").append("<img src='img/red_cup.png' width = 100 class = 'cup'></img>");
    $(".number-wrapper").append("<span class='number'></span>")
    
    console.log("kjsdnv");
}

$('#start').click(function(){
    
    var counter = 1;   
       
    $(".cup").each(function(){
       
        // console.log(counter);
        // $('.number').html(Math.floor(Math.random()*counter));
        var winWidth = $(window).width();
        var winHeight = $(window).height();
        console.log("winWidth");
        console.log("winHeight");
        // var newTop = Math.floor(Math.random()*winHeight);
        var newLeft = Math.floor(Math.random()*winWidth);
        var newLeft = Math.floor(Math.random()*winHeight);
        // $(this).css("margin-top", newTop);
        $(this).css("margin-left", newLeft);
        counter++; 
    
    $(".cup").click(function() {
        $(".cup").css("left", "30%");
        
    console.log("MOVVE THESE FUCING CUPS");
});
// for (var multiplier = 1; multiplier <= 10; multiplier++) {
//   var result = multiplier * 6;
//   console.log(result);
// } 
      

    }); 
    
});
$('#stop').click(function(){
    $(".cup").each(function(){
        $(this).css("margin-left", "initial");
    });
    
});
  
//     for (var number = 0; number < 7; number++) {
//     $(".number").append("<div class='number'></div>");
//     $(".number-wrapper").append("<span class='number'></span>");

//         console.log("numbers working");
// }
