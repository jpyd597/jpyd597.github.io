let fRate = 60;
let cPoint = 0;

function Note(pKey,sTime,duration) {
  this.currentY = 0;
  this.catched = true;
  this.pKey = pKey;
  this.sTime = sTime*fRate;
  this.duration = duration;
  if(pKey==='s'){
    this.currentX = 0;
    this.nKey = 83;
  }
  else if(pKey==='d'){
    this.currentX = 100;
    this.nKey = 68;
  }
  else if(pKey==='f'){
    this.currentX = 200;
    this.nKey = 70;
  }
  else if(pKey==='j'){
    this.currentX = 300;
    this.nKey = 74;
  }
  else if(pKey==='k'){
    this.currentX = 400;
    this.nKey = 75;
  }
  else if(pKey==='l'){
    this.currentX = 500;
    this.nKey = 76;
  }
}

function createNote(note){
  let noteColor = color(255,0,0);
  strokeWeight(0);
  fill(noteColor);
  rect(note.currentX,note.currentY,100,20);
  note.currentY +=10;
  if (note.catched && note.currentY>=580 && note.currentY<=620 && keyIsDown(note.nKey)){
    cPoint += 20-Math.abs(600-note.currentY);
    note.catched = false;
  }
}

let note1 = new Note('f',3,1);

function setup() {
  createCanvas(800, 800);
  frameRate(fRate);
}

function draw() {
  //기본 배경
  let pressColor = color(0,0,255);
  let noteColor = color(255,0,0);
  pressColor.setAlpha(50);
  background(220);
  strokeWeight(1);
  line(0, 600, 600, 600);
  line(600, 0, 600, 800);
  line(100, 0, 100, 620);
  line(200, 0, 200, 620);
  line(300, 0, 300, 620);
  line(400, 0, 400, 620);
  line(500, 0, 500, 620);
  line(0, 620, 600, 620);
  fill(0);
  textSize(20);
  text('S',46,617);
  text('D',146,617);
  text('F',246,617);
  text('J',346,617);
  text('K',446,617);
  text('L',546,617);
  text(int(frameCount/fRate),700,100);
  text(cPoint,700,200);
  
  //s
  if (keyIsDown(83)){
    strokeWeight(0);
    fill(pressColor);
    rect(0,0,100,800);
  }
  //d
  if (keyIsDown(68)){
    strokeWeight(0);
    fill(pressColor);
    rect(100,0,100,800);
  }
  //f
  if (keyIsDown(70)){
    strokeWeight(0);
    fill(pressColor);
    rect(200,0,100,800);
  }
  //j
  if (keyIsDown(74)){
    strokeWeight(0);
    fill(pressColor);
    rect(300,0,100,800);
  }
  //k
  if (keyIsDown(75)){
    strokeWeight(0);
    fill(pressColor);
    rect(400,0,100,800);
  }
  //l
  if (keyIsDown(76)){
    strokeWeight(0);
    fill(pressColor);
    rect(500,0,100,800);
  }
  if(note1.catched && note1.sTime<=frameCount){
    createNote(note1);
  }
}