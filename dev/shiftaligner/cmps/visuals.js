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
 * @typedef {{mvConstrains: MVC, bbtype: BBTYPES, bbparams: * }} BBPRMS
 * @typedef {{color: string, align: ALIGN_MODE}} DRAWPRMS
 */

class Drawable extends Interactive {
  /** @type {Drawable[]} All */
  static All = [];
  static all = (f) => Drawable.All.forEach(f);

  /**
   *
   * @param {V2} origin
   * @param {DRAWPRMS} dprms - {@link DRAWPRMS}
   * @param {BBPRMS} bbprms - {@link BBPRMS}
   */
  constructor(
    origin,
    bbprms = {},
    dprms = { color: "red", align: ALIGN_MODE.TL }
  ) {
    super(origin, bbprms.mvConstrains, bbprms.bbtype, bbprms.bbsettings);
    this.color = dprms.color;
    Drawable.All.push(this);
  }

  draw = () => {
    console.error("Drawable should not be drawed!");
  };
}
