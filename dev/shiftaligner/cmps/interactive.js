const BBTYPES = {
  CIRCLE: 1,
  BOX: 2,
  RECT: 3,
};

class CircleBB {
  constructor({ r }) {
    this.r = r;
  }
  checkDV(dx, dy) {
    return dx * dx + dy * dy < this.r * this.r;
  }
}

class SquareBB {
  constructor({ r }) {
    this.r = r;
  }
  checkDV(dx, dy) {
    return abs(dx) < this.r * 0.5 && abs(dy) < this.r * 0.5;
  }
}

class V2 {
  constructor(x = 0, y = 0) {
    (this.x = x), (this.y = y);
  }
}

/*
class BoxBB {
  constructor(h, w) {

  }
}

class RectBB {
  constructor(dl, dt, dr, db) {

  }
}
*/

const BBConstuctor = {
  [BBTYPES.CIRCLE]: CircleBB,
  [BBTYPES.BOX]: SquareBB,
};

class BoundingBox {
  default_bbparams = {
    r: 10.0,
    h: 10.0,
    w: 10.0,
    dl: 5.0,
    dt: 5.0,
    dr: 5.0,
    db: 5.0,
  };

  constructor(bbtype = BBTYPES.CIRCLE, bbparams = this.default_bbparams) {
    this.bb = new BBConstuctor[bbtype](bbparams || this.default_bbparams);
    this.checkDV = function (dx, dy) {
      return this.bb.checkDV(dx, dy);
    };
  }
}

class Interactive {
  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(
    x,
    y,
    {
      prms = null,
      origin = new V2(x, y),
      bbtype = BBTYPES.CIRCLE,
      mvConstrains = { x: false, y: false },
    } = {}
  ) {
    console.log(prms);
    this.boundingBox = new BoundingBox(bbtype, prms);
    this.mvConstrains = mvConstrains;
    this.origin = origin;
    this.x = origin.x;
    this.y = origin.y;
  }

  containsPoint(tx, ty) {
    let dx = tx - this.origin.x;
    let dy = ty - this.origin.y;
    return this.boundingBox.checkDV(dx, dy);
  }

  move(tx, ty) {
    if (!this.mvConstrains.x) this.x = tx;
    if (!this.mvConstrains.y) this.y = ty;
    this.origin = new V2(tx, ty);
  }

  onDragFinish = () => {
    console.log("dragFinish");
  };

  drag = () => {
    console.log("dragging");
    this.move(mouseX, mouseY);
  };

  onDrag = () => {
    console.log("drag!");
  };
}
