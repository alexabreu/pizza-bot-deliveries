import { Point } from './point';

export const getMarkerPosition = (mapSize: number, p: PointInterface) => {
  return {
    top: `calc( 100% - ${(100 / mapSize) * p.y}% )`,
    left: `calc( ${(100 / mapSize) * p.x}% )`
  }
};

export const moveBot = (direction: string = '', botLocation: PointInterface) => {
  let x = botLocation.x;
  let y = botLocation.y;

  switch(direction) {
    case 'N':
      y = botLocation.y + 1;
      break;
    case 'E':
      x = botLocation.x + 1;
      break;
    case 'S':
      y = botLocation.y - 1;
      break;
    case 'W':
      x = botLocation.x - 1;
      break;
  }

  return new Point(x, y);
}