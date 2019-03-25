import { Point } from './point';

export const getXYDistance = (p1: Point, p2: Point) => {
  const deltaX = p2.x - p1.x;
  const deltaY = p2.y - p1.y;

  return new Point(deltaX, deltaY);
}

export const getCardinalDirections = (p1: Point, p2: Point) => {
  let xDirection = 'E';
  let yDirection = 'N';
  let directions = '';

  const distance = getXYDistance(p1, p2);

  if (distance.x < 0) {
    xDirection = 'W';
  }
  if (distance.y < 0) {
    yDirection = 'S';
  }

  for (let x = 0; x < Math.abs(distance.x); x++) {
    directions += xDirection;
  }

  for (let y = 0; y < Math.abs(distance.y); y++) {
    directions += yDirection;
  }

  return directions;
}

