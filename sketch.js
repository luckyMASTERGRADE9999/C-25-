

// Purple Rain
// (138, 43, 226)

//dropsA[500] = new Drop(); // array of 500 drop objects

dropsA=[];//an array
var dropCount=100;

function setup() {
  var canvas = createCanvas(800,600); // size of the window
  for (let  i = 0; i < dropCount; i++) { // we create the drops 
  var drop = new Drop();
    drop.reset();
    dropsA.push(drop);
  }
}

function draw() {
  background(230, 230, 250); // background color in RGB color cordinates
  for (let  i = 0; i < dropCount; i++) { // we create the drops 
    var drop = dropsA[i];
    drop.fall(); // sets the shape and speed of drop
    drop.show(); // render drop
  }
}
