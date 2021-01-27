let grid = true;

let loadedSprite = null;
let loadedShadow = null;

let shift;
let collision_box;

let SF = 4.0;

let tb = 32;
let tile = tb * SF;
let npx = 1.0 / tb;
let px = 1.0 / tile;
const shiftToPx = (v) => ({ x: v.x * tile, y: v.y * tile });

let dropzone;
let slider;

let CENT = [0, 0];

toggleGrid = () => {
  grid = !grid;
};

const buttons = {
  Grid: new ButtonInfo([64, 84], toggleGrid),
  "x-": new ButtonInfo([128, 84], () => adjustShift([-1 * npx, 0])),
  "x+": new ButtonInfo([192, 84], () => adjustShift([1 * npx, 0])),
  "y+": new ButtonInfo([128, 84 + 48], () => adjustShift([0, 1 * npx])),
  "y-": new ButtonInfo([192, 84 + 48], () => adjustShift([0, -1 * npx])),
};

hightDrop = (dz) => dz.style("background-color", "orange");
unhightDrop = (dz) => dz.style("background-color", "#363d42");

const initDropzone = (tag, onDrop) => {
  let dz = select(tag);
  if (dz) {
    dz.drop(onDrop, () => unhightDrop(dz));
    dz.dragOver(() => hightDrop(dz));
    dz.dragLeave(() => unhightDrop(dz));
  }
  return dz;
};

const initSlider = (pos) => {
  let slide = createSlider(0, 4, 1, 1);
  slide.position(...pos);
  return slide;
};

function setup() {
  createCanvas(windowWidth, windowHeight);

  dropzone = initDropzone(
    "#spriteinput",
    (e) => (loadedSprite = gotFile(e, "Lsprite"))
  );
  dropzone = initDropzone(
    "#shadowinput",
    (e) => (loadedShadow = gotFile(e, "Ssprite"))
  );

  slider = initSlider([64, 512]);

  initButtons(buttons);

  shift = { x: 0, y: 0 }; //0.5 = 16px
  let inp_h = createInput("");
  inp_h.input((e) => (shift.x = inp_h.value()));
  inp_h.position(64, 512 - 128);
  let inp_v = createInput("");
  inp_v.input((e) => (shift.y = inp_v.value()));
  inp_v.position(64, 512 - 128 + 48);

  collision_box = [
    [-2.25, -0.35],
    [2.25, 1.35],
  ];

  CENT[0] = Math.floor((width * 0.5) / tile);
  CENT[1] = Math.floor((height * 0.5) / tile);

  noSmooth();

  console.log(loadedSprite);

  loadedSprite = getSprite(getItem("Lsprite") || null);
  loadedShadow = getSprite(getItem("Ssprite") || null);
}

adjustShift = (v) =>
  (shift = {
    x: Number(shift.x) + Number(v[0]),
    y: Number(shift.y) + Number(v[1]),
  });

const getSprite = (data) => {
  if (data) {
    let tmp = createImg(data);
    tmp.hide();
    return tmp;
  }
  return null;
};

function mouseClicked() {
  console.log(mouseX, mouseY);
  if (mouseX > 256) {
    setCenter(mouseX / tile, mouseY / tile);
  }
}

const gotFile = (file, cookie) => {
  let tmp = getSprite(file.data);
  if (tmp) storeItem(cookie, file.data);
  return tmp;
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

function setCenter(tX, tY) {
  (CENT[0] = Math.floor(tX)), (CENT[1] = Math.floor(tY));
}

function drawSprite(sprite, shift) {
  fill(150);
  //rect(CENT[0] * tile, CENT[1] * tile, tile, tile);
  image(
    sprite,
    CENT[0] * tile + shiftToPx(shift).x - sprite.width * 0.5 * SF + tile * 0.5,
    CENT[1] * tile + shiftToPx(shift).y - sprite.height * 0.5 * SF + tile * 0.5,
    sprite.width * SF,
    sprite.height * SF
  );
}

function draw() {
  SF = 0.5 * (2 << slider.value());

  tile = tb * SF;
  px = 1.0 / tile;

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

  if (loadedShadow) {
    drawSprite(loadedShadow, shift);
  }

  if (loadedSprite) {
    drawSprite(loadedSprite, createVector(0, 0));
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
