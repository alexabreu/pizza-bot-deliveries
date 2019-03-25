import React, { FunctionComponent } from 'react';

import Grid from './Grid';
import Point from '../../utils/point';
import Marker from './Marker';
import { getMarkerPosition } from '../../utils/map';

import Styles from './styles/Map.module.scss'


export interface MapProps {
  size: number;
  deliveries: Delivery[];
  botLocation: Point;
}

const getDeliveryMarkerType = (hasBeenDelivered: boolean) => {
  if (hasBeenDelivered) { return 'pizza'; }

  return 'house';
}

const Map: FunctionComponent<MapProps> = (props) => {
  const { size, deliveries, botLocation } = props;

  return (
    <div className={Styles.map}>
      <Grid size={size} />
      {
        deliveries.map(
          (d, i) => {
            const type = getDeliveryMarkerType(d.hasBeenDelivered);
            return <Marker key={i}  type={type} position={getMarkerPosition(size, d.location)}/>
          }
        )
      }
      <Marker type="bot" position={getMarkerPosition(size, botLocation)}/>
    </div>
  )
}

export default Map;