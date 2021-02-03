
var cWidth = window.innerWidth;
var cHeight = window.innerHeight;



function setup() {
  var canvas = createCanvas(cWidth, cHeight);
  canvas.parent('sketch-holder1');
  heart = loadImage('/assets/kn2/heart.png');
  heart2 = loadImage('/assets/kn2/heart2.png');
  heart3 = loadImage('/assets/kn2/heart3.png');
  heart4 = loadImage('/assets/kn2/heart4.png');
  hearts = [heart, heart2, heart3, heart4];

  play = true;
  frameRate(30);
  eraseoldx = -100;
  eraseoldy = -100;
  erasex = -100;
  erasey = 100;
  erasenewx = -100;
  erasenewy = -100;
  erasedir  = "right";
  erasergo = true;
  eraserspeed = 12;

}

function draw() {

  if (play) {

    eraser();

    r = random(255);
    g = random(255);
    b = random(255);
    fill(r, g, b);
    stroke(0);

    ellipse(random(cWidth), random(cHeight), random(20,80), random(20,80));
    ellipse(random(cWidth), random(cHeight), random(20,80), random(20,80));

    if (frameCount%3 == 0) {
      image(random(hearts), random(cWidth), random(cHeight), random(40,100), random(40,100));
    }

    if (frameCount%50 == 0 && random(100) > 50) {
      ellipse(random(cWidth), random(cHeight), random(100,600), random(100,600));
    }

    eraser();

  }

  //static circle that fades from black to white and back
  // stroke(0);
  // fill(Math.abs(frameCount%510 - 255));
  // ellipse(cWidth-90, cHeight-90, 150, 150);

}



function keyPressed() {

  play = !play;

}


function eraser() {

  if (erasergo == false && frameCount%30 == 0 && random() > .9) {
    erasergo = true;
  }

  if (erasergo == true) {

    //generates new random y coordinate when eraser reaches other side
    if (erasex > cWidth + 100) {
      erasedir = "left";
      erasergo = false;
      erasey = random(cHeight);
      erasenewy = random(cHeight);
      eraseoldy = erasey;
    } else if (erasex < -99) {
      erasedir = "right";
      erasergo = false;
      erasey = random(cHeight);
      erasenewy = random(cHeight);
      eraseoldy = erasey;
    }

    //moves eraser
    if (erasedir == "right") {
      erasex += eraserspeed;
      erasey -= (eraseoldy-erasenewy)/(cWidth/eraserspeed) - (eraserspeed*sin(frameCount/2))/random(4);
    } else {
      erasex -= eraserspeed;
      erasey -= (eraseoldy-erasenewy)/(cWidth/eraserspeed) - (eraserspeed*sin(frameCount/2))/random(4);
    }

    //draws eraser
    fill(255);
    noStroke();
    ellipse(erasex, erasey, 120, 120);
  }

}
