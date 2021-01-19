let grid = true;

let loadedSprite = null;
let shift;
let collision_box;

let SF = 4.0;

let tb = 32;
let tile = tb * SF;
let npx = 1.0 / tb;
let px = 1.0 / tile;
const shiftToPx = (v) => p5.Vector.mult(v, tile);

let dropzone;
let slider;

let CENT = [0, 0];

hightDrop = () => dropzone.style("background-color", "orange");
unhightDrop = () => dropzone.style("background-color", "#363d42");

function setup() {
  createCanvas(windowWidth, windowHeight);

  dropzone = select("#spriteinput");
  dropzone.drop(gotFile, unhightDrop);
  dropzone.dragOver(hightDrop);
  dropzone.dragLeave(unhightDrop);

  slider = createSlider(0, 4, 1, 1);
  slider.position(64, 256);

  button = createButton("Grid");
  button.addClass("modeButton");
  button.position(64, 84);
  button.mousePressed(toggleGrid);

  button2 = createButton("x-");
  button2.addClass("modeButton");
  button2.position(128, 84);
  button2.mousePressed((e) => adjustShift([-1 * npx, 0]));

  button3 = createButton("x+");
  button3.addClass("modeButton");
  button3.position(192, 84);
  button3.mousePressed((e) => adjustShift([1 * npx, 0]));

  button4 = createButton("y+");
  button4.addClass("modeButton");
  button4.position(128, 84 + 48);
  button4.mousePressed((e) => adjustShift([0, 1 * npx]));

  button5 = createButton("y-");
  button5.addClass("modeButton");
  button5.position(192, 84 + 48);
  button5.mousePressed((e) => adjustShift([0, -1 * npx]));

  shift = createVector(-0.5, 0.5);
  collision_box = [
    [-0.35, -0.35],
    [0.35, 0.35],
  ];

  noSmooth();
}

adjustShift = (v) => shift.add(v);

gotFile = (file) => {
  loadedSprite = createImg(file.data);
  loadedSprite.hide();
};

toggleGrid = () => {
  grid = !grid;
};

drawBounds = (bs) => {
  /*
  let dx = bs[1][0] - bs[0][0];
  let dy = bs[1][1] - bs[0][1];
*/
  stroke("red");
  noFill();

  let bdshift = tile * 0.5;

  console.log(-bs[0][0] + bs[1][0]);
  rect(
    CENT[0] * tile + bs[0][0] * tile + bdshift,
    CENT[1] * tile + bs[0][1] * tile + bdshift,
    (-bs[0][0] + bs[1][0]) * tile,
    (-bs[0][1] + bs[1][1]) * tile
  );
  stroke(0);
  fill(255);
};

function draw() {
  SF = 0.5 * (2 << slider.value());

  tile = tb * SF;
  px = 1.0 / tile;

  CENT[0] = Math.floor((width * 0.5) / tile);
  CENT[1] = Math.floor((height * 0.5) / tile);

  background(240);
  fill(0);
  //rect(CENT[0] * tile, CENT[1] * tile, tile, tile);

  if (grid) {
    for (let i = 0; i < width; i += tile) {
      line(i, 0, i, height);
      line(0, i, width, i);
    }
  }

  fill(255);
  rect(0, 0, 256, height);

  if (loadedSprite) {
    fill(150);
    rect(CENT[0] * tile, CENT[1] * tile, tile, tile);
    image(
      loadedSprite,
      CENT[0] * tile + shiftToPx(shift).x,
      CENT[1] * tile + shiftToPx(shift).y,
      tile * 4,
      tile * 4
    );
    console.log("DRAW");
    drawBounds(collision_box);
  }

  textSize(16);
  fill(0);
  text(`x: ${shiftToPx(shift).x / SF} | ${shift.x}`, 64, 128);
  text(`y: ${shiftToPx(shift).y / SF} | ${shift.y}`, 64, 128 + 48);
  text(`zoom: ${SF}`, 64, 128 + 48 * 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
