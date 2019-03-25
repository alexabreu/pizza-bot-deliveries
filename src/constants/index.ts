import { Point } from '../utils/point';

export const INITIAL_DELIVERIES_STATE = [
  { location: new Point(1, 2), hasBeenDelivered: true },
  { location: new Point(2, 3), hasBeenDelivered: true },
  { location: new Point(3, 4), hasBeenDelivered: true },
  { location: new Point(2, 2), hasBeenDelivered: true },
  { location: new Point(3, 2), hasBeenDelivered: true },
  { location: new Point(4, 2), hasBeenDelivered: true },
  { location: new Point(3.5, 3), hasBeenDelivered: true },
];

export const BOT_STARTING_LOCATION = new Point(0, 0);

export const BOT_SPEED = 0.5 * 1000;

export const DEFAULT_MAP_SIZE = 5;