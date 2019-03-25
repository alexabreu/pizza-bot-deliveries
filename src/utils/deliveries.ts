import { BOT_STARTING_LOCATION, DEFAULT_MAP_SIZE } from '../constants/index';
import { getCardinalDirections } from './directions';
import { Point } from './point';

export const removeWhiteSpaceFromOrder = (order: string) => {
  return order.replace(/\s/g, '');
}

export const getMapSize = (order: string) => {
  const size = (removeWhiteSpaceFromOrder(order)
    .match(/\dx\d/) || [`${DEFAULT_MAP_SIZE}x${DEFAULT_MAP_SIZE}`])[0].split('')[0];

  return parseInt(size, 10);
}

export const getDeliveries = (order: string) => {
  const deliveries = (removeWhiteSpaceFromOrder(order)
    .match(/\(\d,\d\)/g) || []).map(d => new Point(d[1], d[3]));

  return deliveries;
}

export const getDeliveryInstructions = (order: string, startingPoint = BOT_STARTING_LOCATION) => {
  const deliveries = [startingPoint, ...getDeliveries(order)];
  let instructions = '';
  for (let i = 0; i < deliveries.length; i++) {
    if (i + 1 < deliveries.length) {
      instructions += `${getCardinalDirections(deliveries[i], deliveries[i+1])}D`;
    }
  }

  return instructions;
};
