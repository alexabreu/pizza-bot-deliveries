import { Point } from './point';
import { getMapSize, getDeliveries, getDeliveryInstructions } from './deliveries';

describe('Delivery Utils', () => {
  describe('getMapSize()', () => {
    test('it returns an integer value representing the size of the map grid from an order string', () => {
      expect(getMapSize('5x5(0,0)(1,3)(4,4)(4,2)(4,2)(0,1)(3,2)(2,3)(4,1)')).toBe(5);
      expect(getMapSize('6x6 (1, 3) (4, 4)')).toBe(6);
    });

    test('it returns an integer value representing the size of the map even if no map size is provided', () => {
      expect(getMapSize('(0,0)(1,3)(4,4)(4,2)(4,2)(0,1)(3,2)(2,3)(4,1)')).toBe(5);
    });

    test('it handles white space without exploding', () => {
      expect(getMapSize('7    x    3 (1, 3) (4, 4)')).toBe(7);
    });
  });

  describe('getDeliveries()', () => {
    test('it returns an array of points from an order string', () => {
      expect(getDeliveries('(0,0)(1,3)(4,4)(4,2)(4,2)(0,1)(3,2)(2,3)(4,1)')).toEqual([
        new Point(0, 0),
        new Point(1, 3),
        new Point(4, 4),
        new Point(4, 2),
        new Point(4, 2),
        new Point(0, 1),
        new Point(3, 2),
        new Point(2, 3),
        new Point(4, 1),
      ]);

      expect(getDeliveries('5x5 (1, 3) (4, 4)')).toEqual([
        new Point(1, 3),
        new Point(4, 4)
      ])
    });

    test('it returns an empty array if no deliveries are specified in the order', () => {
      expect(getDeliveries('5x5')).toEqual([]);
    });

    test('it handles white space without exploding', () => {
      expect(getDeliveries('8x8 (0,     0) (3, 4 ) (  5  , 7)')).toEqual([
        new Point(0, 0),
        new Point(3, 4),
        new Point(5, 7),
      ]);
    });
  });

  describe('getDeliveryInstructions()', () => {
    test('it generates the proper directions and drop instructions for the given order', () => {
      expect(getDeliveryInstructions('5x5 (1, 3) (4, 4)')).toBe('ENNNDEEEND');
      expect(getDeliveryInstructions('5x5(0,0)(1,3)(4,4)(4,2)(4,2)(0,1)(3,2)(2,3)(4,1)'))
        .toBe('DENNNDEEENDSSDDWWWWSDEEENDWNDEESSD');
    });
  });
});
