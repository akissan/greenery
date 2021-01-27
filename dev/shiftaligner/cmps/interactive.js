/**
 * @typedef {(CIRCLE,BOX,RECT)} BBTYPES
 */

const BBTYPES = {
  CIRCLE: 1,
  BOX: 2,
  RECT: 3,
};

class CircleBB {
  constructor({ r }) {
    this.r = r;
  }
  /** @param {V2} dv */
  checkDV(dv) {
    console.log(this.r);
    return dv.len2 < this.r * this.r;
  }
}

class SquareBB {
  constructor({ r }) {
    this.r = r;
  }
  /** @param {V2} dv */
  checkDV(dv) {
    return abs(dv.x) < this.r * 0.5 && abs(dv.y) < this.r * 0.5;
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

  /**
   *
   * @param {BBTYPES} bbtype
   */
  constructor(bbtype = BBTYPES.CIRCLE, bbparams = this.default_bbparams) {
    this.bb = new BBConstuctor[bbtype](bbparams || this.default_bbparams);
    this.checkDV = function (tpoint) {
      return this.bb.checkDV(tpoint);
    };
  }
}

/**
 * @typedef {{x: boolean, y: boolean}} MVC
 */

/** Interactive objects */
class Interactive {
  /** @type {Interactive[]} All */
  static All = [];
  static all = (f) => Interactive.All.forEach(f);

  /**
   * @param {V2} origin
   * @param {MVC} mvConstrains - {@link MVC}
   * @param {BBTYPES} bbtype - {@link BBTYPES}
   */
  constructor(
    origin,
    mvConstrains = { x: false, y: false },
    bbtype = BBTYPES.CIRCLE,
    bbsettings = null
  ) {
    this.boundingBox = new BoundingBox(bbtype, bbsettings);
    this.mvConstrains = mvConstrains;
    this.origin = origin;
    this.x = origin.x;
    this.y = origin.y;
    console.log(bbsettings);
    Interactive.All.push(this);
  }

  /** Check if *this* contains point
   * @param {V2} tpoint
   */
  containsPoint(tpoint) {
    let dv = tpoint.sub(this.origin);
    console.log(dv.v);
    console.log(tpoint.v);
    console.log(this.origin.v);
    return this.boundingBox.checkDV(dv);
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
