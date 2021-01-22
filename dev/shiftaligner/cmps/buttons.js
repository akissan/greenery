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

const initButtons = () =>
  Object.entries(buttons).foreach((buttonName, buttonInfo) =>
    initButton(buttonName, buttonInfo.pos, ButtonInfo.onPressed)
  );

const buttons = {
  Grid: new ButtonInfo([64, 84], toggleGrid),
  "x-": new ButtonInfo([128, 84], (e) => adjustShift([-1 * npx, 0])),
  "x+": new ButtonInfo([192, 84], (e) => adjustShift([1 * npx, 0])),
  "y+": new ButtonInfo([128, 84 + 48], (e) => adjustShift([0, 1 * npx])),
  "y-": new ButtonInfo([192, 84 + 48], (e) => adjustShift([0, -1 * npx])),
};

export default initButtons;
