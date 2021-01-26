/**
 * @typedef {(TL,TM,TR,ML,MM,MR,BL,BM,BR)} ALIGN_MODE
 */
ALIGN_MODE = {
  TL: 1,
  TM: 2,
  TR: 3,
  ML: 4,
  MM: 5,
  MR: 6,
  BL: 7,
  BM: 8,
  BR: 9,
};

ALIGN = {
  TL: new V2(-1, 1),
};

/**
 * @typedef {{color: string}, {align: ALIGN_MODE}} DRAWPRMS
 */

class Drawable extends Interactive {
  /**
   *
   * @param {V2} origin
   * @param {DRAWPRMS} drawparams - Drawparams - {@link DRAWPRMS}
   */
  constructor(
    origin,
    dprms = { color: "red", align = ALIGN_MODE.TL },
    bbprms
  ) {
    super(origin, bbprms);
    this.color = dprms.color;
  }

  draw = () => {
    console.error("Drawable should not be drawed!");
  };
}

class Panel extends Drawable {
  /**
   *
   * @param {V2} origin
   * @param {number} h
   * @param {number} w
   * @param {ALIGN_MODE} align
   */
  constructor(origin, h, w, { bbparams, drawparams } = {}) {
    super(origin, { bbparams, drawparams });
    this.h = h;
    this.w = w;
  }

  draw = () => {
    let v1 = new V2(),
      v2 = new V2();
    switch (this.align) {
      case ALIGN_MODE.TL:
        v1 = this.origin;
        v2 = this.origin.add(new V2(h, 2));
    }
    rect(v1.x, v1.y, v2.x, v2.y);
  };
}

class circ {
  constructor(origin, r = 10, color = "red") {
    this.origin = origin;
    this.r = r;
    this.color = color;
  }
  draw = () => {
    fill(this.color);
    circle(this.origin.x, this.origin.y);
  };
}

class MovableCircle {}
