function setup() {
//gets done once
	createCanvas(2000,3000)
}

function draw() {
  //gets done over and over
  stroke(random(255), 255, random(255))
  strokeWeight(2);
  // noStroke();
  // background(255, 30);
  if(mouseIsPressed) {
  	fill(random(255), 70, 144);
  	stroke(random(255), 20, 100)
    strokeWeight(0)
    ellipse(mouseX,mouseY,0,0)
  } else {
  	fill(random(255), 255, 255);
      ellipse(mouseX, mouseY, 20,20);
  }

}