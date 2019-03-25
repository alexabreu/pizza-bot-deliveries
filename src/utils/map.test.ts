import { Point } from './point';
import { moveBot, getMarkerPosition } from "./map";

describe('Map Utils', () => {
  describe('moveBot()', () => {
    test('it moves the bot by a single unit increment in the given direction', () => {
      expect(moveBot('N', new Point(1, 1))).toEqual(new Point(1, 2));
      expect(moveBot('E', new Point(1, 1))).toEqual(new Point(2, 1));
      expect(moveBot('S', new Point(1, 1))).toEqual(new Point(1, 0));
      expect(moveBot('W', new Point(1, 1))).toEqual(new Point(0, 1));
    });
  });

  describe('getMarkerPosition()', () => {
    test('it returns the location of a map relative to size of the screen', () => {
      expect(getMarkerPosition(5, new Point(3, 3))).toEqual({
        left: 'calc( 60% )',
        top: 'calc( 100% - 60% )'
      });
    });
  });
});

