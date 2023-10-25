let startTime;
let timePassed = 0;
let currentSeason = 1;

let backGround1;
let backGround2;
let backGround3;

function preload (){
  backGround1 = loadImage('springsummer.jpg');
  backGround2 = loadImage('fall.jpg');
  backGround3 = loadImage('winter.jpg');
  wood = loadImage('wood-texture-vector.jpg');
}


function setup() {
  createCanvas(900, windowHeight);
  startTime = millis();
}

function draw() {
  timePassed = millis() - startTime;

  if (timePassed >= 3000) {
  currentSeason++;
  startTime = millis();
  if (currentSeason > 3) {
    currentSeason = 1;
  }
  }

if (currentSeason == 1) {
    background(backGround1);
    drawTrees();
    drawPersephone();
    drawFlower();
}
else if (currentSeason == 2) {
    background(backGround2);
    drawTrees();
    drawPersephone();
    drawHades();
    drawLeaves();
}
else if (currentSeason == 3) {
    background(backGround3);
    drawTrees();
    drawPersephone();
    drawHades();
    drawSnow();
}
}


// function to draw flowers
function drawFlower () {
  for (let x1 = 0; x1 < 300; x1 += 100) {
    for (let y1 = 20; y1 < height/4; y1 += 150) {
 fill(255, 216, 250);
 ellipse(x1, y1, 30, 15);
 ellipse(x1 + 30, y1, 30, 15);
 ellipse(x1 + 15, y1 + 15, 15, 30);
 ellipse(x1 + 15, y1 - 15, 15, 30);
    }
  }
  for (let x2 = 675; x2 < width; x2 += 100) {
    for (let y2 = 20; y2 < height/4; y2 += 150) {
 fill(255, 216, 250);
 ellipse(x2, y2, 30, 15);
 ellipse(x2 + 30, y2, 30, 15);
 ellipse(x2 + 15, y2 + 15, 15, 30);
 ellipse(x2 + 15, y2 - 15, 15, 30);
 circle()
    }
  }
}


// function to draw leaves
function drawLeaves () {
  for (let x1 = 0; x1 < 300; x1 += 100) {
    for (let y1 = 20; y1 < height/4; y1 += 150) {
 fill(215, 137, 69);
 ellipse(x1, y1, 40, 25);
    }
  }
  for (let x2 = 675; x2 < width; x2 += 100) {
    for (let y2 = 20; y2 < height/4; y2 += 150) {
      fill(215, 137, 69);
      ellipse(x2, y2, 40, 25);
    }
  }
}


// function to draw snowflakes
function drawSnow () {
  for (let x1 = 0; x1 < 300; x1 += 100) {
    for (let y1 = 25; y1 < height/4; y1 += 150) {
 fill(145, 220, 230);
 rect(x1, y1, 40, 5);
 rect(x1 + 17, y1 - 17, 5, 40);
    }
  }
  for (let x2 = 675; x2 < width; x2 += 100) {
    for (let y2 = 20; y2 < height/4; y2 += 150) {
  fill(145, 220, 230);
  rect(x2, y2, 40, 5);
  rect(x2 + 17, y2 - 17, 5, 40);
    }
  }
}


// function to draw Persehpone
function drawPersephone () { 
    push ();
    translate(60, height/6);
    scale(0.75, 0.75);

  noStroke();
  fill(222, 88, 204);
  circle(400, 450, 150);
  rect(350, 520, 100, 200, 20);
  fill(185, 10, 82);
  rect(350, 540, 100, 180);
  fill(232, 144, 180);
  triangle(260, 425, 400, 370, 330, 510);
  triangle(540, 425, 400, 370, 470, 510);

  fill(255);
  circle(380, 450, 35);
  circle(420, 450, 35);
  fill(0);
  circle(385, 445, 20);
  circle(425, 445, 20);
  fill(255);
  circle(385, 445, 5);
  circle(425, 445, 5);
  fill(222, 11, 98);
  arc(400, 490, 40, 15, 0, PI);
  pop ();
}
 

// function to draw Hades
function drawHades () {
  fill(13, 191, 215)
  quad(510, height/3, 650, height/3, 635, height/2.2, 525, height/2.2);
  fill(199, 235, 240);
  rect(510, height/3.3, 140, height/30);
  triangle(600, height/3.3, 650, height/3.3, 625, height/2.5);
 
  fill(255);
  circle(550, height/2.7, 35);
  circle(600, height/2.7, 35);
  fill(0);
  circle(545, height/2.65, 20);
  circle(595, height/2.65, 20);
  fill(255);
  circle(545, height/2.65, 5);
  circle(595, height/2.65, 5);
  fill(0);
  arc(580, height/2.4, 40, 15, 0, PI);

  fill(0);
  rect(525, height/2.2, 110, 250);
  fill(255);
  triangle(525, height/2.2, 635, height/2.2, 580, height/2.2 + 200);
  fill(0);
  triangle(550, height/2.2, 610, height/2.2, 580, height/2.2 + 25);
  quad(580, height/2.2 + 25, 610, height/2.2 + 50, 580, height/2.2 + 150, 550, height/2.2 + 50);
}


// function draw Trees
function drawTrees () {
  noStroke ();
  fill(59, 41, 1);
  rect(0, height/4, 150, height);
  rect(750, height/4, 900, height);
push();
  scale(0.3, 5);
  image(wood, 0, 0);
  image(wood, 200 + windowWidth, 0);
  pop();
  fill(55, 143, 9);
  circle(0, 0, width/1.5);
  circle(width, 0, width/1.5);

 
}



