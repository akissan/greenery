const initButton = (buttonName, pos, onPressed, buttonClass = "modeButton") => {
  t = createButton(buttonName);
  t.addClass(buttonClass);
  t.position(...pos);
  t.mousePressed(onPressed);
  return t;
};

class ButtonInfo {
  constructor(pos, onPressed) {
    Object.assign(this, { pos, onPressed });
  }
}

const initButtons = (btns) => {
  console.log(Object.entries(btns));

  for (let [buttonName, bi] of Object.entries(btns)) {
    initButton(buttonName, bi.pos, bi.onPressed);
  }
};
