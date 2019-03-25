import { getCardinalDirections, getXYDistance } from "./directions";
import Point from "./point";

describe('Directions Utils', () => {
  describe('getCardinalDirections()', () => {
    test('it returns a string containing the cardinal directions between two points.', () => {
      expect(getCardinalDirections(new Point(1, 1), new Point(3, 4))).toBe('EENNN');
      expect(getCardinalDirections(new Point(2, 4), new Point(1, 0))).toBe('WSSSS');
    });
  });

  describe('getXYDistance()', () => {
    test('it returns the x,y distance between two points', () => {
      expect(getXYDistance(new Point(2, 4), new Point(1, 0))).toEqual(new Point(-1, -4));
      expect(getXYDistance(new Point(4, 1), new Point(3, 2))).toEqual(new Point(-1, 1));
    });
  });
});
