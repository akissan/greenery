class Circ extends Drawable {
  /**
   * @param {V2} origin
   * @param {number} r
   * @param {BBPRMS} bbparams - {@link BBPRMS}
   * @param {DRAWPRMS} drawparams - {@link DRAWPRMS}
   */
  constructor(origin, r = 10, bbparams = undefined, drawparams = undefined) {
    super(origin, bbparams, drawparams);
    this.origin = origin;
    this.r = r;
  }
  draw = () => {
    fill(this.color);
    circle(this.origin.x, this.origin.y, this.r);
  };
}

class Panel extends Drawable {
  /**
   * @param {V2} origin
   * @param {number} h
   * @param {number} w
   * @param {BBPRMS} bbparams - {@link BBPRMS}
   * @param {DRAWPRMS} drawparams - {@link DRAWPRMS}
   */
  constructor(
    origin,
    h = 40,
    w = 40,
    bbparams = undefined,
    drawparams = undefined
  ) {
    super(origin, bbparams, drawparams);
    this.h = h;
    this.w = w;
  }

  draw = () => {
    fill(this.color);
    let v1 = new V2(),
      v2 = new V2();
    switch (this.align) {
      case ALIGN_MODE.TL:
        v1 = this.origin;
        v2 = this.origin.add(new V2(this.w, this.h));
    }
    rect(v1.x, v1.y, v2.x, v2.y);
  };
}
