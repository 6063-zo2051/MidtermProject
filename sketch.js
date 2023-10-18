let whichSeason; //create variable for season type
let numSeasons = 3; //set number of seasons for spring/summer, fall, and winter
let changePeriod = 30*1000; //change period is set to every 30 seconds

whichSeason = floor( millis() / changePeriod) % numSeaons; //change season every 30 seconds and reset at 3

function setup() {
  createCanvas(900, windowHeight);
// objPos = [{}]
}

function draw() {
  drawTrees (); //call Trees function
  drawPersephone(); //call Persephone function

  if (whichSeason == 0) { //if season is spring/summer
    //draw flowers and background purple/pink
    background(236, 174, 198);
  else if (whichSeason == 1) {
    //draw leaves and backround orange
    background(24, 206, 143);
  else {
    //draw snowflakes and background blue
    background(154, 199, 198);
  }

  }

  }

}

  // function to draw Persehpone
  function drawPersephone () { 
    push ();
    translate(60, height/6);
    scale(0.7, 0.7);

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

  // function draw Trees
  function drawTrees () {
  noStroke ();
  fill(59, 41, 1);
  rect(0, height/4, 150, height);
  rect(750, height/4, 900, height);
  fill(55, 143, 9);
  circle(0, 0, width/1.5);
  circle(width, 0, width/1.5);

}



