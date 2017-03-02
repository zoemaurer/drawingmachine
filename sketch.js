
var angle = 1;
var myFont;

function preLoad() {
  myFont = textFont("webdings");
}


function setup() {
    createCanvas(800, 800);
    background(100, 55, 220);
    textSize(10);
}

function draw() {
  translate(mouseX, mouseY);
  rotate(angle);

  angle += 20;
  fill(200, 130, 130, 300);
  text("Hello Hello Hello", mouseX, mouseY);


}
