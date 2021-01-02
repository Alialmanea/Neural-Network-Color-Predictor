
let r,g,b;
let brain;
let which = "black";
let input;

function pickColor(){
   r = random(255);
   g = random(255);
   b = random(255);
   redraw();
}

function colorPredictor(r,g,b){
  input = [r / 255, g / 255, b / 255];
  let output = brain.predict(input);
  console.log(output);

  if(output[0] < output[1]){
    return "black";
  }

  return "white"
}

function mousePressed(){
  let targets = [];
  pickColor();

  if(mouseX > width / 2){
    targets = [1,0];
  }else{
    targets = [0,1];
  }
  brain.train(input, targets);
}

function setup() {
  createCanvas(600, 400);
  noLoop();
  brain = new NeuralNetwork(3, 3, 2);
  pickColor();
}

function draw() {

  background(r,g,b);
  stroke(0);
  line(width/2, 0, width/2, height);
  textSize(64);
  fill(0);
  textAlign(CENTER);
  noStroke();
  text("Black",width/4, height/ 3);
  fill(255);
  text("White",width/1.3, height/ 3);

  which = colorPredictor(r,g,b);
  if(which === "black"){
    fill(0);
    ellipse(width/4, height/ 2, 60);
  }else{
    fill(255);
    ellipse(width/1.3, height/ 2, 60);
  }

}
