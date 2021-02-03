
var cWidth = window.innerWidth;
var cHeight = window.innerHeight;


function setup() {
  var canvas = createCanvas(cWidth, cHeight);
  canvas.parent('sketch-holder1');
  heart = loadImage('/assets/kn/heart.png');
  heart2 = loadImage('/assets/kn/heart2.png');
  heart3 = loadImage('/assets/kn/heart3.png');
  heart4 = loadImage('/assets/kn/heart4.png');
  hearts = [heart, heart2, heart3, heart4];

  play = true;
  frameRate(30);

}

function draw() {

  if (play) {
    //fill(random(255), random(255), random(255));
    r = random(255);
    g = random(255);
    b = random(255);
    fill(r, g, b);

    ellipse(random(cWidth), random(cHeight), random(20,80), random(20,80));
    ellipse(random(cWidth), random(cHeight), random(20,80), random(20,80));

    image(random(hearts), random(cWidth), random(cHeight), random(40,100), random(40,100));
  }

  fill(Math.abs(frameCount%510 - 255));
  ellipse(cWidth-90, cHeight-90, 150, 150);

}



function keyPressed() {

  play = !play;

}
