class V2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  /** @param {V2} v */
  add = (v) => new V2(this.x + v.x, this.y + v.y);

  /** @param {V2} v */
  sub = (v) => new V2(this.x - v.x, this.y - v.y);

  /** @param {V2} v */
  mult = (v) => new V2(this.x * v.x, this.y * v.y);

  /** @param {V2} v */
  div = (v) => new V2(this.x / v.x, this.y / v.y);

  /** @param {number} val */
  lenless = (val) => this.len2() < val * val;

  /** @param {number} val */
  leneq = (val, precise2 = 0.001) => abs(this.len2 - val * val) < precise2;

  /** @param {number} val */
  scale = (val) => new V2(this.x * val, this.y * val);

  get norm() {
    return this.div(this.len());
  }
  get len() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  get len2() {
    return this.x * this.x + this.y * this.y;
  }
  get swap() {
    return new V2(this.y, this.x);
  }
  get copy() {
    return new V2(this.x, this.y);
  }
  get v() {
    return { x: this.x, t: this.y };
  }

  /** @param {V2} v */
  less = (v) => this.len2() < v.len2();

  /** @param {V2} v */
  more = (v) => this.len2() > v.len2();

  /** @param {V2} v */
  lessOE = (v) => this.len2() <= v.len2();

  /** @param {V2} v */
  moreOE = (v) => this.len2() >= v.len2();

  /** @param {V2} v */
  equals = (v, precise2 = 0.001) => abs(this.sub(v).len2()) < precise2;

  /**
   * @param {V2} v
   * @param {number} t */
  lerp = (v, t) => this.add(v.sub(this).scale(t));

  /** @param {V2} v */
  dist = (v) => v.sub(this).len();

  /** @param {V2} v */
  dist2 = (v) => v.sub(this).len2();

  /**
   * @param {V2} v1
   * @param {V2} v2 */
  static dist = (v1, v2) => v1.dist(v2);

  /**
   * @param {V2} v1
   * @param {V2} v2 */
  static dist2 = (v1, v2) => v1.dist2(v2);

  /**
   * @param {V2} v1
   * @param {V2} v2
   * @param {number} d */
  static close = (v1, v2, d) => v1.dist2(v2) < d * d;
}
