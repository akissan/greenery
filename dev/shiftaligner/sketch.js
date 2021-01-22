import initButtons from "./cmps/buttons";

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

const initDropzone = () => {
  let dz = select("#spriteinput");
  dz.drop(gotFile, unhightDrop);
  dz.dragOver(hightDrop);
  dz.dragLeave(unhightDrop);
  return dz;
};

const initSlider = (pos) => {
  let slide = createSlider(0, 4, 1, 1);
  slide.position(...pos);
  return;
};

function setup() {
  createCanvas(windowWidth, windowHeight);

  dropzone = initDropzone();
  slider = initSlider(64, 128);

  initButtons();

  shift = createVector(-0.5, 0.5);

  collision_box = [
    [-0.35, -0.35],
    [0.35, 0.35],
  ];
  noSmooth();

  loadedSprite = getItem("Lsprite");
  console.log(loadedSprite);
}

adjustShift = (v) => shift.add(v);

gotFile = (file) => {
  loadedSprite = createImg(file.data);
  storeItem("Lsprite", loadedSprite);
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

  //  console.log(-bs[0][0] + bs[1][0]);
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
      20,
      20
    );
    //console.log("DRAW");
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
