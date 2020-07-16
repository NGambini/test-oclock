import React from 'react';
import CountUp from 'react-countup';

import * as styles from './result.module.less';

export type ResultProps = {
  value: number;
  symbol: string;
};

export const Result = (props: ResultProps) => {
  return (
    <div className={styles['result-container']}>
      <div className={styles['result-value']}>
        <CountUp end={props.value} />
        {'  ' + props.symbol}
      </div>
      <div className={styles['result-clearfix']} />
    </div>
  );
};
