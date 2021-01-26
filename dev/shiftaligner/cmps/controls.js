const CONTROLS = {
  isMPressed: false,
  dragObject: null,
};

function mouseClicked() {
  Interactive.all((_) => console.log(_.containsPoint(mouseX, mouseY)));
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
    Interactive.All.some((_) => {
      if (_.containsPoint(mouseX, mouseY)) {
        CONTROLS.dragObject = _;
        CONTROLS.dragObject.onDrag();
        return true;
      }
      return false;
    });
  }
}
