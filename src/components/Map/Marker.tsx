import React, { FunctionComponent } from 'react';

import Styles from './styles/Marker.module.scss';

export interface MarkerProps {
  position: {
    left: string, // % value
    top: string, // % value
  }
  type: MarkerType;
}

const getIcon = (type: MarkerType) => {
  switch(type) {
    case 'house':
      return '🏠';
    case 'pizza':
      return '🍕';
    case 'bot':
      return '🤖';
  }
}

const Marker: FunctionComponent<MarkerProps> = (props) => {
  const { position, type } = props;

  return (
    <div className={`${Styles.marker} ${Styles[type]}`} style={{...position}}>
      {getIcon(type)}
    </div>
  )
}

export default Marker;
