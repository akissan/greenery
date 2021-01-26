/** @type {Interactive} check_button */
let check_button;
let check_button_1;

let buttons;

function setup() {
  createCanvas(windowWidth, windowHeight);

  /*
  check_button = new Interactive(25, 25, {
    prms: { r: 25 },
    mvConstrains: { x: true, y: false },
  });
  check_button_1 = new Interactive(250, 25, { prms: { r: 25 } });
  check_button.color = "green";
  check_button_1.color = "red";
  buttons = [check_button, check_button_1];

  */
  //buttons = [];
  let nb = new Circ(
    new V2(40, 40),
    20,
    { bbsettings: { r: 20 } },
    { color: "green" }
  );
  new Circ(new V2(25, 25));
  new Panel(new V2(80, 80));
  console.log(Interactive.All);
  rectMode(CORNERS);
}

function draw() {
  background(240);
  Drawable.all((_) => _.draw());

  /*
  let w = abs(buttons[1].x - buttons[0].x) * 2;
  let h = abs(buttons[1].y - buttons[0].y) * 2;
  */

  fill(0);
}
