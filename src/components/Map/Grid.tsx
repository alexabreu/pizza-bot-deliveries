import React, { FunctionComponent } from 'react';

import Styles from './styles/Grid.module.scss';

export interface GridProps {
  size: number;
}

const renderGridLines = (props: GridProps) => {
  const { size } = props;
  const cellSize = `${100 / size}%`;
  const rows = [];
  for (let i = 0; i < size; i++) {
    const columns = [];
    for (let j = 0; j < size; j++) {
      columns.push(<div key={`column-${j}`} className={Styles.column} style={{ width: cellSize }}></div>)
    }
    rows.push(<div key={`row-${i}`} className={Styles.row} style={{ height: cellSize }}>{columns}</div>);
  }

  return rows;
}

const Grid: FunctionComponent<GridProps> = (props) => {
  return (
    <section className={Styles.grid}>
      {renderGridLines(props)}
    </section>
  );
}

export default Grid;
