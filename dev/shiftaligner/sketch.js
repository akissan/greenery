/** @type {Interactive} check_button */
let check_button;
let check_button_1;

let buttons;

const CONTROLS = {
  isMPressed: false,
  dragObject: null,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  check_button = new Interactive(25, 25, {
    prms: { r: 25 },
    mvConstrains: { x: true, y: false },
  });
  check_button_1 = new Interactive(250, 25, { prms: { r: 25 } });
  buttons = [check_button, check_button_1];
  check_button.color = "green";
  check_button_1.color = "red";
  rectMode(CORNERS);
}

function mouseClicked() {
  buttons.forEach((_) => console.log(_.containsPoint(mouseX, mouseY)));
}

function mouseReleased() {
  if (CONTROLS.dragObject) {
    CONTROLS.dragObject.onDragFinish();
    CONTROLS.dragObject = null;
  }
}

function mouseDragged() {
  console.log("dragged");
  if (CONTROLS.dragObject) {
    CONTROLS.dragObject.drag();
  }
}

function mouseMoved() {
  console.log("moved");
  if (CONTROLS.dragObject) {
    CONTROLS.dragObject.drag();
  }
}

function mousePressed() {
  if (!CONTROLS.dragObject) {
    buttons.some((_) => {
      if (_.containsPoint(mouseX, mouseY)) {
        CONTROLS.dragObject = _;
        CONTROLS.dragObject.onDrag();
        return true;
      }
      return false;
    });
  }
}

function draw() {
  background(240);
  let w = abs(buttons[1].x - buttons[0].x) * 2;
  let h = abs(buttons[1].y - buttons[0].y) * 2;

  rect(
    2.0 * buttons[0].x - buttons[1].x,
    buttons[0].y,
    buttons[1].x,
    2.0 * buttons[1].y - buttons[0].y
  );
  for (const btn of buttons) {
    fill(btn.color);
    circle(btn.x, btn.y, btn.boundingBox.bb.r);
  }
  fill(0);
}
