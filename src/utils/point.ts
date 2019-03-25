export class Point implements PointInterface {
  private _x: number;
  private _y: number;

  public constructor(x: string | number = 0, y: string | number = 0) {
    this._x = parseFloat(`${x}`);
    this._y = parseFloat(`${y}`);
  }

  public get x() {
    return this._x;
  }

  public get y() {
    return this._y;
  }

  public set x(value) {
    this._x = value;
  }

  public set y(value) {
    this._y = value;
  }
}

export default Point;
