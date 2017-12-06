$(document).ready(function() {
$(function(){
 $('.ok').okshadow({
  color: "#00E8FF",
  textShadow: true,
  xMax: 5,
  yMax: 5,
  yOffset: 1,
  fuzzMin: 1,
  fuzzMax: 2,
});
 });

$(function(){
    $('.bubble-hover').okhover();  
    
});
$(function(){
 $('.ok').okshadow({
  color: '#588AB6',
  textShadow: true,
  xMax: 5,
  yMax: 5,
  yOffset: 3,
  fuzzMin: 1,
  fuzzMax: 3,
});
 });
$(function(){
 $('.ok1').okshadow({
  color: 'white',
  textShadow: true,
  xMax: 5,
  yMax: 5,
  yOffset: 3,
  fuzzMin: 1,
  fuzzMax: 3,
});
 });
$('.speaker').click(function(e) {
  e.preventDefault();

	$(this).toggleClass('mute');
});

});

